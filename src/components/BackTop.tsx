export default () => {
  return (
    <button
      title="回到顶部"
      class="ml-auto flex justify-center items-center p-2.5 text-base rounded-md
      bg-slate-400 text-slate-2 hover:bg-slate-500 hover:text-slate-1 
        cursor-pointer"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2em"
        height="1.2em"
        viewBox="0 0 32 32">
        <path
          fill="currentColor"
          d="M16 4L6 14l1.41 1.41L15 7.83V28h2V7.83l7.59 7.58L26 14L16 4z"></path>
      </svg>
    </button>
  );
};
