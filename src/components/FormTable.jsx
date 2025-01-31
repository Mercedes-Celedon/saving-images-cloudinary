import { PhotoIcon} from '@heroicons/react/24/solid'
import Axios from 'axios'
import { useState } from 'react';

function FormTable() {
  //setting state to manage the image
  const [image, setImage] =useState();

    const imageUpload = async (img) =>{
        //adding data to send to cloudinary
        const data =new FormData()
        data.append("file",img)
        data.append("upload_preset", "preset-cloudinary")
        data.append("cloud_name", "drhjoqfl1")
        try {
          const response = await Axios.post("https://api.cloudinary.com/v1_1/drhjoqfl1/image/upload", data)
          console.log(response)
          return response.data.secure_url
        } catch (error) {
          console.error("Error uploading image:", error);
          return null;
        }
        
    }

    //handle saving image in a state
    const handleImg = (e)=>{
        const img= e.target.files[0];
        if (img) {
          setImage(img);
          console.log("Imagen seleccionada:", img);
        }
    }

    //handle submit button action to save image
    const handleSubmit = async (e) => {
      e.preventDefault() //important. this prevent reload form
      if (!image){
        alert("select an image")
        return
      }

      const uploadedImageUrl= await imageUpload(image);
      if (uploadedImageUrl) {
        console.log("Imagen subida con éxito:", uploadedImageUrl);
      }
  }

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                  <div className="mt-4 flex text-sm/6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input 
                      //ref={inputFileRef}
                      accept='image/*'
                        id="file-upload" 
                        name="file-upload" 
                        type="file" 
                        className="sr-only"
                        onChange={handleImg} 
                        />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default FormTable