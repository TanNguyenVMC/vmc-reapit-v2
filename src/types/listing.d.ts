import { IPagination } from './pagination'
import { IBranch } from './branch'
import { IUser } from './user'

export interface IListingAttributes {
  address_area: string
  address_id: number
  address_postal_code: string
  address_street_name: string
  branch_id: number
  branch_name: string
  branch_owner_id: number
  chain_link_id: string
  created_at: number
  updated_at: number
  deleted_at: number | null
  date_last_received: number
  full_address: string
  status_changedate: number | null
  price: number | null
  verified_as_property: number
  sale_progressor?: { user: IUser } | null
  confirm_fall_through_message?: string
  are_possible_fall_through?: boolean
  logbook?: number | null
}

export interface IListingLinks {
  address: string
  branch: string
  buyer: string
  chain_data: string
  chained_listings: string
  meta: string
  milestone_states: string
  milestones: string
  notes: string
  self: string
  seller: string
}

export interface IListing {
  id: string
  type: string
  attributes?: IListingAttributes
  links?: IListingLinks
  groupState?: {}
  branch?: IBranch
  timeline?: IMilestoneTimeline
  delay?: []
}

export interface IListingCollection {
  data: IListing[]
  meta: {
    pagination: IPagination
  }
}

export interface ISingleListingCollection {
  data: IListing
}

export interface IExistListingWithBranchesCollection {
  data: IListing[]
  included?: IBranch[]
}

export interface IListingMeta {
  id: number
  type: string
  attributes: IListingMetaAttributes
}

export interface IListingMetaAttributes {
  listing_id: number
  lender_id: number
  branch_owner_id: number
  branch_owner: string
  search_platform_id: number
  data: IListingMetaDataAttributes
  environmental_search_provider_id: number
  environmental_search_provider_name: string
  seller_conveyancer_id: number
  purchase_conveyancer_id: number
  client_id: number
  created_at: number
  updated_at: number
  deleted_at: number
}

export interface IListingMetaDataAttributes {
  note: string
  seller: string
  seller_conveyancer: string
  seller_correspondence_address: string
  buyer: string
  buyer_conveyancer: string
  buyer_correspondence_address: string
  price: number
  plot?: string
  site?: string

  disable_buyer_seller?: boolean
}

export interface IMilestoneGroup {
  type?: string
  id: number
  attributes?: {
    created_at: number
    deleted_at: number
    name: string
    updated_at: number
  }
}

export interface IChainData {
  type: string
  id: string
  attributes?: {
    bottom_checked: boolean
    length: number
    position: number
    top_checked: boolean
  }
  links?: {
    self: string
  }
}

export interface IMilestoneTimeline {
  type: string
  id: string
  attributes?: {
    address_id: number
    branch_id: number
    cash_buyer: number
    completion_cumulative_offset: number
    completion_date: number
    completion_expected: number
    completion_offset: number
    enquiries_closed_date: number
    enquiries_closed_expected_date: number
    enquiries_closed_offset: number
    enquiries_open_date: number
    enquiries_open_expected_date: number
    enquiries_opened_offset: number
    exchange_cumulative_offset: number
    exchange_date: number
    exchange_expected: number
    exchange_offset: number
    exchange_ready: number
    exchange_ready_cumulative_offset: number
    exchange_ready_offset: number
    funding_applied_date: number
    funding_applied_expected_date: number
    funding_offer_expected_date: number
    mortgage_applied_offset: number
    mortgage_expected_offset: number
    mortgage_offered_date: number
    searches_expected_offset: number
    searches_ordered_date: number
    searches_ordered_expected_date: number
    searches_ordered_offset: number
    searches_returned_date: number
    searches_returned_expected_date: number
    sstc_date: number
    sstc_date_expected: number
  }
}

export interface ILender {
  type: string
  id: string
  attributes?: {
    created_at: number
    deleted_at: number
    experian_data: number
    lender_name: string
    updated_at: number
  }
}

export interface IExchangeReady {
  type?: string
  id?: string
  attributes?: {
    address_id: number
    branch_id: number
    exchange_ready: number
    listing_id: number
    mortgage_exchange_ready: number
    search_exchange_ready: number
    searches_expected_lag: number
  }
  link?: {
    self: string
  }
}

export interface IMilestoneType {
  type: string
  id: string
  attributes?: {
    created_at: number
    deleted_at: number
    is_checklist_enabled: boolean
    is_default_workflow: boolean
    key: string
    milestone_group_id: number
    name: string
    sequence: number
    updated_at: number
  }
  relationships?: any[]
}

export interface IMilestoneState {
  id: number
  type: string
  attributes: {
    state: string
    concern: string
    heading: string
    status: string
  }
}

export interface IMilestone {
  type: string
  id: string
  attributes?: {
    milestone_type_id: number
    milestone_type: string
    address_id: number
    completed_at: number
    is_derived: boolean
    excluded: boolean
    origin: number
    state: IMilestoneState
    created_at: number
    updated_at: number
  }
}

export interface IMilestoneDetail {
  type: string
  id: number
  attributes?: {
    milestone_id: number
    milestone_type_id: number
    milestone_type: string
    completed_at: number
    source_system_id: number
    source_system: string
    address_id: number
    branch_id: number
    subtype: string
    created_at: number
    updated_at: number
    deleted_at: number
  }
  relationships?: {}
}

export interface IMilestoneChecklistItem {
  type: string
  id: string
  attributes?: {
    checked: boolean
    created_at: number
    deleted_at: number
    milestone_checklist_id: number
    name: string
    updated_at: number
    user_id: number
  }
  links?: {
    self: string
  }
}

export interface IListingOutstandingItem {
  id: string
  type: string
  attributes: {
    has_fall_through: boolean
    has_lagging: boolean
    is_lagging: boolean
    is_searches_delivered: boolean
    is_searches_not_ordered: boolean
    is_searches_ordered: boolean
    not_checked: boolean
    total: number
  }
}

export interface IListingOutstandingItems {
  data: IListingOutstandingItem
}
