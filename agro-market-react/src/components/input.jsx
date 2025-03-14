const Input = ({ labelInput, placeholderText, inputType }) => {
    return (
        <div className="mb-4">
            <label htmlFor="cpf" className="block text-sm">{labelInput}</label>
            <input
                id="cpf"
                type={inputType}
                placeholder={placeholderText}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
        </div>
    )
}

export default Input;