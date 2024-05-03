export const get = async() =>{
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "mass": 1
                },
                "sort": {
                    "mass.kg": "asc"
                },
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let data = []
    let {docs:[{mass} = maxMassRocket]} = await res.json();
    return mass
}