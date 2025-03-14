const Input = ({ labelInput, placeholderText, inputType, Inputname, onChange }) => {
    return (
        <div className="mb-4">
            <label htmlFor="cpf" className="block text-sm">{labelInput}</label>
            <input
                required
                onChange={onChange}
                id="cpf"
                type={inputType}
                placeholder={placeholderText}
                name={Inputname}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
        </div>
    )
}

export default Input;