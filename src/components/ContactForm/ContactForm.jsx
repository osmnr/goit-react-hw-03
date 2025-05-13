import css from './ContactForm.module.css'

const ContactForm = () => {
    const handleSubmit = (event)=>{
        event.preventDefault();

        const form = event.target;
        console.log(form.elements.Name.value)
        console.log(form.elements.Number.value)

        form.reset();
    }
    
    return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <label>Name</label>
      <input type="text" name="Name" />
      <label>Phone</label>
      <input type="number" name="Number" />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm