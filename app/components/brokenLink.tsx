import Image from "next/image";

const BrokenLink = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <Image
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            height={200}
            width={300}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokenLink;
