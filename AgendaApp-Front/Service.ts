import api from "./Api";

export default async function Login(username: any, password: any) {
    try {
        const data = {
            userName: username,
            password
        };
        const response:any = await api.post("/user/login", data);
        if (response.data.auth === 'true') {
            return true;
        } else {
            return false;
        }
    } catch {
        alert("Falha na conexão com o servidor remoto.")
    };
};

export async function getAllRegs() {
    try {
        const retorno = await api.get("/contacts/getAllContacts");
        console.log("Valores:" + JSON.stringify(retorno.data));
        return retorno.data;
    } catch (error) {
        alert("Falha ao buscar contatos" + error);
    }
};

export async function Save(name:any, phone:any, email:any, birthDate:any, description:any) {
    try {
        const dados = {
            name,
            phone,
            email,
            birthDate,
            description
        };
        const resposta:any = await api.post("/contacts/Post", dados);
        console.log("Valores:" + JSON.stringify(resposta.data));
        alert(resposta);
        return true;
    } catch {
        alert("Save exception")
    }
};

export async function Update(id:any, name:any, phone:any, email:any, birthDate:any, description:any) {
    try {
        const dados = {
            id,
            name,
            phone,
            email,
            birthDate,
            description
        };
        const resposta:any = await api.post("/contacts/Post", dados);
        console.log("Valores:" + JSON.stringify(resposta.data));
        alert('Contato alterado com sucesso!');
        return true;
    } catch {
        alert("Update exception")
    }
};

export async function Delete(id:number) {
    try {
        const resposta:any = await api.delete(`/contacts/Del/${id}`);
        alert('Contato deletado com sucesso!');
        return true;
    } catch {
        alert("Erro no delete")
    }
}