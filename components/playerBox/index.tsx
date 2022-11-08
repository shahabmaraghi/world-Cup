import { styled, Box, useMediaQuery } from "@mui/material";


export default function PlayerBox() {
    const Wrapper = styled(Box)(({ theme }) => ({
        width: "100%",
        background: "linear-gradient(180deg, #1C0212 14.76%, #02102A 93.19%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 20,
        fontFamily: "Iranyekan !important",
        ".header-left-pic": { position: "absolute", top: "0px", right: "70px" },
        ".header-right-pic": { position: "absolute", bottom: "0px", left: "40px" }
    }));

    const isMobile = useMediaQuery("(max-width:960px)");

    return (
        <Wrapper>
            {!isMobile && <img src="/header-right-pic.svg" className="header-left-pic" />}


            <img src="/video-placeholder.png" style={{
                maxWidth: "100%",
                height: "auto"
            }} />


            {!isMobile && <img src="/header-left-pic.svg" className="header-right-pic" />}
        </Wrapper>
    )
}