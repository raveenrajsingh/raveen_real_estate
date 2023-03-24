import  axios  from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com'

// headers: {
//     'X-RapidAPI-Key': '93cebbf910msh4a50ac3293498e6p16de68jsn459f76246414',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

export const fetchApi = async (url) => {
const { data } = await axios.get((url), {
    headers: {

        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': '93cebbf910msh4a50ac3293498e6p16de68jsn459f76246414'
      },

});
return data;
}