import React from 'react'

const Cta = () => {
  return (
    <div className="flex md:flex-row flex-col  gap-y-4 md:items-center items-start md:justify-between justify-start md:py-14 md:px-40 p-3 py-10 bg-prim">
      <div className="flex flex-col gap-y-4 md:w-[60%]">
        <h2 className="text-3xl font-semibold text-wh">
          Discover Your Potential
        </h2>
        <p className="text-wh/70 text-base font-sans">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam et
          non vitae quidem iusto maiores iure recusandae nobis saepe voluptates
          enim numquam, neque temporibus necessitatibus! Quis laboriosam ab
          optio architecto.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-btn text-bl text-sm font-semibold py-3 px-6 rounded-2xl w-fit">Get Started</button>
      </div>
    </div>
  );
}

export default Cta