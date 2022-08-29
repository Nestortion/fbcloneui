import React from 'react'
import { TopNavStyled } from '../styles/TopNavStyled'
import { FaFacebook, FaBell } from 'react-icons/fa'
import { CgMenuGridO } from 'react-icons/cg'
import { BsMessenger } from 'react-icons/bs'
import { MdOndemandVideo } from 'react-icons/md'
import { AiFillHome, AiOutlineShop } from 'react-icons/ai'
import { HiUserGroup } from 'react-icons/hi'
import { SiFacebookgaming } from 'react-icons/si'

function TopNav() {
    return (
        <TopNavStyled>
            <div className="search">
                <h1>
                    {/* ඞ */}
                    <FaFacebook />
                </h1>
                <div className="search-box">
                    <input type="text" />
                </div>
            </div>
            <div className="content">
                <div className="selected">
                    <AiFillHome />
                </div>
                <div>
                    <MdOndemandVideo />
                </div>
                <div>
                    <AiOutlineShop />
                </div>
                <div>
                    <HiUserGroup />
                </div>
                <div>
                    <SiFacebookgaming />
                </div>
            </div>
            <div className="utilities">
                <div>
                    <h1>
                        <CgMenuGridO />
                    </h1>
                </div>
                <div className="messenger">
                    <BsMessenger />
                </div>
                <div className="notif">
                    <FaBell />
                </div>
                <div>
                    <img src={require('../images/Amogus.jpg')} />
                </div>
            </div>
        </TopNavStyled>
    )
}

export default TopNav
