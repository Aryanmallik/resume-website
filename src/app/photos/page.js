"use client";
import React, { useState, useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

const Resume = () => {
  const [beachImages, setBeachImages] = useState([]);
  const [concertImages, setConcertImages] = useState([]);
  const [natureImages, setNatureImages] = useState([]);
  const [nightSkyImages, setNightSkyImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://avanea-f5cf1a1fd40c.herokuapp.com/api/google-drive-images?folderId=1n6JbL_DuqLcMOTlMOLzKqs8j0bby4iYU`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        const beachImagesData = [];
        const concertImagesData = [];
        const natureImagesData = [];
        const nightSkyImagesData = [];
        data.forEach((image) => {
          if (image && image.name && image.id) {
            const imageUrl = `https://drive.lienuc.com/uc?id=${image.id}`;
            if (image.name.toLowerCase().includes("beach")) {
              beachImagesData.push({ name: image.name, url: imageUrl });
            } else if (image.name.toLowerCase().includes("concert")) {
              concertImagesData.push({ name: image.name, url: imageUrl });
            } else if (image.name.toLowerCase().includes("nature")) {
              natureImagesData.push({ name: image.name, url: imageUrl });
            } else if (image.name.toLowerCase().includes("night sky")) {
              nightSkyImagesData.push({ name: image.name, url: imageUrl });
            }
          } else {
            console.error("Invalid image data:", image);
          }
        });
        setBeachImages(beachImagesData);
        setConcertImages(concertImagesData);
        setNatureImages(natureImagesData);
        setNightSkyImages(nightSkyImagesData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Header />
      <div className="bg-black">
        <h1 className="font-bold text-white">Beaches</h1>
        <div className="carousel carousel-center p-4 max-w-full space-x-5 rounded-box">
          {beachImages.map((image, index) => (
            <div className="carousel-item" key={index}>
              <div className="carousel-item h-48 sm:h-96 carousel carousel-vertical rounded-box">
                <div className="h-full">
                  <img
                    crossOrigin="anonymous"
                    src={image.url}
                    alt={`Beach ${index}`}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => openModal(image.url)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black">
        <h1 className="font-bold text-white">Concerts</h1>
        <div className="carousel carousel-center max-w-full p-4 space-x-5 rounded-box">
          {concertImages.map((image, index) => (
            <div className="carousel-item" key={index}>
              <div className="carousel-item h-48 sm:h-96 carousel carousel-vertical rounded-box">
                <div className="h-full">
                  <img
                    crossOrigin="anonymous"
                    src={image.url}
                    alt={`Concert ${index}`}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => openModal(image.url)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black">
        <h1 className="font-bold text-white">Nature</h1>
        <div className="carousel carousel-center max-w-full p-4 space-x-5 rounded-box">
          {natureImages.map((image, index) => (
            <div className="carousel-item" key={index}>
              <div className="carousel-item h-48 sm:h-96 carousel carousel-vertical rounded-box">
                <div className="h-full">
                  <img
                    crossOrigin="anonymous"
                    src={image.url}
                    alt={`Nature ${index}`}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => openModal(image.url)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black">
        <h1 className="font-bold text-white">Night Sky</h1>
        <div className="carousel carousel-center max-w-full p-4 space-x-5 rounded-box">
          {nightSkyImages.map((image, index) => (
            <div className="carousel-item" key={index}>
              <div className="carousel-item h-48 sm:h-96 carousel carousel-vertical rounded-box">
                <div className="h-full">
                  <img
                    crossOrigin="anonymous"
                    src={image.url}
                    alt={`Night sky ${index}`}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => openModal(image.url)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Resume;

