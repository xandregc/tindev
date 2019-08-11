import React from 'react';
import './Main.css'

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

export default function Main ({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars1.githubusercontent.com/u/5372969?v=4" alt="" />
                    <footer>
                        <strong>Alexandre Costa</strong>
                        <p>Desenvolvedor asdf asddf asdf asdf asdf asdf asddf sadf asddf saddf asdf asdf asdf asdf sad.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars1.githubusercontent.com/u/5372969?v=4" alt="" />
                    <footer>
                        <strong>Alexandre Costa</strong>
                        <p>Desenvolvedor.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars1.githubusercontent.com/u/5372969?v=4" alt="" />
                    <footer>
                        <strong>Alexandre Costa</strong>
                        <p>Desenvolvedor.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars1.githubusercontent.com/u/5372969?v=4" alt="" />
                    <footer>
                        <strong>Alexandre Costa</strong>
                        <p>Desenvolvedor.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}