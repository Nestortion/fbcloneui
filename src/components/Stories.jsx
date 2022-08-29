import React from 'react'
import { StoriesStyled } from '../styles/StoriesStyled'
import { AiFillPlusCircle } from 'react-icons/ai'
import { FaAngleRight } from 'react-icons/fa'

const storyImg = require('../images/Story.jpg')
const pfp = require('../images/xdd.png')

const stories = [
    { img: storyImg, pfp: pfp, name: 'Nestor' },
    { img: storyImg, pfp: pfp, name: 'Nestor' },
    { img: storyImg, pfp: pfp, name: 'Nestor' },
    { img: storyImg, pfp: pfp, name: 'Nestor' },
    { img: storyImg, pfp: pfp, name: 'Nestor' },
    { img: storyImg, pfp: pfp, name: 'Nestor' },
    { img: storyImg, pfp: pfp, name: 'Nestor' },
    { img: storyImg, pfp: pfp, name: 'Nestor' },
    { img: storyImg, pfp: pfp, name: 'Nestor' },
    { img: storyImg, pfp: pfp, name: 'Nestor' },
]
const reels = []
const rooms = []

function Stories() {
    return (
        <StoriesStyled>
            <div className="nav">
                <div>Stories</div>
                <div>Reels</div>
                <div>Rooms</div>
            </div>
            <div className="content">
                <div>
                    <div>
                        <img src={require('../images/Story.jpg')} />
                    </div>
                    <div className="plusIcon">
                        <h1>
                            <AiFillPlusCircle />
                        </h1>
                    </div>
                    <p className="addStory">Create Story</p>
                </div>
                {stories.map((story) => (
                    <div>
                        <div>
                            <img className="contentImg" src={story.img} />
                            <img className="pfp" src={story.pfp} />
                            <p className="contentP">{story.name}</p>
                        </div>
                    </div>
                ))}
                <div className="rightArrow">
                    <h1>
                        <FaAngleRight />
                    </h1>
                </div>
            </div>
        </StoriesStyled>
    )
}

export default Stories
