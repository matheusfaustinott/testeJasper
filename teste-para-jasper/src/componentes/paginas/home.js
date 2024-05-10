import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TesteJasper from '..';

const Home = () => {
    return (
        <BrowserRouter>
            {
                <div>
                    <Routes>
                        <Route path="/" exact element={<TesteJasper />} />
                        {/* <Route path="/pesquisa" element={<Interno />}  /> */}
                    </Routes>                  
                </div>
            }
        </BrowserRouter>
    );
};

export default Home;
