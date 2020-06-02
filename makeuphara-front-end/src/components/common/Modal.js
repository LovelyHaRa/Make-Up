import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import TextField from '@material-ui/core/TextField';
import Fade from '@material-ui/core/Fade';

const FullScreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    theme.body === '#fff' ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.45)'};
  font-family: 'NanumBarunGothic';
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AskModalBlock = styled.div`
  width: 320px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: ${({ theme }) =>
    theme.body === '#fff'
      ? '0 0 5px 2px rgba(0, 0, 0, 0.15)'
      : '0 0 5px 2px rgba(0, 0, 0, 0.35)'};
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 500;
  }
  p {
    margin-bottom: 3rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const SingleInputModalBlock = styled.div`
  width: 320px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: ${({ theme }) =>
    theme.body === '#fff'
      ? '0 0 5px 2px rgba(0, 0, 0, 0.15)'
      : '0 0 5px 2px rgba(0, 0, 0, 0.35)'};
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 500;
  }
  p {
    margin-bottom: 1rem;
  }
  .single-input-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledButton = styled(Button)`
  height: 2rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const StyledTextField = styled(TextField)`
  &.MuiTextField-root {
    margin-bottom: 1rem;
    width: 8rem;
  }
  .MuiFormLabel-root {
    font-family: 'Raleway';
    letter-spacing: 2px;
    color: ${({ theme }) => theme.placeholder};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${({ theme }) => theme.themeColorBody};
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid ${({ theme }) => theme.themeColorHoverBody};
  }
  .MuiInput-underline:before {
    border-bottom: 1px solid ${({ theme }) => theme.text};
  }
  .MuiInput-underline:after {
    border-bottom: 2px solid ${({ theme }) => theme.themeColorBody};
  }
  .MuiInputBase-input {
    color: ${({ theme }) => theme.text};
  }
`;

export const AskModal = ({
  className,
  visible,
  title,
  description,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
}) => {
  return (
    visible && (
      <Fade in={visible}>
        <FullScreen className={className}>
          <AskModalBlock>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="buttons">
              <StyledButton onClick={onCancel}>{cancelText}</StyledButton>
              <StyledButton themeColor onClick={onConfirm}>
                {confirmText}
              </StyledButton>
            </div>
          </AskModalBlock>
        </FullScreen>
      </Fade>
    )
  );
};

export const SingleInputModal = ({
  className,
  visible,
  title,
  description,
  inputLabel,
  inputName,
  submitText = '확인',
  cancelText = '취소',
  onSubmit,
  onCancel,
}) => {
  return (
    visible && (
      <Fade in={visible}>
        <FullScreen className={className}>
          <SingleInputModalBlock>
            <h2>{title}</h2>
            <p>{description}</p>
            <form onSubmit={onSubmit}>
              <div className="single-input-form">
                <StyledTextField
                  id="standard-basic"
                  label={inputLabel}
                  name={inputName}
                  require="true"
                />
                <div className="buttons">
                  <StyledButton onClick={onCancel}>{cancelText}</StyledButton>
                  <StyledButton themeColor onClick={onSubmit}>
                    {submitText}
                  </StyledButton>
                </div>
              </div>
            </form>
          </SingleInputModalBlock>
        </FullScreen>
      </Fade>
    )
  );
};
