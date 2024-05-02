import './Forms.css'
import TextInput from '../TextInput';
import Dropdown from '../Dropdown';
import Button from '../Button';

const Form = () => {

    const teams = [
        'Programming',
        'Front-End',
        'Data Science',
        'Devops',
        'UX & Desing',
        'Mobile',
    ]

    const onSave = (event) => {
        event.preventDefault()
        console.log('Form was submmited')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Fill in the fields to create the employee card.</h2>
                <TextInput required={true} label="Name" placeholder="Type your name"/>
                <TextInput required={true} label="Role" placeholder="Type your role"/>
                <TextInput label="Image" placeholder="Type the URL image"/>
                <Dropdown label="Team" items={teams}/>
                <Button type="submit">
                    Create card
                </Button>
            </form>
        </section>
    )
}

export default Form