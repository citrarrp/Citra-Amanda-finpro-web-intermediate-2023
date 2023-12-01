import React from "react";
import Head from "next/head";

interface MetadataProps {
  title: string;
  description: string;
  keywords: string[];
}

const Metadata = ({ title, description, keywords }: MetadataProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
    </Head>
  );
};

export default Metadata;
