import Head from 'next/head'
import About from './components/About'
import Experience from "./components/Experience";
import Footer from './components/Footer';
import HeroPage from './components/HeroPage'
import NavHead from './components/NavHead'
import Skills from './components/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Matthew | CodeMat</title>
        <meta
          name='description'
          content='Matthew a.k.a CodeMat is a fullstack software developer (mobile web specialist).'
        />
        <meta property='og:title' content='Matthew - CodeMat' key='title' />
        <meta
          property='og:description'
          content='I am a fullstack software developer - Mobile Web Specialist.'
        />
        {/* <meta
          name='google-site-verification'
          content='FHFZ7Z_-FMwqU2kVHfKI5FTdyCIF2-PQGIDUjdXtpN0'
        /> */}
        <meta property='og:url' content='https://www.matthewchukwu.com.ng' />
        <meta property='og:type' content='website' />

        {/* New details */}
        <meta key='og_locale' property='og:locale' content='en_IE' />
        <meta
          key='og_site_name'
          property='og:site_name'
          content='Matthew - CodeMat'
        />
        <meta
          key='og_image'
          property='og:image'
          content='https://res.cloudinary.com/mctony17/image/upload/v1670531992/portfolio/logo.jpg'
        />
        <meta key='og_image:alt' property='og:image:alt' content='logo' />
        <meta key='og_image:width' property='og:image:width' content='300' />
        <meta key='og_image:height' property='og:image:height' content='300' />

        <meta name='robots' content='index,follow' />

        <meta
          key='twitter:card'
          name='twitter:card'
          content='summary_large_image'
        />
        <meta key='twitter:site' name='twitter:site' content='@matt_chuks' />
        <meta
          key='twitter:creator'
          name='twitter:creator'
          content='@matt_chuks'
        />
        <meta
          key='twitter:title'
          property='twitter:title'
          content='codeMat'
        />
        <meta
          key='twitter:description'
          property='twitter:description'
          content='Matthew - CodeMat is a fullstack software developer (Mobile Web Specialist).'
        />

        <link rel='canonical' href='https://www.matthewchukwu.com.ng' />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <NavHead />
        <HeroPage />
        <About />
        <Experience />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}
