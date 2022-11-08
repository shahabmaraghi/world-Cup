import { Stack, Typography, Container, Box, useMediaQuery, styled } from "@mui/material";
import { createRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


import Group from "../Group";

export default function Groups({ groups }: any) {

    // console.log("groups is:", groups)
    const isMobile = useMediaQuery("(max-width:960px)");
    const scrollableNodeRef = createRef(); // create ref for simple bar scrolling
    // const settings = {
    //     // dots: true,
    //     infinite: true,
    //     speed: 500,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     // slidesToShow: 2,
    //     draggable: true,
    //     accessibility: true,
    //     adaptiveHeight: true,
    //     arrows: true,
    // };
    return (
        !isMobile ? (
            <Box sx={{ position: "relative" }}>
                <Box sx={{ width: "100%", height: "300px", position: "absolute",  left: 0, background: "#E9E9E9!important", zIndex: "-1" }}></Box>
                <Stack alignItems="center" sx={{ backgroundImage: "url(/group-step-cover.png)", backgroundSize: "110% 100%", width: "100%", height: "300px", backgroundPosition: "center" }} >
                    {/* <Box sx={{position:""}}> <img src="/group-step-cover.png" width="100%" height="300px"  /> </Box> */}
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ position: "relative", top: "120px", width: "80%" }}>
                        {/* <img src="" /> */}
                        <img src="/Qatar-WorldCup.png" /> <Stack direction="row" alignItems="center"><Typography fontSize="32px" color="#fff" fontFamily="Iranyekan" mr="12px">مرحله گروهی</Typography><img src="/white-ball-vector.png" /> </Stack>
                    </Stack>
                </Stack>
                <Stack sx={{ width: "100%", display: "flex", justifyContent: "center", background: "#6F0625" }} direction="row">
                    <Stack direction={!isMobile ? "row-reverse" : "row"} flexWrap="wrap" sx={{ maxWidth: "1572px" }} justifyContent="center">

                        {groups.map((item, index) => <Box px="12px" key={index} mb="32px" mt="41px"><Group group={item} /></Box>)}

                    </Stack >
                </Stack>
            </Box>) : (

            <SimpleBar style={{ width: "100%", display: "flex", justifyContent: "flex-start", flexDirection: "row", background: "#6F0625", direction: "rtl" }}
                scrollableNodeProps={{ ref: scrollableNodeRef }} forceVisible="x" data-simplebar-direction='rtl'>
                <Stack direction="row">
                    {groups.map((item, index) => <Box px="12px" key={index} mb="32px" mt="41px"><Group group={item} /></Box>)}
                </Stack>
            </SimpleBar>

        )
    );
}