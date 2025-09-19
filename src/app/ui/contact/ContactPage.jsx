'use client';

import { useState } from 'react';
 

// import SmallContact from '../ui/SmallContact';



const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      const data = await response.json();
      setError(data.error || 'Failed to send message');
    }
  };

  return (
    <div className="flex w-full items-center justify-center py-16 px-4 bg-black">
      {submitted ? (
        <div className="w-full max-w-md p-6 rounded-2xl bg-black">
          <div className="w-full text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="mx-auto mb-3 h-10 w-10 text-green-400"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
            </svg>
            <h2 className="text-xl font-medium text-white">Message sent</h2>
            <p className="mt-1 text-sm text-white/60">Thanks! I’ll get back to you soon.</p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Send another
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md p-6 rounded-2xl bg-black">
          <div className="w-full">
            <h1 className="mb-4 text-2xl font-semibold text-white">Contact Me</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/20"
              />

              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/20"
              />

              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="min-h-28 w-full resize-y rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/20"
              />

              {error && <p className="mt-1 text-sm text-red-400">{error}</p>}

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 font-medium text-black transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;


// 'use client'; // Needed for client-side components in Next.js 13+ (if you're using the `app` directory)

// import { useState } from 'react';

// export default function Home () {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setStatus('Sending...');

//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         setStatus('Message sent successfully!');
//         setFormData({ name: '', email: '', message: '' }); // Reset form fields
//       } else {
//         setStatus('Error sending message.');
//       }
//     } catch (error) {
//       setStatus('An error occurred.');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button type="submit">Send Message</button>
//       </form>
//       {status && <p>{status}</p>}
//     </div>
//   );
// };

