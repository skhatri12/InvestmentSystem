import React from 'react'
const company = [
  {
    source: "NIC.jpg",
    title: "NIC ASIA CAPITAL"
  },

  {
    source: "NIBL.jpg",
    title: "NIBL Ace Capital Limited "
  },
  {
    source: "Siddhartha.png",
    title: "Siddhartha Capital Limited"
  },
  {
    source: "NMB.jpg",
    title: "NIC ASIA CAPITAL"
  },
  {
    source: "LAXMI.jpg",
    title: "NIBL Ace Capital Limited "
  },
  {
    source: "KUMARI.jpg",
    title: "NIC ASIA CAPITAL"
  },
  {
    source: "NABIL.jpg",
    title: "NIC ASIA CAPITAL"
  },


]
const Secondbody = () => {
  return (
    <div style={{ backgroundColor: "#F6F6F6" }} className="h-auto w-[100wh] p-9 "  >
      <h2 style={{ color: '#2588be' }} className="font-semibold text-2xl text-center" >List of Company</h2>
      <div className="mx-32">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center">
          {company.map((Items, index) => {
            return (
              <div className="mb-20" key={index} >
                <div className="bg-white h-32 mt-16 my-10" >
                  <a href={Items.title}>
                    <img src={Items.source} alt={Items.title} style={{ "width": "280px", "height": "230px" }} /><hr></hr>
                    <p className="bg-white p-4">{Items.title}</p>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>


    </div>

  )
}

export default Secondbody
