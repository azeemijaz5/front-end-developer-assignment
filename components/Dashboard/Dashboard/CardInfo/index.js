import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/legacy/image";
import React from "react";

function CardInfo() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    padding: {
                        md: "50px 20px 50px 50px",
                        xs: "20px",
                    },
                }}
            >
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                maxWidth: "255px",
                            }}
                        >
                            <Typography variant="h1" mb={2}>
                                Reach financial goals faster
                            </Typography>
                            <Typography variant="p" component="p" mb={3}>
                                Use your Venus card around the world with no
                                hidden fees. Hold, transfer and spend money.
                            </Typography>
                            <Button variant="contained">Learn more</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image
                            src="/card.png"
                            alt="Logo"
                            className="image"
                            width={324}
                            height={285}
                            layout="responsive"
                            priority
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default CardInfo;
