const TextInput = props => {
    const {label, value, handleChange} = props; 

    return (
        <div className='campo-formulario'>
            <label>{label}:</label><br/>
            <input type='text' 
                onBlur={handleChange} 
                className='input-formulario'
                defaultValue={value}/>
        </div>
    )
}

export default TextInput;