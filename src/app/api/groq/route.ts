import { NextRequest, NextResponse } from "next/server";
import suggestCommandLine from "@/hook/groq";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query: any = searchParams.get("query");
  const result = await suggestCommandLine(query);
  return NextResponse.json(
    {
      result,
    },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");

    return NextResponse.json(
      {
        message: "Đã nhận POST request",
        query: query,
        data: body,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Lỗi khi xử lý dữ liệu JSON" },
      { status: 400 }
    );
  }
}
