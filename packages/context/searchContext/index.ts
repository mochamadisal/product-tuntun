import { create } from 'zustand'
import { SearchState, SearchStoreProps } from './types'

const initialState: SearchState = {
  searchInput: '',
}

export const useSearchStore = create<SearchStoreProps>()((set) => ({
  ...initialState,
  setSearchInput: (payload: string) =>
    set((state) => ({ ...state, searchInput: payload })),
}))
