/* eslint-disable react/prop-types */

const ProductCard = ({ item }) => {
  return (
    <div
      id={item.title}
      className=" w-32 h-64 pb-4  sm:w-64 sm:h-96
         bg-gradient-to-t from-tertiary to-primary tertiary drop-shadow-md  rounded-2xl flex flex-col gap-1"
    >
      <div className="h-3/4 w-full">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="object-cover bg-cover bg-no-repeat w-full h-full rounded-2xl"
      />
      </div>

      <div className="flex flex-col h-1/4 items-center justify-center ">
        <h2 className="text-center font-bold ">{item.title}</h2>
        <div>€{item.price}/kg</div>
      </div>
    </div>
  );
};

export default ProductCard;
