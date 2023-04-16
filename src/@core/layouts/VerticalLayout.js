// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Fab from '@mui/material/Fab'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

// ** Components
import AppBar from './components/vertical/appBar'
import Navigation from './components/vertical/navigation'
import Footer from './components/shared-components/footer'
import ScrollToTop from 'src/@core/components/scroll-to-top'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { Grow, useMediaQuery, useScrollTrigger } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import CartDrawer from 'src/comopenets/CartDrawer'
// import Footer from 'src/comopenets/Footor'
// import Footer from './components/shared-components/footer'

const VerticalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex'
})

const MainContentWrapper = styled(Box)({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  // padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    // paddingLeft: theme.spacing(4),
    // paddingRight: theme.spacing(4)
  }
}))

const VerticalLayout = props => {
  // ** Props
  const { settings, children, scrollToTop } = props
  // ** Vars
  const { contentWidth } = settings
  const navWidth = themeConfig.navigationSize

  // ** States
  const [navVisible, setNavVisible] = useState(false)

  // console.log(trigger)
  // ** Toggle Functions
  const toggleNavVisibility = () => setNavVisible(!navVisible)
  // ** Hook
  const hiddenSm = useMediaQuery(theme => theme.breakpoints.down('sm'))

  //**
  const dispatch = useDispatch()
  const openDrawer = useSelector(state => state?.helper?.openDrawer)

  const toggleDrawer = val => {
    dispatch({
      type: EDIT_HEPLER,
      payload: {
        openDrawer: val
      }
    })
  }
  return (
    <>
      {/* <AppBar toggleNavVisibility={toggleNavVisibility} {...props} /> */}
      <VerticalLayoutWrapper className='layout-wrapper'>
        {hiddenSm && (
          <Navigation
            navWidth={navWidth}
            navVisible={navVisible}
            setNavVisible={setNavVisible}
            toggleNavVisibility={toggleNavVisibility}
            {...props}
          />
        )}
        <MainContentWrapper className='layout-content-wrapper'>
          <AppBar
            toggleNavVisibility={toggleNavVisibility}
            toggleDrawer={toggleDrawer}
            {...props}
            // sx={{ position: 'sticky', top: 0 }}
          />
          <CartDrawer />
          <ContentWrapper
            className='layout-page-content'
            sx={{
              ...(contentWidth === 'boxed' && {
                mx: 'auto',
                // '@media (min-width:1440px)': { maxWidth: 1440 },
                '@media (min-width:1200px)': { maxWidth: '100%', padding: 0 }
              }),
              padding: 0
            }}
          >
            {children}
          </ContentWrapper>

          <Footer {...props} />

          <DatePickerWrapper sx={{ zIndex: 11 }}>
            <Box id='react-datepicker-portal'></Box>
          </DatePickerWrapper>
        </MainContentWrapper>
      </VerticalLayoutWrapper>
      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className='mui-fixed'>
          <Fab color='primary' size='small' aria-label='scroll back to top'>
            <ArrowUp />
          </Fab>
        </ScrollToTop>
      )}
    </>
  )
}

export default VerticalLayout
