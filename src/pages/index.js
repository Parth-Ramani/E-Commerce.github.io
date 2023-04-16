// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import Link from 'next/link'
// import Swiper, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import CardAppleWatch from 'src/views/cards/CardAppleWatch'
import { Box, Divider, Stack, Typography, useMediaQuery } from '@mui/material'
import CardMobile from 'src/views/cards/CardMobile'
import CardCountry from 'src/views/cards/CardCountry'
import { homePageData } from 'src/static/staticData'
import React from 'react'
import axios from 'axios'

let items = [
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
    src: 'https://img.freepik.com/free-psd/healthy-food-landing-page-template_23-2149586037.jpg?w=1380&t=st=1678172242~exp=1678172842~hmac=e6d48858d80d9151a3111ddbd6c3cbd8b3b4c1e015acc95399032a37de3fd1a4'
  },
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
    src: 'https://img.freepik.com/free-vector/flat-supermarket-social-media-post-template_23-2149357980.jpg?w=1060&t=st=1678172244~exp=1678172844~hmac=f61c1fa8155f09014972a0ad5787f1ded47905437b826e077c5aabbf75572db5'
  },
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
    src: 'https://img.freepik.com/free-psd/international-year-fruits-vegetables-banner-template_23-2148866050.jpg?w=1380&t=st=1678172246~exp=1678172846~hmac=8e99e0ec7f1b873a51c4c283ef65ae5a5d304a1f35aad3b6052bc80c86796d14'
  }
]

const countryData = [{ title: 'Send Items to USA', image: '/images/countries/usa.png' }]
export const currency = '£'

const Dashboard = props => {
  let { products } = props
  const isphone = useMediaQuery(theme => theme.breakpoints.down('sm'))
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        loop={true}
        className='mySwiper'
      >
        {items?.map(obj => (
          <SwiperSlide>
            <img src={obj?.src} style={{ objectFit: 'cover', width: '100vw', height: '70vh' }} />
          </SwiperSlide>
        ))}
      </Swiper>

      {Object.values(homePageData || {})?.map(obj => {
        let { subTitle, title } = obj || {}
        return (
          <React.Fragment key={obj?.title}>
            <Stack justifyContent={'center'} alignItems={'center'} my={7}>
              <Divider sx={isphone ? {} : { width: '43%', marginX: 'auto' }}>
                <Typography variant='h5' mx={3}>
                  {subTitle}
                </Typography>
              </Divider>
              <Typography variant='h4'>{title}</Typography>
            </Stack>

            <Grid container spacing={isphone ? 1 : 6} rowSpacing={5} sx={{ width: '90%', marginX: 'auto' }}>
              {products.map((o, index) => (
                <Grid item xs={12} md={3} lg={3} key={index}>
                  <Link href={`/product/${o.id}`}>
                    {/* <a> */}
                    {isphone ? <CardMobile data={o} /> : <CardAppleWatch data={o} />}

                    {/* </a> */}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </React.Fragment>
        )
      })}

      {/* <Carousel sx={{ width: '90vw' }}>
        {items?.map(obj => (
          <img src={obj?.src} style={{ with: '90vw', height: 'auto' }} />
        ))}
      </Carousel> */}
      {/* <ApexChartWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Trophy />
          </Grid>
          <Grid item xs={12} md={8}>
            <StatisticsCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <WeeklyOverview />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TotalEarning />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <CardStatisticsVerticalComponent
                  stats='$25.6k'
                  icon={<Poll />}
                  color='success'
                  trendNumber='+42%'
                  title='Total Profit'
                  subtitle='Weekly Profit'
                />
              </Grid>
              <Grid item xs={6}>
                <CardStatisticsVerticalComponent
                  stats='$78'
                  title='Refunds'
                  trend='negative'
                  color='secondary'
                  trendNumber='-15%'
                  subtitle='Past Month'
                  icon={<CurrencyUsd />}
                />
              </Grid>
              <Grid item xs={6}>
                <CardStatisticsVerticalComponent
                  stats='862'
                  trend='negative'
                  trendNumber='-18%'
                  title='New Project'
                  subtitle='Yearly Project'
                  icon={<BriefcaseVariantOutline />}
                />
              </Grid>
              <Grid item xs={6}>
                <CardStatisticsVerticalComponent
                  stats='15'
                  color='warning'
                  trend='negative'
                  trendNumber='-18%'
                  subtitle='Last Week'
                  title='Sales Queries'
                  icon={<HelpCircleOutline />}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SalesByCountries />
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <DepositWithdraw />
          </Grid>
          <Grid item xs={12}>
            <Table />
          </Grid>
        </Grid>
      </ApexChartWrapper> */}
    </>
  )
}

export default Dashboard

export async function getServerSideProps(context) {
  let res = await axios({
    url: `https://fakestoreapi.com/products`
  })
  // console.log(res)
  return {
    props: {
      products: res?.data,
      data: {}
    } // will be passed to the page component as props
  }
}
