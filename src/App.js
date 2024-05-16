import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Navigation from "./navigation";

export default function App() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Omni Multichain Dex</title>
        <meta name="description" content="Omni Multichain Dex supports Swap between different networks, Staking, Farmking and etc" />
        <meta name="keywords" content="Omni Dex Swap Bridge Staking Farming" />
        <meta name="author" content="ApexTechTeam" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/apex.png" />
      </Helmet>
      <Navigation />
    </>
  );
}