import { Box, Breadcrumbs, Grid, Typography, Rating ,Button} from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { homePageData } from 'src/static/staticData'
import { currency } from '..'
import Link from 'next/dist/client/link'
import axios from 'axios'

const ProductPage = ({ data }) => {
  const routor = useRouter()
  const productId = routor.query.product
  let { name, rating, weight, Qty, price, offer, title, image,description } = data || {}


  const randomNumber = Math.floor(Math.random() * 10) + 1;

  return (
    <Box sx={{ p: 3 }}>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='inherit' href='/'>
          Home
        </Link>
        <Link underline='hover' color='inherit' href='/products'>
          Core
        </Link>
        <Typography>Product {title}</Typography>
      </Breadcrumbs>
      <Grid container>
        <Grid item xs={12} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={image} height={'400px'} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant='h5' fontWeight={700}>
            {name}
          </Typography>
          <Typography variant='h6' fontWeight={700}>

          {title}

            {/* {currency} {price} */}
          </Typography>
          <Typography fontWeight={300} >
             {description}
          </Typography>
          <Typography fontWeight={300} >
             <Rating
        name="read-only"
        value={rating.rate}
        readOnly
      /> ({rating.count})
          </Typography>
          <Button variant="contained" sx={{ padding: "6px 0px" }} >-</Button>
      <span>{2}</span>
      <Button variant="contained" sx={{ padding: "6px 0px" }}>+</Button>
   < Typography fontWeight={600}>Only {randomNumber} items left hurryUp!</Typography>
   <Button  variant="extended"   sx={{ border:'2px solid #C264FF', marginRight:'29px', borderRadius:'16px',
    ":hover": {
      bgcolor: "#C264FF",
      color: "white"
    }}} >Buy Now</Button> 
   <Button  variant="extended"   sx={{ border:'2px solid #C264FF', borderRadius:'16px',
    ":hover": {
      bgcolor: "#C264FF",
      color: "white"
    }}} >Add to Cart</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductPage

export async function getServerSideProps(context) {
  console.log(context)
  let id = context.params?.product
  let res = await axios({
    url: `https://fakestoreapi.com/products/${id}`
  })
  return {
    props: {
      data: res?.data
    } // will be passed to the page component as props
  }
}
