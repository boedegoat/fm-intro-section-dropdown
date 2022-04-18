import Navbar from '@/components/Navbar'
import HeroImage from '@/components/HeroImage'
import Companies from '@/components/Companies'
import Wrapper from '@/components/Wrapper'

const App = () => {
  return (
    <main className='text-black'>
      <Navbar />
      <Wrapper className='flex flex-col lg:flex-row lg:px-28 lg:mt-10'>
        <HeroImage />
        <div className='text-center lg:text-left lg:order-1 flex flex-col lg:mr-20'>
          <div className='xl:my-auto'>
            <h1 className='font-bold text-4xl lg:text-7xl'>
              Make <br className='hidden lg:block' /> remote work
            </h1>
            <p className='text-gray mt-4 lg:mt-8 px-4 lg:pl-0 lg:pr-32 lg:text-lg'>
              Get your team in sync, no matter your location. Streamline processes, create team
              rituals, and watch productivity soar.
            </p>
            <button className='bg-black text-white font-bold mt-6 lg:mt-10 px-6 py-2 rounded-xl lg:text-lg hover:bg-white hover:text-black border'>
              Learn more
            </button>
          </div>
          <Companies />
        </div>
      </Wrapper>
    </main>
  )
}

export default App
