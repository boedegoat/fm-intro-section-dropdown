import Audiophile from '@/images/client-audiophile.svg'
import Databiz from '@/images/client-databiz.svg'
import Maker from '@/images/client-maker.svg'
import Meet from '@/images/client-meet.svg'

const companies = [
  { icon: Audiophile, label: 'audiophile' },
  { icon: Databiz, label: 'databiz' },
  { icon: Maker, label: 'maker' },
  { icon: Meet, label: 'meet' },
]

const Companies = () => {
  return (
    <div className='flex items-center w-full justify-between px-4 my-8 lg:my-12 xl:mt-auto space-x-5'>
      {companies.map((company, idx) => (
        <div key={idx}>
          <img className='w-full' src={company.icon} alt={`${company.label}'s img`} />
        </div>
      ))}
    </div>
  )
}

export default Companies
