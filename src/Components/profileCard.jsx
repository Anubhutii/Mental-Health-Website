import React from "react";

const ProfileCard = () => {
  const UserData = JSON.parse(sessionStorage.getItem("user"));
  const userName = UserData ? UserData.username : "Guest";
  const emial = UserData ? UserData.email : "xxxxx@.com";

  return (
    <div className="relative h-[9em] w-auto max-w-[400px] border-2 border-[rgba(26,120,159,0.5)] rounded-[1.5em] bg-gradient-to-br from-[#1a789f] via-cyan-700/80 to-[rgba(26,120,159,0.2)] text-white font-nunito p-[1.5em] flex justify-center items-left flex-col gap-1 backdrop-blur-[12px] hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 group/card hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 via-sky-500/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[1.5em]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(26,120,159,0.1),transparent_60%)] group-hover/card:animate-pulse"></div>

      <div className="relative z-10 w-auto transition-transform duration-300 group-hover/card:translate-y-[-2px] space-y-1">
        <h1 className="text-[1.1em] w-auto font-bold bg-gradient-to-r from-white via-cyan-100 to-cyan-200 bg-clip-text text-transparent">
          {userName}
        </h1>
        <p className="text-[0.9em] text-cyan-100/90 leading-relaxed font-light">
          {emial}
        </p>
      </div>

      <button
        onClick={() => {
          sessionStorage.removeItem("user");
          sessionStorage.removeItem("token");
          window.location.reload();
        }}
        className="relative p-4 px-4 w-fit mt-2 border-[1px] border-cyan-300/30 rounded-full flex justify-center items-center gap-[0.7em] overflow-hidden group/btn hover:border-cyan-300/50 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 transition-all duration-300 backdrop-blur-[12px] bg-cyan-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/40 via-sky-500/40 to-cyan-600/40 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>

        <p className="relative z-10 font-medium tracking-wide cursor-pointer">
          Log Out
        </p>
      </button>
    </div>
  );
};

export default ProfileCard;
