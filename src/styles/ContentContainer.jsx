import styled from 'styled-components'

export const ContentContainer = styled.div`
    height: 95%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow: auto;

    .newMessage {
        border-radius: 50%;
        height: 50px;
        width: 50px;
        position: absolute;
        top: 94%;
        right: 2%;
        background-color: #404040;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;

        &:hover {
            background-color: #5d5d5d;
            cursor: pointer;
        }
    }
`
