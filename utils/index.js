const wpshare = (imageUrl) => {
  const whatsappUrl = `https://wa.me/?text=Follow%20the%20link%20for%20Follwing%20Instruction%20:%20${encodeURIComponent(
    imageUrl
  )}`;
  window.open(whatsappUrl, "_blank");
};

const playYtVideo = () => {};

module.exports = { wpshare, playYtVideo };
