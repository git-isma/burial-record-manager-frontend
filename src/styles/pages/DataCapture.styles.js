import styled from 'styled-components';
import { theme } from '../theme';

export const DataCaptureContainer = styled.div`
  max-width: 1000px;
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

export const FormCard = styled.div`
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
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.lg};
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FormSection = styled.div`
  margin-bottom: ${theme.spacing.lg};

  @media (min-width: 768px) {
    margin-bottom: ${theme.spacing.xl};
  }

  h3 {
    font-size: 14px;
    font-weight: 600;
    color: ${theme.colors.gray900};
    margin: 0 0 ${theme.spacing.md} 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 15px;
      margin-bottom: ${theme.spacing.lg};
    }
  }
`;

export const FileUploadArea = styled.div`
  border: 2px dashed ${theme.colors.gray300};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  text-align: center;
  cursor: pointer;
  transition: all ${theme.transitions.base};
  background: ${theme.colors.gray50};
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  body.dark-theme & {
    background: #1f1f1f;
    border-color: #404040;
  }

  @media (min-width: 768px) {
    padding: ${theme.spacing.xl};
    min-height: 140px;
  }

  &:hover {
    border-color: ${theme.colors.primary};
    background: #f0f4ff;

    body.dark-theme & {
      background: #2d2d2d;
      border-color: #7c3aed;
    }
  }

  svg {
    width: 40px;
    height: 40px;
    color: ${theme.colors.gray400};
    margin-bottom: ${theme.spacing.sm};

    body.dark-theme & {
      color: #6d6d6d;
    }

    @media (min-width: 768px) {
      width: 48px;
      height: 48px;
    }
  }

  p {
    margin: 0;
    color: ${theme.colors.gray600};
    font-size: 13px;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  input {
    display: none;
  }
`;

export const FileList = styled.div`
  margin-top: ${theme.spacing.md};

  @media (min-width: 768px) {
    margin-top: ${theme.spacing.lg};
  }
`;

export const FileItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.md};
  background: ${theme.colors.gray50};
  border-radius: ${theme.borderRadius.md};
  margin-bottom: ${theme.spacing.sm};
  border: 1px solid ${theme.colors.gray200};
  min-height: 44px;

  body.dark-theme & {
    background: #1f1f1f;
    border-color: #404040;
  }

  @media (min-width: 768px) {
    padding: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.md};
  }

  .file-info {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    flex: 1;
    min-width: 0;

    svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      color: ${theme.colors.gray600};

      body.dark-theme & {
        color: #b0b0b0;
      }
    }

    .file-name {
      font-size: 13px;
      color: ${theme.colors.gray900};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      body.dark-theme & {
        color: #e5e5e5;
      }

      @media (min-width: 768px) {
        font-size: 14px;
      }
    }
  }

  button {
    background: none;
    border: none;
    color: ${theme.colors.danger};
    cursor: pointer;
    padding: 6px;
    min-height: 44px;
    min-width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (min-width: 768px) {
      min-height: auto;
      min-width: auto;
    }

    &:hover {
      opacity: 0.7;
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

export const SuccessMessage = styled.div`
  background: #d1fae5;
  border: 1px solid #a7f3d0;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  color: #065f46;
  font-size: 13px;

  body.dark-theme & {
    background: #064e3b;
    border-color: #047857;
    color: #d1fae5;
  }

  @media (min-width: 768px) {
    padding: ${theme.spacing.xl};
    font-size: 14px;
  }

  strong {
    font-weight: 600;
  }
`;
