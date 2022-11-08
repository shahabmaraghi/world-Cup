import { styled, Box, Container } from "@mui/material";
import Head from "next/head";
import React from "react";
import CountDownBox from "../components/CountDownBox";
import TodayGames from "../components/CountDownBox/TodayGames";
import Groups from "../components/Groups";
import Header from "../components/header";
import PlayerBox from "../components/playerBox";
import UpperSteps from "../components/UpperSteps";
import WorldCupPlus from "../components/WorldCupPlus";
import WorldCupPlusCards from "../components/WorldCupPlusCards";
function HomePage() {
    const Wrapper = styled(Box)(({ theme }) => ({
        width: "100%",
        height: "70px",
        background: "#1C0212",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Iranyekan !important",
    }));

    const sampleData = {
        todayMatches: [
            {
                teamOne: "ایران",
                teamTwo: "انگلیس",
                teamOneFlag: "https://anten-static.farakav.com/staticdata/flags/iran.svg",
                teamTwoFlag: "https://anten-static.farakav.com/staticdata/flags/england.svg",
                matchTime: "13:30"
            },
            {
                teamOne: "آرژانتین",
                teamTwo: "کرواسی",
                teamOneFlag: "https://anten-static.farakav.com/staticdata/flags/argentina.svg",
                teamTwoFlag: "https://anten-static.farakav.com/staticdata/flags/croatia.svg",
                matchTime: "16:30"
            },
            {
                teamOne: "برزیل",
                teamTwo: "قطر",
                teamOneFlag: "https://anten-static.farakav.com/staticdata/flags/brazil.svg",
                teamTwoFlag: "https://anten-static.farakav.com/staticdata/flags/qatar.svg",
                matchTime: "18:30"
            },
            {
                teamOne: "سنگال",
                teamTwo: "آلمان",
                teamOneFlag: "https://anten-static.farakav.com/staticdata/flags/senegal.svg",
                teamTwoFlag: "https://anten-static.farakav.com/staticdata/flags/germany.svg",
                matchTime: "19:30"
            }
        ],

        groups: [
            [{ teamName: "اکوادور", countOfGames: "2", teamFlag: "https://anten-static.farakav.com/staticdata/flags/senegal.svg", teamScore: "5", group: "A" },
            { teamName: "سنگال", countOfGames: "2", teamFlag: "https://anten-static.farakav.com/staticdata/flags/senegal.svg", teamScore: "5", group: "A" },
            { teamName: "قطر", countOfGames: "2", teamFlag: "https://anten-static.farakav.com/staticdata/flags/senegal.svg", teamScore: "5", group: "A" },
            { teamName: "هلند", countOfGames: "2", teamFlag: "https://anten-static.farakav.com/staticdata/flags/senegal.svg", teamScore: "5", group: "A" }],
            [{ teamName: "آمریکا", countOfGames: "2", teamFlag: "https://anten-static.farakav.com/staticdata/flags/senegal.svg", teamScore: "5", group: "B" }],
            [{ teamName: "آرژانتین", countOfGames: "2", teamFlag: "https://anten-static.farakav.com/staticdata/flags/senegal.svg", teamScore: "5", group: "C" }],
            [{ teamName: "استرالیا", countOfGames: "2", teamFlag: "https://anten-static.farakav.com/staticdata/flags/senegal.svg", teamScore: "5", group: "D" }],
            [{ teamName: "آلمان", countOfGames: "2", teamFlag: "https://anten-static.farakav.com/staticdata/flags/senegal.svg", teamScore: "5", group: "E" }],
            [{ teamName: "بلژیک", countOfGames: "2", teamFlag: "https://anten-static.farakav.com/staticdata/flags/senegal.svg", teamScore: "5", group: "F" }],
            [{ teamName: "برزیل", countOfGames: "2", teamFlag: "https://anten-static.farakav.com/staticdata/flags/senegal.svg", teamScore: "5", group: "G" }],
            [{ teamName: "اروگوئه", countOfGames: "2", teamFlag: "https://anten-static.farakav.com/staticdata/flags/senegal.svg", teamScore: "5", group: "H" }],
        ],

        higherSteps: [
            {
                finalEightGames: [
                    {
                        teamOne: "آرژانتین",
                        teamTwo: "آلمان",
                        teamOneFlag: "url ......",
                        teamTwoFlag: "url ......",
                        teamOneGoals: "2",
                        teamTwoGoals: "1",
                        gameDate: "20/2/2022"
                    },
                    {
                        teamOne: "آرژانتین",
                        teamTwo: "آلمان",
                        teamOneFlag: "url ......",
                        teamTwoFlag: "url ......",
                        teamOneGoals: "2",
                        teamTwoGoals: "1",
                        gameDate: "20/2/2022"
                    },
                    {
                        teamOne: "آرژانتین",
                        teamTwo: "آلمان",
                        teamOneFlag: "url ......",
                        teamTwoFlag: "url ......",
                        teamOneGoals: "2",
                        teamTwoGoals: "1",
                        gameDate: "20/2/2022"
                    },
                    {
                        teamOne: "آرژانتین",
                        teamTwo: "آلمان",
                        teamOneFlag: "url ......",
                        teamTwoFlag: "url ......",
                        teamOneGoals: "2",
                        teamTwoGoals: "1",
                        gameDate: "20/2/2022"
                    },
                    {
                        teamOne: "آرژانتین",
                        teamTwo: "آلمان",
                        teamOneFlag: "url ......",
                        teamTwoFlag: "url ......",
                        teamOneGoals: "2",
                        teamTwoGoals: "1",
                        gameDate: "20/2/2022"
                    },
                    {
                        teamOne: "آرژانتین",
                        teamTwo: "آلمان",
                        teamOneFlag: "url ......",
                        teamTwoFlag: "url ......",
                        teamOneGoals: "2",
                        teamTwoGoals: "1",
                        gameDate: "20/2/2022"
                    },
                    {
                        teamOne: "آرژانتین",
                        teamTwo: "آلمان",
                        teamOneFlag: "url ......",
                        teamTwoFlag: "url ......",
                        teamOneGoals: "2",
                        teamTwoGoals: "1",
                        gameDate: "20/2/2022"
                    },
                    {
                        teamOne: "آرژانتین",
                        teamTwo: "آلمان",
                        teamOneFlag: "url ......",
                        teamTwoFlag: "url ......",
                        teamOneGoals: "2",
                        teamTwoGoals: "1",
                        gameDate: "20/2/2022"
                    },
                ],
                finalFourGames: [
                    {
                        teamOne: "آرژانتین",
                        teamTwo: "آلمان",
                        teamOneFlag: "url ......",
                        teamTwoFlag: "url ......",
                        teamOneGoals: "2",
                        teamTwoGoals: "1",
                        gameDate: "20/2/2022"
                    },
                    {
                        teamOne: "آرژانتین",
                        teamTwo: "آلمان",
                        teamOneFlag: "url ......",
                        teamTwoFlag: "url ......",
                        teamOneGoals: "2",
                        teamTwoGoals: "1",
                        gameDate: "20/2/2022"
                    },
                    {
                        teamOne: "آرژانتین",
                        teamTwo: "آلمان",
                        teamOneFlag: "url ......",
                        teamTwoFlag: "url ......",
                        teamOneGoals: "2",
                        teamTwoGoals: "1",
                        gameDate: "20/2/2022"
                    },
                    {
                        teamOne: "آرژانتین",
                        teamTwo: "آلمان",
                        teamOneFlag: "url ......",
                        teamTwoFlag: "url ......",
                        teamOneGoals: "2",
                        teamTwoGoals: "1",
                        gameDate: "20/2/2022"
                    },

                ],
                semiFinalGames: [
                    {
                        teamOne: "آرژانتین",
                        teamTwo: "آلمان",
                        teamOneFlag: "url ......",
                        teamTwoFlag: "url ......",
                        teamOneGoals: "2",
                        teamTwoGoals: "1",
                        gameDate: "20/2/2022"
                    },
                    {
                        teamOne: "آرژانتین",
                        teamTwo: "آلمان",
                        teamOneFlag: "url ......",
                        teamTwoFlag: "url ......",
                        teamOneGoals: "2",
                        teamTwoGoals: "1",
                        gameDate: "20/2/2022"
                    },
                ],
                finalGame: [
                    {
                        teamOne: "آرژانتین",
                        teamTwo: "آلمان",
                        teamOneFlag: "url ......",
                        teamTwoFlag: "url ......",
                        teamOneGoals: "2",
                        teamTwoGoals: "1",
                        gameDate: "20/2/2022"
                    },
                ],
            }
        ]
    }

    return (
        <>
            <Head>
                <title>جام جهانی | آنتن</title>
                <meta property="og:title" content="آنتن" />
                <meta
                    property="og:description"
                    content="سامانه برخط پخش برنامه های ویدیویی. در این سامانه شما می توانید برنامه های زنده را از طریق وب سایت آنتن یا اپلیکیشن تلفن همراه تماشا کنید."
                />

            </Head>


            <Header />
            <PlayerBox />
            <CountDownBox />
            <Container sx={{ background: "#E9E9E9 !important", maxWidth: "100% !important" }} >
                <Container sx={{ maxWidth: "1140px", background: "#E9E9E9 !important", }}>
                    <WorldCupPlus />
                    <WorldCupPlusCards />
                </Container>
                <Container sx={{ maxWidth: "1216px", display: "flex", justifyContent: "center", background: "#E9E9E9 !important", }} >
                    <TodayGames todayGames={sampleData?.todayMatches} />
                </Container>
            </Container>
            <Groups groups={sampleData?.groups} />
            <UpperSteps />
            {/* </Groups> */}
        </>
    )
}

export default HomePage