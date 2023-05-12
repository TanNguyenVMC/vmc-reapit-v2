import { IPagination } from './pagination'

export interface ISurveyAttributes {
  survey_type_id: number
  date_completed: string
  surveyor_id: number
  listing_id: number
  created_at: number
  updated_at: number
  deleted_at: number
}

export interface ISurvey {
  id: string
  type: string
  attributes?: ISurveyAttributes
}

export interface ISurveyCollection {
  data: ISurvey[]
  meta: {
    pagination: IPagination
  }
}
