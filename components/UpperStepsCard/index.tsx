import { Box, Typography, Stack } from "@mui/material"

export default function UpperStepsCard() {
    return (
        <Stack sx={{
            width: "98px", height: "94px", padding: "16px", background: "#FFFFFF", border: "1px solid #757575"
            , borderRadius: "16px", mb: "24px"
        }}>
            <Box sx={{ borderBottom: "5px solid ##D2D2D2", mb: "14px" }}> <Typography color="#101010" fontSize="12px" fontWeight={700} fontFamily="Iranyekan" textAlign="center">یک هشتم - ۱۲ آذر</Typography></Box>
            <Stack direction="row-reverse" justifyContent="space-around">
                <Box sx={{
                    width: "20px", height: "20px", background: "#D9D9D9", borderRadius: "100%",
                }} />

                <Typography fontFamily="Iranyekan">A تیم</Typography>
                <Typography fontFamily="Iranyekan">?</Typography>
            </Stack>
            <Stack direction="row-reverse" justifyContent="space-around">
                <Box sx={{
                    width: "20px", height: "20px", background: "#D9D9D9", borderRadius: "100%"
                }} />

                <Typography fontFamily="Iranyekan"> B تیم </Typography>
                <Typography fontFamily="Iranyekan">?</Typography>
            </Stack>
        </Stack >
    )
}