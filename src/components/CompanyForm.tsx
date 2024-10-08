import React, { useState } from 'react'
import { Search } from 'lucide-react'

interface CompanyFormProps {
  onSubmit: (companyNames: string[]) => void
}

const CompanyForm: React.FC<CompanyFormProps> = ({ onSubmit }) => {
  const [companyInput, setCompanyInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const companies = companyInput.split(',').map(company => company.trim()).filter(Boolean)
    if (companies.length > 0) {
      onSubmit(companies)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={companyInput}
          onChange={(e) => setCompanyInput(e.target.value)}
          placeholder="Enter company names (comma-separated)"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
        >
          <Search className="mr-2" size={18} />
          Extract Data
        </button>
      </div>
    </form>
  )
}

export default CompanyForm