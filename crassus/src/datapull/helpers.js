export const callBackend = async () => {
    try{
        const res = await fetch('/')
        const json = await res.json()
        console.log(json)
        return json
    }
    catch(err) {
        console.log(err.message)
    }
    
}