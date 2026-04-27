import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  mobile?: boolean
}

export function Container({ children, mobile = false }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-[20px] ${
        !mobile ? 'md:px-[32px] xl:px-[64px]' : ''
      }`}
    >
      {children}
    </div>
  )
}
