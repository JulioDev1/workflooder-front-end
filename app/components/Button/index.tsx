type InputBox = {
  box: string;
};
export default function Button({ box }: InputBox) {
  return (
    <button className="  text-white bg-black text-xl w-full h-14 rounded-lg">
      {box}
    </button>
  );
}
