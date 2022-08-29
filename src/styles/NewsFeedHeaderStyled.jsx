import styled from 'styled-components'

export const NewsFeedHeaderStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    & > div {
        width: 100%;
        display: flex;
        margin-inline: 2%;
        padding: 2% 0;
    }

    .feedInput {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        width: 94%;
        justify-content: space-between;
        /* position: relative;
        &:before {
            content: '';
            position: absolute;
            right: 1%;
            left: 1.5%;
            bottom: 0;
            width: 95%;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        } */

        & > div {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        & > div:first-child {
            width: 45px;
            height: 45px;
            position: relative;
            img {
                border-radius: 50%;
            }
            &:hover {
                &:before {
                    position: absolute;
                    content: '';
                    height: 100%;
                    width: 100%;
                    border-radius: 50%;
                    background-color: rgba(255, 255, 255, 0.15);
                    cursor: pointer;
                }
            }
        }
        & > div:last-child {
            width: 92%;
            position: relative;
            &:before {
                content: "What's on your mind, Nestor?";
                position: absolute;
                color: rgba(255, 255, 255, 0.6);
                left: 2%;
            }

            input[type='text'] {
                width: 100%;
                height: 40px;
                border-radius: 50px;
                border: none;
                background-color: rgba(255, 255, 255, 0.075);
            }
            &:hover {
                cursor: pointer;
                border-radius: 50px;
                background-color: rgba(255, 255, 255, 0.15);
            }
        }
    }

    .options {
        width: 94%;
        justify-content: space-between;
        & > div {
            color: rgba(255, 255, 255, 0.6);
            display: flex;
            justify-content: center;
            padding-top: 1%;
            width: 33%;
            border-radius: 10px;
            height: 40px;

            &:hover {
                background-color: rgba(255, 255, 255, 0.075);
                cursor: pointer;
            }
        }

        h2 {
            margin-right: 2%;
        }
        .red {
            color: red;
        }
        .green {
            color: #19cd17;
        }
        .yellow {
            color: #ffaf00;
        }
    }

    img {
        width: 40px;
        height: 40px;
    }
`
