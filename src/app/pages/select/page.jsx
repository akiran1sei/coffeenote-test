"use client";
import Head from "next/head";

import dotenv from "dotenv";
import { Select } from "@/app/components/molecules/Select/Select";
import useSWR from "swr";

const SelectPage = () => {
  dotenv.config();

  const { data, error } = useSWR(`/pages/api/readall`, fetcher, {
    revalidate: 10,
  });

  if (error) return <div>エラーが発生しました: {error.message}</div>;
  if (!data) return <div>データを取得中...</div>;

  // revalidatePath(`${process.env.NEXT_PUBLIC_URL}/pages/select`);

  return (
    <>
      <Head>
        <title>セレクションページ</title>
        <meta
          name="description"
          content="コーヒーをテイスティングするときに使用するアプリです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Select data={data} />
    </>
  );
};

const fetcher = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export default SelectPage;
