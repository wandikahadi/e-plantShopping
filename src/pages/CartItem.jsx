import { useDispatch, useSelector } from "react-redux"
import { decreaseQuantity, increaseQuantity, removeItem } from "../features/cart/cartSlice"
import { useNavigate } from "react-router-dom"

export default function CartPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.items)
    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    )

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0,
    )

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

                <div className="relative text-5xl">
                    🛒
                    <span className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white text-lg font-bold text-green-600">
                        {totalItems}
                    </span>
                </div>
            </nav>

            <main className="flex min-h-[calc(100vh-96px)] flex-col items-center bg-white/70 px-6 py-6">
                <h2 className="mb-6 text-2xl font-bold text-black">
                    Total Cart Amount: ${totalAmount}
                </h2>

                <div className="w-full max-w-xl bg-white">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-[220px_1fr] border-b border-gray-200"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-52 w-full object-cover"
                            />

                            <div className="p-4 text-black">
                                <h3 className="mb-2 text-3xl font-bold">{item.name}</h3>

                                <p className="mb-3 text-lg font-semibold text-green-900">
                                    ${item.price}
                                </p>

                                <div className="mb-4 flex items-center gap-4">
                                    <button onClick={() => dispatch(decreaseQuantity(item.id))} className="rounded bg-gray-100 px-3 py-2 font-bold text-gray-500">
                                        -
                                    </button>

                                    <span className="font-bold">{item.quantity}</span>

                                    <button onClick={() => dispatch(increaseQuantity(item.id))} className="rounded bg-gray-100 px-3 py-2 font-bold text-gray-500">
                                        +
                                    </button>
                                </div>

                                <p className="mb-4 font-bold">
                                    Total: ${item.price * item.quantity}
                                </p>

                                <button onClick={() => dispatch(removeItem(item.id))} className="rounded-lg bg-red-500 px-5 py-3 font-semibold text-white hover:bg-red-600">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button onClick={() => navigate('/product')} className="mt-14 w-72 rounded bg-green-600 py-4 text-2xl text-white hover:bg-green-700">
                    Continue Shopping
                </button>

                <button className="mt-10 w-72 rounded bg-green-600 py-4 text-2xl text-white hover:bg-green-700">
                    Checkout
                </button>
            </main>
        </div>
    )
}