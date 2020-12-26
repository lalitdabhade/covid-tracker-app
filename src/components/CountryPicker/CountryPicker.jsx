import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

import { fetchCountriesData } from "../../api";

import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
    const [countriesData, setCountriesData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            setCountriesData(await fetchCountriesData());
        };

        fetchAPI();
    }, [setCountriesData]);

    return (
        <FormControl className={styles.countryPicker}>
            <InputLabel id="demo-simple-select-outlined-label">
                Country
            </InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={selectedCountry}
                onChange={(e) => {
                    handleCountryChange(e.target.value);
                    setSelectedCountry(e.target.value);
                }}
                label="Age"
            >
                <MenuItem value="">
                    <em>Global</em>
                </MenuItem>
                {countriesData.map((country, i) => {
                    return (
                        <MenuItem key={i} value={country}>
                            {country}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

export default CountryPicker;
