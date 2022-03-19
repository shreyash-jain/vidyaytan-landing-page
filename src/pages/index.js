import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Testimonials from 'sections/testimonials';
import Clients from 'sections/clients';
import FeaturedSpace from 'sections/featured-space';
import OurCustomer from 'sections/our-customer';
import Gallery from 'sections/gallery';
import Pricing from 'sections/pricing';
import Blog from 'sections/blog';
import Subscription from 'sections/subscription';
import UltimateFeatures from 'sections/ultimate-features';
import Features from 'sections/features';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Vidyaytan Library" />
        <Banner />
        <FeaturedSpace />
        <UltimateFeatures />
        <Features />
        <Testimonials/>
        <Gallery />
        <Pricing />
        <Blog />
      </Layout>
    </ThemeProvider>
  );
}
