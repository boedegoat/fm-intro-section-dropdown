import Logo from '@/images/logo.svg'
import IconMenu from '@/images/icon-menu.svg'
import IconTodo from '@/images/icon-todo.svg'
import IconCalendar from '@/images/icon-calendar.svg'
import IconReminders from '@/images/icon-reminders.svg'
import IconPlanning from '@/images/icon-planning.svg'
import { useState } from 'react'
import Wrapper from './Wrapper'
import NavbarLinks from './NavbarLinks'

const navbarLinks = [
  {
    label: 'Features',
    dropdown: [
      {
        label: 'Todo List',
        icon: IconTodo,
      },
      {
        label: 'Calendar',
        icon: IconCalendar,
      },
      {
        label: 'Reminders',
        icon: IconReminders,
      },
      {
        label: 'Planning',
        icon: IconPlanning,
      },
    ],
  },
  {
    label: 'Company',
    dropdown: [
      {
        label: 'History',
      },
      {
        label: 'Our Team',
      },
      {
        label: 'Blog',
      },
    ],
  },
  { label: 'Careers' },
  { label: 'About' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const openMobileMenu = () => setOpen(true)
  const closeMobileMenu = () => setOpen(false)

  return (
    <nav className='py-5'>
      <Wrapper className='px-4 lg:px-10 flex justify-between items-center'>
        <div className='flex items-center'>
          <a href='#'>
            <img src={Logo} alt="Snap's logo" />
          </a>
          <NavbarLinks links={navbarLinks} open={open} onClose={closeMobileMenu} />
        </div>
        <div className='hidden lg:flex space-x-12'>
          <button className='text-gray hover:text-black'>Login</button>
          <button className='text-gray hover:text-black border border-gray hover:border-black py-2 px-5 rounded-xl'>
            Register
          </button>
        </div>
        <button className='lg:hidden' onClick={openMobileMenu}>
          <img src={IconMenu} alt='menu' />
        </button>
      </Wrapper>
    </nav>
  )
}

export default Navbar
