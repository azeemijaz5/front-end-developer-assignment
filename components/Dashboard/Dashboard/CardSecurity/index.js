import { Box, Button, Typography } from "@mui/material";
import Image from "next/legacy/image";
import React from "react";

function CardSecurity() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    padding: {
                        md: "30px",
                        xs: "20px",
                    },
                }}
            >
                <Box
                    mb={3}
                    sx={{
                        maxWidth: "239px",
                    }}
                >
                    <Box
                        sx={{
                            width: "91px",
                        }}
                        mb={2}
                    >
                        <Image
                            src="/finger-print.svg"
                            alt="finger print"
                            className="image"
                            width={91}
                            height={91}
                            layout="responsive"
                        />
                    </Box>
                    <Typography variant="h2" mb={1}>
                        Control card security in-app with a tap
                    </Typography>
                    <Typography variant="p">
                        Discover our cards benefits, with one tap.
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        width: "100%",
                    }}
                >
                    Cards
                </Button>
            </Box>
        </>
    );
}

export default CardSecurity;
