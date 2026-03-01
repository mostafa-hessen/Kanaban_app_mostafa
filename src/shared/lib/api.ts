import axios from "axios";

export  const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
    },
});



// ملاحظه هنا ممكن انك تضيف interceptors لاضافه توكن او التعامل مع الاخطاء بشكل مركزي
