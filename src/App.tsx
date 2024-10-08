import React, { useState } from 'react'
import { Search, Database, AlertCircle } from 'lucide-react'
import CompanyForm from './components/CompanyForm'
import ResultsDisplay from './components/ResultsDisplay'
import { CompanyData } from './types'

function App() {
  const [results, setResults] = useState<CompanyData[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleExtraction = async (companyNames: string[]) => {
    setLoading(true)
    setError(null)
    try {
      // Simulating API call to AI-powered extraction service
      const extractedData = await simulateDataExtraction(companyNames)
      setResults(extractedData)
    } catch (err) {
      setError('An error occurred during data extraction. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">LinkedIn Data Extraction Tool</h1>
        <p className="text-gray-600">Extract company information using AI</p>
      </header>
      <main className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
        <CompanyForm onSubmit={handleExtraction} />
        {loading && (
          <div className="flex items-center justify-center mt-4">
            <Database className="animate-spin mr-2" />
            <p>Extracting data...</p>
          </div>
        )}
        {error && (
          <div className="flex items-center justify-center mt-4 text-red-500">
            <AlertCircle className="mr-2" />
            <p>{error}</p>
          </div>
        )}
        {results.length > 0 && <ResultsDisplay results={results} />}
      </main>
    </div>
  )
}

// Simulated AI-powered data extraction function
const simulateDataExtraction = async (companyNames: string[]): Promise<CompanyData[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000))

  return companyNames.map(name => ({
    name,
    description: `AI-generated description for ${name}`,
    employees: Math.floor(Math.random() * 10000) + 100,
    industry: ['Technology', 'Finance', 'Healthcare', 'Education'][Math.floor(Math.random() * 4)],
    location: ['New York, NY', 'San Francisco, CA', 'London, UK', 'Tokyo, Japan'][Math.floor(Math.random() * 4)],
    contacts: [
      { name: `John Doe`, position: 'CEO', email: `john.doe@${name.toLowerCase().replace(/\s/g, '')}.com` },
      { name: `Jane Smith`, position: 'CTO', email: `jane.smith@${name.toLowerCase().replace(/\s/g, '')}.com` },
    ],
  }))
}

export default App