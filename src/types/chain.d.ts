export interface IChainData {
  id: string
  type: string
  attributes: {
    bottom_checked: boolean
    is_broken: boolean
    length: number
    position: number
    top_checked: boolean
  }
}

export interface IChainDataResponse {
  data: IChainData
}
