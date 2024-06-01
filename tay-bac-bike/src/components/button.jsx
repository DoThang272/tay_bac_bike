function Button(props) {
  return (
    <>
      <div>
        <button className="border-solid bg-white border-green-main border-2 hover:bg-green-main text-green-main hover:text-white rounded-[9px] px-[1rem] py-[0.5rem] shadow-xl ">
          {props.dangNhap}
          {props.hello}
          {props.buyMotor}
        </button>
      </div>
    </>
  );
}

export default Button;
