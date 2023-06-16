import Header from './components/Header'
import GuideCard from './components/guideCard'

export default function Home() {

  return (

      <main>
        <Header />
        <div className="py-3 px-36 mt-10 flex flex-wrap">
          <GuideCard />
        </div>
      </main>


  )
}

