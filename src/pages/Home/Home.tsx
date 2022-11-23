import { LocalStorageTypes } from "@/models";
import { addCars } from "@/redux/states/cars";
import { getLocalStorage } from "@/utils";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CarsTable } from "./components";
import { CreateForm } from "./components/CreateForm";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();
  const [addForm, setAddForm] = useState(false);

  const handleAddForm = () => setAddForm(!addForm);

  /**
   * We're using the fetch API to make a GET request to the Seat Cars API, then we're converting the
   * response to JSON and finally we're dispatching the addCars action with the JSON data as the payload
   */
  const loadDataFromAPI = async () => {
    const data = await fetch("https://seat-cars-api.herokuapp.com/cars", {
      method: "GET",
    });
    const jsonData = await data.json();
    dispatch(addCars(jsonData));
  };

  /* Checking if there is any data in the local storage. If there is no data, it will fetch data from
  the API. */
  useEffect(() => {
    const checkLocalStorage =
      getLocalStorage(LocalStorageTypes.CARS) &&
      JSON.parse(getLocalStorage(LocalStorageTypes.CARS) as string);

    if (checkLocalStorage === null) {
      loadDataFromAPI();
    }
  }, []);

  /* A React component that is returning the cars tables and a button that toggles the addForm state. */
  return (
    <>
      <Button
        type="submit"
        onClick={() => {
          handleAddForm();
        }}
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {!addForm ? "Add a new car" : "X"}
      </Button>
      {addForm ? <CreateForm /> : null}
      <CarsTable />
    </>
  );
};

export default Home;
