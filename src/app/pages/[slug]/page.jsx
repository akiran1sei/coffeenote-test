"use client";
import Head from "next/head";
import dotenv from "dotenv";
import { Browse } from "@/app/components/molecules/Browse/Browse";
import useSWR from "swr";
dotenv.config();
const CoffeeSingleItem = (context) => {
  const { data, error } = useSWR(
    `/pages/api/singleitem/${context.params.slug}`,
    fetcher,
    { revalidate: 10 }
  );

  if (error) return <div>エラーが発生しました: {error.message}</div>;
  if (!data) return <div>データを取得中...</div>;

  return (
    <>
      <Head>
        <title>個別ページ</title>
        <meta
          name="description"
          content="コーヒーをテイスティングするときに使用するアプリです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Browse data={data} />
    </>
  );
};

const fetcher = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export default CoffeeSingleItem;
