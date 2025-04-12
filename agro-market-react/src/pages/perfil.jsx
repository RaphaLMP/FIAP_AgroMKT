import { useEffect, useState } from "react"
import Input from "../components/input"

const Perfil = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const itemsq = JSON.parse(localStorage.getItem('user'));
        if (itemsq) {
            setItems(itemsq);
        }
    }, []);

    return (
        <div className="flex items-center justify-center h-[90vh] w-full">
            <div className="w-5/6 md:w-2/3 lg:w-1/2">
                    <div className="flex justify-center mb-10">
                        <h1 className="text-2xl">Meu Perfil</h1>
                    </div>
                    <div>
                        <Input
                            Inputname={"nome"}
                            inputType={"text"}
                            labelInput={"Nome Completo"}
                            placeholderText={items.nome}
                        />
                        <Input
                            Inputname={"cpf"}
                            inputType={"text"}
                            labelInput={"CPF"}
                            placeholderText={items.cpf}
                        />
                        <Input
                            Inputname={"nascimento"}
                            labelInput={"Data de Nascimento"}
                            placeholderText={items.nascimento}
                        />
                        <Input
                            Inputname={"email"}
                            inputType={"email"}
                            labelInput={"E-mail"}
                            placeholderText={items.email}
                        />
                        <Input
                            Inputname={"telefone"}
                            inputType={"tel"}
                            labelInput={"Telefone"}
                            placeholderText={items.telefone}
                        />
                    </div>
                </div>
        </div>
    )
}

export default Perfil