import React, { useContext } from 'react';
import { User } from '../../interfaces/index';
import styled from 'styled-components';
import Link from 'next/link';
import SERVER from '../../utils/url';
import axios from 'axios';
import { UserStateContext } from '../../context/user';
import UserPhoto from './UserPhoto';

interface Props {}

const UserMenuContainer = styled.div`
  width: 16rem;
  padding: 2rem;
  & h2 {
    text-align: center;
  }
`;

const MenuList = styled.nav`
  & ul {
    list-style: none;
    padding: 0;
  }
  & li {
    padding: 0.5em;
    box-sizing: border-box;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

const UserMenu = (props: Props) => {
  const onLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const res = await axios.get(`${SERVER}/api/auth/logout`, {
      withCredentials: true,
    });
    location.href = '/';
  };

  const currentUser: User = useContext(UserStateContext);
  return (
    <UserMenuContainer>
      <UserPhoto src={currentUser.photo} />
      <h2>{currentUser.nickname}</h2>

      <MenuList>
        <ul>
          <Link href='/users/mypage'>
            <a>
              <li>마이페이지</li>
            </a>
          </Link>

          <Link href='/users/mypage#follow'>
            <a>
              <li>팔로우 확인</li>
            </a>
          </Link>
          <Link href='/users/mypage#'>
            <a>
              <li>내가 쓴 글</li>
            </a>
          </Link>
          <Link href='/users/mypage#'>
            <a>
              <li>나의 여행</li>
            </a>
          </Link>
          {currentUser.isHost ? (
            <Link href='/hosts/'>
              <a>
                <li>나의 호스팅</li>
              </a>
            </Link>
          ) : (
            <Link href='/hosts/request'>
              <a>
                <li>호스트 신청</li>
              </a>
            </Link>
          )}
          {currentUser.isAdmin === 1 ? (
            <Link href='/admin/notice/list'>
              <a>
                <li style={{ color: '#5197D5' }}>관리자페이지</li>
              </a>
            </Link>
          ) : (
            ''
          )}
          <hr></hr>
          <Link href=''>
            <li>
              <button onClick={onLogout}>로그아웃</button>
            </li>
          </Link>
        </ul>
      </MenuList>
    </UserMenuContainer>
  );
};

export default UserMenu;
