import { createRef, useState } from "react"

const AvatarUpload =(props)=>{
    const [image, _setImage] =useState();
    const inputFileRef = createRef();
    const cleanup=()=>{
        URL.revokeObjectURL(image && props.image);
        inputFileRef.current.value = null;
    };
    const setImage =(newImage) =>{
        if (image){
            cleanup();
        }
        _setImage(newImage);
    };
    const handleOnChange = (e) => {
        const newImage =e.target.files[0];
        if (newImage){
            setImage(URL.createObjectURL(newImage));
        }
        props.imageUpload(e)
    };
}