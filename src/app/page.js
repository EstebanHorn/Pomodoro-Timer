import Header from './components/Header'
import Timer from './components/Timer'
import Tasks from './components/Tasks'
import History from './components/History'

export default function Home() {
  return (
    <>
      <Header />
      <div className='p-10 flex justify-between gap-10'>
        <div className='w-1/2'>
          <Timer />
          <Tasks />
        </div>
        <div className='w-1/2'>
 <History/>
        </div>
       
      </div>
    </>


  )
}
