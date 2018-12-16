import React, { Fragment } from 'react';
import theme from "../theme";

const FooterComponent = () => (
    <Fragment>
        <footer>
            <div>
                <a href='www.geektrust.in/finding-falcone'>
                    Coding problem - www.geektrust.in/finding-falcone
                </a>
            </div>
        </footer>
        <style>
            {`
            footer {
                height: 70px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: ${theme.headerBackground};
                position: fixed;
                width: 100%;
                bottom: 0;
            }
            a {
                text-decoration: none;
                color: black;
            }
            `}
        </style>
    </Fragment>
)

export default FooterComponent;