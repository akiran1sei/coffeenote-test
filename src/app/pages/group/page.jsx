"use client";
import { Group } from "@/app/components/molecules/Group/Group";
import Head from "next/head";
import dotenv from "dotenv";
import useSWR from "swr";

const GroupPage = () => {
  dotenv.config();

  const { data, error } = useSWR("/pages/api/group/chioce", fetcher, {
    revalidateOnFocus: true,
  });

  if (error) return <div>エラーが発生しました: {error.message}</div>;
  if (!data) return <div>データを取得中...</div>;

  return (
    <>
      <Head>
        <title>グループ作成ページ</title>
        <meta
          name="description"
          content="グループ作成、または、選択するページです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Group data={data} />
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

export default GroupPage;
