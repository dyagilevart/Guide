import React from 'react';
import { AppHeader } from './components'

import 'bootstrap/dist/css/bootstrap.css';
import './css/brand.css';

export default function Brand() {
    return (<div>
        <AppHeader />
        {/* Кнопка Возвращение на страницу сортировки */}
        <div className="leftcolumn">
            <div className="card but">
                <h5><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                    <path fillRule="evenodd"
                        d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                </svg></h5>
            </div>
        </div>

        {/* Информация о марке */}
        <div className="centercolumn">
            <div className="card">
                <div>
                    <h1 id="title">Марка </h1>
                </div>
            </div>
        </div>

        {/* Кнопки Следующа предыдуща марка */}
        <div className="rightcolumn brand-change">
            <div className="card but" id="forward">
                <h5 id="forward"> <span id="forward">Дальше</span> &#5171;</h5>
            </div>
        </div>

        <div className="rightcolumn brand-change">
            <div className="card but" id="back">
                <h5 id="back">&#5176; <span id="back">Назад</span></h5>
            </div>
        </div>
    </div>);
}
