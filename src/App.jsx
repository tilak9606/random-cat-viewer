import CatCard from './components/CatCard.jsx'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Random Cat Viewer
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Discover random cat breeds
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200">
              FreeAPI
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <CatCard />
      </main>
    </div>
  )
}

export default App