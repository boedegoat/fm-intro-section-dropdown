import IconArrowDown from '@/images/icon-arrow-down.svg'
import IconArrowUp from '@/images/icon-arrow-up.svg'
import { Link } from './NavbarLinks'
import classNames from 'classnames'
import { useEffect } from 'react'

interface Props {
  item: Link
  openDropdown: string
  handleOpenDropdown: () => void
  closeDropdown: () => void
}

const dropdownTransition = 400 // ms

const NavbarButton = ({ item, openDropdown, handleOpenDropdown, closeDropdown }: Props) => {
  const open = openDropdown === item.label

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        document.addEventListener('click', closeDropdown)
      }, dropdownTransition)
    }
    return () => document.removeEventListener('click', closeDropdown)
  }, [open])

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
          transition: dropdownTransition + 'ms',
        }}
        className='select-none flex flex-col mt-2 ml-3 lg:ml-0 overflow-hidden lg:bg-real-white lg:absolute lg:p-3 lg:shadow-2xl lg:rounded-xl'
      >
        {item.dropdown!.map((item, idx) => (
          <a href='#' className='p-2 flex items-center text-gray hover:text-black' key={idx}>
            {item.icon && <img className='mr-3' src={item.icon} alt={item.label} />} {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default NavbarButton
