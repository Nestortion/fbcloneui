import React from 'react'
import { NewsFeedHeaderStyled } from '../styles/NewsFeedHeaderStyled'
import { RiLiveFill } from 'react-icons/ri'
import { IoIosImages } from 'react-icons/io'
import { CgSmileMouthOpen } from 'react-icons/cg'

function NewsFeedHeader() {
    return (
        <NewsFeedHeaderStyled>
            <div className="feedInput">
                <div>
                    <img src={require('../images/xdd.png')} />
                </div>
                <div>
                    <input type="text" />
                </div>
            </div>
            <div className="options">
                <div>
                    <h2 className="red">
                        <RiLiveFill />
                    </h2>
                    Live video
                </div>
                <div>
                    <h2 className="green">
                        <IoIosImages />
                    </h2>
                    Photo/video
                </div>
                <div>
                    <h2 className="yellow">
                        <CgSmileMouthOpen />
                    </h2>
                    Feeling/activity
                </div>
            </div>
        </NewsFeedHeaderStyled>
    )
}

export default NewsFeedHeader
