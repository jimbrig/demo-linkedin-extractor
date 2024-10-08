import React from 'react'
import { CompanyData } from '../types'

interface ResultsDisplayProps {
  results: CompanyData[]
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Extracted Data</h2>
      {results.map((company, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-6 mb-4 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">{company.name}</h3>
          <p className="text-gray-600 mb-2">{company.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <strong>Industry:</strong> {company.industry}
            </div>
            <div>
              <strong>Employees:</strong> {company.employees}
            </div>
            <div>
              <strong>Location:</strong> {company.location}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Key Contacts:</h4>
            <ul className="list-disc list-inside">
              {company.contacts.map((contact, contactIndex) => (
                <li key={contactIndex}>
                  {contact.name} - {contact.position} ({contact.email})
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ResultsDisplay