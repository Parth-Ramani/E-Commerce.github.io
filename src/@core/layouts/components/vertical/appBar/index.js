// ** MUI Imports
import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import MuiToolbar from '@mui/material/Toolbar'
import { Grow, Slide, useScrollTrigger } from '@mui/material'
import { useEffect, useState } from 'react'

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 6),
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  width: '100%',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  padding: `${theme.spacing(0)} !important`,
  minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
  transition:
    'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out, background-color .25s ease-in-out'
}))

const LayoutAppBar = props => {
  // ** Props
  const { settings, verticalAppBarContent: userVerticalAppBarContent, toggleDrawer } = props

  // ** Hooks
  const theme = useTheme()

  // ** Vars
  const { contentWidth } = settings

  const [topNav, setTopNav] = useState(true)
  const trigger = useScrollTrigger({
    threshold: 100,
    disableHysteresis: true
  })

  useEffect(() => {
    if (trigger) {
      setTopNav(false)
      setTimeout(() => {
        setTopNav(true)
      }, 1000)
    }
  }, [trigger])

  // lg
  return (
    <>
      {/* <Slide direction='up' in={topNav}> */}
      <AppBar
        elevation={0}
        color='default'
        className='layout-navbar'
        position='sticky'
        sx={{ zIndex: 2, backgroundColor: 'background.default' }}
      >
        <Toolbar
          className='navbar-content-container'
          sx={{
            ...(contentWidth === 'boxed' && {
              '@media (min-width:1440px)': { maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)` }
            })
          }}
        >
          {(userVerticalAppBarContent && userVerticalAppBarContent(props)) || null}
        </Toolbar>
      </AppBar>
      {/* </Slide> */}
    </>
  )
}

export default LayoutAppBar
