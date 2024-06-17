// Metodo GET (LER)

async function getData() {
    try {
        const response = await fetch('http://localhost:3000/data')
        if (!response.ok) {
            throw new Error('Erro na busca dos dados')
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('Erro:', error);
    }
}
getData()

// METODO POST (CRIAR)
async function createData() {
    const newItem = {
        id: 'ID',
        nome: 'Nome',
        idade: Idade,
    }

    try {
        const response = await fetch('http://localhost:3000/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        });
        if (!response.ok) {
            throw new Error('Erro ao criar')
        }
        const data = await response.json();
        console.log('Created', data)
    } catch (error) {
        console.log('erro', error)
    }
}
createData();

//METODO UPDATE (PUT)
async function updateData() {
    const updateData = {
        id: 'id',
        nome: 'nome',
        idade: idade,
    };

    try {
        const response = await fetch('http://localhost/data', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: Json.stringify(updateData)
        });
        if (!response.ok) {
            throw new Error('Erro na atualização');
        }
        const data = await response.json();
        console.log('Atualização concluida:', data);
    } catch (error) {
        console.log('Erro:', error);
    }
}
updateData();

//METODO DELETE 
async function deleteData() {
    try {
        const response = await fetch('http://localhost/data', {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Erro ao deletar');
        }
        console.log('Item deletado:');
    } catch (error) {
        console.log('Erro:', error);
    }
}
deleteData()