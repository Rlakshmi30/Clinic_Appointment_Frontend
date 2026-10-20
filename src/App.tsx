
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-700">
            ClinicCare
          </h1>

          <nav className="flex gap-6 text-gray-600">
            <a href="/">Home</a>
            <a href="/doctors">Doctors</a>
            <a href="/appointments">Appointments</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-4xl font-bold text-gray-900">
          Your Health, Our Priority
        </h2>

        <p className="mt-4 max-w-xl text-lg text-gray-600">
          Find doctors and manage your clinic appointments in one place.
        </p>

        <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
          Find a Doctor
        </button>
      </main>
    </div>
  )
}

export default App
