function Button(props) {
  console.log(props.dangNhap);

  return (
    <>
      <div>
        <button className="border-solid border-blue-main border-2 hover:bg-blue-main text-blue-main hover:text-white rounded-[2rem] px-[1rem] py-[0.5rem] shadow-xl ">
          {props.dangNhap}
          {props.hello}
          {props.buyMotor}
        </button>
      </div>
    </>
  );
}

export default Button;
