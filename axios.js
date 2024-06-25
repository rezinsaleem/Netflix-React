import axios from "axios";
import { BASE_URL } from "./src/utils/constants";

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDhmYjVhM2Y4YzE2MzRhZDEyMTIyZDFhMTY5MzBkMiIsIm5iZiI6MTcxOTI1ODQxMy41ODg2NCwic3ViIjoiNjY3OWNjMGJlOTllZDM5NDI3ZTUwMmIxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.r0EOcoV9t7CSQ2z2vmGAzEbBLDd35XyYJxgTi2rDGcM'
    }
  });
  

export default instance;