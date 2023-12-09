import React, { Suspense,lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/section/Main';

const Home = lazy(() => import('./pages/Home'));
const Record = lazy(() => import('./pages/Record'));
const MyVideo = lazy(() => import('./pages/MyVideo'));
const Like = lazy(() => import('./pages/Like'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));

const App = () => { // 함수형 컴포넌트 정의
/* Suspense를 사용하면 데이터나 컴포넌트가 로딩되기를 기다릴수 있다.
    로딩중에는 대체 컨텐츠 표시 가능
*/
 /*
    lazy는 비동기적으로 컴포넌트 로드함

    fallback은 Suspense 컴포넌트에서 로당중에 표시할 컴포넌트 지정
 */
    return (
        <BrowserRouter>
            
            <Suspense fallback={<Main/>}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/record' element={<Record />} />
                    <Route path='/myVideo' element={<MyVideo />} />
                    <Route path='/like' element={<Like />} />
                    <Route path='/video/:videoId' element={<Video />} />
                    <Route path='/search/:searchId' element={<Search />} />
                    <Route path='*' element={<Not />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;