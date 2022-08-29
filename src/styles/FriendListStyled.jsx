import styled from 'styled-components'

export const FriendListStyled = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: sticky;
    top: 0;
    overflow: auto;

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
    /* white-space: nowrap; */
    /* position: sticky;
    top: 0; */
    & > div {
        display: flex;
        width: 55%;
        margin-inline-end: 3%;
        color: rgba(255, 255, 255, 0.8);

        .title {
            display: flex;
            align-items: center;
            color: rgba(255, 255, 255, 0.65);
            padding: 15px 0;
            padding-left: 3%;
        }
    }
    & > div:not(.birthdays) {
        .title {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }

    & > div:not(.contacts) {
        position: relative;
        &:before {
            content: '';
            position: absolute;
            left: 3%;
            bottom: 0;
            width: 97%;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
    }

    .profiles {
        & > div {
            & > div {
                height: 30px;
                width: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                &:hover {
                    background-color: rgba(255, 255, 255, 0.075);
                    border-radius: 50%;
                    cursor: pointer;
                }
            }
        }
    }

    .birthdays {
        display: flex;
        flex-direction: column;
        & > div:last-child {
            font-size: 0.9em;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 6px 0;
            margin-bottom: 2.5%;
            padding-left: 3%;

            p {
                width: 87%;
            }
            &:hover {
                border-radius: 7px;
                cursor: pointer;
                background-color: rgba(255, 255, 255, 0.075);
            }
        }
    }

    .contacts {
        position: relative;
        flex-direction: column;

        & > div:first-child {
            div {
                display: flex;
                font-size: 1.2rem;

                & > div {
                    height: 30px;
                    width: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 1rem;

                    &:hover {
                        background-color: rgba(255, 255, 255, 0.075);
                        border-radius: 50%;
                        cursor: pointer;
                    }
                }
            }
        }
        & > div {
            display: flex;
            align-items: center;
            height: 45px;
            width: 100%;
        }
        & > div:not(.title, .newMessage) {
            padding-left: 3%;

            font-size: 0.9em;
            & > div:first-child {
                display: flex;
                align-items: center;
                margin-right: 2%;
                position: relative;

                &:before {
                    content: '*';
                    position: absolute;
                    bottom: 3%;
                    right: 1%;
                    height: 0.5rem;
                    width: 0.5rem;
                    border-radius: 50%;
                    color: rgba(255, 255, 255, 0);
                    background-color: #21de4f;
                    border: 2px solid black;
                }
            }
            img {
                height: 35px;
                width: 35px;
                border-radius: 50%;
            }
            &:hover {
                border-radius: 7px;
                cursor: pointer;
                background-color: rgba(255, 255, 255, 0.075);
            }
        }
    }
`
