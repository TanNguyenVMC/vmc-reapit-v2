import { IRelation, IRelations } from './index'

export interface IUserAttributes {
  first_name: string
  last_name: string
  email: string
  type: string
  contact_id: number
  created_at: number
  updated_at: number
  deleted_at: number
  active: boolean
  reapit_onboard: boolean
}

export interface IUserRelations {
  contact: IRelation
  teams: IRelations
  roles: IRelations
  permissions: IRelations
  announcements: IRelations
  notifications: IRelations
}

export interface IUser {
  id: number
  type: string
  attributes: IUserAttributes
  relationships?: IUserRelations
}

export interface IUserCollection {
  data: IUser[]
}
