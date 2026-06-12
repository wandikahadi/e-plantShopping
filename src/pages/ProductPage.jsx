import { ShoppingCart } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
import { useNavigate } from 'react-router-dom'

const products = [
    {
        id: 1,
        name: 'Snake Plant',
        price: 15,
        description: 'Produces oxygen at night, improving air quality.',
        image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b5b',
    },
    {
        id: 2,
        name: 'Spider Plant',
        price: 12,
        description: 'Filters formaldehyde and xylene from the air.',
        image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb',
    },
    {
        id: 3,
        name: 'Peace Lily',
        price: 18,
        description: 'Removes mold spores and purifies the air.',
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee',
    },
    {
        id: 4,
        name: 'Boston Fern',
        price: 20,
        description: 'Adds humidity to the air and removes toxins.',
        image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85',
    },
    {
        id: 5,
        name: 'Rubber Plant',
        price: 22,
        description: 'Purifies indoor air and adds natural beauty.',
        image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
    },
    {
        id: 6,
        name: 'Aloe Vera',
        price: 10,
        description: 'Known for healing properties and easy care.',
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09',
    },
]

export default function ProductPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.items)

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="sticky top-0 z-50 flex h-24 items-center justify-between bg-green-600 px-8 text-white">
                <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl">
                        🌱
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold">Paradise Nursery</h1>
                        <p className="text-lg italic">Where Green Meets Serenity</p>
                    </div>
                </div>

                <h2 className="text-3xl">Plants</h2>

                <div onClick={() => navigate('/shopping-cart')} className="relative">
                    <ShoppingCart size={42} />
                    <span className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white text-lg font-bold text-green-600">
                        {totalItems}
                    </span>
                </div>
            </nav>

            <main className="mx-auto max-w-7xl px-8 py-8">
                <div className="mb-10 text-center">
                    <div className="mx-auto h-px w-80 bg-gray-400" />
                    <h2 className="my-2 text-4xl font-bold text-black">
                        Air Purifying Plants
                    </h2>
                    <div className="mx-auto h-px w-80 bg-gray-400" />
                </div>

                <div className="grid grid-cols-1 gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => {
                        const isAdded = cartItems.some((item) => item.id === product.id)

                        return (
                            <div
                                key={product.id}
                                className="relative rounded bg-white p-6 text-center shadow-md"
                            >
                                <span className="absolute right-0 top-0 rounded-bl bg-red-500 px-5 py-2 font-bold text-white">
                                    SALE
                                </span>

                                <h3 className="mb-4 text-lg font-bold text-gray-800">
                                    {product.name}
                                </h3>

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="mx-auto mb-4 h-48 w-56 object-cover"
                                />

                                <p className="mb-3 text-xl font-bold text-red-400">
                                    ${product.price}
                                </p>

                                <p className="mb-5 min-h-12 italic text-gray-700">
                                    {product.description}
                                </p>

                                <button
                                    onClick={() => dispatch(addToCart(product))}
                                    disabled={isAdded}
                                    className={`px-6 py-3 text-white transition ${isAdded
                                        ? 'cursor-not-allowed bg-gray-400'
                                        : 'bg-green-600 hover:bg-green-700'
                                        }`}
                                >
                                    {isAdded ? 'Added to Cart' : 'Add to Cart'}
                                </button>
                            </div>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}