import { Typography, styled, Box, Stack, Container } from "@mui/material";
import UpperStepsCard from "../UpperStepsCard";
export default function UpperSteps() {
    const Wrapper = styled(Box)(({ theme }) => ({
        background: "#6F0625",
        // maxWidth: "1272px"
        fontFamily: "Iranyakan !important",
    }));

    return (
        <>
            <Wrapper>
                <Stack direction="row" justifyContent="center" alignItems="center" pt="80px"> <img src="/white-ball-vector.png" style={{ transform: "rotate(180deg)", width: "120px", height: "30px" }} /> <Typography fontFamily="Iranyekan" fontSize="32px" color="white" ml="16px" mr="16px">مرحله حذفی</Typography>  <img src="/white-ball-vector.png" style={{ width: "120px", height: "30px" }} /></Stack>

                {/* <Container sx={{ maxWidth: "272px", p: 0, m: 0, display: "flex", justifyContent: "center" }} > */}
                <Stack direction="row" justifyContent="space-between" sx={{ maxWidth: "100%" }}>
                    <Stack direction="row" >
                        <Stack justifyContent="space-between">
                            <Box mb="48px">
                                <UpperStepsCard />
                                <UpperStepsCard />
                            </Box>
                            <Box>
                                <UpperStepsCard />
                                <UpperStepsCard />
                            </Box>
                        </Stack>
                        <Stack justifyContent="space-around">
                            <UpperStepsCard />
                            <UpperStepsCard />
                        </Stack>
                        <Stack justifyContent="space-around">
                            <UpperStepsCard />
                        </Stack>
                    </Stack>
                    <Stack justifyContent="center">
                        <Stack direction="row" justifyContent="center" mb="8px">
                            <img src="/Qatar-namad.png" />
                        </Stack>
                        <Stack sx={{
                            p: "16px",
                            background: "#00CFB7",
                            border: "1px solid #757575",
                            borderRadius: "16px",
                            width: "204px",
                            height: "72px",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: "8px",
                            fontFamily: "Iranyekan",
                        }}>
                            <Box>فینال 27 آذر</Box>
                            <Stack direction="row" justifyContent="space-between" sx={{ width: "220px" }}>
                                {/* <Box>تیم A</Box>
                                <Box>تیم B</Box> */}
                                <Stack direction="row-reverse"> A تیم</Stack>
                                <Stack > B تیم</Stack>
                            </Stack>
                        </Stack>
                        <Stack sx={{
                            p: "16px",
                            background: "#fff",
                            border: "1px solid #757575",
                            borderRadius: "16px",
                            width: "204px",
                            height: "72px",
                            alignItems: "center",
                            justifyContent: "space-between",
                            fontFamily: "Iranyekan",
                        }}>
                            <Box>رده بندی - ۲۶ آذر</Box>
                            <Stack direction="row" justifyContent="space-between" sx={{ width: "220px" }}>
                                {/* <Box>تیم A</Box>
                                <Box>تیم B</Box> */}
                                <Stack direction="row-reverse"> A تیم</Stack>
                                <Stack > B تیم</Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack justifyContent="space-between">
                        <Stack direction="row" >
                            <Stack justifyContent="space-around">
                                <UpperStepsCard />
                            </Stack>
                            <Stack justifyContent="space-around">
                                <UpperStepsCard />
                                <UpperStepsCard />
                            </Stack>
                            <Stack justifyContent="space-between">
                                <Box mb="48px">
                                    <UpperStepsCard />
                                    <UpperStepsCard />
                                </Box>
                                <Box>
                                    <UpperStepsCard />
                                    <UpperStepsCard />
                                </Box>
                            </Stack>

                        </Stack>
                    </Stack>
                </Stack>
                {/* </Container> */}
            </Wrapper>
        </>
    )
}