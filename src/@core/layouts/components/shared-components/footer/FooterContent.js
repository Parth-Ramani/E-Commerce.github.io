// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import Grid from '@mui/material/Grid'
import Logo from 'src/comopenets/Logo'
import Stack from '@mui/material/Stack'
import { Container } from '@mui/material'
const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    // <Box
    // // sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
    // >
    //   <Grid container>
    //     <Grid item xs={12} md={6} lg={4}>
    //       <Logo height={'100px'} />
    //       <Stack>
    //         <Typography variant='subtitle2'>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis
    //           mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet
    //         </Typography>
    //       </Stack>
    //     </Grid>
    //   </Grid>
    //   {/* <Typography sx={{ mr: 2 }}>
    //     {`© ${new Date().getFullYear()}, Made with `}
    //     <Box component='span' sx={{ color: 'error.main' }}>
    //       ❤️
    //     </Box>
    //     {` by `}
    //     <Link target='_blank' href='https://themeselection.com/'>
    //       ThemeSelection
    //     </Link>
    //   </Typography>
    //   {hidden ? null : (
    //     <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
    //       <Link
    //         target='_blank'
    //         href='https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free/blob/main/LICENSE'
    //       >
    //         MIT License
    //       </Link>
    //       <Link target='_blank' href='https://themeselection.com/'>
    //         More Themes
    //       </Link>
    //       <Link
    //         target='_blank'
    //         href='https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free/blob/main/README.md'
    //       >
    //         Documentation
    //       </Link>
    //       <Link
    //         target='_blank'
    //         href='https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free/issues'
    //       >
    //         Support
    //       </Link>
    //     </Box>
    //   )} */}
    // </Box>
    <>
    <Container >
      <Grid container spacing={3}>
        <Grid item xs={12}sm={6}md={4}lg={3}>
          <Typography variant='h4'sx={{margin:"15px"}}>product</Typography>
          <Typography variant='h6'sx={{margin:"15px"}}>Clothes</Typography>
          <Typography variant='h6'sx={{margin:"15px"}}>Computers</Typography>
          <Typography variant='h6'sx={{margin:"15px"}}>HardDisk</Typography>
          <Typography variant='h6'sx={{margin:"15px"}}>Rings</Typography>
        </Grid>
        <Grid item xs={12}sm={6}md={4}lg={3}>
          <Typography variant='h4'sx={{margin:"15px"}}>product</Typography>
          <Typography variant='h6'sx={{margin:"15px"}}>Clothes</Typography>
          <Typography variant='h6'sx={{margin:"15px"}}>Computers</Typography>
          <Typography variant='h6'sx={{margin:"15px"}}>HardDisk</Typography>
          <Typography variant='h6'sx={{margin:"15px"}}>Rings</Typography>
        </Grid>
        <Grid item xs={12}sm={6}md={4}lg={3}>
          <Typography variant='h4'sx={{margin:"15px"}}>product</Typography>
          <Typography variant='h6'sx={{margin:"15px"}}>Clothes</Typography>
          <Typography variant='h6'sx={{margin:"15px"}}>Computers</Typography>
          <Typography variant='h6'sx={{margin:"15px"}}>HardDisk</Typography>
          <Typography variant='h6'sx={{margin:"15px"}}>Rings</Typography>
        </Grid>
        <Grid item xs={12}sm={6}md={4}lg={3}>
          <Typography variant='h4'sx={{margin:"15px"}}>product</Typography>
          <Typography variant='h6'sx={{margin:"15px"}}>Clothes</Typography>
          <Typography variant='h6'sx={{margin:"15px"}}>Computers</Typography>
          <Typography variant='h6'sx={{margin:"15px"}}>HardDisk</Typography>
          <Typography variant='h6'sx={{margin:"15px"}}>Rings</Typography>
        </Grid>
      </Grid>
    </Container>
  </>
  )
}

export default FooterContent
