
import {useState} from 'react';

export default function Registration(){


     const [formData, setFormData] = useState({
        name: '',
        phonenumber: '',
        department: 'Computer Science',
        college:'',
        year: '1st Year'
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:4000/api/register",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(formData)
        })
        alert(`Registration submitted for ${formData.name}! And We will contact you soon on ${formData.phonenumber}`);
      };

    return (


        <>
        <section id="Registration" className="py-20 px-4 bg-gradient-to-bl from-rose-500 to-green-200">
        
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Register Now</h2>
          <div className="bg-slate-800/50 rounded-xl p-8 border border-purple-500/20">
            <div className="space-y-6">
              <form onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:outline-none" 
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Phone Number</label>
                <input 
                  type="text" 
                  value={formData.phonenumber}
                  onChange={(e) => setFormData({...formData, phonenumber: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:outline-none" 
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Department</label>
                <select 
                  value={formData.department}
                  onChange={(e) => setFormData({...formData, department: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                >
                  <option>Computer Science</option>
                  <option>Information Technology</option>
                  <option>Electronics</option>
                  <option>Mechanical</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label  className='block text-gray-300 mb-2'>College Name</label>
                <input 
                value={formData.college} 
                onChange={(e) => setFormData({...formData, college:e.target.value})}
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Year</label>
                <select 
                  value={formData.year}
                  onChange={(e) => setFormData({...formData, year: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                >
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
              </div>
              <button
                type='submit'
                className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Complete Registration
              </button>
              </form>
            </div>
          </div>
        </div>
        
      </section>

        </>
    )
}