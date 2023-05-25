interface props {
  category: string
}

export default function ProductCategoryRow({ category }: props) {
  return (
    <div>
      <h1 className='mb-3 pt-10 text-center text-2xl font-bold'> {category} </h1>
    </div>
  )
}
