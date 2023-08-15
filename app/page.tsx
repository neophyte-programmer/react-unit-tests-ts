import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <button className='bg-white text-black px-8 py-3 rounded-lg'>
        Click Me
      </button>
      <div>
        <label htmlFor='name' >Enter your name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor='age' >Enter your age</label>
        <input type="number" id="age" />
      </div>
      <div>
        <input placeholder='Search...' type="text" id="age" />
      </div>
    </main>
  )
}
