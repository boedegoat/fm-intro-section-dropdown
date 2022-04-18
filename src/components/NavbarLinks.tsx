import IconCloseMenu from '@/images/icon-close-menu.svg'
import NavbarButton from './NavbarButton'
import classNames from 'classnames'
import { useState } from 'react'

export interface Dropdown {
  label: string
  icon?: string
}

export interface Link {
  label: string
  dropdown?: Dropdown[]
}

interface Props {
  links: Link[]
  open: boolean
  onClose: () => void
}

const NavbarLinks = ({ links, open, onClose }: Props) => {
  const [openDropdown, setOpenDropdown] = useState('')

  const openDropdownOn = (label: string) => {
    if (label === openDropdown) {
      setOpenDropdown('')
    } else {
      setOpenDropdown(label)
    }
  }

  return (
    <>
      <div
        className={classNames('fixed inset-0 bg-black/50', open ? 'block' : 'hidden')}
        onClick={onClose}
      />
      <div
        className={classNames(
          'fixed top-0 right-0 h-full w-[65%] bg-white lg:bg-transparent transition-transform duration-300 ease-out',
          'lg:relative lg:w-auto',
          open ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        )}
      >
        <div className='p-5 lg:p-0'>
          <div className='flex'>
            <button className='ml-auto lg:hidden' onClick={onClose}>
              <img src={IconCloseMenu} alt='close' />
            </button>
          </div>
          <div className='flex flex-col space-y-5 mt-10 lg:mt-0 lg:ml-16 lg:flex-row lg:space-y-0 lg:space-x-16'>
            {links.map((item, idx) =>
              item.dropdown ? (
                <NavbarButton
                  item={item}
                  key={idx}
                  openDropdown={openDropdown}
                  handleOpenDropdown={() => openDropdownOn(item.label)}
                />
              ) : (
                <a href='#' key={idx} className='text-gray hover:text-black'>
                  {item.label}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarLinks
