export default function SpecialGuests(){


    const specialGuests = [
        {name:'person Name ', title:'Special Guest', role:'Role', image:'image if available'},
        
      ];

    return (
        <>
        <section id="Guests" className="py-20 px-4 bg-gradient-to-tl from-yellow-950 to-slate-900 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12"><strong>Glad to Invite Our Special Guest</strong><br></br></h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialGuests.map((specialGuest, i) => (
              <div key={i} className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
                <div className="text-6xl mb-4 text-center">{specialGuest.image}</div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{specialGuest.name}</h3>
                <p className="text-purple-400 text-sm mb-1 text-center">{specialGuest.title}</p>
                <p className="text-gray-400 text-sm text-center">{specialGuest.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
        </>
    )
}