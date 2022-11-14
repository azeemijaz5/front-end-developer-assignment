import { Box, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";
import React from "react";
import Image from "next/legacy/image";

function Clients() {
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
                    width: "56px",
                    mr: 2,
                }}
            >
                <Image
                    src="/clients.svg"
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
                        whiteSpace: "nowrap",
                    }}
                >
                    New Clients
                </Typography>
                <Typography variant="h2">321</Typography>
            </Box>
            <Box
                sx={{
                    width: "58px",
                    padding: "5px",
                    ml: -1,
                }}
            >
                <Image
                    src="/new-clients-right.svg"
                    alt="spending"
                    className="image"
                    width={58}
                    height={28}
                    layout="responsive"
                />
            </Box>
        </Box>
    );
}

export default Clients;
