// import React, { useEffect, useState } from "react";
// import ConfettiExplosion from "react-confetti-explosion";

// function Reward({ isVisible, gift, username }) {
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [santaMessage, setSantaMessage] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const handlePreview = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   const santaSpeech = [
//     `Surprise! Santa’s gifted you a little something to jazz up your screen. A reminder that every pixel of progress counts—just like every commit you’ve made this year!`,
//     `Your screen’s about to go from meh to WOW! Santa’s got your back, ${username}, with this glowing gift. Keep shining bright like your commits!`,
//     `Santa may not code, but he sure knows good vibes when he sees them. Here’s a stunning screen treat just for you, ${username}. Merry coding and happy viewing!`,
//     `Santa couldn’t resist leaving a little style behind. This gift is all yours, ${username}—a perfect match for your commitment (pun intended) this year!`,
//     `Well, well, ${username}, Santa’s been watching, and let’s just say your screen deserves this masterpiece. Bask in your glory, commit champion!`,
//     `It’s been quite the year, ${username}, and this gift is here to remind you of just how far you’ve come. Keep going, you’re doing amazing!`,
//     `Certified Nice List material! Here’s your reward, ${username}—a gift so good, even Rudolph would be jealous. Enjoy your screen glow-up!`,
//     `Santa believes in the magic of randomness, ${username}. Here’s a wallpaper gift chosen by the North Pole’s finest elves. Spoiler alert: It’s perfect for you!`,
//     `Ho, ho, ho! What’s this? A gift for ${username}? Unwrap it and let your screen tell the story of your amazing year. Santa’s proud of you!`,
//   ];

//   useEffect(() => {
//     if (isVisible) {
//       // Show confetti and random Santa message
//       setShowConfetti(true);
//       setSantaMessage(
//         santaSpeech[Math.floor(Math.random() * santaSpeech.length)]
//       );
//       setTimeout(() => setShowConfetti(false), 3500);
//     }
//   }, [isVisible]);

//   return (
//     <>
//       <div className="absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
//         {showConfetti && (
//           <ConfettiExplosion
//             zIndex={5}
//             force={0.8}
//             width={1000}
//             particleCount={250}
//             duration={3500}
//             particleSize={6}
//           />
//         )}
//       </div>
//       <div
//         className="flex flex-col items-center text-center mt-8"
//         data-aos="fade-up"
//         data-aos-delay="300"
//       >
//         <p className="text-yellow-50 combo text-[0.9rem] md:text-[1rem] px-4">
//           {santaMessage}
//         </p>
//         <div className="mt-6 h-[45vh] w-[85%] max-w-[300px]">
//           <img
//             src={gift.url}
//             className="w-full h-full object-cover rounded-lg shadow-lg"
//             alt={`Santa's gift wallpaper for ${username}`}
//             data-aos="fade-up"
//             data-aos-delay="600"
//             onClick={handlePreview}
//           />
//         </div>
//       </div>
//       {showModal && gift && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
//           <div className="relative bg-white p-4 rounded shadow-lg max-w-md">
//             <button
//               onClick={handleCloseModal}
//               className="absolute top-2 right-2 text-black text-xl"
//             >
//               &times;
//             </button>
//             <img
//               src={gift.url}
//               alt="Preview"
//               className="w-full h-auto rounded"
//             />
//             <div className="flex justify-between mt-4">
//               <a
//                 href={gift.url}
//                 download
//                 className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//               >
//                 Download
//               </a>
//               {/* <button
//                 onClick={() =>
//                   alert(
//                     "Follow your device instructions to set this as wallpaper!"
//                   )
//                 }
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//               >
//                 Set as Wallpaper
//               </button> */}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Reward;

import React, { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

function Reward({ isVisible, gift, username }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [santaMessage, setSantaMessage] = useState("");

  const santaSpeech = [
    `Surprise! Santa’s gifted you a little something to jazz up your screen. A reminder that every pixel of progress counts—just like every commit you’ve made this year!`,
    `Your screen’s about to go from meh to WOW! Santa’s got your back, ${username}, with this glowing gift. Keep shining bright like your commits!`,
    `Santa may not code, but he sure knows good vibes when he sees them. Here’s a stunning screen treat just for you, ${username}. Merry coding and happy viewing!`,
    `Santa couldn’t resist leaving a little style behind. This gift is all yours, ${username}—a perfect match for your commitment (pun intended) this year!`,
    `Well, well, ${username}, Santa’s been watching, and let’s just say your screen deserves this masterpiece. Bask in your glory, commit champion!`,
    `It’s been quite the year, ${username}, and this gift is here to remind you of just how far you’ve come. Keep going, you’re doing amazing!`,
    `Certified Nice List material! Here’s your reward, ${username}—a gift so good, even Rudolph would be jealous. Enjoy your screen glow-up!`,
    `Santa believes in the magic of randomness, ${username}. Here’s a wallpaper gift chosen by the North Pole’s finest elves. Spoiler alert: It’s perfect for you!`,
    `Ho, ho, ho! What’s this? A gift for ${username}? Unwrap it and let your screen tell the story of your amazing year. Santa’s proud of you!`,
  ];

  useEffect(() => {
    if (isVisible) {
      setShowConfetti(true);
      setSantaMessage(
        santaSpeech[Math.floor(Math.random() * santaSpeech.length)]
      );
      setTimeout(() => setShowConfetti(false), 3500);
    }
  }, [isVisible]);

  return (
    <>
      <div className="absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {showConfetti && (
          <ConfettiExplosion
            zIndex={5}
            force={0.8}
            width={1000}
            particleCount={250}
            duration={3500}
            particleSize={6}
          />
        )}
      </div>
      <div
        className="flex flex-col items-center text-center mt-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <p className="text-yellow-50 combo text-[0.9rem] md:text-[1rem] px-4">
          {santaMessage}
        </p>
        <div className="relative mt-6 h-[45vh] w-[85%] max-w-[300px] group">
          <img
            src={gift.url}
            className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer"
            alt={`Santa's gift wallpaper for ${username}`}
            data-aos="fade-up"
            data-aos-delay="600"
          />
          <a
            href={gift.url}
            download
            className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
          >
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Download
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Reward;
