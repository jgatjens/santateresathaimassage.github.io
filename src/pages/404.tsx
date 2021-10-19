import React from "react";
import styled from "styled-components";
// components
import ShareLinks from "../components/ShareLinks";
import Seo from "../components/Seo";
import Footer from "../components/Footer";
import ForkMe from "../components/ForkMe";

const Desc = styled.h1`
  margin: 0;
  padding: 15px 0 25px 0;
  line-height: 22px;
  font-weight: 200;
  color: #777777;
  font-size: 13px;
  text-align: center;
`;

const HomePage = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

const data = {
  Seo: {
    id: 1,
    metaTitle: 'Santa teresa thai massage - Website',
    metaDescription: "Improves flexibility and muscular strength",
    metaKeyboards: "Surfers, BJJ, Yogis, People, General",
    metaImage: '',
  },
}

export default () => (
  <HomePage>
    <Seo data={data.Seo}></Seo>

    <ForkMe />
    <Desc>404 - Oh no's! We couldn't find that page :(</Desc>
    <ShareLinks />
    <Footer />
  </HomePage>
);
