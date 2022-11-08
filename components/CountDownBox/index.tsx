import { styled, Box, Typography, Container, useMediaQuery, Stack } from "@mui/material";
import Countdown from 'react-countdown';
import { useState, useEffect } from "react";

export default function CountDownBox() {
    const Wrapper = styled(Box)(({ theme }) => ({
        fontFamily: "Iranyekan",
        height: "auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        position: "relative",
        top: "-15px",
        width: "100%",
        zIndex: 0,
        ".time-box": {
            borderRadius: "8px",
            width: !isMobile ? "72px" : "48px",
            height: !isMobile ? "72px" : "48px",
            background: "#A3244C",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "IranyekanNumeral",
            marginBottom: "10px",
            fontSize: !isMobile ? "32px" : "20px",
        }
    }));

    const [untilWorldCup, setUntilWorldCup] = useState(0)
    useEffect(() => setUntilWorldCup(new Date("2022-11-20 19:30:00 GMT+0330 (Iran Standard Time)").getTime() - new Date().getTime()), [])
    const MobileWrapper = styled(Stack)(({ theme }) => ({
        width: "100%",
        background: "#0C0B21",
        ".header-right-pic": {
            transform: "rotate(90deg)",
            height: "auto",
            maxWidth: "30%",
        },
        ".fifa-logo": {
            maxWidth: "120px",
            marginRight: "45px"
        }
    }));

    const isMobile = useMediaQuery("(max-width:960px)");
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <span>00:00:00:00</span>
        } else {
            // Render a countdown
            return <Stack direction="row" alignItems="center" sx={{ fontFamily: "Iranyekan" }}>
                <Stack> <Box className="time-box" fontFamily="Iranyekan"> {days}</Box> <Typography color="#B8B8B8" textAlign="center" fontFamily="Iranyekan" fontSize="18px">روز</Typography></Stack> <Box sx={{ display: "flex", alignItems: "center", marginRight: "16px", marginLeft: "16px", marginBottom: "16px" }}>:</Box>  <Stack><Box className="time-box" fontFamily="Iranyekan">{hours}</Box><Typography color="#B8B8B8" textAlign="center" fontFamily="Iranyekan" fontSize={!isMobile ? "18px" : "12px"}>ساعت</Typography></Stack><Box sx={{ display: "flex", alignItems: "center", marginRight: "16px", marginLeft: "16px", marginBottom: "16px" }}>:</Box>
                <Stack><Box className="time-box"> {minutes} </Box> <Typography color="#B8B8B8" textAlign="center" fontFamily="Iranyekan" fontSize={!isMobile ? "18px" : "12px"}>دقیقه</Typography></Stack>
                <Box sx={{ display: "flex", alignItems: "center", marginRight: "16px", marginLeft: "16px", marginBottom: "16px" }}>:</Box> <Stack><Box className="time-box">{seconds}</Box> <Typography color="#B8B8B8" textAlign="center" fontFamily="Iranyekan" fontSize={!isMobile ? "18px" : "12px"}>ثانیه</Typography> </Stack>
            </Stack >;
        }
    };

    return <Wrapper>


        {!isMobile ?
            <>
                <Box sx={{
                    backgroundImage: "url(/Layer3.png)", maxWidth: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    height: "300px",
                    position: "relative",
                }} >,
                    {/* <img src="/ellipse.png" width="100%" style={{
                    position: "relative", top: "50px", maxWidth: "100%",
                    height: "auto"
                }} /> */}
                    <Container sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "1030px",
                        padding: "0px !important",
                        position: "relative",
                        top: 0,
                        // zIndex: 20,
                        // top: "-270px"
                    }}>
                        <Typography color="#fff" mt="56px" fontFamily="Iranyekan !important">
                            <Countdown
                                date={Date.now() + untilWorldCup}
                                renderer={renderer}
                            />
                        </Typography>
                        <Typography color="#fff" mt="56px" fontFamily="Iranyekan" fontSize="40px">تا شروع جام جهانی ۲۰۲۲ قطر</Typography>
                    </Container>
                    <Box sx={{ background: "#E9E9E9 !important", position: "relative", bottom: "10px", left: "0", width: "100%", height: "170px" , zIndex:"-1" }}></Box>
                </Box>
            </> :
            <MobileWrapper>
                <Stack direction="row" justifyContent="space-around" pr="60px">
                    <img src="/fifa-logo.svg" className="fifa-logo" />
                    <img src="/header-right-pic.svg" className="header-right-pic" />
                </Stack>
                <Stack justifyContent="center" alignItems="center" sx={{ position: "relative", top: "-40px" }}>
                    <Typography color="#fff" fontFamily="Iranyekan" mb="24px">تا شروع جام جهانی ۲۰۲۲ قطر</Typography>
                    <Typography color="#fff" fontFamily="Iranyekan"> <Countdown
                        date={Date.now() + untilWorldCup}
                        renderer={renderer}
                    /></Typography>
                    {/* </Container> */}
                </Stack>
            </MobileWrapper>

        }
    </Wrapper >
}