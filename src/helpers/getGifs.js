 export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=SaQjzbIAxqjZ5wKaznyM9SirqoIUWtws&q=${category}&limit=5`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    //Data fields extracting (FECH API)
    const gifts = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    //console.log(gifts);
    return gifts;
    
}