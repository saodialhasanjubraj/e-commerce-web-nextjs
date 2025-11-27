"use client";
const HeroSection = () => {
  // console.log("my name is Saodial Hasan");
  return (
    <div
      className="h-screen max-h-100 bg-cover bg-center bg-no-repeat w-full overflow-hidden flex items-center"
      style={{
        backgroundImage: "url('./hed.jpg')",
      }}
    >
      <div className="ml-25">
        <h1 className="text-4xl mb-4 text-black font-semibold">20% discount</h1>
        <button className="btn bg-sky-600 border-none shadow-none">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
