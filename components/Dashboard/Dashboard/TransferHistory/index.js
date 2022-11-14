import { Avatar, Box, Button, Chip, Typography } from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";

function TransferHistory() {
    const transuctions = [
        {
            id: 0,
            photo: "/users/1.png",
            name: "Alex Manda",
            time: "Today, 16:36",
            amount: "50",
            from: true,
        },
        {
            id: 1,
            photo: "/users/2.png",
            name: "Laura Santos",
            time: "Today, 08:49",
            amount: "50",
            to: true,
        },
        {
            id: 2,
            photo: "/users/3.png",
            name: "Jadon S.",
            time: "Yesterday, 14:36",
            amount: "50",
            from: true,
        },
    ];
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    padding: "20px",
                }}
            >
                <Typography variant="h3" mb={3}>
                    Your Transfers
                </Typography>
                {transuctions.map((transuction, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "20px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Avatar alt="user" src={transuction.photo} />
                            <Box
                                ml={2}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{ fontSize: "12px" }}
                                >
                                    {transuction.from && "From"}
                                    {transuction.to && "To"} {transuction.name}
                                </Typography>
                                <Typography variant="dim">
                                    {transuction.time}
                                </Typography>
                            </Box>
                        </Box>
                        <Chip
                            label={
                                transuction.from
                                    ? `+$${transuction.amount}`
                                    : `-$${transuction.amount}`
                            }
                            color={transuction.from ? `success` : `error`}
                        />
                    </Box>
                ))}
                <Box
                    sx={{
                        textAlign: "right",
                    }}
                >
                    <Button
                        sx={{
                            minWidth: "unset",
                            padding: "8px 10px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            marginTop: "50px",
                        }}
                        endIcon={<EastIcon />}
                    >
                        View all
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default TransferHistory;
