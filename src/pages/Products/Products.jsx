import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const Products = () => {

    const [products, setProducts] = useState();

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="flex md:w-[1450px]  mx-auto">
            {/* menu section  */}
            <div className="md:w-3/12 bg-[#E8E8E8] mx-auto justify-center">
                <ul className="flex flex-col gap-4 p-3 w-56 mx-auto mt-4">
                    <li className="text-2xl font-medium bg-[#0E0E0E] py-3 px-6 text-[#ffffff] rounded" >Rocking chair</li>
                    <li className="text-2xl font-medium  py-3 px-6 rounded">Side chair</li>
                    <li className="text-2xl font-medium  py-3 px-6 rounded">Lounge chair</li>
                </ul>
            </div>

            {/* Product sections  */}
            <div className="md:w-9/12  grid md:grid-cols-3 grid-cols-1 gap-3">
                {products?.map((items) =>
                    <ProductCard key={items.id} items={items} />
                )}

            </div>
        </div>
    );
};

export default Products;