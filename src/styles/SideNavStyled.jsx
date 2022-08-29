import styled from 'styled-components'

export const SideNavStyled = styled.div`
    height: 100%;
    width: 55%;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        opacity: 0;
    }

    &:hover {
        &::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 0.15);
            border-radius: 5px;
        }
    }

    .sidemain {
        width: 100%;
        & > div {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            margin-inline-start: 0.5rem;
        }
        .pages {
            margin-top: 2.5%;
            position: relative;

            &:before {
                content: '';
                position: absolute;
                right: 4%;
                bottom: 0;
                width: 98%;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            }
            & > div {
                display: flex;
                justify-content: baseline;
                align-items: center;
                width: 100%;
                padding: 0.5rem;
                border-radius: 0.5rem;
                height: 50px;

                & > h2 {
                    margin-inline: 2%;
                    margin-right: 6%;
                }
                & > div {
                    font-size: 1.5em;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 35px;
                    border-radius: 50%;
                    height: 35px;
                    margin-right: 4%;
                    background-color: rgba(255, 255, 255, 0.075);

                    img {
                        height: 35px;
                        width: 35px;
                        border-radius: 50%;
                    }
                }

                &:hover {
                    background-color: rgba(255, 255, 255, 0.075);
                    cursor: pointer;
                    /* position: relative;
                    &:after {
                        position: absolute;
                        content: '*';
                        background-color: rgba(255, 255, 255, 0.075);
                        right: -2px;
                    } */
                }
            }

            & > div:last-child {
                margin-bottom: 3%;
            }
        }

        .shortcuts {
            & > div:not(.shortcut) {
                height: 45px;
                padding-left: 0.5rem;
                display: flex;
                align-items: center;
                & > div {
                    font-size: 1.5em;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 35px;
                    border-radius: 50%;
                    height: 35px;
                    margin-right: 4%;
                    background-color: rgba(255, 255, 255, 0.075);
                }

                img {
                    margin-right: 4%;
                    height: 35px;
                    width: 35px;
                    border-radius: 7px;
                }
                &:hover {
                    border-radius: 0.5rem;
                    background-color: rgba(255, 255, 255, 0.075);
                    cursor: pointer;
                }
            }
            .shortcut {
                height: 45px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-left: 0.5rem;
                color: rgba(255, 255, 255, 0.65);
                padding-top: 3%;
                padding-bottom: 5%;
                position: relative;

                & > p:last-child {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 30px;
                    border-radius: 5px;
                    width: 13%;
                    opacity: 0;
                    color: #1877f2;
                }

                &:hover {
                    & > p:last-child {
                        opacity: 1;

                        &:hover {
                            background-color: rgba(255, 255, 255, 0.075);
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
    .footer {
        width: 100%;
        font-size: 0.8rem;
        padding-inline-start: 2%;
        color: rgba(255, 255, 255, 0.5);
    }
`
export const SideNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 33%;
    position: sticky;
    top: 0;
`
