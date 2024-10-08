export interface CompanyData {
  name: string
  description: string
  employees: number
  industry: string
  location: string
  contacts: Contact[]
}

export interface Contact {
  name: string
  position: string
  email: string
}