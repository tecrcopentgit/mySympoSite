
import {Award , Clock , Cake , Currency  } from 'lucide-react';

export default function About(){



    return (

        <>
        <section id="About" className="py-20 px-4 bg-gradient-to-br from-green-800/50 to-rose-300 border-b-orange-100">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-4xl font-bold text-white text-center mb-12">About the Event</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { icon: Cake, title: 'Entertainment', desc: 'Connect with peers, professors, and industry professionals' },
                      { icon: Award, title: 'Competitions', desc: 'Participate in hackathons and project presentations' },
                      { icon: Currency, title: 'Workshops', desc: 'Hands-on sessions with cutting-edge technologies' }
                    ].map((item, i) => (
                      <div key={i} className="bg-slate-900/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                        <item.icon className="w-12 h-12 text-pink-900 mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
        
        </>
    )
}