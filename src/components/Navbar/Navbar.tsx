import { AppStore } from "@/redux/store";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { CustomDialog } from "../CustomDialog";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import { FavoriteTable } from "./FavoriteTable";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  /**
   * It sets the subject to true.
   */
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  /* Returning the custom dialog and the app bar. */
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Seat Code x Andy Garcia - Garage App
          </Typography>
          <Button
            color="secondary"
            aria-label="favorites"
            component="label"
            onClick={handleClick}
            endIcon={<FavoriteIcon />}
          >
            Favorites
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
