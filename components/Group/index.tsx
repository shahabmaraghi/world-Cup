import { Box, Typography, Stack, useMediaQuery } from "@mui/material";


export default function Group({ group }: any) {
    const isMobile = useMediaQuery("(max-width:960px)");
    return <Box sx={{
        maxWidth: "300px", height: "264px", background: "#FFFFFF", border: "1px solid #757575",
        borderRadius: "16px",
        p: "16px",
    }}>
        <Stack direction={!isMobile ? "row-reverse" : "row"} justifyContent="space-around" sx={{ borderBottom: "1px solid #D2D2D2" }} px="10px" width="280px" fontSize="16px">
            <Typography fontFamily="Iranyekan" fontSize="16px"> A گروه</Typography>
            <Typography fontFamily="Iranyekan" fontSize="16px">تعداد بازی</Typography>
            <Typography fontFamily="Iranyekan" fontSize="16px">امتیاز</Typography>
        </Stack>
        <Stack justifyContent="space-between" sx={{ height: "240px" }}>
            {group?.map((item, index) =>
                <Stack direction={!isMobile ? "row-reverse" : "row"} key={index} mb="12px" alignItems="space-between" mt="12px">
                    <Stack direction={isMobile ? "row-reverse" : "row"} sx={{ width: "60px" }} justifyContent="flex-end" ml="90px">
                        <Typography fontFamily="Iranyekan" pr="16px">{item?.teamName}</Typography>
                        <img src={item?.teamFlag} />
                    </Stack>
                    <Typography fontFamily="Iranyekan" ml="90px">{item?.countOfGames}</Typography>
                    <Typography fontFamily="Iranyekan">{item?.teamScore}</Typography>
                </Stack>
            )}
        </Stack>
    </Box>
}