'use client'

import { AxiosError } from 'axios'
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ToastContainer, toast } from 'react-toastify'
import Header from '../header'
import { Fragment, useMemo } from 'react'
import Navigation from '../navigation'
import { usePathname } from 'next/navigation'
import { pagesRule } from './constants'
import 'react-toastify/dist/ReactToastify.css'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const currentPathName = `/${pathname?.split('/')?.[1]}`

  const getPageRule = useMemo(() => {
    let pageRule = {
      useHeader: true,
      useNavigation: true,
    }

    const getRule = pagesRule.find((page) => page.path === currentPathName)

    if (getRule) {
      pageRule = {
        ...getRule,
      }
    }

    return pageRule
  }, [currentPathName])

  const handleError = (error: AxiosError) => {
    const errorData = (error as any).response?.data

    if (errorData.status !== 404) {
      toast.error(errorData?.message)
    }
  }

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
    queryCache: new QueryCache({
      onError: (error) => handleError(error as AxiosError),
    }),
    mutationCache: new MutationCache({
      onError: (error) => handleError(error as AxiosError),
    }),
  })

  return (
    <Fragment>
      <ToastContainer />
      <QueryClientProvider client={client}>
        <div className="app-layout">
          {getPageRule.useHeader && <Header />}
          <div
            className={`app-content ${
              getPageRule.useHeader ? 'use-header' : ''
            } ${getPageRule.useNavigation ? 'use-navigation' : ''}`}
          >
            {children}
          </div>
        </div>
        {getPageRule.useNavigation && <Navigation />}
      </QueryClientProvider>
    </Fragment>
  )
}

export default LayoutWrapper
