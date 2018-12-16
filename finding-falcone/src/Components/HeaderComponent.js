import React, { Fragment} from 'react';
import theme from '../theme';

const HeaderComponent = () => (
    <Fragment>
        <header>
            <div className='title'>Finding Falcone!</div>
        </header>
        <style>
            {`
            .title {
            font-size: 20px;
            }
            header {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                min-height: 70px;
                background: ${theme.headerBackground};
            }
            `}
        </style>
    </Fragment>
);

export default HeaderComponent;