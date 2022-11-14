import { Box, Chip, Typography } from "@mui/material";
import Image from "next/legacy/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function EarningsGraph() {
    const chartData = {
        series: [
            {
                name: "Earning",
                data: [
                    30, 28, 35, 33, 38, 29, 33, 35, 30, 35, 28, 33, 30, 33, 33,
                    37, 35,
                ],
            },
        ],
        options: {
            colors: ["#4318FF", "#4318FF"],
            chart: {
                type: "area",
                toolbar: {
                    show: false,
                },
                width: "100%",
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "#E9E3FF",
                    type: "vertical",
                    shadeIntensity: 0.5,
                    gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                    inverseColors: true,
                    opacityFrom: 0.4,
                    opacityTo: 0,
                    stops: [0, 100],
                    colorStops: [],
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            grid: {
                show: false,
                padding: {
                    left: -10,
                    right: -10,
                },
            },
            xaxis: {
                show: false,
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                    "2018-09-19T07:30:00.000Z",
                    "2018-09-19T08:30:00.000Z",
                    "2018-09-19T09:30:00.000Z",
                    "2018-09-19T10:30:00.000Z",
                    "2018-09-19T11:30:00.000Z",
                    "2018-09-20T00:30:00.000Z",
                    "2018-09-20T01:30:00.000Z",
                    "2018-09-20T02:30:00.000Z",
                    "2018-09-20T03:30:00.000Z",
                    "2018-09-20T04:30:00.000Z",
                ],
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        },
    };
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        padding: "20px 20px 0",
                    }}
                >
                    <Box
                        className={"image-container"}
                        sx={{
                            width: "30px !important",
                            marginLeft: "auto",
                        }}
                    >
                        <Image
                            src="/this-month-earning-icon.svg"
                            alt="finger print"
                            className="image"
                            width={30}
                            height={30}
                            layout="responsive"
                        />
                    </Box>
                    <Typography variant="dim" component="p" my={1}>
                        This month earnings
                    </Typography>
                    <Typography variant="h1" mb={2}>
                        $682.5
                    </Typography>
                    <Chip
                        label="+2.45%"
                        color="success"
                        sx={{
                            borderRadius: "58px",
                        }}
                    />
                </Box>
                {typeof window !== "undefined" && (
                    <Chart
                        options={chartData.options}
                        series={chartData.series}
                        type="area"
                    />
                )}
            </Box>
        </>
    );
}

export default EarningsGraph;
