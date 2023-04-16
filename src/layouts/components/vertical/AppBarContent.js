// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputAdornment from '@mui/material/InputAdornment'
import Badge from '@mui/material/Badge'



// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'
import Magnify from 'mdi-material-ui/Magnify'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import Link from 'next/link'
import Logo from 'src/comopenets/Logo'
import { CartVariant } from 'mdi-material-ui'
import { useDispatch, useSelector } from 'react-redux'
import { EDIT_HEPLER } from 'src/redux/types'
import { useState } from 'react'




  //



const AppBarContent = props => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props
  const cartProducts = useSelector(state => state.sampleData.cartProducts)
  // ** Hook
  const hiddenSm = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const dispatch = useDispatch()
  const toggleDrawer = val => {
    dispatch({
      type: EDIT_HEPLER,
      payload: {
        openDrawer: val
      }
    })
  }


  ////////////////////////

///////////
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton
            color='inherit'
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          >
            <Menu />
          </IconButton>
        ) : null}
        {hidden ? null : (
          <Link href={'/'}>
            <a>
              <Logo />
            </a>
          </Link>
        )}
        <TextField
          size='small'
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Magnify fontSize='small' />
              </InputAdornment>
            )
          }}
        />
        {/*  */}
      
        {/*  */}
        
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        {/* {hiddenSm ? null : (
          <Box
            component='a'
            target='_blank'
            rel='noreferrer'
            sx={{ mr: 4, display: 'flex' }}
            href='https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free'
          >
            <img
              height={24}
              alt='github stars'
              src='https://img.shields.io/github/stars/themeselection/materio-mui-react-nextjs-admin-template-free?style=social'
            />
          </Box>
        )} */}
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <NotificationDropdown />
        <IconButton onClick={() => toggleDrawer(true)}>
          <Badge badgeContent={cartProducts?.length} color='primary'>
            <CartVariant color='inherit' aria-haspopup='true' />
          </Badge>
        </IconButton>
        <UserDropdown />
      </Box>
    </Box>
  )
}

export default AppBarContent;
