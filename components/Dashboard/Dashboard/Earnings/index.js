import { Box, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";
import React from "react";
import Image from "next/legacy/image";

function Earnings() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                padding: "17px 17px 22px",
            }}
        >
            <Box
                sx={{
                    width: "56px !important",
                    mr: 2,
                }}
                className={"image-container"}
            >
                <Image
                    src="/earning.svg"
                    alt="spending"
                    className="image"
                    width={56}
                    height={56}
                    layout="responsive"
                />
            </Box>
            <Box>
                <Typography
                    variant="dim"
                    sx={{
                        display: "block",
                        marginBottom: "5px",
                    }}
                >
                    Earnings
                </Typography>
                <Typography variant="h2">$350.40</Typography>
            </Box>
        </Box>
    );
}

export default Earnings;
