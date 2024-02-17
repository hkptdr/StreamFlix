const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="font-bold text-4xl my-8">{title}</h1>
      <p className="w-1/4 text-sm pb-6">{overview}</p>
      <button className="bg-white rounded-lg px-4 py-2 text-black font-bold bg-opacity-90 mx-2 hover:bg-opacity-80">
        ▶Play
      </button>
      <button className="bg-gray-400 rounded-lg px-4 py-2 text-white bg-opacity-90 mx-2 hover:bg-opacity-80">
        More Info
      </button>
    </div>
  );
};
export default VideoTitle;
