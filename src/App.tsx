import React from 'react';

declare global {
  interface Window {
    naver: any;
  }
}

const { naver } = window;

function App() {
  const naverLogin = new naver.LoginWithNaverId(
      {
        clientId: "3COH0mAfzZJz0LJjzsgi",
        callbackUrl: "http://localhost:3000/about",
        isPopup: true, /* 팝업을 통한 연동처리 여부 */
        loginButton: {color: "green", type: 3, height: 60} /* 로그인 버튼의 타입을 지정 */
      }
  );

  // /* 설정정보를 초기화하고 연동을 준비 */
  naverLogin.init();

  return (
      <div>
          <div id="naverIdLogin">
              <a id="naverIdLogin_loginButton" href="#" role="button">
                  <img src="https://static.nid.naver.com/oauth/big_g.PNG" width={320}  alt=""/>
              </a>
          </div>
      </div>

  );
}

export default App;
