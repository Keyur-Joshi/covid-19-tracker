import React, { useEffect, useState } from "react";
import {
  Select,
  FormControl,
  MenuItem,
  Card,
  CardContent,
} from "@mui/material";
import InfoBox from "./InfoBox";
import Map from "./Map";
import Table from "./Table";
import { sortData } from "./util";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

    const url =
      countryCode == "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
  };

  console.log("Contry infor >>> ", countryInfo);
  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Covid-19 Tracker</h1>

          <FormControl>
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              {/* <MenuItem value = "worldwide"> Wordlwide </MenuItem> */}
              {/* Menuitem will reate a drop down to select from */}
              {/* Loop through all the countries and show a drop down list */}

              <MenuItem value="worldwide"> Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}> {country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox
            title="Conronavirus Cases"
            total={countryInfo.cases}
            cases={countryInfo.todayCases}
          />
          <InfoBox
            title="Recovered"
            total={countryInfo.recoverd}
            cases={countryInfo.todayRecovered}
          />
          <InfoBox
            title="Deaths"
            total={countryInfo.deaths}
            cases={countryInfo.todayDeaths}
          />
        </div>
        <Map />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3>Worldwide new Cases</h3>
          <LineGraph />
          {/* Table */}
          {/* Graph */}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;

{
  /* Header */
}
{
  /* Title + Select input dropdown field */
}

{
  /* Info boxes */
}
{
  /* Info boxes */
}
{
  /* Info boxes */
}

{
  /* Table */
}
{
  /* Graph */
}

{
  /* Map */
}
