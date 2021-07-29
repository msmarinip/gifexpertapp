export const getGifs = async (category) => {
    // todo esto es js actual url, resp y data
    //encodeURI para quitar espacios
    //console.log('22='+category);
    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)  }&limit=10&api_key=9frPDZiqGzYC3ZQbtypuWSfcMchFMdWb`
    const resp = await fetch( url ); //le pido que traiga lo de la url 
    //resp.ok; // evalúo si la resp se hizo ok
    //ver abajo la resp 
    // como tengo data puedo directamente desestructurar
    // dentro de data (el arreglo) tengo mucha info: img, id,etc
    //console.log(data);
    const {data} = await resp.json(); // la infomración me la manda en formato json
    //con el map, barro cada una de las imgs de la data
    // el return va a retornar un obj
    // con el return voy a transformar c/u de los elementos del arreglo y retornar un obj con la info que me interesa
    const gifs = data.map(img =>{

        return {

            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
            // el ? es por si no vienen la images


        }
    })
 //   console.log(gifs);
    return  gifs; //mi nuevo estado son los gifs que recibo
}

//getGifs();  1*