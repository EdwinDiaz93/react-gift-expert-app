export const getGifts = async(category)=>{
    // Siempre se le debe de añadir https
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=8qZRjkUCEpxJRbFWI3tUYbVaD9ZLs0y9&limit=10`;
    const resp= await fetch(url);
    const {data}=await resp.json();
    
    const gifts=data.map(img=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        };
    });
    
    return(gifts);
};