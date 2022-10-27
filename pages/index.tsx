import type { NextPage } from 'next'
import Display from '../components/Display'
import Keyboard from '../components/Keyboard'
import KeyboardNum from '../components/KeyboardNum'

const Home: NextPage = (props: any) => {


  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-5'>
        <Display />
        <Keyboard />
    </div>
  )
}

export default Home
