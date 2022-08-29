import React from 'react'
import { FriendListStyled } from '../styles/FriendListStyled'
import { FaBirthdayCake, FaEllipsisH } from 'react-icons/fa'
import { RiVideoAddFill } from 'react-icons/ri'

const Friends = [
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
    'Nestor P. Gerona Jr',
]

function FriendList() {
    return (
        <FriendListStyled>
            <div className="profiles">
                <div className="title">
                    Your Pages and Profiles
                    <div>
                        <FaEllipsisH />
                    </div>
                </div>
            </div>
            <div className="birthdays">
                <div className="title">Birthdays</div>
                <div>
                    <h1>
                        <FaBirthdayCake />
                    </h1>
                    <p>
                        <strong>Daniel Henson</strong> and
                        <strong> Richie Dean S. Tugay</strong> have birthdays
                        today.
                    </p>
                </div>
            </div>
            <div className="contacts">
                <div className="title">
                    Contacts
                    <div>
                        <div>
                            <RiVideoAddFill />
                        </div>
                        <div>🔍︎</div>
                        <div>
                            <FaEllipsisH />
                        </div>
                    </div>
                </div>
                {Friends.map((friend) => (
                    <div>
                        <div>
                            <img src={require('../images/Amogus.jpg')} />
                        </div>
                        {friend}
                    </div>
                ))}
            </div>
        </FriendListStyled>
    )
}

export default FriendList
