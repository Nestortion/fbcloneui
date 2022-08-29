import SideNav from './components/SideNav'
import TopNav from './components/TopNav'
import NewsFeed from './components/NewsFeed'
import FriendList from './components/FriendList'
import { ContentContainer } from './styles/ContentContainer'
import { BiMessageSquareEdit } from 'react-icons/bi'

function App() {
    return (
        <>
            <TopNav />
            <ContentContainer>
                <SideNav />
                <NewsFeed />
                <FriendList />
                <div className="newMessage">
                    <h2>
                        <BiMessageSquareEdit />
                    </h2>
                </div>
            </ContentContainer>
        </>
    )
}

export default App
