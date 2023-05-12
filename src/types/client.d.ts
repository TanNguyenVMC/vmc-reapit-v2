export interface IClientAttributes {
  name: string
  keys: []
  created_at: number
  updated_at: number
  deleted_at: number
}

export interface IClientLinks {
  self: string
}

export interface IClient {
  id: string
  type: string
  attributes: IClientAttributes
  links: IClientLinks
  teams?: []
}

export interface IClientCollection {
  data: IClient[]
  meta: {
    pagination: IPagination
  }
}

export interface ITeamAttributes {
  billing_address: string | null
  billing_address_line_2: string | null
  billing_city: string | null
  billing_country: string | null
  billing_state: string | null
  billing_zip: string | null
  branch_id: number
  card_brand: string | null
  card_country: string | null
  card_last_four: string | null
  created_at: number
  current_billing_plan: string | null
  deleted_at: number | null
  extra_billing_information: string | null
  name: string
  owner_id: number
  photo_url: string | null
  slug: string | null
  start_date: number
  stripe_id: number | null
  trial_ends_at: number | null
  updated_at: number
  vat_id: number | null
}

export interface ITeam {
  id: string
  type: string
  attributes: ITeamAttributes
}
