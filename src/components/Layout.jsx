import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import ProfileMenu from './ProfileMenu';
import NotificationMenu from './NotificationMenu';
import ScrollToTop from './ScrollToTop';
import { useSettings } from '../contexts/SettingsContext';
import { MdDashboard, MdEdit, MdFolder, MdBarChart, MdPeople, MdSettings, MdLocationOn, MdLogout, MdVerified, MdLightMode, MdDarkMode } from 'react-icons/md';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${theme.colors.gray50};
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  body.dark-theme & {
    background: #1a1a1a;
  }
`;

const Sidebar = styled.aside`
  width: 100%;
  height: auto;
  background: white;
  color: ${theme.colors.gray900};
  position: relative;
  border-bottom: 1px solid ${theme.colors.gray200};
  z-index: 100;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  
  body.dark-theme & {
    background: #1f1f1f;
    border-bottom-color: #404040;
  }

  @media (min-width: 768px) {
    width: 240px;
    height: 100vh;
    position: fixed;
    border-right: 1px solid ${theme.colors.gray200};
    border-bottom: none;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;

    body.dark-theme & {
      border-right-color: #404040;
      border-bottom-color: transparent;
    }
  }
  
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray300};
    border-radius: 3px;
    
    &:hover {
      background: ${theme.colors.gray400};
    }

    body.dark-theme & {
      background: #555;

      &:hover {
        background: #666;
      }
    }
  }

  @media print {
    display: none !important;
  }
`;

const SidebarHeader = styled.div`
  padding: 16px 20px;
  border-right: 1px solid ${theme.colors.gray200};
  display: none;

  body.dark-theme & {
    border-right-color: #404040;
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
    margin: 0;
    color: ${theme.colors.gray900};
    font-family: ${theme.fonts.body};
    white-space: nowrap;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }

  @media (min-width: 768px) {
    display: block;
    padding: 24px 20px;
    border-right: none;
    border-bottom: 1px solid ${theme.colors.gray200};

    h2 {
      font-size: 18px;
    }
  }
`;

const NavSection = styled.div`
  padding: 8px 8px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  overflow-x: auto;
  flex: 1;

  @media (min-width: 768px) {
    padding: 16px 12px;
    flex-direction: column;
    gap: 2px;
    overflow-x: visible;
    flex: none;
  }

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray300};
    border-radius: 2px;
  }
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 4px;
  min-width: min-content;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 2px;
    min-width: auto;
  }

  a {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    color: ${theme.colors.gray700};
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    font-family: ${theme.fonts.body};
    border-radius: 6px;
    transition: all ${theme.transitions.fast};
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    flex-shrink: 0;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 768px) {
      font-size: 14px;
      white-space: normal;
      flex-shrink: 1;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 3px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      transform: scaleY(0);
      transition: transform ${theme.transitions.base};
      border-radius: 0 3px 3px 0;

      @media (max-width: 767px) {
        width: 100%;
        height: 3px;
        top: auto;
        bottom: 0;
      }
    }

    .nav-icon {
      font-size: 18px;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform ${theme.transitions.base};
      flex-shrink: 0;
    }

    .nav-text {
      flex: 1;
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }

    &:hover {
      background: ${theme.colors.gray100};
      color: ${theme.colors.gray900};

      @media (min-width: 768px) {
        padding-left: 16px;
      }

      body.dark-theme & {
        background: #2d2d2d;
        color: #e5e5e5;
      }

      .nav-icon {
        transform: scale(1.1);
      }
    }

    &.active {
      background: linear-gradient(90deg, rgba(102, 126, 234, 0.1) 0%, transparent 100%);
      color: #667eea;
      font-weight: 600;

      body.dark-theme & {
        background: linear-gradient(90deg, rgba(124, 58, 237, 0.2) 0%, transparent 100%);
        color: #a78bfa;
      }

      &::before {
        transform: scaleY(1);
      }
    }
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  color: #dc2626;
  background: none;
  border: none;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  font-family: ${theme.fonts.body};
  border-radius: 6px;
  transition: all ${theme.transitions.fast};
  cursor: pointer;
  width: 100%;
  text-align: left;

  body.dark-theme & {
    color: #f87171;
  }

  .nav-icon {
    font-size: 18px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform ${theme.transitions.base};
  }

  .nav-text {
    flex: 1;
  }

  &:hover {
    background: #fee2e2;
    color: #b91c1c;
    padding-left: 16px;

    body.dark-theme & {
      background: rgba(220, 38, 38, 0.2);
      color: #fca5a5;
    }

    .nav-icon {
      transform: scale(1.1);
    }
  }
`;

const SidebarFooter = styled.div`
  margin-top: auto;
  width: auto;
  padding: 8px;
  border-left: 1px solid ${theme.colors.gray200};
  background: white;
  display: flex;
  flex-direction: row;
  gap: 4px;

  body.dark-theme & {
    background: #1f1f1f;
    border-left-color: #404040;
  }

  @media (min-width: 768px) {
    width: 100%;
    padding: 12px;
    border-left: none;
    border-top: 1px solid ${theme.colors.gray200};
    flex-direction: column;
    gap: 2px;

    body.dark-theme & {
      border-left-color: transparent;
      border-top-color: #404040;
    }
  }
