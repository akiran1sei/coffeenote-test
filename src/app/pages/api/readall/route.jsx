import connectDB from "../../../utils/database";
import { BeansModel } from "../../../utils/schemaModels";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connectDB();

    // const allItems = await BeansModel.find({}).lean().exec();
    const allItems = await BeansModel.aggregate([
      {
        $match: {
          username: { $exists: true },
        },
      },
      {
        $sort: {
          // ソート条件を指定
          createdAt: 1,
        },
      },
      {
        $limit: 100, // 取得するドキュメントの数を制限
      },
    ]).exec();
    // console.log("allItems:", allItems);
    return NextResponse.json({
      message: "読み取り成功（オール）",
      allItems: allItems,
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({
      message: "読み取り失敗（オール）",
      status: 500,
    });
  }
}
