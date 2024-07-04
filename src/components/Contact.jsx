function Contact() {
  return (
    <section id="contact" className="mb-16">
      <h2 className="font-bold text-4xl text-center mb-8">Contact us</h2>
      <p className="text-center max-w-[600px] mx-auto">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa.
      </p>
      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.1166907832644!2d2.1188841118280584!3d41.37154939685744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a499bf146a0745%3A0xad81551ae7a5eb26!2sOriginal%20Fried%20Chicken!5e0!3m2!1sen!2ses!4v1720131547624!5m2!1sen!2ses"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
