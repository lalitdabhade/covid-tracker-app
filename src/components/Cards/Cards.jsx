import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return (
            <Grid container wrap="wrap">
                {Array.from(new Array(3)).map((item, index) => (
                    <Box key={index} width={210} marginRight={0.5} my={5}>
                        <Skeleton variant="rect" width={210} height={118} />

                        <Box pt={0.5}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                ))}
            </Grid>
        );
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid
                    item
                    component={Card}
                    xs={12}
                    md={12}
                    className={cx(styles.card, styles.infected)}
                >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of Active cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid
                    item
                    component={Card}
                    xs={12}
                    md={12}
                    className={cx(styles.card, styles.recovered)}
                >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recoverd
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of Recoveries from COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid
                    item
                    component={Card}
                    xs={12}
                    md={12}
                    className={cx(styles.card, styles.deaths)}
                >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of Deaths caused by COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
