
export default function Guests(){


const guests = [
    { name: "Dr. S. MALIK RAJ (M.Tech., Ph.D.)", title: 'Nellai College of Engineering',role:'Principal', },
    {name:'Mrs. Pitchammal G',title:'Computer Science Engineering B.E',role:'Head of the Department', },
    {name:'Mrs.Sujitha S K ' ,title:'Computer Science Engineering B.E',role:'Advisor',},
    {name:'Sam Elizer' ,title:'Computer Science Engineering',role:"Advisor" , }
  ];


return (
  <section id="Guests" className="py-20 px-4 bg-gradient-to-tl from-grey-900 to-slate-900 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12"><strong>Heartfully Invites Our</strong><br></br></h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guests.map((guest, i) => (
              <div key={i} className=" bg-slate-900/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
                <p><img  src={guest.src}/></p>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{guest.name}</h3>
                <p className="text-purple-400 text-sm mb-1 text-center">{guest.title}</p>
                <p className="text-gray-400 text-sm text-center">{guest.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )
}