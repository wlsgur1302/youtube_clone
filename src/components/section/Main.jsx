import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'


import Header from './Header'
import Footer from './Footer'
const Main = (props) => {
  /*props는 컴포넌트 간에 데이터를 전달하거나
  컴포넌트의 동작을 제어하기 위해 사용*/

  /*props.children을 사용하면 렌더링 구조가 더 유연하게 가능
  메인영역이 바뀔때 렌더링 로딩 시간 최소화*/

  /* <></>는 Fragments를 생성하기 위한 단축 구문 
  여러 요소를 반환하려면 불필요한 부모 요소를 추가하게 되는데
  Fragment를 사용하면 불필요한 부모 요소 없이 여러 요소를 그룹화 가능 
  */
  return (
    <HelmetProvider>
    <Helmet 
      titleTemplate="%s | YouTube_clone" 
      defaultTitle="YouTube" 
      defer={false}
    >
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>

      <Header />
      <main id="main" role='main'>
        {props.children}
      </main>
      <Footer />
    </HelmetProvider>
  )
}

export default Main
