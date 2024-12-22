import { Link } from "react-router-dom"



const ErrorPage = () => {


  return (
    <div className='flex justify-center items-center mt-24'>
        <div className="flex w-1/4 shadow-xl mx-auto p-8 bg-gray-100 flex-col justify-center items-center">
            <h2 className="text-3xl text-center text-pink-400">Page is not found!!</h2>
            <p className="text-xl py-3">Try again</p>
            <p className="mb-3">------------ or -------------</p>
            <Link to={'/'} >
            <button className="btn btn-outline bg-green-200">Go Home</button>
            </Link>
        </div>
      
    </div>
  )
}

export default ErrorPage