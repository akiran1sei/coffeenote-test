"use client";
import Head from "next/head";
import { Update } from "@/app/components/molecules/Update/Update";
import dotenv from "dotenv";
import useSWR from "swr";

const UpdatePage = (context) => {
  dotenv.config();

  const { data, error } = useSWR(
    `/pages/api/singleitem/${context.params.slug}`,
    fetcher,
    { revalidate: 10 }
  );

  if (error) return <div>エラーが発生しました: {error.message}</div>;
  if (!data) return <div>データを取得中...</div>;

  const singleData = data.singleItem;

  return (
    <>
      <Head>
        <title>編集ページ</title>
        <meta
          name="description"
          content="コーヒーをテイスティングするときに使用するアプリです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Update data={singleData} />
    </>
  );
};

const fetcher = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export default UpdatePage;
