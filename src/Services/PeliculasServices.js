const apiKey = "api_key=da3403a967b3b32f12431cd7744e3d2a"

export function getAll(){
    return fetch(`http://api.themoviedb.org/3/discover/movie?${apiKey}&sort_by=popularity.desc`)
    .then(res => res.json())  
}

export function getById(id){
    return fetch(`http://api.themoviedb.org/3/movie"+id+"??${apiKey}`)
    .then(res => res.json())
}
