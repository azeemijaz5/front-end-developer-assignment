import { Box, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";
import React from "react";
import Image from "next/legacy/image";

function Activity() {
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
                background:
                    "linear-gradient(135deg, #868CFF 0%, #4318FF 100%);",
            }}
        >
            <Box>
                <Typography
                    variant="dim"
                    sx={{
                        display: "block",
                        marginBottom: "5px",
                        color: "#fff",
                    }}
                >
                    Activity
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        color: "#fff",
                    }}
                >
                    $540.50
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "87px !important",
                }}
                className={"image-container"}
            >
                <Image
                    src="/activity.svg"
                    alt="activity"
                    className="image"
                    width={87}
                    height={39}
                    layout="responsive"
                />
            </Box>
        </Box>
    );
}

export default Activity;
