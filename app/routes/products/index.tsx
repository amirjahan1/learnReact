import ProductItem from "./components/item";



const products = [
  {
    id: 'prod-001',
    name: 'Wireless Noise-Cancelling Headphones',
    price: 249.99,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
  },
  {
    id: 'prod-002',
    name: 'Mechanical Keyboard RGB',
    price: 129.00,
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b91a603?w=600&q=80',
  },
  {
    id: 'prod-003',
    name: 'Ergonomic Office Chair',
    price: 449.50,
    imageUrl: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=600&q=80',
  },
  {
    id: 'prod-004',
    name: '4K Ultra HD Monitor 27"',
    price: 399.99,
    imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80',
  },
  {
    id: 'prod-005',
    name: 'Smart Fitness Watch',
    price: 199.00,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
  },
  {
    id: 'prod-006',
    name: 'Portable Bluetooth Speaker',
    price: 79.95,
    imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80',
  },
  {
    id: 'prod-007',
    name: 'USB-C Docking Station',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&q=80',
  },
  {
    id: 'prod-008',
    name: 'Minimalist Desk Lamp',
    price: 64.00,
    imageUrl: 'https://images.unsplash.com/photo-1507473888900-52e1ad14592a?w=600&q=80',
  },
];



export default function ProductPage() { 
return (<div>
    <h1>Product Page</h1>
    <p>This is the product page.</p>

    <div className="w-full grid grid-cols-6 gap-4 mt-4 p-4">
        {
            products ?
            products.map(({name,price,imageUrl,id})=>(
                <ProductItem
                    name={name}
                    price={price}
                    imageUrl={imageUrl}
                    id={id}
                />
            ))

            : "Nothing for shhowing"
        }

    </div>
</div>
)

}
