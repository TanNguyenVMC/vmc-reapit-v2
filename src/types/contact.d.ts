export interface IContact {
  id: string
  type: string
  attributes: IContactAttributes
  links?: {}
  relationships?: {}
}

export interface IContactAttributes {
  extref: string
  title: string
  forename: string
  surname: string
  email: string
  mobile_number: string
  telephone_number: string
  address: {}
  vendor_id: string
  contact_id: number
  contact: {
    id: number
    first_name: string
    last_name: string
    email: string
    mobile_number: string
    telephone_number: string
  } | null
  type: string
  status: number
}

export interface IContactCollection {
  data: IContact[]
  included?: any[]
}
