import axios from "axios";

const API = axios.create({
  baseURL: "mongodb+srv://mohammadzaid559_db_user:zaidSmartHire@cluster0.kvdmizu.mongodb.net/?appName=Cluster0",
});

export default API;