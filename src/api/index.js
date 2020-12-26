import axios from "axios";
import CountryList from "../components/News/CountryList";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changeableURL = url;

    if (country) {
        changeableURL = `${url}/countries/${country}`;
    }

    try {
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios.get(changeableURL);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
    }
};

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;
    } catch (error) {}
};

export const fetchCountriesData = async () => {
    try {
        const {
            data: { countries },
        } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {}
};

export const fetchLatestNews = async (country) => {
    const newsURL = `https://newsapi.org/v2/top-headlines?q=covid&apiKey=41e656574e094c46846eba84e295b41c`;
    let changeableURL = newsURL;

    if (country) {
        const countryCode = CountryList[0][country];
        changeableURL = `${newsURL}&country=${countryCode}`;
    }

    try {
        const { data } = await axios.get(changeableURL);

        const modifiedData = data.articles.map((newsData) => ({
            url: newsData.url,
            img: newsData.urlToImage,
            title: newsData.title,
            publishedAt: newsData.publishedAt,
            sourceName: newsData.source.name,
        }));

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
};
