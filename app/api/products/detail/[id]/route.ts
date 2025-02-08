/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server'
import serverAxios from 'packages/libs/api-server'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const result = await serverAxios({
      method: 'GET',
      url: `/products/${params.id}`,
    })

    return NextResponse.json({ data: result.data })
  } catch (error: any) {
    return NextResponse.json('', {
      status: error.response?.status || 500,
    })
  }
}
