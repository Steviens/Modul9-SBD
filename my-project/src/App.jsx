import { useState, useEffect } from "react";
import fotoStevie from "./assets/stevie.jpg";

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-white py-12 px-6 md:px-20">
      {/* Header */}
      <header className="flex justify-between items-center mb-12 border-b pb-4 border-gray-600">
        <h1 className="text-3xl font-bold tracking-wide">
          STEVIE NATHANIA SIREGAR
        </h1>
        <nav className="flex space-x-6 text-sm md:text-base">
          <a href="#" className="hover:text-blue-400">HOME</a>
          <a href="#" className="hover:text-blue-400">CONTACT</a>
          <a href="#" className="hover:text-blue-400">ABOUT</a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Profile Image */}
        <div className="w-full md:w-1/3">
          <img
            src={fotoStevie}
            alt="Foto Stevie"
            className="rounded-lg border-4 border-white shadow-xl"
          />
        </div>

        {/* About Me */}
        <div className="w-full md:w-2/3 space-y-4">
          <h2 className="text-4xl font-bold">
            ABOUT <span className="text-blue-400">ME</span>
          </h2>

          <p className="text-sm md:text-base font-medium text-blue-300">
            (Mahasiswa Teknik Komputer)
          </p>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Saya adalah Mahasiswa Teknik Komputer Universitas Indonesia angkatan 2023.
            Saya merasa senang menjadi bagian dari jurusan Teknik Komputer, karena bidang ini sangat sesuai dengan minat dan keingintahuan saya terhadap teknologi.
            Selain mengikuti perkuliahan, saya juga aktif dalam kegiatan organisasi.
            Bagi saya, organisasi bukan hanya tempat untuk berkegiatan, tapi juga ruang untuk belajar bekerja sama, mengembangkan soft skill, dan memperluas relasi.
          </p>

          {/* Info Kontak */}
          <div>
            <h3 className="font-semibold mt-6 mb-2">🏡 Alamat:</h3>
            <p>Casablanca East Recidence, Pondok Bambu, Jakarta Timur</p>

            <h3 className="font-semibold mt-6 mb-2">📞 Kontak:</h3>
            <ul className="space-y-1">
              <li>HP: 081806742016</li>
              <li>ID Line: steviesiregar</li>
              <li>Email: steviens2000@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <section className="px-8 py-12">
        <h2 className="text-4xl font-bold text-center mb-10">Card Section</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              title: "Nama",
              body: "Stevie Nathania Siregar",
              image: "https://picsum.photos/500?random=1",
            },
            {
              id: 2,
              title: "Organiasi",
              body: "Ikatan Mahasiswa Elektro",
              image: "https://picsum.photos/500?random=2",
            },
            {
              id: 3,
              title: "Pekerjaan",
              body: "Mahasiswa",
              image: "https://picsum.photos/500?random=3",
            },
          ].map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg text-gray-800 overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;