import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const endpoints = [
  {
    name: 'GET /trips',
    description: 'List all the trips',
  },
  {
    name: 'POST /trips',
    description: 'Create a new trip',
    parameters: [
      { name: 'user', description: '*required* the id of the user' },
      { name: 'name', description: '*required* the name of the trip' },
      {
        name: 'start_date',
        description: '(optional) the starting date of the trip',
      },
      {
        name: 'end_date',
        description: '(optional) the end date of the trip',
      },
    ],
  },
  {
    name: 'GET /trips/:id',
    description: 'Get the details of a trip, including expenses',
    parameters: [
      {
        name: 'id',
        description: '*required* the number that identifies the trip',
      },
    ],
    response: `

    `,
  },
  {
    name: 'PUT /trips/:id',
    description: 'Edit a trip',
    parameters: [
      {
        name: 'id',
        description: '*required* the number that identifies the trip',
      },
      { name: 'name', description: '(optional) the name of the trip' },
      {
        name: 'start_date',
        description: '(optional) the starting date of the trip',
      },
      {
        name: 'end_date',
        description: '(optional) the end date of the trip',
      },
    ],
  },
  {
    name: 'DELETE /trips/:id',
    description: 'Delete a trip',
    parameters: [
      {
        name: 'id',
        description: '*required* the number that identifies the trip',
      },
    ],
  },
  {
    name: 'POST /expenses',
    description: 'Create a new expense',
    parameters: [
      {
        name: 'trip',
        description: '*required* the number that identifies the trip',
      },
      { name: 'name', description: '*required* the name of the expense' },
      { name: 'date', description: '*required* the date of the expense' },
      { name: 'amount', description: '*required* the amount of the expense' },
      {
        name: 'currency',
        description: '*required* the currency of the expense',
      },
    ],
  },
  {
    name: 'GET /expenses/:id',
    description: 'Get the details of an expense',
    parameters: [
      {
        name: 'id',
        description: '*required* the number that identifies the expense',
      },
    ],
  },
  {
    name: 'PUT /expenses/:id',
    description: 'Edit an expense',
    parameters: [
      {
        name: 'id',
        description: '*required* the number that identifies the expense',
      },
      {
        name: 'trip',
        description: '(optional) the number that identifies the trip',
      },
      { name: 'name', description: '(optional) the name of the expense' },
      { name: 'date', description: '(optional) the date of the expense' },
      { name: 'amount', description: '(optional) the amount of the expense' },
      {
        name: 'currency',
        description: '(optional) the currency of the expense',
      },
    ],
  },
  {
    name: 'DELETE /expense',
    description: 'Delete an expense',
    parameters: [
      {
        name: 'id',
        description: '*required* the number that identifies the expense',
      },
    ],
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <h1 className='text-5xl text-center font-bold mt-20'>Trips API</h1>
        <h2 className='text-2xl text-center mt-10'>The documentation</h2>
      </div>

      <div className='grid grid-cols-2 max-w-2xl gap-4 mt-10 mx-auto'>
        {endpoints.map((endpoint, index)=> (
          <div className='border border-gray-500 p-4' key={index}>
          <h2>
            <code>{endpoint.name}</code>
          </h2>
          <p>{endpoint.description}</p>
          {endpoint.parameters && (
            <>
            <br/>
            <p>Parameters:</p>
            <ul>
              {endpoint.parameters.map((parameter, parameterIndex) => (
                <li key={parameterIndex}>
                  <b>{parameter.name}</b>: {parameter.description}
                </li>
              ))}
            </ul>
            </>
          )}
          {endpoint.response && (
            <>
            <br/>
            <p>Example response:</p>
            <pre>
              <code>
                {endpoint.response}
              </code>
            </pre>
            </>
          )}
        </div>
        ))} 

      </div>
    
    </main>
  )
}
