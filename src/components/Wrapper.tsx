import classNames from 'classnames'
import { FC } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

const Wrapper: FC<Props> = ({ children, className }) => {
  return (
    <div className={classNames('max-w-2xl lg:max-w-[1440px] mx-auto', className)}>{children}</div>
  )
}

export default Wrapper
