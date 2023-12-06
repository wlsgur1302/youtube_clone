import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Record from './pages/Record'
import MyVideo from './pages/MyVideo'
import Webd from './pages/Webd'
import Website from './pages/Website'
import Gsap from './pages/Gsap'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Like from './pages/Like'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'
import Header from './components/section/Header';
import Main from './components/section/Main';
import Footer from './components/Footer';

const App = () => { // 함수형 컴포넌트 정의
    return (
        <BrowserRouter>
            <Header />
            <Main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/record' element={<Record />} />
                    <Route path='/myVideo' element={<MyVideo />} />
                    <Route path='/webd' element={<Webd />} />
                    <Route path='/website' element={<Website />} />
                    <Route path='/gsap' element={<Gsap />} />
                    <Route path='/port' element={<Port />} />
                    <Route path='/youtube' element={<Youtube />} />
                    <Route path='/like' element={<Like />} />
                    <Route path='/video/:videoId' element={<Video />} />
                    <Route path='/search/:searchId' element={<Search />} />
                    <Route path='*' element={<Not />} />
                </Routes>
            </Main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;