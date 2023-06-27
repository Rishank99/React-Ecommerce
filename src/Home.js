import React from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import ProductCatalogue from './components/ProductCatalogue'
import Review from './components/Review'


export default function Home() {
  return (
    <>
    <Nav/>
    <Form/>
    <ProductCatalogue/>
    <Review/>
    </>
  )
}
