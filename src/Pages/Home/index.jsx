import { useContext, useEffect, useState } from "react";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {

  const {
    setSearchByTitle,
    filteredItems,
  } = useContext(ShoppingCartContext)



  const renderView =  () => {
    if (filteredItems?.length > 0) {
      return (
        filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else if (!!filteredItems) {
      return  (
        <div>We don't have anything :</div>
      )
    }
  }

  return (
    <Layout >
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Exclusive Products</h1>
        </div>

        <input 
        className="rounded-lg border border-black focus:outline-none w-80 p-4 mb-6"
        type="text" 
        placeholder="Search a product" 
        onChange={(e) => setSearchByTitle(e.target.value)}
        />

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center grid-cols-1 gap-x-12 gap-y-24 w-full max-w-screen-lg">
          {renderView()}
        </div>
        <ProductDetail />
   </Layout >
  )
}

export default Home