`;

const MainContent = styled.main`
  margin-left: 0;
  margin-top: 0;
  flex: 1;
  min-height: auto;
  background: #fafafa;
  width: 100%;

  body.dark-theme & {
    background: #1a1a1a;
  }

  @media (min-width: 768px) {
    margin-left: 240px;
    margin-top: 0;
    min-height: 100vh;
  }

  @media print {
    margin-left: 0 !important;
    margin-top: 0 !important;
    width: 100% !important;
  }
`;

const TopHeader = styled.div`
  background: white;
  padding: 12px 16px;
  border-bottom: 1px solid ${theme.colors.gray200};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 50;
  gap: 12px;

  body.dark-theme & {
    background: #1f1f1f;
    border-bottom-color: #404040;
  }

  @media (min-width: 768px) {
    padding: 16px 32px;
    gap: 16px;
  }

  @media print {
    display: none !important;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.gray900};
  margin: 0;
  font-family: ${theme.fonts.body};
  flex: 1;
  min-width: 0;

  body.dark-theme & {
    color: #e5e5e5;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

const ContentArea = styled.div`
  padding: 16px;

  @media (min-width: 640px) {
    padding: 24px;
  }

  @media (min-width: 768px) {
    padding: 32px;
  }

  @media print {
    padding: 0 !important;
  }
`;

const HeaderActionButton = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: ${theme.colors.gray600};
  font-size: 20px;
  border-radius: 8px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  body.dark-theme & {
    color: #b0b0b0;
  }

  &:hover {
    background: ${theme.colors.gray100};
    color: ${theme.colors.gray900};

    body.dark-theme & {
      background: #3d3d3d;
      color: #e5e5e5;
    }
  }
`;

function Layout({ user, onLogout }) {
  const { settings, updateSettings } = useSettings();

  const toggleTheme = () => {
    const newTheme = settings.theme === 'dark' ? 'light' : 'dark';
    updateSettings({ ...settings, theme: newTheme });
  };

  const getThemeIcon = () => {
    return settings.theme === 'dark' ? <MdDarkMode size={22} /> : <MdLightMode size={22} />;
  };

  const getThemeTitle = () => {
    return settings.theme === 'dark' ? 'Theme: Dark' : 'Theme: Light';
  };

  return (
    <LayoutContainer>
      <Sidebar>
        <SidebarHeader>
          <h2>Burial Record Manager</h2>
        </SidebarHeader>

        <NavSection>
          <SidebarNav>
            {/* Dashboard - All roles can see */}
            {(user?.role === 'admin' || user?.role === 'viewer') && (
              <NavLink to="/" end>
                <span className="nav-icon"><MdDashboard /></span>
                <span className="nav-text">Dashboard</span>
              </NavLink>
            )}

            {/* New Record - Admin and Data Entry only */}
            {(user?.role === 'admin' || user?.role === 'data_entry') && (
              <NavLink to="/data-capture">
                <span className="nav-icon"><MdEdit /></span>
                <span className="nav-text">New Record</span>
              </NavLink>
            )}

            {/* Records - All roles can see */}
            <NavLink to="/records">
              <span className="nav-icon"><MdFolder /></span>
              <span className="nav-text">Records</span>
            </NavLink>

            {/* Verify Records - Admin and Data Entry only */}
            {(user?.role === 'admin' || user?.role === 'data_entry') && (
              <NavLink to="/verify-records">
                <span className="nav-icon"><MdVerified /></span>
                <span className="nav-text">Verify Public Records</span>
              </NavLink>
            )}

            {/* Reports - Admin and Viewer only */}
            {(user?.role === 'admin' || user?.role === 'viewer') && (
              <NavLink to="/reports">
                <span className="nav-icon"><MdBarChart /></span>
                <span className="nav-text">Reports</span>
              </NavLink>
            )}

            {/* Users - Admin only */}
            {user?.role === 'admin' && (
              <NavLink to="/users">
                <span className="nav-icon"><MdPeople /></span>
                <span className="nav-text">Users</span>
              </NavLink>
            )}
          </SidebarNav>
        </NavSection>

        <SidebarFooter>
          <SidebarNav>
            <NavLink to="/settings">
              <span className="nav-icon"><MdSettings /></span>
              <span className="nav-text">Settings</span>
            </NavLink>
            <LogoutButton onClick={onLogout}>
              <span className="nav-icon"><MdLogout /></span>
              <span className="nav-text">Logout</span>
            </LogoutButton>
          </SidebarNav>
        </SidebarFooter>
      </Sidebar>

      <MainContent>
        <TopHeader>
          <HeaderTitle>Burial Record Manager</HeaderTitle>
          <UserSection>
            <HeaderActionButton onClick={toggleTheme} title={getThemeTitle()}>
              {getThemeIcon()}
            </HeaderActionButton>
            <NotificationMenu />
            <ProfileMenu user={user} onLogout={onLogout} />
          </UserSection>
        </TopHeader>

        <ContentArea>
          <Outlet />
        </ContentArea>
        <ScrollToTop />
      </MainContent>
    </LayoutContainer>
  );
}

export default Layout;
