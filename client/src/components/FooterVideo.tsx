import footerBg from "@/assets/footer-bg-nature.png";

const FooterVideo = () => {
  return (
    <section className="w-full relative bg-black">
      <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        <img
          src={footerBg}
          alt="African Savanna Nature"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default FooterVideo;
