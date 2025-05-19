import { Mail, Phone, MapPin } from 'lucide-react';
import { FaXing, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">spkawad21@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-600">Pune, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 flex flex-col justify-center">
              <p className="text-gray-600 mb-6">
                Feel free to reach out to me directly via email. I'll get back to you as soon as possible.
              </p>
              <a
                href="mailto:spkawad21@gmail.com"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Contact;