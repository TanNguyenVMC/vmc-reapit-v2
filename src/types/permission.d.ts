export interface IPermissionAttribute {
  name: string
  display_name: string
  description: string
  created_at: number
  updated_at: number
}

export interface IPermission {
  id: string
  type: string
  attributes: IPermissionAttribute
}
