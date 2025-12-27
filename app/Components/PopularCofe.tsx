import coffee1 from "../../public/images/iceCreame.png";
import coffee2 from "../../public/images/iceCreame.png";
import coffee3 from "../../public/images/iceCreame.png";
import cardBg from "../../public/images/bg-div.png"; // Add your background image

export default function PopularCofe() {
    const coffees = [
  {
    image: coffee1,
    name: "Iced Latte Vertical",
    price: "$10",
    rating: 4,
    description: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz.",
    offer: "10% Off for new Customer",
  },
  {
    image: coffee2,
    name: "Skinny Latte",
    price: "$10",
    rating: 4,
    description: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz.",
    offer: "10% Off for new Customer",
  },
  {
    image: coffee3,
    name: "Cappuccino",
    price: "$9.99",
    rating: 4,
    description: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz.",
    offer: "10% Off for new Customer",
  },
];
 
    return(
        <section className="px-4 sm:px-6 md:px-[10%] py-12 bg-[rgb(244,239,230)]">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-28 text-gray-800">Our Most Popular Coffee</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {coffees.map((coffee, index) => (
                    <div key={index} className="relative bg-white rounded-lg shadow-lg border-2 border-gray-200 pt-24 pb-6 px-6 flex flex-col items-center text-center" style={{backgroundImage: `url(${cardBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                        <div className="absolute inset-0 bg-white/80 -z-10 rounded-lg"></div>
                        <div className="absolute top-4 left-4 bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded z-10">
                            {coffee.price}
                        </div>

                        <div className="absolute top-4 left-4 text-amber-600 text-white text-sm font-bold px-3 py-1 rounded z-10">
                            {[...Array(coffee.rating)].map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>
                        <div className="absolute -top-28 -right-28 transform -translate-x-1/2 z-10">
                            <img src={coffee.image} alt={coffee.name} className="w-48 h-56 object-contain drop-shadow-xl"/>
                        </div>
                        <div className="flex gap-1 text-amber-500 text-lg mb-3 relative z-10">
                        {[...Array(coffee.rating)].map((_, i) => (
                            <span key={i}>★</span>
                        ))}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800 relative z-10">{coffee.name}</h3>
                        <p className="text-sm text-gray-600 mb-3 relative z-10">{coffee.description}</p>
                        <p className="text-sm text-red-600 font-medium mb-4 relative z-10">{coffee.offer}</p>
                        <button className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-6 py-2 rounded shadow-md flex items-center gap-2 transition-colors relative z-10">
                            <span>🛒</span> Add
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}