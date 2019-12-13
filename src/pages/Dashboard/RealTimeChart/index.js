import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Line } from '@nivo/line';
import { utcToZonedTime } from 'date-fns-tz';

import api from '~/services/api';

const date = new Date();
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export default function RealTimeChart({ sensor_id }) {
  const [datas, setDatas] = useState([{ x: date, y: 0 }]);
  useEffect(() => {
    async function getMeasurements() {
      const response = await api.get('list-measurement', {
        params: { sensor: sensor_id },
      });

      if (response.data.measurements.length > 0) {
        // eslint-disable-next-line array-callback-return
        response.data.measurements.map(element => {
          element.x = utcToZonedTime(element.created_at, timezone);
          element.y = element.value;
          delete element.created_at;
          delete element.value;
        });

        setDatas(response.data.measurements);
      }
    }

    const timer = setInterval(() => {
      getMeasurements();
    }, 2000);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {datas && (
        <Line
          width={760}
          height={400}
          animate
          margin={{ top: 30, right: 100, bottom: 60, left: 120 }}
          data={[{ id: 'Sensor 1', data: datas }]}
          xScale={{ type: 'time', format: 'native' }}
          yScale={{ type: 'linear', max: 100 }}
          axisBottom={{
            format: '%H:%M',
            tickValues: 'every 4 hour',
            legend: 'Tempo (horas)',
            legendPosition: 'middle',
            legendOffset: 46,
          }}
          enablePoints
          enableGridX
          curve="monotoneX"
          motionStiffness={120}
          motionDamping={50}
          isInteractive={false}
          enableSlices={false}
          useMesh
          pointColor={{ theme: 'background' }}
          pointBorderWidth={1}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabel="y"
          pointLabelYOffset={0}
          theme={{
            axis: { ticks: { text: { fontSize: 12 } } },
            grid: { line: { stroke: '#ddd', strokeDasharray: '1 2' } },
          }}
        />
      )}
    </>
  );
}

RealTimeChart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  sensor_id: PropTypes.number.isRequired,
};
