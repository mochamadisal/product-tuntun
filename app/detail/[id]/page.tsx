import ProductDetail from 'packages/views/detail'

export const metadata = {
  title: 'Produk Detail',
}

const Page = ({ params }: { params: { id: string } }) => {
  return <ProductDetail productId={params.id} />
}

export default Page
