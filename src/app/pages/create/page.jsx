"use client";
import Head from "next/head";
import { Create } from "@/app/components/molecules/Create/Create";
import useSWR from "swr";
import dotenv from "dotenv";

const CreatePage = () => {
  dotenv.config();

  const { data, error } = useSWR(`/pages/api/group/chioce`, fetcher, {
    revalidate: 10,
  });

  if (error) return <div>エラーが発生しました: {error.message}</div>;
  if (!data) return <div>データを取得中...</div>;

  return (
    <>
      <Head>
        <title>新規作成ページ</title>
        <meta
          name="description"
          content="コーヒーをテイスティングするときに使用するアプリです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Create data={data} />
    </>
  );
};

const fetcher = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export default CreatePage;
