export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    let pattern =
      /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|bmp|ico|tiff))/i;
    return pattern.test(url);
  }
};
