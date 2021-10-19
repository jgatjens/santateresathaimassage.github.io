import React from "react";
import { Head } from "react-static";
import { ISeo } from "../../types";
import img from "../assets/share-jgatjens.jpg";

interface SeoProps {
  data: ISeo;
}

const Seo: React.FC<SeoProps> = ({ data }) => (
  <Head>
    <title>{data.metaTitle}</title>
    <meta name="description" content={data.metaDescription}/>
    <meta name="keywords"content={data.metaKeyboards} />
    <meta name="author" content="Gigis" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://santateresathaimassage.github.io/" />
    <meta property="og:title" content={data.metaTitle} />
    <meta property="og:description" content={data.metaDescription}/>
    <meta property="og:image" content={img} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@santa_teresa_thai_massage" />
    <meta name="twitter:creator" content="@santa_teresa_thai_massage" />
    <meta name="twitter:title" content={data.metaTitle} />
    <meta name="twitter:description" content={data.metaDescription} />
    <meta name="twitter:image" content={img} />
  </Head>
);

export default Seo;
