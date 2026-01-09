import styled from 'styled-components';
import { theme } from '../theme';
import { Card } from '../CommonStyles';

export const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};

  @media (min-width: 768px) {
    padding: 0;
  }

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: ${theme.colors.gray900};
    margin: 0 0 ${theme.spacing.lg} 0;

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 24px;
      margin-bottom: ${theme.spacing.xl};
    }
  }
`;

export const ProfileCard = styled(Card)`
  margin-bottom: ${theme.spacing.lg};

  @media (min-width: 768px) {
    margin-bottom: ${theme.spacing.xl};
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: ${theme.spacing.xl};
    margin-bottom: ${theme.spacing.xl};
    text-align: left;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${props => props.$hasImage ? 'transparent' : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  border: 3px solid white;
  overflow: hidden;

  body.dark-theme & {
    border-color: #2d2d2d;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
    font-size: 48px;
  }
`;

export const UploadButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #6366f1;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all ${theme.transitions.fast};
  min-height: 44px;
  min-width: 44px;
  touch-action: manipulation;

  body.dark-theme & {
    background: #7c3aed;
  }

  &:hover {
    background: #4f46e5;
    transform: scale(1.1);

    body.dark-theme & {
      background: #6d28d9;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  input {
    display: none;
  }

  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
    min-height: auto;
    min-width: auto;
  }
`;

export const ProfileInfo = styled.div`
  flex: 1;

  h2 {
    margin: 0 0 ${theme.spacing.sm} 0;
    font-size: 18px;
    font-weight: 700;
    color: ${theme.colors.gray900};

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    margin: 0 0 ${theme.spacing.sm} 0;
    color: ${theme.colors.gray600};
    font-size: 13px;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  .role-badge {
    display: inline-block;
    margin-top: ${theme.spacing.sm};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    background: #6366f1;
    color: white;
    border-radius: ${theme.borderRadius.md};
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;

    body.dark-theme & {
      background: #7c3aed;
    }

    @media (min-width: 768px) {
      font-size: 12px;
    }
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.lg};
  }

  body.dark-theme & {
    h1 {
      color: #e5e5e5;
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
