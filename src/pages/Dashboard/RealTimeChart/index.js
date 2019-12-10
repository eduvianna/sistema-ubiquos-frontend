import React, { useState, useEffect } from 'react';
import range from 'lodash/range';
import last from 'lodash/last';
import * as time from 'd3-time';
import { timeFormat } from 'd3-time-format';
import { Line } from '@nivo/line';

export default function RealTimeChart() {
  const date = new Date();

  const formatTime = timeFormat('%Y %b %d');

  const [datas, setDatas] = useState({
    dataA: range(100).map(i => ({
      x: time.timeMinute.offset(date, i * 30),
      y: 10 + Math.round(Math.random() * 20),
    })),
    dataB: range(100).map(i => ({
      x: time.timeMinute.offset(date, i * 30),
      y: 30 + Math.round(Math.random() * 20),
    })),
    dataC: range(100).map(i => ({
      x: time.timeMinute.offset(date, i * 30),
      y: 60 + Math.round(Math.random() * 20),
    })),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const dataA = datas.dataA.slice(1);
      dataA.push({
        x: time.timeMinute.offset(last(dataA).x, 30),
        y: 10 + Math.round(Math.random() * 20),
      });

      const dataB = datas.dataB.slice(1);
      dataB.push({
        x: time.timeMinute.offset(last(dataB).x, 30),
        y: 30 + Math.round(Math.random() * 20),
      });
      const dataC = datas.dataC.slice(1);
      dataC.push({
        x: time.timeMinute.offset(last(dataC).x, 30),
        y: 60 + Math.round(Math.random() * 20),
      });

      setDatas({ dataA, dataB, dataC });
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [datas]);

  return (
    <Line
      width={1200}
      height={400}
      animate
      margin={{ top: 30, right: 150, bottom: 60, left: 50 }}
      data={[
        { id: 'Sensor 1', data: datas.dataA },
        { id: 'Sensor 2', data: datas.dataB },
        { id: 'Sensor 3', data: datas.dataC },
      ]}
      xScale={{ type: 'time', format: 'native' }}
      yScale={{ type: 'linear', max: 100 }}
      axisBottom={{
        format: '%H:%M:%S',
        tickValues: 'every 4 hour',
        legend: `${formatTime(datas.dataA[0].x)} ——— ${formatTime(
          last(datas.dataA).x
        )}`,
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
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="y"
      pointLabelYOffset={-12}
      theme={{
        axis: { ticks: { text: { fontSize: 14 } } },
        grid: { line: { stroke: '#ddd', strokeDasharray: '1 2' } },
      }}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 0.6,
              },
            },
          ],
        },
      ]}
    />
  );
}
