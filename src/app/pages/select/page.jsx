"use client";
import Head from "next/head";
import dotenv from "dotenv";
import { Select } from "@/app/components/molecules/Select/Select";
import useSWR from "swr";

const SelectPage = () => {
  dotenv.config();

  const { data, error } = useSWR("/pages/api/readall", fetcher, {
    revalidateOnFocus: true,
  });

  if (error) return <div>エラーが発生しました: {error.message}</div>;
  if (!data) return <div>データを取得中...</div>;

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
  const res = await fetch(url);
  const data = await res.json();

  if (res.headers.get("ETag")) {
    setHeaders({
      "If-None-Match": res.headers.get("ETag"),
    });
  }

  return data;
};

export default SelectPage;
