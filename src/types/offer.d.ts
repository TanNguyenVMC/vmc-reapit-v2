import { IPagination } from './pagination'
import { IContactAttributes } from './contact'

export interface IOffer {
  id: string
  type: string
  attributes: IOfferAttributes
  links?: {}
  relationships?: {}
}

export interface IOfferAttributes {
  buyer_name: string
  meta_field: any
  offer: number
  offer_date: number
  status: string
  status_id: number
  created_at: number
  updated_at: number
  deleted_at: number
  listing_id: number
  branch_owner_id: number
  contact?: IContactAttributes
}

export interface IOfferCollection {
  data: IOffer[]
  meta: {
    pagination: IPagination
  }
}

export interface IOfferDetailCollection {
  data: IOffer
  included?: any[]
}

export interface IOfferStatusAttributes {
  status: string
  created_at: number
  offer_type_id: number
  is_main_status: boolean
}

export interface IOfferStatus {
  id: number
  type: string
  attributes: IOfferStatusAttributes
}

export interface IOfferStatusCollection {
  data: IOfferStatus[]
  meta: {
    pagination: IPagination
  }
}
