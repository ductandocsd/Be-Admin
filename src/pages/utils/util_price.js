import {DEFAULT_USER, DEFAUT_IMG} from "./image";

export default function formatPrice(num) {
    if (!num) return  0;
    num = parseInt(num);
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


export const buildImage = ( img, is_user ) =>
{
    if ( img )
    {
        return process.env.REACT_APP_URL_UPLOAD + "/upload/" + img;

    }
    else return is_user ? DEFAULT_USER: DEFAUT_IMG
}

export const onErrorImage = (e)=> {
    e.currentTarget.src = DEFAUT_IMG;
}
