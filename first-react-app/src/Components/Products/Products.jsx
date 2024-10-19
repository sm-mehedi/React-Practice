import Product from '../Product/Product';

export default function Products({ info }) {
    return (
        <div>
            <h3>Hey, its my first React app!</h3>
            <Product info={info}></Product>
        </div>
    );
}
