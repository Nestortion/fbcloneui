import React from 'react'
import { useState } from 'react'
import { SideNavContainer, SideNavStyled } from '../styles/SideNavStyled'
import { FaUserFriends, FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'
import { AiFillShop } from 'react-icons/ai'
import { MdOndemandVideo } from 'react-icons/md'
import { BsClockFill } from 'react-icons/bs'
import Footer from '../components/Footer'

const BM = require('../images/BM.jpg')
const CC = require('../images/CC.png')
const DC = require('../images/DC.png')
const NS = require('../images/NS.png')
const FV = require('../images/FV.png')

const shortcuts = [
    { img: BM, name: 'Backyard Monsters' },
    { img: CC, name: 'Candy Crush Saga' },
    { img: DC, name: 'Dragon City' },
    { img: NS, name: 'Ninja Saga' },
    { img: FV, name: 'FarmVille' },
]
const shortcutsss = [
    { img: BM, name: 'Backyard Monsters' },
    { img: CC, name: 'Candy Crush Saga' },
    { img: DC, name: 'Dragon City' },
    { img: NS, name: 'Ninja Saga' },
    { img: FV, name: 'FarmVille' },
    { img: BM, name: 'Backyard Monsters' },
    { img: CC, name: 'Candy Crush Saga' },
    { img: DC, name: 'Dragon City' },
    { img: NS, name: 'Ninja Saga' },
    { img: FV, name: 'FarmVille' },
    { img: FV, name: 'FarmVille' },
    { img: BM, name: 'Backyard Monsters' },
    { img: CC, name: 'Candy Crush Saga' },
    { img: DC, name: 'Dragon City' },
    { img: NS, name: 'Ninja Saga' },
    { img: FV, name: 'FarmVille' },
]

function SideNav() {
    const [shortcut, setShortCut] = useState(shortcuts)
    const [more, setMore] = useState(true)
    const [arrow, setArrow] = useState(FaAngleDown)

    const seeMore = (e) => {
        e.preventDefault()

        // const pages = document.querySelector('.pages')
        // const additional = e.target.parentNode.children[1].cloneNode(true)
        // pages.append(additional)
    }
    const seeMoreShortcuts = (e) => {
        e.preventDefault()

        if (more === true) {
            setShortCut(shortcutsss)
            setArrow(FaAngleUp)
            setMore(!more)
        } else if (more === false) {
            setShortCut(shortcuts)
            setArrow(FaAngleDown)
            setMore(!more)
        }
    }

    return (
        <SideNavContainer>
            <SideNavStyled>
                <div className="sidemain">
                    <div className="pages">
                        <div>
                            <div>
                                <img src={require('../images/xdd.png')} />
                            </div>
                            Nestor
                        </div>
                        <div>
                            <h2>
                                <FaUserFriends />
                            </h2>
                            Friends
                        </div>
                        <div>
                            <h2>
                                <HiUserGroup />
                            </h2>
                            Groups
                        </div>
                        <div>
                            <h2>
                                <AiFillShop />
                            </h2>
                            Marketplace
                        </div>
                        <div>
                            <h2>
                                <MdOndemandVideo />
                            </h2>
                            Watch
                        </div>
                        <div>
                            <h2>
                                <BsClockFill />
                            </h2>
                            Memories
                        </div>
                        <div onClick={seeMore}>
                            <div>
                                <FaAngleDown />
                            </div>
                            See more
                        </div>
                    </div>

                    <div className="shortcuts">
                        <div className="shortcut">
                            <p>Your shortcuts</p>
                            <p>Edit</p>
                        </div>
                        {shortcut.map((shortcut) => (
                            <div>
                                <img src={shortcut.img} />
                                {shortcut.name}
                            </div>
                        ))}
                        <div onClick={seeMoreShortcuts}>
                            <div>{arrow}</div>
                            See more
                        </div>
                    </div>
                </div>

                <Footer />
            </SideNavStyled>
        </SideNavContainer>
    )
}

export default SideNav
