import { styled, Box, Button, useMediaQuery } from "@mui/material";

export default function Header() {

    const isMobile = useMediaQuery("(max-width:960px)");
    const Wrapper = styled(Box)(({ theme }) => ({
        width: "100%",
        height: "70px",
        background: "#1C0212",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Iran"
    }));


    return <Wrapper>
        <Button sx={{ backgroundColor: "#F02867", color: "#fff", marginLeft: "98px", height: "40px", fontFamily: "Iranyekan" }}>
            مشاهده جام جهانی پلاس
        </Button>

        {!isMobile && <img src="/fifa-logo.svg" width="140px" />}
        <img src="/logo.svg" width="140px" style={{ marginRight: "98px" }} />

    </Wrapper>
}