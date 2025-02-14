import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { useActivity } from "../hooks/useActivity"

export default function ActivityList() {

    const { state, dispatch, isEmptyActivities, categoryName } = useActivity()
    
   
  return (
      <>
          {isEmptyActivities ?  <h2 className="text-4xl font-bold text-center text-slate-600">No hay Actividades aún...</h2> : <h2 className="text-4xl font-bold text-center text-slate-600">Comida y Actividades</h2>}
          
          {state.activities.map(activity => (
              <div key={activity.id} className="flex justify-between px-5 py-10 mt-5 bg-white shadow">
                  <div className="relative space-y-2">
                      <p className={`absolute -top-8 -left-8 px-10 py-2 text-white font-bold ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500' }`}>
                          {categoryName(+activity.category)}
                      </p>
                      <p className="pt-5 text-2xl font-bold">{activity.name}</p>
                      <p className="text-4xl font-black text-lime-500">
                          {activity.calories} {''}
                          <span>Calorias</span>
                      </p>
                  </div>

                  <div className="flex items-center gap-5">
                      <button onClick={ () => dispatch( { type: "set-activeId", payload: { id: activity.id } } )}>
                          <PencilSquareIcon className="h-8 text-gray-800" />
                      </button>
                      <button onClick={ () => dispatch( { type: "delete-activity", payload: { id: activity.id } } )}>
                          <XCircleIcon className="h-8 text-red-500" />
                      </button>
                  </div>
              </div>
          ))}
    </>
  )
}
