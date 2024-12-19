import { useState } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin } from 'lucide-react';
import PopUp from './PopUp';
import LoadingSpinner from './LoadingSpinner';

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState("")
  const [loading, setLoading] = useState(false);
  //const [popUpMessage, setPopUpMessage] = useState("")

  async function handleSubmit() {
    console.log("clicked")
    if (name === "" || email === "" || message === "") {
      setPopUpMessage("Fill all the details and try again!")
      setPopUp(true)
      return;
    }
    setLoading(true);
    try {
    const response = await axios.post("https://react-portfolio-8144.onrender.com/contact", {
      name,
      email,
      message,
    })
    console.log(response)
    setName("")
    setEmail("")
    setMessage("")
    setLoading(false);
    setPopUpMessage("Thanks for Contacting. I will get back in touch soon!")
    setPopUp(true)
  } catch(e) {
    console.log("err - ", e);
    setLoading(false);
    setPopUpMessage("Something went wrong! Please try again...")
    setPopUp(true)
  }
  }

  return (
    <section id="contact" className="py-20 bg-white relative">
       {loading ? <LoadingSpinner/> : null}
      {popUp ? <PopUp title={popUpMessage} setPopUp={setPopUp} popUp={popUp}/> : null}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">contact@sagarkawad.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>

           
            

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  id="name"
                  name="name"
                  required={true}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  name="email"
                  required={true}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  name="message"
                  required={true}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;