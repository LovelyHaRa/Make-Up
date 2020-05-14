import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import Button, { buttonStyle } from '../common/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import palette from '../../lib/styles/open-color';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    font-weight: normal;
  }
  hr {
    border: 0.5px solid ${({ theme }) => theme.loginInputBorder};
  }
  .social-login {
    button + a {
      margin-top: 0.5rem;
    }
    a + button {
      margin-top: 0.5rem;
    }
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.loginInputBorder};
  padding-bottom: 0.5rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  outline: none;
  width: 100%;
  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.loginInputBorderFocus};
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  & + & {
    margin-top: 1rem;
  }
  &::placeholder {
    font-weight: normal;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${({ theme }) => theme.text};
    &:hover {
      color: ${({ theme }) => theme.hoverText};
      text-decoration: underline !important;
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const GoogleLoginButton = styled.button`
  ${buttonStyle}
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const socialBtnStyle = css`
  border: none;
  padding: 0;
  display: block;
  border-radius: 0.5rem;
  img {
    width: 100%;
    display: flex;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const NaverLoginButton = styled.a`
  ${buttonStyle}
  ${socialBtnStyle}
`;

const KakaoLoginButton = styled.button`
  ${buttonStyle}
  ${socialBtnStyle}
`;

const textMap = {
  login: '로그인',
  signinGoogle: '구글로 로그인',
  register: '회원가입',
};

const ErrorMessage = styled.div`
  color: ${palette.red[9]};
  text-align: center;
  font-size: 0.75rem;
  margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error, onSocialLogin }) => {
  const text = textMap[type];

  // Login with Google
  const googleLoginBtn = useRef(null);
  const auth2 = useRef(null);

  // Config Google Login API
  const loadGoogleLoginApi = () => {
    // 로그인 버튼 이벤트 주입
    const prepareLoginButton = () => {
      auth2.current.attachClickHandler(
        googleLoginBtn.current,
        {},
        (googleUser) => {
          // const profile = googleUser.getBasicProfile();
          // console.log('Token || ' + googleUser.getAuthResponse().id_token);
          // console.log('ID: ' + profile.getId());
          // console.log('Name: ' + profile.getName());
          // console.log('Image URL: ' + profile.getImageUrl());
          // console.log('Email: ' + profile.getEmail());

          const id_token = googleUser.getAuthResponse().id_token;
          onSocialLogin({ id_token });
        },
        (error) => {
          console.log(JSON.stringify(error, undefined, 2));
        },
      );
    };

    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        auth2.current = window['gapi'].auth2.init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          cookiepolicy: 'single_host_origin',
          scope: 'profile email',
        });
        prepareLoginButton();
      });
    };
  };

  const onNaverLoginClick = () => {
    const client_id = process.env.REACT_APP_NAVER_CLIENT_ID;
    const redirect_uri = process.env.REACT_APP_NAVER_LOGIN_REDIRECT_URI;
    const state = process.env.REACT_APP_NAVER_LOGIN_STATE;
    let requestUrl =
      'https://nid.naver.com/oauth2.0/authorize?response_type=code';
    requestUrl += '&client_id=' + client_id;
    requestUrl += '&redirect_uri=' + redirect_uri;
    requestUrl += '&state=' + state;
    console.log(requestUrl);
    window.location = requestUrl;
  };

  const onKakaoLoginClick = () => {
    const client_id = process.env.REACT_APP_KAKAO_CLIENT_ID;
    const redirect_uri = process.env.REACT_APP_KAKAO_LOGIN_REDIRECT_URI;
    const state = process.env.REACT_APP_KAKAO_LOGIN_STATE;
    let requestUrl =
      'https://kauth.kakao.com/oauth/authorize?response_type=code';
    requestUrl += '&client_id=' + client_id;
    requestUrl += '&redirect_uri=' + redirect_uri;
    requestUrl += '&state=' + state;
    window.location = requestUrl;
  };

  // Load Script
  const loadScript = (document, script, id, srcValue) => {
    const referenceNode = document.getElementsByTagName(script)[0];
    if (document.getElementById(id)) {
      return;
    }
    const googlejssdkNode = document.createElement(script);
    googlejssdkNode.id = id;
    googlejssdkNode.src = srcValue;
    referenceNode.parentNode.insertBefore(googlejssdkNode, referenceNode);
  };

  const removeApiScript = () => {
    const removeTag = (tagName, targetId) => {
      const targetNode = document.getElementsByTagName(tagName);
      [...targetNode].map(
        (node) =>
          node.src.indexOf(targetId) >= 0 && node.parentNode.removeChild(node),
      );
    };

    removeTag('script', 'apis.google.com');

    const removeJssdk = (id) => {
      const sdkNode = document.getElementById(id);
      if (sdkNode) {
        sdkNode.parentNode.removeChild(sdkNode);
      }
    };

    removeJssdk('google-jssdk');
  };

  useEffect(() => {
    loadScript(
      document,
      'script',
      'google-jssdk',
      'https://apis.google.com/js/platform.js?onload=googleSDKLoaded',
    );
    loadGoogleLoginApi();

    return () => {
      removeApiScript();
    };
  });

  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="계정 이름"
          value={form.username}
          onChange={onChange}
        />
        <StyledInput
          type="password"
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={onChange}
        />
        {type === 'register' && (
          <StyledInput
            type="password"
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            value={form.passwordConfirm}
            onChange={onChange}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop cyan fullWidth>
          {text}
        </ButtonWithMarginTop>
      </form>
      {type === 'login' && (
        <div className="social-login">
          <hr />
          <GoogleLoginButton fullWidth indigo ref={googleLoginBtn}>
            <FontAwesomeIcon icon={faGoogle} />
            {' ' + textMap['signinGoogle']}
            <span> </span>
          </GoogleLoginButton>
          <NaverLoginButton transparent onClick={() => onNaverLoginClick()}>
            <img
              src={process.env.PUBLIC_URL + '/images/auth/naver_login_btn.png'}
              alt="naver-login-btn"
            />
          </NaverLoginButton>
          <KakaoLoginButton transparent onClick={() => onKakaoLoginClick()}>
            <img
              src={process.env.PUBLIC_URL + '/images/auth/kakao_login_btn.png'}
              alt="kakao-login-btn"
            />
          </KakaoLoginButton>
        </div>
      )}

      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;