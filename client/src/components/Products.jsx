import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productListAction } from "../Redux/Actions/Product";

const Products = () => {
  const dispatch = useDispatch();
  const productListReducer = useSelector((state) => state.productListReducer);
  const { loading, error, products = [] } = productListReducer;

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {products.map((product) => (
                <div className="p-4 lg:w-1/4 md:w-1/2" key={product.id}>
                  <Link to={`/products/${product._id}`} className="block">
                    <div className="bg-[#932f7f] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-110 duration-300">
                      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="object-cover object-center w-full h-64"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm text-white font-bold">{product.name}</h3>
                        <p className="mt-1 text-sm text-white font-medium">
                          Review Count: {product.numReview}
                        </p>
                        <p className="mt-1 text-lg font-semibold text-white">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Products;
