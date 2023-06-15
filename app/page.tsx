import NavBar from './components/NavBar'
import Header from './components/Header'
import GuideCard from './components/guideCard'

export default function Home() {

  return (
<main className="bg-gray-100 min-h-screen w-screen">
    <main className='max-w-scren-2xl m-auto bg-white'>
<NavBar />
      <main>
        <Header />
        <div className="py-3 px-36 mt-10 flex flex-wrap">
          <GuideCard />
        </div>
      </main>
    </main>
  </main>
  )
}

