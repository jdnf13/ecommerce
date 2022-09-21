import React from 'react'
import Head from 'next/head';
import  {useRouter} from 'next/router'

export default function Productos() {
  const router = useRouter();
  const {linea,products} = router.query
  return (
    <div>
      <Head>
        <title>{linea} - {products}</title>
        <meta name="description" content="Café Colombiano" />
      </Head>
      <h1>
      Producto: {products}, en {linea}
      </h1>
    </div>
  )
}
