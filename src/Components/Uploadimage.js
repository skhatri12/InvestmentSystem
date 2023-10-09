import React from 'react'
import { storage } from '..firebase-config'
import { ref, uploadBytes, getDownloadURL } from '../firebase-config'
const Uploadimage = () => {
  const [imageupload, setImageUpload] = useState();
  const uploadFile = () => {
    if (!imageupload) return;

    const imageRef = ref(storage, `investmentplan/images/${imageupload.name}`)
    uploadBytes(imageRef, imageupload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url)
      })
    })
  }
  return (
    <div>
      <div className='' >
        <h1 className='font-medium'>Proof of Citizenship</h1>
        <input type="file" name='file' onChange={(e) => setImageUpload(e.target.files[0])} className='border-2 w-72' />
        <button onClick={uploadFile} > Upload</button>
      </div>
    </div>
  )
}

export default Uploadimage




