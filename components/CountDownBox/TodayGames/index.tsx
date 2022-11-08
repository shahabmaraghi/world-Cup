import { Container, Stack, Box, Typography, useMediaQuery, Grid } from "@mui/material";
export default function TodayGames({ todayGames }: any) {
    const isMobile = useMediaQuery("(max-width:960px)");
    return (
        <Container sx={{ maxWidth: "1210px" }}>
            {!isMobile ? (
                <Stack direction="row" justifyContent="center" sx={{ fontFamily: "Iranyekan" }}>

                    <Box mr="24px">
                        <img src="/intro-pattern.png" />
                        <Stack sx={{
                            background: "#FFFFFF", height: "510px", border: "1px solid #D2D2D2",
                            borderRadius: "16px", position: "relative", top: "-110px", fontFamily: "Iranyekan",

                        }} justifyContent="space-between" px="10px">
                            <Typography fontFamily="Iranyekan" textAlign="center" mb="32px" mt="24px" fontSize="24px" fontWeight={700}>برنامه مسابقات امروز</Typography>
                            {todayGames?.map((item: any, index) =>
                                <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: "56px", borderBottom: "1px solid #999", ":last-child": { border: "none" } }} mb="28px" pb="28px" px="10px" >
                                    <Typography fontSize="24px" fontWeight={700} fontFamily="Iranyekan" mr="16px" sx={{ width: "80px" }} textAlign="right">{item?.teamOne}</Typography>
                                    <img src={item?.teamOneFlag} width="56px" height="56px" />
                                    <Typography fontSize="24px" fontWeight={700} fontFamily="IranyekanNumeral" ml="24px" mr="24px"> {item?.matchTime} </Typography>
                                    <img src={item?.teamTwoFlag} width="56px" height="56px" />
                                    <Typography fontSize="24px" fontWeight={700} fontFamily="Iranyekan" ml="16px" sx={{ width: "80px" }} textAlign="left">{item?.teamTwo} </Typography>
                                </Stack>)}
                        </Stack>
                    </Box>

                    <Stack>
                        <Box sx={{ display: "flex", justifyContent: "flex-end" }} mb="48px">
                            <Typography mr="24px" fontFamily="Iranyekan" fontWeight={700} fontSize="32px">جدول پخش بازی ها</Typography>
                            <img src="/ball-vector.svg" width={!isMobile ? "120px" : "55px"} />
                        </Box>
                        <Box>
                            <img src="/Android Tv Cards.png" />
                        </Box>
                        {/* player comes here  */}
                    </Stack>

                </Stack>
            ) : (<>
                <Stack justifyContent="center" direction="row" px="50px"><img src="/intro-pattern.png" width="100%" height="auto" /></Stack>
                <Box sx={{ display: "flex", justifyContent: "center" }} mb="48px" mt="56px">
                    <img src="/ball-vector.svg" style={{ transform: "rotate(180deg)", marginRight: "24px" }} width={!isMobile ? "120px" : "55px"} />
                    <Typography mr="24px" fontFamily="Iranyekan" fontWeight={700} fontSize={!isMobile ? "32px" : "13px"}>جدول پخش بازی ها</Typography>
                    <img src="/ball-vector.svg" width={!isMobile ? "120px" : "55px"} />
                </Box>
                <Stack sx={{ maxWidth: "100%", position: "relative" }} px="0px">
                    <img src="/Android Tv Cards.png" style={{ height: "auto", width: "100%" }} />
                </Stack>
                {todayGames?.map((item: any, index) =>
                    <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: "56px", borderBottom: "1px solid #999", ":last-child": { border: "none" } }} mb="28px" pb="28px" px="10px" >
                        <Typography fontSize={!isMobile ? "24px" : "14px"} fontWeight={700} fontFamily="Iranyekan" mr="16px" sx={{ width: "80px" }} textAlign="right">{item?.teamOne}</Typography>
                        <img src={item?.teamOneFlag} width={!isMobile ? "56px" : "24px"} height={!isMobile ? "56px" : "24px"} />
                        <Typography fontSize="24px" fontWeight={700} fontFamily="IranyekanNumeral" ml="24px" mr="24px"> {item?.matchTime} </Typography>
                        <img src={item?.teamTwoFlag} width={!isMobile ? "56px" : "24px"} height={!isMobile ? "56px" : "24px"} />
                        <Typography fontSize={!isMobile ? "24px" : "14px"} fontWeight={700} fontFamily="Iranyekan" ml="16px" sx={{ width: "80px" }} textAlign="left">{item?.teamTwo} </Typography>
                    </Stack>)}
                {/* player comes here  */}
            </>)}
        </Container>
    )
}