import React, {  Fragment } from 'react';
import Header from './header';
import Main from './main';
import NewPosition from './newPosition';
import Footer from './footer'
import './style.css';

const menuData = [
    {label:'首页',keys:'1'},
    {label:'社会招聘',keys:'2'},
    {label:'校园招聘',keys:'3'},
    {label:'了解阿里',keys:'4'},
    {label:'个人中心',keys:'5'},
]

export default () => {
    return (
        <Fragment>
            <Header menuData={menuData} />
            <Main />
            <NewPosition />
            <Footer />
        </Fragment>
    )
}
