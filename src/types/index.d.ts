/**
 * Gobal override types to make the compiler happy
 */
declare module '*.css'
declare module '*.jpg'
declare module '*.png'
declare module '*.json'

export interface SelectOption {
  label: string
  value: string
  description?: string
  link?: string
}

export interface SelectBoxOptions {
  label: string
  value: string
}

export class IRelation {
  data: {
    id: number
    type: string
  }
}

export class IRelations {
  data: {
    id: number
    type: string
  }[]
}

export interface IResource {
  status: number
  message: string
}

export class ICount implements IResource {
  data: number
}

export * from './listing'
export * from './pagination'
export * from './branch'
export * from './brand'
export * from './client'
export * from './address'
export * from './user'
