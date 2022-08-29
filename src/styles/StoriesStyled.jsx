import styled from 'styled-components'

export const StoriesStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    & > div {
        width: 100%;
        display: flex;
        padding-inline-start: 2%;
        padding-inline-end: 2%;
    }

    .nav {
        justify-content: space-around;
        & > div {
            margin-top: 1%;
            font-size: 0.9em;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 33%;
        }

        & > div:not(div:first-child) {
            &:hover {
                border-radius: 10px;
                cursor: pointer;
                background-color: rgba(255, 255, 255, 0.075);
            }
        }
        & > div:first-child {
            color: #1877f2;
            border-bottom: 2px solid #1877f2;
        }
    }

    .rightArrow {
        position: absolute;
        height: 45px;
        width: 45px;
        background-color: #404040;
        color: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 40%;
        right: 0;

        &:hover {
            cursor: pointer;
            background-color: #5d5d5d;
        }
    }

    .content {
        margin: 2.5% 0;
        overflow: hidden;
        position: relative;

        & > div:first-child {
            margin-right: 1rem;
            position: relative;
            & > div {
                overflow: hidden;
                border-radius: 10px;
            }
            &:hover {
                cursor: pointer;
                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 2;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.1);
                }
                img {
                    transform: scale(1.05);
                }
            }

            .plusIcon,
            .addStory {
                position: absolute;
            }

            .plusIcon {
                top: 140px;
                left: 35%;
                border-radius: 50%;
                color: #1877f2;
                z-index: 0;

                &:before {
                    content: '';
                    position: absolute;
                    width: 35%;
                    height: 35%;
                    top: 29%;
                    left: 32%;
                    z-index: -1;
                    background-color: white;
                }
            }

            .addStory {
                bottom: 10px;
                left: 20%;
            }

            img {
                transition: 1s;
                border-radius: 10px;
                width: 100px;
                height: 160px;
            }
        }

        & > div:not(:first-child) {
            margin-right: 1rem;
            & > div {
                border-radius: 10px;
                overflow: hidden;
                position: relative;
                &:hover {
                    cursor: pointer;
                    &:before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 2;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.1);
                    }
                    .contentImg {
                        transform: scale(1.05);
                    }
                }
            }
        }

        .pfp,
        .contentP {
            position: absolute;
        }

        .contentImg {
            transition: 0.5s;
            width: 100px;
            height: 200px;
            border-radius: 10px;
        }
        .pfp {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            border: 4px solid #1877f2;
            z-index: 1;
            top: 15px;
            left: 15px;
        }
        p {
            font-size: 0.8em;
            bottom: 10px;
            left: 10px;
        }
    }
`
