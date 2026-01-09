import styled from 'styled-components';
import { theme } from '../theme';

export const SettingsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  font-family: ${theme.fonts.body};
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: ${theme.colors.gray900};
    margin: 0;

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    color: ${theme.colors.gray600};
    font-size: 13px;
    margin: 0;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const SettingsCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid ${theme.colors.gray200};
  margin-bottom: ${theme.spacing.lg};

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #404040;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    padding: ${theme.spacing.xl};
    margin-bottom: ${theme.spacing.xl};
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: ${theme.colors.gray900};
    margin: 0 0 ${theme.spacing.lg} 0;
    padding-bottom: ${theme.spacing.md};
    border-bottom: 1px solid ${theme.colors.gray200};

    body.dark-theme & {
      color: #e5e5e5;
      border-bottom-color: #404040;
    }

    @media (min-width: 768px) {
      font-size: 18px;
      margin-bottom: ${theme.spacing.xl};
    }
  }

  h3 {
    font-size: 14px;
    font-weight: 600;
    color: ${theme.colors.gray900};
    margin: 0 0 ${theme.spacing.md} 0;

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 15px;
    }
  }
`;

export const SettingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.md} 0;
  border-bottom: 1px solid ${theme.colors.gray200};
  gap: ${theme.spacing.md};

  body.dark-theme & {
    border-bottom-color: #404040;
  }

  @media (min-width: 768px) {
    padding: ${theme.spacing.lg} 0;
  }

  &:last-child {
    border-bottom: none;
  }

  .setting-label {
    flex: 1;

    h4 {
      font-size: 13px;
      font-weight: 600;
      color: ${theme.colors.gray900};
      margin: 0 0 4px 0;

      body.dark-theme & {
        color: #e5e5e5;
      }

      @media (min-width: 768px) {
        font-size: 14px;
      }
    }

    p {
      font-size: 12px;
      color: ${theme.colors.gray600};
      margin: 0;

      body.dark-theme & {
        color: #b0b0b0;
      }

      @media (min-width: 768px) {
        font-size: 13px;
      }
    }
  }

  .setting-control {
    flex-shrink: 0;
  }
`;

export const ToggleSwitch = styled.button`
  width: 48px;
  height: 28px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all ${theme.transitions.base};
  background: ${props => props.$active ? theme.colors.primary : theme.colors.gray300};
  flex-shrink: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 8px;
  touch-action: manipulation;

  body.dark-theme & {
    background: ${props => props.$active ? '#7c3aed' : '#555'};
  }

  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    top: 2px;
    left: ${props => props.$active ? '22px' : '2px'};
    transition: all ${theme.transitions.base};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  @media (min-width: 768px) {
    width: 48px;
    height: 26px;
    min-height: auto;
    min-width: auto;
    padding: 0;

    &::after {
      width: 20px;
      height: 20px;
      top: 3px;
      left: ${props => props.$active ? '25px' : '3px'};
    }
  }
`;

export const NotificationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  }
`;

export const NotificationItem = styled.div`
  padding: ${theme.spacing.md};
  background: ${theme.colors.gray50};
  border-radius: ${theme.borderRadius.md};
  border: 1px solid ${theme.colors.gray200};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};

  body.dark-theme & {
    background: #1f1f1f;
    border-color: #404040;
  }

  @media (min-width: 768px) {
    padding: ${theme.spacing.lg};
  }

  .notification-info {
    flex: 1;

    h4 {
      font-size: 13px;
      font-weight: 600;
      color: ${theme.colors.gray900};
      margin: 0 0 4px 0;

      body.dark-theme & {
        color: #e5e5e5;
      }

      @media (min-width: 768px) {
        font-size: 14px;
      }
    }

    p {
      font-size: 12px;
      color: ${theme.colors.gray600};
      margin: 0;

      body.dark-theme & {
        color: #b0b0b0;
      }

      @media (min-width: 768px) {
        font-size: 13px;
      }
    }
  }
`;

export const SelectGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  }

  select {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid ${theme.colors.gray200};
    border-radius: ${theme.borderRadius.lg};
    font-size: 16px;
    transition: all ${theme.transitions.base};
    font-family: inherit;
    background: white;
    min-height: 44px;
    touch-action: manipulation;
    cursor: pointer;
    appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="%236366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 6 9 11 4"></polyline></svg>');
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 36px;

    body.dark-theme & {
      background: #2d2d2d;
      border-color: #404040;
      color: #e5e5e5;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="%23a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 6 9 11 4"></polyline></svg>');
    }

    @media (min-width: 768px) {
      font-size: 14px;
      min-height: auto;
    }

    &:focus {
      outline: none;
      border-color: ${theme.colors.primarySolid};
      box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1);

      body.dark-theme & {
        background: #353535;
        border-color: #7c3aed;
      }
    }

    option {
      background: white;
      color: ${theme.colors.gray900};
      padding: 8px;

      body.dark-theme & {
        background: #2d2d2d;
        color: #e5e5e5;
      }
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.lg};

  @media (min-width: 768px) {
    flex-direction: row;
    gap: ${theme.spacing.md};
    margin-top: ${theme.spacing.xl};
  }

  button {
    width: 100%;

    @media (min-width: 768px) {
      width: auto;
    }
  }
`;

export const DangerZone = styled.div`
  background: #fee2e2;
  border: 1px solid #fecaca;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};

  body.dark-theme & {
    background: #7f1d1d;
    border-color: #991b1b;
  }

  @media (min-width: 768px) {
    padding: ${theme.spacing.xl};
  }

  h3 {
    font-size: 14px;
    font-weight: 700;
    color: #991b1b;
    margin: 0 0 ${theme.spacing.md} 0;

    body.dark-theme & {
      color: #fecaca;
    }

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  p {
    font-size: 13px;
    color: #7f1d1d;
    margin: 0 0 ${theme.spacing.md} 0;

    body.dark-theme & {
      color: #fca5a5;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  button {
    background: #dc2626;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: ${theme.borderRadius.md};
    font-weight: 600;
    cursor: pointer;
    transition: all ${theme.transitions.fast};
    min-height: 44px;
    width: 100%;

    @media (min-width: 768px) {
      width: auto;
      min-height: auto;
    }

    &:hover {
      background: #b91c1c;
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;
