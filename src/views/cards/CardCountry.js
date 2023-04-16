import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Img } from './CardHorizontalRatings'

const CardCountry = ({ data }) => {
  let { image, title } = data || {}
  return (
    <Card>
      <CardContent>
        <Stack justifyContent={'center'} alignItems={'center'} rowGap={3}>
          <Img alt='Stumptown Roasters' src={image} />
          {/* <CardMedia sx={{ height: '200px' }} src={} /> */}
          <Typography variant='h5'>{title}</Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default CardCountry
