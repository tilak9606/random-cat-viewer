import { useFetchCat } from '../hooks/useFetchCat.jsx'
import StatBar from './StatBar.jsx'
import LoadingSpinner from './LoadingSpinner.jsx'
import ErrorMessage from './ErrorMessage.jsx'
import { Cat, MapPin, Heart, Clock, Ruler, Sparkles, ArrowRight } from 'lucide-react'

function CatCard() {
  const { cat, loading, error, fetchCat } = useFetchCat()

  if (loading && !cat) {
    return <LoadingSpinner />
  }

  if (error && !cat) {
    return <ErrorMessage message={error} onRetry={fetchCat} />
  }

  if (!cat) return null

  const stats = [
    { label: 'Affection', value: cat.affection_level },
    { label: 'Energy', value: cat.energy_level },
    { label: 'Intelligence', value: cat.intelligence },
    { label: 'Child Friendly', value: cat.child_friendly },
    { label: 'Dog Friendly', value: cat.dog_friendly },
    { label: 'Social Needs', value: cat.social_needs },
    { label: 'Grooming', value: cat.grooming },
    { label: 'Health Issues', value: cat.health_issues },
  ]

  const tags = [
    cat.indoor === 1 && 'Indoor',
    cat.lap === 1 && 'Lap Cat',
    cat.hairless === 1 && 'Hairless',
    cat.hypoallergenic === 1 && 'Hypoallergenic',
    cat.natural === 1 && 'Natural Breed',
    cat.rare === 1 && 'Rare',
    cat.experimental === 1 && 'Experimental',
  ].filter(Boolean)

  return (
    <div className="animate-fade-in">
      {/* Main Card: Image Left, Data Right */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          
          {/* LEFT: Cat Image */}
          <div className="lg:w-5/12 bg-slate-100 flex items-center justify-center p-6 lg:p-8">
            <div className="relative w-full max-w-sm">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-md"
                loading="eager"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-white/90 backdrop-blur text-slate-800 shadow-sm">
                  <Cat className="w-3.5 h-3.5" />
                  {cat.name}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Cat Data */}
          <div className="lg:w-7/12 p-6 lg:p-8 flex flex-col">
            {/* Header */}
            <div className="mb-5">
              <h2 className="text-2xl font-bold text-slate-900">{cat.name}</h2>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {cat.origin}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {cat.life_span} years
                </span>
                <span className="inline-flex items-center gap-1">
                  <Ruler className="w-3.5 h-3.5" />
                  {cat.weight.metric} kg
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              {cat.description}
            </p>

            {/* Temperament */}
            <div className="mb-5">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Temperament
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.temperament.split(', ').map((trait) => (
                  <span
                    key={trait}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-rose-50 text-rose-700 border border-rose-100"
                  >
                    <Sparkles className="w-3 h-3" />
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="mb-5">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Traits
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      <Heart className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Stats Bars */}
            <div className="space-y-2.5 mt-auto">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Stats
              </h3>
              {stats.map((stat) => (
                <StatBar
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CENTER: Next Cat Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={fetchCat}
          disabled={loading}
          className="inline-flex items-center gap-2 px-8 py-3 bg-rose-600 hover:bg-rose-700 disabled:bg-rose-400 text-white text-base font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Loading...
            </>
          ) : (
            <>
              Next Cat
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default CatCard