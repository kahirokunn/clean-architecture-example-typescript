type BaseRepository = {
  fetchItem?: (id : number) => Promise < any >,
  fetchItems?: (params?: any) => Promise < any >,
  saveItem?: (params : any) => void,
  clearItem?: () => void,
  getItem?: () => any,
  saveItems?: (params : any) => void,
  clearItems?: () => void,
  getItems?: () => any
}

export default BaseRepository
