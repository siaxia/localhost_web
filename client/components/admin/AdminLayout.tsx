import React, { ReactNode } from 'react';
import Head from 'next/head';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { ArrowDropDownOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import Router from 'next/router';
import ArrowLeftOutlined from '@material-ui/icons/ArrowLeftOutlined';
import Footer from '../main/Footer';
import AdminHeader from './AdminHeader';

type Props = {
  title: string;
  children?: ReactNode;
  selected?: string;
};
const Layout = styled.div`
  max-width: 1200px;
  display: block;
  margin: 0 auto;
  min-height: 27em;
  align-items: center;
`;
const NavDiv = styled.div`
  text-align: center;
  align-items: left;
  background-color: #5197d5;
  min-width: 13em;
  position: fixed;
  height: 100vh;
  z-index: 1;
`;

const NavTitle = styled(ListItem)`
  width: inherit;
  &.MuiListItem-gutters {
    display: contents;
    padding: 0;
    margin-bottom: 0.25em;
  }
  min-width: 12em;
`;
const NavTitleIcon = styled(ListItemIcon)`
  &.MuiListItemIcon-root {
    display: inline;
    align-items: center;
    margin: 0;
    color: rgb(241, 242, 246);
  }
`;
const NavTitleText = styled(ListItemText)`
  display: contents;
  text-align: center;
  margin-bottom: 0.5em;
  color: #f1f2f6;

  & span {
    font-weight: bold;
    font-size: 0.9em;
    margin-bottom: 1em;
  }
`;
const Item = styled(ListItem)`
  &.MuiListItem-gutters {
    display: flex;
    padding: 0.5em 0.25em;
    &:hover {
      background-color: rgb(33, 33, 33);
      & div {
      color: rgb(255, 255, 255);
    }
  }
    }
  }
`;
const ClickedItem = styled(ListItem)`
  &.MuiListItem-gutters {
    display: flex;
    padding: 0.5em 0.25em;
    background-color: rgba(255, 255, 255, 0.9);
  }
  &:hover {
    & div {
      color: rgba(255, 255, 255, 0.9);
    }
  }
`;
const Icon = styled(ListItemIcon)`
  &.MuiListItemIcon-root {
    min-width: 1.25em;
    margin: 0;
    margin-left: 0.5em;
    margin-right: 0.5em;
    color: rgba(241, 242, 246, 0.65);
  }
`;
const ClickedIcon = styled(ListItemIcon)`
  &.MuiListItemIcon-root {
    min-width: 1.25em;
    margin: 0;
    margin-left: 0.5em;
    margin-right: 0.5em;
    color: #5197d5;
  }
`;
const ArrowIcon = styled(ListItemIcon)`
  &.MuiListItemIcon-root {
    min-width: 1.25em;
    margin: 0;
    color: rgb(33, 33, 33);
  }
`;

const Text = styled(ListItemText)`
  display: flex;
  text-align: center;
  color: #f1f2f6;

  & span {
    display: inline;
    font-weight: bold;
    font-size: 0.75em;
  }
`;
const ClickedText = styled(ListItemText)`
  display: flex;
  text-align: center;
  color: #5197d5;

  & span {
    display: inline;
    font-weight: bold;
    font-size: 0.75em;
  }
`;
const ComponentDiv = styled.div`
  width: 100%;
  margin: 0;
  background-color: #f1f2f6;
  height: 100vh;
`;

const ComponentTitleDiv = styled.div`
  margin: 0 0 0 1.75em;
`;
const ComponentTitle = styled.h4`
  margin: 0 2em;
  padding-left: 11em;
  padding-top: 3.5em;
  font-size: 1.1em;
  color: #5197d5;
`;
const ComponentMainDiv = styled.div`
  margin: 1em 3em 3em 15em;
  padding: 2em;
  top: -4em;
  background-color: white;
  border-radius: 0.25em;
  box-shadow: 2px 2px 5px 1px gray;
`;
const FooterDiv = styled.div`
  top: 0.5em;
  position: fixed;
  & a {
    font-size: 0.5em;
  }
`;
export default function AdminLayout(props: Props) {
  const {
    title = '??????????????? ?????????! | ????????? | localhost',
    children,
    selected,
  } = props;
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Head>
        <title>{title} | ????????? | localhost</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      {/* <Header isMobile={isMobile} isLogined={loginProps.isLogined} /> */}
      <AdminHeader />
      <Layout>
        <NavDiv>
          <List>
            <NavTitle>
              <NavTitleIcon>
                <VpnKeyIcon />
              </NavTitleIcon>
              <NavTitleText primary='????????? ?????????' />
            </NavTitle>
            <Divider />
            {/* ?????? ?????? */}
            {selected !== 'notice' ? ( // ????????? ???
              <Item button onClick={() => Router.push('/admin/notice/list')}>
                <Icon>
                  <NotificationsOutlinedIcon />
                </Icon>
                <Text primary='?????? ??????' />
              </Item>
            ) : (
              // ?????? ???
              <ClickedItem
                button
                onClick={() => Router.push('/admin/notice/list')}
              >
                <ClickedIcon>
                  <NotificationsOutlinedIcon />
                </ClickedIcon>
                <ClickedText primary='?????? ??????' />
              </ClickedItem>
            )}
            {/* ????????? ?????? */}
            {selected !== 'board' ? ( // ????????? ???
              <Item button>
                <Icon>
                  <ForumOutlinedIcon />
                </Icon>
                <Text primary='????????? ??????' />
              </Item>
            ) : (
              // ?????? ???
              <ClickedItem button>
                <ClickedIcon>
                  <ForumOutlinedIcon />
                </ClickedIcon>
                <ClickedText primary='????????? ??????' />
              </ClickedItem>
            )}
            {/* ?????? ?????? */}
            <Item button onClick={handleClick}>
              <Icon>
                <PeopleOutlinedIcon />
              </Icon>
              <Text primary='?????? ??????' />
              <ArrowIcon>
                {open ? <ArrowDropDownOutlined /> : <ArrowLeftOutlined />}
              </ArrowIcon>
            </Item>
            {/* ???????????? */}
            <Collapse in={open} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                {selected !== 'user' ? ( // ????????? ???
                  <Item button onClick={() => Router.push('/admin/user/list')}>
                    <ArrowIcon>
                      <ArrowRightOutlined />
                    </ArrowIcon>
                    <Icon>
                      <PersonOutlinedIcon />
                    </Icon>
                    <Text primary='??????' />
                  </Item>
                ) : (
                  // ?????? ???
                  <ClickedItem
                    button
                    onClick={() => Router.push('/admin/user/list')}
                  >
                    <ArrowIcon>
                      <ArrowDropDownOutlined />
                    </ArrowIcon>
                    <ClickedIcon>
                      <PersonOutlinedIcon />
                    </ClickedIcon>
                    <ClickedText primary='??????' />
                  </ClickedItem>
                )}
              </List>
            </Collapse>
            {/* ????????? */}
            <Collapse in={open} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                {selected !== 'host' ? ( // ????????? ???
                  <Item button onClick={() => Router.push('/admin/host/list')}>
                    <ArrowIcon>
                      <ArrowRightOutlined />
                    </ArrowIcon>
                    <Icon>
                      <AssignmentIndOutlinedIcon />
                    </Icon>
                    <Text primary='?????????' />
                  </Item>
                ) : (
                  // ?????? ???
                  <ClickedItem
                    button
                    onClick={() => Router.push('/admin/host/list')}
                  >
                    <ArrowIcon>
                      <ArrowDropDownOutlined />
                    </ArrowIcon>
                    <ClickedIcon>
                      <AssignmentIndOutlinedIcon />
                    </ClickedIcon>
                    <ClickedText primary='?????????' />
                  </ClickedItem>
                )}
              </List>
            </Collapse>
            {/* ????????? ?????? */}
            {selected !== 'approval' ? ( // ????????? ???
              <Item button onClick={() => Router.push('/admin/host/approval')}>
                <Icon>
                  <AssignmentTurnedInOutlinedIcon />
                </Icon>
                <Text primary='????????? ??????' />
              </Item>
            ) : (
              // ?????? ???
              <ClickedItem
                button
                onClick={() => Router.push('/admin/host/approval')}
              >
                <ClickedIcon>
                  <AssignmentTurnedInOutlinedIcon />
                </ClickedIcon>
                <ClickedText primary='????????? ??????' />
              </ClickedItem>
            )}
            {/* ?????? ?????? */}
            {selected !== 'plan' ? ( // ????????? ???
              <Item button>
                <Icon>
                  <AssessmentOutlinedIcon />
                </Icon>
                <Text primary='?????? ??????' />
              </Item>
            ) : (
              // ?????? ???
              <ClickedItem button>
                <ClickedIcon>
                  <AssessmentOutlinedIcon />
                </ClickedIcon>
                <ClickedText primary='?????? ??????' />
              </ClickedItem>
            )}
            {/* ???????????? ?????? */}
            {selected !== 'customerService' ? (
              <Item button>
                <Icon>
                  <HeadsetMicOutlinedIcon />
                </Icon>
                <Text primary='???????????? ??????' />
              </Item>
            ) : (
              <ClickedItem button>
                <ClickedIcon>
                  <HeadsetMicOutlinedIcon />
                </ClickedIcon>
                <ClickedText primary='???????????? ??????' />
              </ClickedItem>
            )}
          </List>
        </NavDiv>
        <ComponentDiv>
          <ComponentTitleDiv>
            <ComponentTitle>{title}</ComponentTitle>
          </ComponentTitleDiv>
          <ComponentMainDiv>{children}</ComponentMainDiv>
        </ComponentDiv>
      </Layout>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
