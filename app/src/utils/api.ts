export async function postProduto({formData}: {formData: FormData}) {
    const url = "http://localhost:5034/produto"
    const options = {
        "method": "POST",
        'body': formData
    }

    const res = await fetch(url, options)
    if(!res.ok) {
        throw Error("bruh")
    }
    const json = await res.json()
    return {res: json, ok: true}
}

export async function putProduto({formData, id}: {formData: FormData, id: string}) {
    const url = `http://localhost:5034/produto/${id}`
    const options = {
        "method": "PUT",
        "body": formData
    }

    const res = await fetch(url, options)
    if(!res.ok) throw Error('blud couldn`t do it')
    const json = await res.json()
    return {res: json, ok: true}
}


export async function getAllProdutos() {
    const url = "http://localhost:5034/produto"
    const options = {
        "method": "GET",
    }

    const res = await fetch(url, options)
    if(!res.ok) throw Error('blud couldn`t do it')
    return await res.json()
}

export async function getProduto({id}: {id: string}) {
    const url = `http://localhost:5034/produto/${id}`
    const options = {
        "method": "GET"
    }
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("pog")
        }, 2000)
    })
    const res = await fetch(url, options)
    return (await res.json()).produto

}
