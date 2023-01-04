
export const Validar = () => {

   const vali = (e) => {
    console.log(e.target.classList)

    if (e.target.value.trim() === '') {
       e.target.classList.add('border-red-600');       
    }else{
      e.target.classList.remove('border-red-600');
    }
   }

  return (
    <>
      <div>
            <label className="text-lg font-medium">Email</label>
            <input
              className=" w-full border-2 border-gray-100 rounded-lx p-4 mt-1 bg-transparent"
              type="text"
              placeholder="Enter your email"
              onBlur={vali}
              
            />
          </div>
          <div>
            <label className="text-lg font-medium">Password</label>
            <input
              className=" w-full border-2 border-gray-100 rounded-lx p-4 mt-1 bg-transparent"
              type="Password"
              placeholder="Enter your Password"
              onBlur={vali}
              
            />
      </div>
    </>
  )
}
