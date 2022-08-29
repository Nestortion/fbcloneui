import Stories from './Stories'
import NewsFeedHeader from './NewsFeedHeader'
import { NewsFeedStyled } from '../styles/NewsFeedStyled'
import FeedContent from './FeedContent'

const pfp = require('../images/xdd.png')
const amogus = require('../images/redimpostor.jpg')

const Feeds = [
    {
        name: 'Nestor',
        pfp: pfp,
        caption:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        stats: 666,
    },
    {
        name: 'Nestor',
        pfp: pfp,
        caption: 'Amogus Adogus Impostor Vents Amogus Adogus Impostor Vents ',
        contentImg: amogus,
        stats: 50,
    },
    {
        name: 'Nestor',
        pfp: pfp,
        caption:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        contentImg: amogus,
        stats: 25,
    },
]

function NewsFeed() {
    return (
        <NewsFeedStyled>
            <Stories />
            <NewsFeedHeader />

            {Feeds.map((feed) => (
                <FeedContent
                    contentImg={feed.contentImg}
                    pfp={feed.pfp}
                    caption={feed.caption}
                    authorname={feed.name}
                    stats={feed.stats}
                />
            ))}
        </NewsFeedStyled>
    )
}

export default NewsFeed
