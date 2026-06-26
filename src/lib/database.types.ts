export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      reviews: {
        Row: {
          id: string
          author_name: string
          rating: number
          content: string
          is_approved: boolean
          created_at: string
        }
        Insert: {
          id?: string
          author_name: string
          rating: number
          content: string
          is_approved?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          author_name?: string
          rating?: number
          content?: string
          is_approved?: boolean
          created_at?: string
        }
      }
      contact_leads: {
        Row: {
          id: string
          name: string
          email: string
          phone?: string | null
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          message?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
