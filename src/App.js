import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Cards, Chart, CountryPicker, News } from "./components";

import styles from "./App.module.css";

import { fetchData, fetchLatestNews } from "./api";

class App extends Component {
    state = {
        data: {},
        news: {},
        country: "",
    };

    async componentDidMount() {
        const fetchedData = await fetchData();
        const fetchedLatestNews = await fetchLatestNews();

        this.setState({ data: fetchedData, news: fetchedLatestNews });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        const fetchedLatestNews = await fetchLatestNews(country);

        this.setState({
            data: fetchedData,
            news: fetchedLatestNews,
            country: country,
        });
    };

    render() {
        const { data, news, country } = this.state;

        return (
            <>
                <div className={styles.appLogo}>
                    <img
                        src="xcovd-logo.png"
                        alt="Covid-19"
                        width="200"
                        height="60"
                    />
                </div>
                <div className={styles.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={3}>
                            <Cards data={data} />
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Grid container spacing={3}>
                                <Grid
                                    item
                                    xs={12}
                                    md={12}
                                    className={styles.contentCenter}
                                >
                                    <CountryPicker
                                        handleCountryChange={
                                            this.handleCountryChange
                                        }
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={12}
                                    className={styles.contentCenter}
                                >
                                    <Chart data={data} country={country} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className={styles.newsBlock}>
                    <News data={news} />
                </div>
            </>
        );
    }
}

export default App;
