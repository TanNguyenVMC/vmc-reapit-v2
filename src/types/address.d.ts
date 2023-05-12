import { IPagination } from './pagination'

export interface IAddressAttributes {
  full_address: string
  post_town: string
  postcode: string
  is_parent: boolean
  created_at: number
  updated_at: number
}

export interface IAddress {
  id: number
  type: string
  attributes: IAddressAttributes
}

export interface IAddressCollection {
  data: IAddress[]
  meta: {
    pagination: IPagination
  }
}
