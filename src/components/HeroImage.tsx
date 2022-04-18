import ImageHeroDesktop from '@/images/image-hero-desktop.png'
import ImageHeroMobile from '@/images/image-hero-mobile.png'

const HeroImage = () => {
  return (
    <div className='mb-10 lg:order-2'>
      <img className='hidden lg:block' src={ImageHeroDesktop} alt='image-hero-desktop' />
      <img className='block lg:hidden' src={ImageHeroMobile} alt='image-hero-mobile' />
    </div>
  )
}

export default HeroImage
