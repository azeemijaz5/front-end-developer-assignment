import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function Profile() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    padding: "30px",
                    textAlign: "center",
                }}
            >
                <Avatar
                    alt="user"
                    src="/users/4.png"
                    sx={{
                        width: "130px",
                        height: "130px",
                        margin: "auto",
                        marginBottom: "20px",
                    }}
                />
                <Typography variant="h2">Charles Robbie</Typography>
                <Typography
                    variant="dim"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <LocationOnOutlinedIcon
                        sx={{ width: "15px", height: "17px" }}
                    />
                    New York, USA
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        marginTop: "20px",
                    }}
                >
                    <Box>
                        <Typography
                            variant="dim"
                            sx={{
                                fontSize: "12px",
                            }}
                        >
                            Projects
                        </Typography>
                        <Typography variant="h3">28</Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="dim"
                            sx={{
                                fontSize: "12px",
                            }}
                        >
                            Followers
                        </Typography>
                        <Typography variant="h3">643</Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="dim"
                            sx={{
                                fontSize: "12px",
                            }}
                        >
                            Following
                        </Typography>
                        <Typography variant="h3">76</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Profile;
