import { Typography, styled, Stack, Box, Button, useMediaQuery } from "@mui/material";
export default function WorldCupPlusCards() {
    const isMobile = useMediaQuery("(max-width:960px)");
    const Wrapper = styled(Stack)(({ theme }) => ({
        width: "100%",
        height: "70px",
        background: "#E9E9E9",
        // display: "flex",
        // justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Iranyekan",
        // position: "relative",
        marginTop: "20px"
        // marginTop: "70px",
    }));
    const BoxWrapper = styled(Stack)(({ theme }) => ({
        background: "#E9E9E9",
        ".world-cup-card": {
            // position: "relative",
            marginTop: !isMobile ? "24px" : "20px",
            width: !isMobile ? "360px" : "156px",
            height: !isMobile ? "212px" : "134px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#D2D2D2",
            fontFamily: "Iranyekan",
            borderRadius: "16px",
            flexDirection: "column",
        }
    }));

    return (
        <Box sx={{ background: "#E9E9E9" }}>
            <Wrapper direction="row" justifyContent="center">
                <img src="/ball-vector.svg" style={{ transform: "rotate(180deg)" }} width={!isMobile ? "120px" : "55px"} /> <Typography textAlign="center" fontFamily="Iranyekan" fontSize={!isMobile ? "32px" : "13px"} mx="32px">پوشش کامل جام جهانی</Typography><img src="/ball-vector.svg" width={!isMobile ? "120px" : "55px"} />
            </Wrapper>
            <BoxWrapper>
                {!isMobile ? (
                    <>
                        <Stack direction="row" justifyContent="space-around" >
                            <Box className="world-cup-card">
                                <img src="/competition.png" />
                                <Typography mt="24px" fontFamily="Iranyekan">حواشی رقابت ها
                                </Typography>

                            </Box>
                            <Box className="world-cup-card">
                                <img src="/news.png" />
                                <Typography mt="24px" fontFamily="Iranyekan">اخبار بروز جام جهانی</Typography>

                            </Box>
                            <Box className="world-cup-card">
                                <img src="/live.png" />
                                <Typography mt="24px" fontFamily="Iranyekan">پخش زنده مسابقات</Typography>
                            </Box>
                        </Stack>
                        <Stack direction="row" justifyContent="space-around" mt="24px">
                            <Box className="world-cup-card">
                                <img src="/multi-lang.png" />
                                <Typography mt="24px" fontFamily="Iranyekan">گزارش چند زبانه</Typography>
                            </Box>
                            <Box className="world-cup-card">
                                <img src="/predict.png" />
                                <Typography mt="24px" fontFamily="Iranyekan"> پیش بازی اختصاصی</Typography>
                            </Box>
                            <Box className="world-cup-card">
                                <img src="/analatics.png" />
                                <Typography mt="24px" fontFamily="Iranyekan">تحلیل عملکرد تیم ها</Typography>
                            </Box>
                        </Stack>
                    </>
                ) : (
                    <>
                        <Stack direction="row" justifyContent="space-around" >
                            <Box className="world-cup-card">
                                <img src="/competition.png" />
                                <Typography mt="24px" fontFamily="Iranyekan" fontSize="14px">حواشی رقابت ها
                                </Typography>

                            </Box>
                            <Box className="world-cup-card">
                                <img src="/news.png" />
                                <Typography mt="24px" fontFamily="Iranyekan" fontSize="14px">اخبار بروز جام جهانی</Typography>

                            </Box>

                        </Stack>
                        <Stack direction="row" justifyContent="space-around" mt="24px">
                            <Box className="world-cup-card">
                                <img src="/live.png" />
                                <Typography mt="24px" fontFamily="Iranyekan" fontSize="14px">پخش زنده مسابقات</Typography>
                            </Box>
                            <Box className="world-cup-card">
                                <img src="/multi-lang.png" />
                                <Typography mt="24px" fontFamily="Iranyekan" fontSize="14px">گزارش چند زبانه</Typography>
                            </Box>

                        </Stack>
                        <Stack direction="row" justifyContent="space-around" mt="24px">
                            <Box className="world-cup-card">
                                <img src="/predict.png" />
                                <Typography mt="24px" fontFamily="Iranyekan" fontSize="14px"> پیش بازی اختصاصی</Typography>
                            </Box>
                            <Box className="world-cup-card">
                                <img src="/analatics.png" />
                                <Typography mt="24px" fontFamily="Iranyekan" fontSize="14px">تحلیل عملکرد تیم ها</Typography>
                            </Box>
                        </Stack>
                    </>
                )}
                <Stack direction="row" justifyContent="center" mt="48px" mb="48px">
                    <Button sx={{
                        background: "#A3244C", width: "300px", color: "#fff", fontFamily: "Iranyekan", fontSize: "18px",
                        "&:hover": { background: "#A3244C", width: "300px", color: "#fff" },
                    }}>مشاهده جام جهانی پلاس</Button>
                </Stack>

            </BoxWrapper>
        </Box>


    )
}