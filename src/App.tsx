import { useEffect, useMemo } from "react"
import Form from "./components/Form"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"
import { useActivity } from "./hooks/useActivity"


function App() {

  const { state, dispatch } = useActivity()
  const { activities } = state

  useEffect(() => { 
    localStorage.setItem('activities', JSON.stringify(activities))
  }, [activities])

  const CanRestartApp = () => useMemo(()=> activities.length, [])

  return (
    <>
      <header className="py-3 bg-lime-600">
        <div className="flex justify-between max-w-4xl mx-auto text-center">
          <h1 className="text-lg font-bold text-center text-white uppercase">Contador de Calorias</h1>
          <button className="p-2 text-sm font-bold text-white uppercase bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-900 disabled:opacity-10" disabled={!CanRestartApp()} onClick={ () => dispatch({type: 'restart-app'}) }>
            Reiniciar App
          </button>
        </div>
      </header>
      
      <section className="px-5 py-20 bg-lime-500">
            <div className="max-w-4xl mx-auto">
          <Form />
            </div>
      </section>

      <section className="py-10 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker />
        </div>
    </section>

      <section className="max-w-4xl p-10 mx-auto">
        <ActivityList />
      </section>
    </>
  )
}

export default App
