import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CardPage from "../cards/pages/CardPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import FavCards from "../cards/pages/FavCards";
import MyCards from "../cards/pages/MyCards";
import EditCardsPage from "../cards/pages/EditCardsPage";
import CreateCardPage from "../cards/pages/CreateCardsPage";
import UserInfoPage from "../users/pages/UserInfoPage";
import ROUTES from "./routesModel";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardPage />} />
      <Route path={ROUTES.CARDS} element={<CardPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.USER_PROFILE} element={<UserInfoPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
      <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardsPage />} />
      <Route path={`${ROUTES.CREATE_CARD}`} element={<CreateCardPage />} />
       <Route path="*" element={<ErrorPage />} />
           <Route path="favorite-cards" element={<FavCards />} />
      <Route path="my-cards" element={<MyCards />} />
      <Route path="fav-cards" element={<FavCards />} />

    </Routes>
  );
};
