const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex flex-1 flex-col sm:max-w-[250px] min-w-[210px]">
    <div className="flexCenter w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]">
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="mt-[26px] text-[24px] leading-[30px] font-bold text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] leading-[32px] text-[#b0b0b0]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
