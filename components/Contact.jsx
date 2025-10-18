import ContactForm from "./ContactForm"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-700 mb-12 text-lg">
          Feel free to reach out!
        </p>
        <ContactForm />
      </div>
    </section>
  )
}
