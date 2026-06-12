import { useNavigate } from "react-router-dom"

export default function HomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/product')
  }
  return (
    <section
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1416879595882-3373a0480b5b")',
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-10">
        <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-20 md:grid-cols-2">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Welcome To
              <br />
              Paradise Nursery
            </h1>

            <div className="my-6 h-[2px] w-14 bg-green-500" />

            <p className="mb-10 text-xl md:text-2xl">
              Where Green Meets Serenity
            </p>

            <button
              onClick={handleGetStarted}
              className="rounded-md bg-green-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-600"
            >
              Get Started
            </button>
          </div>

          <div className="text-left text-lg font-semibold leading-relaxed md:text-xl">
            <p className="mb-6 text-center">
              Welcome to Paradise Nursery, where green meets serenity!
            </p>

            <p className="mb-6">
              At Paradise Nursery, we are passionate about bringing nature closer
              to you. Our mission is to provide a wide range of high-quality
              plants that not only enhance the beauty of your surroundings but
              also contribute to a healthier and more sustainable lifestyle. From
              air-purifying plants to aromatic fragrant ones, we have something
              for every plant enthusiast.
            </p>

            <p className="mb-6">
              Our team of experts is dedicated to ensuring that each plant meets
              our strict standards of quality and care. Whether you're a seasoned
              gardener or just starting your green journey, we're here to support
              you every step of the way. Feel free to explore our collection, ask
              questions, and let us help you find the perfect plant for your home
              or office.
            </p>

            <p>
              Join us in our mission to create a greener, healthier world. Visit
              Paradise Nursery today and experience the beauty of nature right at
              your doorstep.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}