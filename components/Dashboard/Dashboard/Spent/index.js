import { Box, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";
import React from "react";
import Image from "next/legacy/image";

function Spent() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "17px 22px 22px",
            }}
        >
            <Box>
                <Typography
                    variant="dim"
                    sx={{
                        display: "block",
                        marginBottom: "5px",
                    }}
                >
                    Spent this month
                </Typography>
                <Typography variant="h2">$628.5</Typography>
            </Box>
            <Box
                sx={{
                    width: "63px",
                }}
            >
                <Image
                    src="/spending.svg"
                    alt="spending"
                    className="image"
                    width={63}
                    height={45}
                    layout="responsive"
                />
            </Box>
        </Box>
    );
}

export default Spent;
