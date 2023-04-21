import { SideMenuProvider } from '@/context/sideMenuContext'
import { GlobalStyle } from '@/styles/global'
import '@/styles/global.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SideMenuProvider >
      <>
        <GlobalStyle />
        <div className='
        px-4
        w-full
        md:px-wrapperSidePadding
        lg:px-[90px]
        pt-[29px]
      '>
          <Component {...pageProps} />
        </div>
      </>
    </SideMenuProvider>
  )
}
