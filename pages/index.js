import Head from 'next/head'
import Container1 from '../comps/Container1'
import Container2 from '../comps/Container2'
import Container3 from '../comps/Container3'
import Container4 from '../comps/Container4'
import FormContainer from '../comps/FormContainer'

export default function Home() {
  return (
    <div>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
      <Container1/>
      <Container2/>
      <Container3/>
      <Container4/>
      <FormContainer/>
    </div>
  )
}
