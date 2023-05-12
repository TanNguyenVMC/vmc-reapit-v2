export interface IBranchAttributes {
  brand_id: number
  name: string
  telephone: string
  email: string
  website: string
  created_at: number
  updated_at: number
}

export interface IBranch {
  id: string
  type: string
  attributes: IBranchAttributes
}

export interface IBranchCollection {
  data: IBranch[]
}
