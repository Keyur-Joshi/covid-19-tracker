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
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

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
          <InfoBox title="Conronavirus Cases" total={2000} cases={123454} />
          <InfoBox title="Recovered" total={3000} cases={1234} />
          <InfoBox title="Deaths" total={200} cases={123} />
        </div>
        <Map />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>

          <h3>Worldwide new Cases</h3>
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
