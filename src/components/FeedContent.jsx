import React from 'react'
import { FeedContentStyled } from '../styles/FeedContentStyled'
import { FaEllipsisH, FaUserFriends } from 'react-icons/fa'
import { CgSmileMouthOpen } from 'react-icons/cg'
import { TbSticker } from 'react-icons/tb'
import { BsCamera } from 'react-icons/bs'
import { AiOutlineGif } from 'react-icons/ai'
import { MdFace } from 'react-icons/md'
import { BiComment, BiLike } from 'react-icons/bi'
import { RiShareForwardLine } from 'react-icons/ri'

function FeedContent({ contentImg, authorname, pfp, caption, stats }) {
    const more = (e) => {
        e.preventDefault()
        e.target.parentNode.children[0].innerHTML = caption
        e.target.parentNode.children[1].style.display = 'none'
        e.target.parentNode.children[2].style.display = 'inline-block'
    }
    const less = (e) => {
        e.preventDefault()
        e.target.parentNode.children[0].innerHTML = caption.slice(0, 310)
        e.target.parentNode.children[1].style.display = 'inline-block'
        e.target.parentNode.children[2].style.display = 'none'
    }
    return (
        <FeedContentStyled>
            <div className="author">
                <div>
                    <img src={pfp} />
                    <div>
                        <p className="authorName">{authorname}</p>
                        <p className="timeStamp">
                            12h • <FaUserFriends />
                        </p>
                    </div>
                </div>
                <div>
                    <FaEllipsisH />
                </div>
            </div>

            {caption.length > 320 ? (
                <div className="caption">
                    <p>
                        <span>{caption.slice(0, 310)}</span>
                        <strong onClick={more}>See more...</strong>
                        <strong onClick={less}>See less...</strong>
                    </p>
                </div>
            ) : (
                <div className="caption">
                    <p>{caption}</p>
                </div>
            )}
            {contentImg && (
                <div className="contentImg">
                    <div>
                        <img src={contentImg} />
                    </div>
                </div>
            )}

            <div className="stats">
                <div className="reactions">
                    <span>😆</span>
                    <span>{stats * 5}</span>
                </div>
                <div className="commentAndShares">
                    <p>{stats} comments</p>
                    <p>{stats * 2} shares</p>
                </div>
            </div>
            <div className="options">
                <div>
                    <h3>
                        <BiLike />
                    </h3>
                    <span>Like</span>
                </div>
                <div>
                    <h3>
                        <BiComment />
                    </h3>
                    <span>Comment</span>
                </div>
                <div>
                    <h3>
                        <RiShareForwardLine />
                    </h3>
                    <span>share</span>
                </div>
            </div>
            <div className="addComment">
                <img src={pfp} />
                <div>
                    <div>Write a comment...</div>
                    <input type="text" />
                    <div>
                        <div>
                            <MdFace />
                        </div>
                        <div>
                            <CgSmileMouthOpen />
                        </div>
                        <div>
                            <BsCamera />
                        </div>
                        <div>
                            <AiOutlineGif />
                        </div>
                        <div>
                            <TbSticker />
                        </div>
                    </div>
                </div>
            </div>
        </FeedContentStyled>
    )
}

export default FeedContent
