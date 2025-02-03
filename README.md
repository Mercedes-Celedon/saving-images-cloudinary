# Cloudinary Image Upload with React & Vite

This project demonstrates how to upload images to **Cloudinary** using **React (Vite)**. The goal was to practice handling file uploads, integrating third-party cloud storage, and managing environment variables securely.

## 🚀 Features
- Upload images to Cloudinary.
- Use `FormData` to send files via Axios.
- Manage environment variables with a `.env` file.
- Display selected images before uploading.
- Prevent environment variables from being exposed in Git.

## 📂 Project Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/cloudinary-upload.git
cd cloudinary-upload
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Cloudinary
1. Create a **Cloudinary** account at [cloudinary.com](https://cloudinary.com/).
2. Go to **Dashboard** and find your `Cloud Name`.
3. Navigate to **Settings > Upload > Upload Presets** and create a new preset with `Unsigned` mode enabled.

### 4️⃣ Create a `.env` File
Inside your project root, create a `.env` file and add:

```ini
VITE_CLOUDINARY_URL=https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload
VITE_CLOUDINARY_PRESET=YOUR_UPLOAD_PRESET
VITE_CLOUDINARY_NAME=YOUR_CLOUD_NAME
```
⚠️ **Important:**
- Replace `YOUR_CLOUD_NAME` with your actual Cloudinary cloud name.
- Replace `YOUR_UPLOAD_PRESET` with your preset name.
- **DO NOT** commit this file to GitHub (see next step).

### 5️⃣ Ignore `.env` in Git
To prevent exposing credentials, add the following to `.gitignore`:
```
.env
.env.local
.env.*.local
```

### 6️⃣ Run the Project
```sh
npm run dev
```
Open `http://localhost:5173/` to test the image upload functionality.

## 📜 Code Example
Here is a snippet of the function that uploads images to Cloudinary:

```js
const imageUpload = async (img) => {
  const data = new FormData();
  data.append("file", img);
  data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);
  data.append("cloud_name", CLOUDINARY_NAME)

  try {
    const response = await axios.post(import.meta.env.VITE_CLOUDINARY_URL, data);
    console.log("Image uploaded successfully:", response.data.secure_url);
    return response.data.secure_url;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};
```

## 🛠 Technologies Used
- **React (Vite)** - Fast build tool for modern frontend development.
- **Cloudinary** - Image and video management platform.
- **Axios** - HTTP client for API requests.
- **Tailwind 4 CSS** - Styling the UI.

## 🤝 Contributing
Feel free to fork this project and submit pull requests! 😊

## 📄 License
This project is licensed under the MIT License.

---
🚀 **Happy coding!** 🎨

