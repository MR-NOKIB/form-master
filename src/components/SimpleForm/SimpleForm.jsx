
const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();  /* Prevents the form from submitting and reloading the page */
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.number.value);
        console.log('form submitted');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name"/>
                <br />
                <input type="text" name="email" placeholder="email"/>
                <br />
                <input type="text" name="number" placeholder="number"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;