import { useState } from "react";

export default function Shedule(){


const [ activeTab , setActiveTab ] = useState('technical');

    const schedule = {
        technical: [
          { time: 'Time of the Event', event: 'Event Name', type: 'Event Type' },
         
        ],
        nonTechnical: [
            { time: 'Time of the Event', event: 'Event Name', type: 'Event Type' },
          ],
        
      };
    
      const eventInfo = ['technical', 'nonTechnical'];
     
    


    return(
<>
<section id="Schedule" className="py-20 px-4 bg-gradient-to-tl from-amber-200 to-rose-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Event Schedule</h2>
          
          <div className="flex justify-center gap-4 mb-8">
            {eventInfo.map((day) => (
              <button
                key={day}
                onClick={() => setActiveTab(day)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === day
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                }`}
              >
                {day === 'technical' ? 'Technical Events' : 'Non-Technical Events'}
              </button> 
            ))}
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20">
            {schedule[activeTab].map((item, i) => (
              <div
                key={i}
                className="flex gap-6 py-4 border-b border-slate-700 last:border-0 hover:bg-slate-700/30 px-4 rounded transition-colors"
              >
                <div className="text-purple-400 font-semibold min-w-24">{item.time}</div>
                <div className="flex-1">
                  <div className="text-white font-semibold mb-1">{item.event}</div>
                  {item.speaker && <div className="text-gray-400 text-sm">{item.speaker}</div>}
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold self-start ${
                  item.type === 'keynote' ? 'bg-purple-600/20 text-purple-300' :
                  item.type === 'workshop' ? 'bg-blue-600/20 text-blue-300' :
                  item.type === 'break' ? 'bg-green-600/20 text-green-300' :
                  'bg-slate-600/20 text-gray-300'
                }`}>
                  {item.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


</>

    )
}