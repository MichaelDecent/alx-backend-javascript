import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const data = {};
  try {
    const photoData = await uploadPhoto();
    data.photo = photoData;
  } catch (photoError) {
    data.photo = null;
  }
  try {
    const userData = await createUser();
    data.user = userData;
  } catch (userError) {
    data.user = null;
  }
  return data;
}
