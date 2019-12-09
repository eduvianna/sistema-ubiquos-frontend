import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MdExitToApp } from 'react-icons/md';

import logo from '~/assets/logo_extenso.svg';
import null_user from '~/assets/user.svg';
import { Container, Content, Profile } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="UFSC" width={210} />
        </nav>
        <ul>
          <li>
            <Link to="/dashboard">DASHBOARD</Link>
          </li>
          <li>
            <Link to="/project">PROJETOS</Link>
          </li>
          <li>
            <Link to="/reports">RELATÓRIOS</Link>
          </li>
        </ul>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={profile.avatar ? profile.avatar.url : null_user}
              alt={profile.name}
            />
            <MdExitToApp size={24} onClick={handleSignOut} />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
