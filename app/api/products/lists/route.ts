import { NextResponse } from 'next/server'
import serverAxios from 'packages/libs/api-server'

export async function GET() {
  try {
    const result = await serverAxios({
      method: 'GET',
      url: '/product',
    })

    return NextResponse.json({ data: result.data })
  } catch (error: any) {
    return NextResponse.json('', {
      status: error.response?.status || 500,
    })
  }
}
