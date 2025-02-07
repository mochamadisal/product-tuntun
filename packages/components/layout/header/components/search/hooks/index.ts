'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { useSearchStore } from 'packages/context/searchContext'
import { SearchStoreProps } from 'packages/context/searchContext/types'
import useStore from 'packages/context/store'
import { useDebounce } from 'packages/utils/useDebounce'

const useSearch = () => {
  const searchContext = useStore(
    useSearchStore,
    (state: SearchStoreProps) => state
  )

  const [showInput, setShowInput] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(
    searchContext?.searchInput ?? ''
  )
  const debouncedVal = useDebounce(inputValue, 0.5)

  const handleToggleInput = () => {
    setShowInput(!showInput)
  }

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    if (searchContext?.setSearchInput) {
      searchContext.setSearchInput(debouncedVal)
    }
  }, [debouncedVal])

  return {
    showInput,
    handleToggleInput,
    searchInput: inputValue,
    handleChangeValue,
  }
}

export default useSearch
