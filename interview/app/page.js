import Image from 'next/image'

export default function Home() {
  return (
    <main className="p-4 ml-6 mt-7">
      <header className="ml-6">
        <h1 className="text-3xl font-semibold text-blue-950"><span className="text-red-600 font-bold">i</span>Invest</h1>
        <div className="flex flex-row justify-between">
          <p className="text-xl">Personal Assistance</p>
          <p>Home</p>
        </div>
      </header>

      <section className="mt-4 p-2">
      <p className="flex flex-row bg-blue-950 p-2 text-base text-white font-semibold rounded">LEADERBOARDS</p>
      <div className="md:grid md:grid-cols-2 gap-4 mt-2 space-y-4 md:space-y-0"> 
      <div className="md:p-2">
      <div className="flex flex-row gap-2">
        <div className="md:basis-4/12 basis-3/12 bg-red-400 rounded flex flex-row items-center justify-center text-8xl text-blue-950 p-4">3</div>
        <div className="md:basis-8/12 basis-7/12 text-1xl rounded shadow-md p-4">
          <p>Best Performing Investment</p>
          <p><span className="font-semibold">Time Span:</span> 1 Month</p>
          <p><span className="font-semibold">Amount Invested:</span> 600,000</p>
          <p><span className="font-semibold">Profit Accumulated:</span> 15,600</p>
          <p><span className="font-semibold">Initial Investment:</span> 150,000</p>
        </div>
      </div>
      </div>
      <div className="md:p-2">
      <div className="flex flex-row gap-2">
        <div className="md:basis-4/12 basis-3/12 bg-red-400 rounded flex flex-row items-center justify-center text-8xl text-blue-950 p-4">100</div>
        <div className="md:basis-8/12 basis-9/12 rounded shadow-md p-4">
          <p>Shares Bought</p>
          <p><span className="font-semibold">Time Span:</span> 1 Year</p>
          <p><span className="font-semibold">Total Shares:</span> 100</p>
          <p><span className="font-semibold">Expected Profit:</span> 600,000</p>
          <p><span className="font-semibold">Return Rate:</span> 16.3%</p>
        </div>
      </div>
      </div>  
      </div>
      </section>

      <section className="">
      <div className="md:grid md:grid-cols-2 gap-4 mt-4 space-y-4 md:space-y-0"> 
      <div className=" ">
        <div className="bg-green-950 p-2 text-base text-white font-semibold rounded mb-3">OUR SUGGESTIONS</div>
      <div className="ml-4">
        <Image
      src="/kk.jpg"
      width={500}
      height={50}
      alt="Picture of the author"
     className="rounded" />
        <p><span className="font-semibold">Entity:</span> Company X</p>
        <p><span className="font-semibold">Ownership:</span> Corporation</p>
        <p><span className="font-semibold">Shareholders:</span> 13</p>
        <p><span className="font-semibold">Activities:</span> Marketing Agency</p>
        <p><span className="font-semibold">Investment types:</span> Shares</p>
        <button className="bg-red-600 text-white rounded mt-3 tetx-base font-semibold p-2">INVEST</button></div>
      </div>
      <div className=" font-semibold">TRENDS
      <Image src="/trend.jpg" alt="stock" width={500}
      height={500} className="rounded" />
      </div>  
      
      </div>
      </section>


    </main>
  );
}