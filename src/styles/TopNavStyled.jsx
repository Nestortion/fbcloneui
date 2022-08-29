import styled from 'styled-components'

export const TopNavStyled = styled.nav`
    display: flex;
    background-color: rgba(255, 255, 255, 0.05);
    height: 5%;
    width: 100%;
    justify-content: space-between;
    position: sticky;
    top: 0;

    & > div {
        display: flex;
        width: 33%;
    }

    .search {
        align-items: center;
        height: 100%;
        h1 {
            margin-right: 1%;
            margin-inline-start: 2%;
        }

        .search-box {
            height: 80%;
            width: 35%;

            &:before {
                content: '🔍︎ Search Facebook';
                color: rgba(255, 255, 255, 0.6);
                position: absolute;
                top: 13px;
                left: 55px;
            }
        }

        input[type='text'] {
            height: 100%;
            width: 100%;
            border: none;
            border-radius: 20px;
            background-color: rgba(255, 255, 255, 0.075);
        }
    }

    .content {
        justify-content: space-between;
        align-items: center;
        height: 100%;
        font-size: 1.6rem;

        & > div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 19%;
            height: 90%;

            &:hover {
                cursor: pointer;
            }
        }

        .selected {
            color: #1877f2;
            border-bottom: 3px solid #1877f2;
        }

        div:not(div.selected) {
            border-radius: 7px;

            &:hover {
                background-color: rgba(255, 255, 255, 0.075);
            }
        }
    }

    .utilities {
        justify-content: end;
        align-items: center;
        height: 100%;
        margin-right: 1%;

        & > div {
            height: 70%;
            width: 6%;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.075);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 1%;

            img {
                height: 100%;
                width: 100%;
                border-radius: 50%;
            }

            &:hover {
                background-color: rgba(255, 255, 255, 0.15);
                cursor: pointer;
            }
        }

        .messenger,
        .notif {
            position: relative;
            &:before {
                font-size: 0.7em;
                position: absolute;
                content: '5';
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                height: 50%;
                border-radius: 50%;
                background-color: #ff2822;
                top: -10%;
                right: -10%;
            }
        }
    }
`
