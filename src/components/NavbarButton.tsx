import IconArrowDown from '@/images/icon-arrow-down.svg'
import IconArrowUp from '@/images/icon-arrow-up.svg'
import { Link } from './NavbarLinks'
import classNames from 'classnames'

interface Props {
  item: Link
  openDropdown: string
  handleOpenDropdown: () => void
}

const NavbarButton = ({ item, openDropdown, handleOpenDropdown }: Props) => {
  const open = openDropdown === item.label

  return (
    <div>
      <button
        onClick={handleOpenDropdown}
        className={classNames(
          'text-left flex items-center w-full hover:text-black',
          open ? 'text-black' : 'text-gray'
        )}
      >
        {item.label}{' '}
        <img className='ml-2' src={open ? IconArrowUp : IconArrowDown} alt='arrow-down' />
      </button>

      <div
        style={{
          maxHeight: open ? 200 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: '0.4s',
        }}
        className='select-none flex flex-col mt-2 ml-3 lg:ml-0 overflow-hidden lg:bg-real-white lg:absolute lg:p-3 lg:shadow-2xl lg:rounded-xl'
      >
        {item.dropdown!.map((item, idx) => (
          <a href='#' className='p-2 flex items-center text-gray hover:text-black' key={idx}>
            {item.icon && <img className='mr-3' src={item.icon} />} {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default NavbarButton
