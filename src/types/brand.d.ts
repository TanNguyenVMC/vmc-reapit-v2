export interface IBrandAttributes {
  corporation_id: number
  name: string
  created_at: number
  updated_at: number
}

export interface IBrand {
  id: string
  type: string
  attributes: IBrandAttributes
}

export interface IBrandCollection {
  data: IBrand[]
}
