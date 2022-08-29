import styled from 'styled-components'

export const FeedContentStyled = styled.div`
    padding-top: 2%;
    width: 100%;
    display: flex;
    flex-direction: column;

    & > div {
        display: flex;
        padding: 0.5% 0;
    }
    & > div:not(.contentImg) {
        margin-inline: 2%;
    }

    .author {
        color: rgba(255, 255, 255, 0.8);
        justify-content: space-between;
        & > div {
            display: flex;
        }
        & > div:first-child {
            & > div {
                height: 40px;
                position: relative;
                top: -10%;

                & > p {
                    &:hover {
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }

                .authorName {
                    font-weight: bold;
                }

                .timeStamp {
                    display: flex;
                    color: rgba(255, 255, 255, 0.6);
                    align-items: center;
                    font-size: 0.8rem;
                }
            }

            img {
                height: 40px;
                width: 40px;
                border-radius: 50%;
                margin-right: 8%;

                &:hover {
                    cursor: pointer;
                }
            }
        }
        & > div:last-child {
            display: flex;
            align-items: center;
            margin-right: 1%;
            justify-content: center;
            width: 40px;
            border-radius: 50%;

            &:hover {
                cursor: pointer;
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
    }

    .caption {
        overflow: hidden;
        & > p {
            & > strong {
                &:hover {
                    color: rgba(255, 255, 255);
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
            & > strong:last-child {
                display: none;
            }
        }
    }

    .contentImg {
        width: 100%;
        & > div {
            width: 100%;
            & > img {
                height: 600px;
                width: 100%;
            }
            &:hover {
                cursor: pointer;
            }
        }
    }

    .stats,
    .options {
        position: relative;

        &:before {
            position: absolute;
            content: '';
            width: 100%;
            bottom: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
    }

    .stats {
        height: 30px;
        justify-content: space-between;
        align-items: center;
        padding: 3% 0;
        & > div {
            display: flex;
        }
        .commentAndShares {
            margin-right: 1%;
            & > p {
                white-space: nowrap;
                &:hover {
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
            & > p:first-child {
                margin-right: 2%;
            }
        }
        .reactions {
            & > span {
                margin-right: 2%;

                &:hover {
                    cursor: pointer;
                }
            }
            & > span:last-child {
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .options {
        justify-content: space-around;
        & > div {
            width: 33%;
            height: 30px;
            padding-top: 0.5%;
            margin-bottom: 0.5%;
            display: flex;
            justify-content: center;

            & > span,
            & > h3 {
                margin-inline: 2%;
            }
            & > h3 {
                margin-top: 1%;
            }

            &:hover {
                border-radius: 5px;
                cursor: pointer;
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
    }

    .addComment {
        padding: 1% 0;
        margin-bottom: 1%;
        justify-content: space-between;
        & > img {
            border-radius: 50%;
            height: 35px;
            width: 35px;
        }
        & > div {
            width: 93%;
            position: relative;
            & > div {
                position: absolute;
                display: flex;
                color: rgba(255, 255, 255, 0.4);
            }
            input[type='text'] {
                width: 100%;
                height: 35px;
                border-radius: 50px;
                border: none;
                background-color: rgba(255, 255, 255, 0.075);
            }
            & > div:first-child {
                top: 5px;
                left: 10px;
            }
            & > div:last-child {
                right: 0;
                top: 0;
                & > div {
                    font-size: 1.3em;
                    height: 35px;
                    width: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    &:hover {
                        cursor: pointer;
                        background-color: rgba(255, 255, 255, 0.075);
                    }
                }
            }
        }
    }
`
