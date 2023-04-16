import { Drawer, Stack, Typography, IconButton, Box, Divider } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EDIT_HEPLER } from 'src/redux/types'
import useMediaQuery from '@mui/material/useMediaQuery'
import { isArrayWithValues } from 'src/hepler'
import { useMemo } from 'react'
import { useState } from 'react'
import { PerfectScrollbar } from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import { Close } from 'mdi-material-ui'

const CartDrawer = () => {
  const openDrawer = useSelector(state => state?.helper?.openDrawer)
  const cartProducts = useSelector(state => state.sampleData.cartProducts)
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  const toggleDrawer = val => {
    dispatch({
      type: EDIT_HEPLER,
      payload: {
        openDrawer: val
      }
    })
  }
  const isPhone = useMediaQuery(theme => theme.breakpoints.down('sm'))

  useMemo(() => {
    setProducts(cartProducts || [])
  }, [cartProducts])
  return (
    <>
      <Drawer
        anchor={isPhone ? 'bottom' : 'right'}
        sx={{}}
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: { maxHeight: isPhone ? '50vh' : '100%' }
        }}
      >
        {' '}
        {/* <PerfectScrollbar options={{ wheelPropagation: false, suppressScrollX: true }}> */}
        {/* <Box sx={{ height: '100%', width: isPhone ? '100%' : '10vw' }}> */}
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          sx={{
            px: 4,
            py: 3,
            width: isPhone ? '100%' : '300px',
            position: 'sticky',
            top: '0',
            zIndex: 3,
            backgroundColor: 'background.default'
          }}
        >
          <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center', gap: 2 }} color='primary'>
            {cartProducts?.length || 0} Items
          </Typography>
          <IconButton onClick={() => toggleDrawer(false)}>
            {' '}
            <Close />
          </IconButton>
        </Stack>
        <Stack rowGap={3}>
          {isArrayWithValues(products) ? (
            products?.map(obj => {
              return (
                <>
                  <Stack direction={'row'} sx={{ maxWidth: '300px', overflowX: 'hidden' }} gap={2}>
                    <Stack>
                      <IconButton></IconButton>
                      <Typography>{}</Typography>
                      <IconButton></IconButton>
                    </Stack>
                    <img src={obj?.image} width={'70px'} height={'70px'} style={{ objectFit: 'contain' }} />
                    <Stack justifyContent={'center'} alignItems={'center'}>
                      <Typography variant='subtitle1' fontWeight={500} noWrap sx={{ width: '150px' }}>
                        {obj?.title}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Divider />
                </>
              )
            })
          ) : (
            <Stack sx={{ height: '100%', width: '100%' }} direction={'row'}></Stack>
          )}
        </Stack>
        {/* </Box> */}
        {/* </PerfectScrollbar> */}
      </Drawer>
    </>
  )
}

export default CartDrawer
