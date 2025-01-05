import React from "react";

// Import 33 video files from assets
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";
import video5 from "../../assets/video5.mp4";
import video6 from "../../assets/video6.mp4";
// import video7 from "../../assets/video7.mp4";
// import video8 from "../../assets/video8.mp4";
// import video9 from "../../assets/video9.mp4";
// import video10 from "../../assets/video10.mp4";
// import video11 from "../../assets/video11.mp4";
// import video12 from "../../assets/video12.mp4";
// import video13 from "../../assets/video13.mp4";
// import video14 from "../../assets/video14.mp4";
// import video15 from "../../assets/video15.mp4";
// import video16 from "../../assets/video16.mp4";
// import video17 from "../../assets/video17.mp4";
// import video18 from "../../assets/video18.mp4";
// import video19 from "../../assets/video19.mp4";
// import video20 from "../../assets/video20.mp4";
// import video21 from "../../assets/video21.mp4";
// import video22 from "../../assets/video22.mp4";
// import video23 from "../../assets/video23.mp4";
// import video24 from "../../assets/video24.mp4";
// import video25 from "../../assets/video25.mp4";
// import video26 from "../../assets/video26.mp4";
// import video27 from "../../assets/video27.mp4";
// import video28 from "../../assets/video28.mp4";
// import video29 from "../../assets/video29.mp4";
// import video30 from "../../assets/video30.mp4";

const Gallery = () => {
  const videos = [
    video1, video2, video3, video4, video5, video6,
  ];

  return (
    <div id="Gallery" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <h2 className="text-center text-3xl font-bold mb-4 text-gray-800">Gallery</h2>
        <p className="text-center text-gray-600 mb-10">
          Dive into our collection of Gallery showcasing our journey, achievements, and unforgettable moments. 
          Discover the dedication and creativity we bring to every project!
        </p>

        {/* Video Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden" data-aos="flip-up">
              <video
                src={video}
                controls
                className="w-full h-auto"
              ></video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;