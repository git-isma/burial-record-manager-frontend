import styled from 'styled-components';
import { theme } from '../theme';

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: ${theme.spacing.md};
  font-family: ${theme.fonts.body};

  body.dark-theme & {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  }

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const LoginCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.lg};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px;

  body.dark-theme & {
    background: #2d2d2d;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    padding: ${theme.spacing.xl};
  }
`;

export const LogoSection = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${theme.colors.gray900};
    margin: 0 0 ${theme.spacing.sm} 0;

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 13px;
    color: ${theme.colors.gray600};
    margin: 0;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.lg};

  @media (min-width: 768px) {
    margin-bottom: ${theme.spacing.xl};
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: ${theme.colors.gray700};
    font-size: 13px;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  input {
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

    body.dark-theme & {
      background: #1f1f1f;
      border-color: #404040;
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 14px;
      min-height: auto;
    }

    &:focus {
      outline: none;
      border-color: ${theme.colors.primarySolid};
      box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1);
      background: #fafbff;

      body.dark-theme & {
        background: #353535;
        border-color: #7c3aed;
      }
    }

    &::placeholder {
      color: ${theme.colors.gray400};

      body.dark-theme & {
        color: #6d6d6d;
      }
    }
  }
`;

export const RememberForgot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;

  @media (min-width: 768px) {
    margin-bottom: ${theme.spacing.xl};
  }

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: ${theme.colors.gray700};
    cursor: pointer;
    margin: 0;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }

    input {
      width: 18px;
      height: 18px;
      cursor: pointer;
      accent-color: ${theme.colors.primary};
      min-width: 44px;
      min-height: 44px;
      padding: 13px;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      border: 2px solid ${theme.colors.gray300};
      border-radius: ${theme.borderRadius.md};
      background: white;
      transition: all ${theme.transitions.fast};

      body.dark-theme & {
        background: #1f1f1f;
        border-color: #404040;
      }

      &:checked {
        background: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 11-1.06-1.06L12.72 4.22a.75.75 0 011.06 0z"/><path d="M2.22 9.28a.75.75 0 001.06 1.06L6.5 6.56a.75.75 0 10-1.06-1.06L2.22 9.28z"/></svg>');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;

        body.dark-theme & {
          background-color: #7c3aed;
          border-color: #7c3aed;
        }
      }

      @media (min-width: 768px) {
        width: 18px;
        height: 18px;
        min-width: auto;
        min-height: auto;
        padding: 0;
      }
    }
  }

  a {
    font-size: 13px;
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: all ${theme.transitions.fast};

    body.dark-theme & {
      color: #a78bfa;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  background: ${theme.colors.primary};
  color: white;
  padding: 12px 18px;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  border-radius: ${theme.borderRadius.lg};
  border: none;
  cursor: pointer;
  transition: all ${theme.transitions.base};
  margin-bottom: ${theme.spacing.lg};
  min-height: 44px;
  touch-action: manipulation;
  position: relative;
  overflow: hidden;

  body.dark-theme & {
    background: #7c3aed;
  }

  @media (min-width: 768px) {
    font-size: 14px;
    min-height: auto;
    margin-bottom: ${theme.spacing.xl};
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover:not(:disabled) {
    background: #4f46e5;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);

    body.dark-theme & {
      background: #6d28d9;
    }

    &::before {
      width: 300px;
      height: 300px;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SignupLink = styled.p`
  text-align: center;
  font-size: 13px;
  color: ${theme.colors.gray600};
  margin: 0;

  body.dark-theme & {
    color: #b0b0b0;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    font-weight: 600;
    transition: all ${theme.transitions.fast};

    body.dark-theme & {
      color: #a78bfa;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ErrorMessage = styled.div`
  background: #fee2e2;
  border: 1px solid #fecaca;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  color: #991b1b;
  font-size: 13px;

  body.dark-theme & {
    background: #7f1d1d;
    border-color: #991b1b;
    color: #fecaca;
  }

  @media (min-width: 768px) {
    padding: ${theme.spacing.lg};
    font-size: 14px;
  }
`;

export const SuccessMessage = styled.div`
  background: #d1fae5;
  border: 1px solid #a7f3d0;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  color: #065f46;
  font-size: 13px;

  body.dark-theme & {
    background: #064e3b;
    border-color: #047857;
    color: #d1fae5;
  }

  @media (min-width: 768px) {
    padding: ${theme.spacing.lg};
    font-size: 14px;
  }
`;
