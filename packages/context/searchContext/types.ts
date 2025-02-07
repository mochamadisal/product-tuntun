export interface SearchState {
  searchInput: string
}

export interface SearchStoreProps extends SearchState {
  setSearchInput: (payload: string) => void
}
