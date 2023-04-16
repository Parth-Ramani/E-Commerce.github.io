// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { currency } from 'src/pages'
import { Box } from '@mui/material'
import Link from 'next/dist/client/link'
import { addToCartFunction } from 'src/redux/actions/cartAction'
import { useDispatch, useSelector } from 'react-redux'

const CardAppleWatch = ({ data }) => {
  let { name, price, description, image, id, title } = data || {}
  // console.log(data)
  const dispatch = useDispatch()
  const cartProducts = useSelector(state => state.sampleData.cartProducts)
  const isAdded = cartProducts?.find(o => o?.id == data?.id)
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia sx={{ height: '300px', objectFit: 'contain' }} image={image} />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Link href={`/products/${id}`}>
          <a>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              {title}
            </Typography>
          </a>
        </Link>
        <Typography sx={{ marginBottom: 2 }}>
          {currency}
          {price}
        </Typography>
        <Typography variant='body2' noWrap>
          {description}
        </Typography>
      </CardContent>
      {/* <CardActions> */}
      <Box sx={{ flexGrow: 1 }} />
      <Button
        variant='contained'
        onClick={() => dispatch(addToCartFunction(data))}
        sx={{
          py: 2.5,
          width: '100%',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          position: 'relative',
          bottom: 0
        }}
      >
        {isAdded ? 'Remove from' : 'Add to '} Card
      </Button>
      {/* </CardActions> */}
    </Card>
  )
}

export default CardAppleWatch
