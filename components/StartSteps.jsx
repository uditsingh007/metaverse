const StartSteps = ({ text, number }) => (
  <div className="flexCenter">
    <div className="flexCenter w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]">
      <p className="font-bold text-white text-[20px]">0{number}</p>
    </div>
    <p className="flex-1 ml-[30px] text-[18px] font-normal leading-[32px] text-[#b0b0b0]">
      {text}
    </p>
  </div>
);

export default StartSteps;
