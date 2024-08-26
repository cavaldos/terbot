import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Xin chào từ API!" }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return NextResponse.json(
      { message: "Đã nhận POST request", data: body },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Lỗi khi xử lý dữ liệu JSON" },
      { status: 400 }
    );
  }
}
