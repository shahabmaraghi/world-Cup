import { Stack, Box, styled, useMediaQuery, Container, Typography } from "@mui/material";

export default function WorldCupPlus() {
    const isMobile = useMediaQuery("(max-width:960px)");

    // const Wrapper = styled(Box)(({ theme }) => ({
    //     width: "100%",
    //     height: "70px",
    //     // background: "#1C0212",
    //     display: "flex",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     fontFamily: "Iranyekan",
    //     // position: "relative",
    //     // top: !isMobile ? "210px" : "30px"
    //     marginTop: !isMobile ? "210px" : "30px",
    // }));

    return (
        <Container >
            <Stack direction={!isMobile ? "row" : "column-reverse"} mt="30px">
                <Box sx={{ display: isMobile && "flex", justifyContent: isMobile && "center" }}>
                    <img src="/mascot-logo.svg" />
                </Box>
                <Stack alignItems="flex-end">
                    <Typography sx={{ width: !isMobile ? "70%" : "100%" }} fontFamily="Iranyekan" textAlign="right">
                        جام جهانی پلاس در آنتن؛
                        از 20 آبان تا پایان جام جهانی هر روز از 11 صبح الی 1 بامداد با پخش زنده مسابقات، ترجمه برنامه‌های تحلیلی، حواشی و اخبار مسابقات همراه شما خواهیم بود. پخش زنده مسابقات با بالاترین کیفیت، گزارش چندزبانه بازی‌ها و برنامه‌های جذاب و مهیج دیگر را فقط از جام جهانی پلاس دنبال کنید.
                    </Typography>
                    <Typography sx={{ width: !isMobile ? "70%" : "100%" }} fontFamily="Iranyekan" textAlign="right">با جام جهانی پلاس در آنتن همراه باشید تا در کنار هم از جام بیست و دوم لذت ببریم. </Typography>
                </Stack>
            </Stack>
        </Container>
    )
}