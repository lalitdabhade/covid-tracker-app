import React from "react";
import { Grid, Typography, Box, Link } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const News = ({ data }) => {
    const loading = data.length === undefined ? true : false;

    return (
        <Grid container wrap="nowrap">
            {(loading ? Array.from(new Array(2)) : data).map((item, index) => (
                <Box key={index} width={210} marginRight={0.5} my={5}>
                    {item ? (
                        <Link href={item.url} target="_blank">
                            <img
                                style={{ width: 210, height: 118 }}
                                alt={item.title}
                                src={item.img}
                            />
                        </Link>
                    ) : (
                        <Skeleton variant="rect" width={210} height={118} />
                    )}

                    {item ? (
                        <Box pr={2}>
                            <Typography gutterBottom variant="body2">
                                {item.title}
                            </Typography>
                            <Typography
                                display="block"
                                variant="caption"
                                color="textSecondary"
                            >
                                {item.sourceName}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                {new Date(item.publishedAt).toLocaleString()}
                            </Typography>
                        </Box>
                    ) : (
                        <Box pt={0.5}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    )}
                </Box>
            ))}
        </Grid>
    );
};

export default News;
