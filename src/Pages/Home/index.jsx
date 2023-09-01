import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import { ProductDetail } from "../../Components/ProductDetail";
import { apiUrl } from "../../Api";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`)
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error(`oh no, there was an error ${error}`)
      }
    }
      fetchData()
  },[])

  return (
    <Layout >
        Home 
        <div className="grid grid-cols-4 gap-x-12 gap-y-24 w-full max-w-screen-lg">
          {
            items?.map(item => (
              <Card 
              key={item.id}
              data={item}
              />
            ))
          }
        </div>
        <ProductDetail />
   </Layout >
  )
}

export default Home
