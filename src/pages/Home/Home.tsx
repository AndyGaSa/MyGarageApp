import { Car } from "@/models";
import { addCars } from "@/redux/states";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CarsTable } from "./components";
import { CreateForm } from "./components/CreateForm";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();
  const [cars, setCars] = useState<Car[]>([]);
  const [addForm, setAddForm] = useState(false);

  const handleAddForm = () => setAddForm(!addForm);

  useEffect(() => {
    const loadDataFromAPI = async () => {
      const data = await fetch("https://seat-cars-api.herokuapp.com/cars", {
        method: "GET",
      });
      const jsonData = await data.json();
      setCars(jsonData);
    };
    loadDataFromAPI();
  }, []);

  useEffect(() => {
    dispatch(addCars(cars));
  }, [cars]);

  return (
    <>
      <div className="styles.title">
        <input
          type="button"
          value={!addForm ? "Add a new car" : "X"}
          onClick={() => {
            handleAddForm();
          }}
        />
      </div>
      {addForm ? <CreateForm /> : null}
      <CarsTable />
    </>
  );
};

export default Home;
