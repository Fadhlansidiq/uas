"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const name = "Fadhlan Sidiq Abdillah";

  useEffect(() => {
    if (index < name.length) {
      const interval = setTimeout(() => {
        setText((prev) => prev + name[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(interval);
    }
  }, [index]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      
      {/* Latar Belakang */}
      <div className="absolute inset-0">
        <Image 
          src="/sdq.jpeg" 
          alt="Background Image"
          layout="fill" 
          objectFit="cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Efek Cahaya */}
      <div className="absolute w-[700px] h-[700px] bg-blue-400 opacity-40 rounded-full blur-[180px] top-1/3 left-1/4 animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-30 rounded-full blur-[160px] bottom-0 right-0 animate-pulse"></div>

      {/* Konten */}
      <div className="relative z-10 px-6 max-w-3xl">
        
        {/* Animasi Judul */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold drop-shadow-xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Selamat Datang di  
          <span className="text-yellow-300"> Portfolio</span>
        </motion.h1>

        {/* Efek Mengetik */}
        <motion.p
          className="text-4xl md:text-5xl font-bold text-yellow-400 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {text}
          <span className="animate-blink">|</span>
        </motion.p>

        {/* Animasi Subjudul */}
        <motion.p
          className="text-lg md:text-2xl mt-4 opacity-90"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Prodi Sistem Informasi | Web Developer
        </motion.p>

        {/* Tombol CTA */}
        <motion.div 
          className="mt-6 flex justify-center gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.a
            href="/portfolio"
            className="w-64 bg-yellow-400 text-black px-8 py-4 rounded-xl text-lg font-semibold shadow-lg text-center hover:bg-yellow-300 hover:shadow-yellow-500 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Jelajahi Portfolio
          </motion.a>
          <motion.a
            href="/contact"
            className="w-64 bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg text-center hover:bg-gray-200 hover:shadow-blue-400 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Hubungi Saya
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
