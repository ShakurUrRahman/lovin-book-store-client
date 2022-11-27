import { Link } from "react-router-dom";

export default function Example() {
    return (
        <div className="bg-pink-100 my-14 mx-auto max-w-7xl px-6 lg:px-8 py-10">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Ready to dive into the world of knowledge?</span>
                    <span className="block text-pink-400">Start your journey from now today.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <Link
                            to='/login'
                            className="btn btn-sm px-8 border-0 rounded-0 text-black bg-pink-400 hover:bg-violet-600">
                            Get started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
