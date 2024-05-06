/* eslint-disable react/prop-types */

const Product = ({ item }) => {
  return (
    <div
      id={item.title}
      className={`
        } pb-4 bg-gradient-to-t from-tertiary to-primary tertiary w-[300px] h-[400px] drop-shadow-md rounded-xl`}
      //   options={defaultOptions}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="object-cover bg-cover w-full h-3/4 rounded-2xl"
      />
      <div className="flex flex-col items-center">
        <h2 className="text-center font-bold py-4">{item.title}</h2>zuchini
        <div>€{item.price}/kg</div>
      </div>
    </div>
  );
};

export default Product;
