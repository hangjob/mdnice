import React from "react";
import "./index.css";

export default ({fill = "rgba(0,0,0,0.65)", style = {}, className = "icon", viewBox = "0 0 1024 1024"}) => (
  <svg
    style={style}
    viewBox={viewBox}
    className={className}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M512 0c-282.784 0-512 229.216-512 512s229.216 512 512 512 512-229.216 512-512-229.216-512-512-512zM816.064 816.064c-39.52 39.52-85.504 70.528-136.704 92.192-12.992 5.504-26.208 10.336-39.616 14.496l0-76.736c0-40.32-13.824-70.016-41.504-88.992 17.344-1.664 33.248-4 47.744-7.008s29.824-7.328 46.016-12.992 30.656-12.416 43.488-20.256 25.152-18.016 36.992-30.496 21.76-26.656 29.76-42.496 14.336-34.848 19.008-56.992 7.008-46.592 7.008-73.248c0-51.68-16.832-95.68-50.496-132 15.328-40 13.664-83.488-4.992-130.496l-12.512-1.504c-8.672-0.992-24.256 2.656-46.752 11.008s-47.744 22.016-75.744 40.992c-39.68-11.008-80.832-16.512-123.488-16.512-43.008 0-84 5.504-123.008 16.512-17.664-12-34.4-21.92-50.24-29.76s-28.512-13.152-38.016-16-18.336-4.576-26.496-5.248-13.408-0.832-15.744-0.512-4 0.672-4.992 0.992c-18.656 47.328-20.32 90.848-4.992 130.496-33.664 36.32-50.496 80.32-50.496 132 0 26.656 2.336 51.072 7.008 73.248s11.008 41.152 19.008 56.992 17.92 30.016 29.76 42.496 24.16 22.656 36.992 30.496 27.328 14.592 43.488 20.256 31.488 10.016 46.016 12.992 30.4 5.344 47.744 7.008c-27.328 18.656-40.992 48.32-40.992 88.992l0 78.24c-15.104-4.48-29.984-9.792-44.608-16-51.2-21.664-97.184-52.672-136.704-92.192s-70.528-85.504-92.192-136.704c-22.4-52.96-33.76-109.248-33.76-167.36s11.36-114.4 33.76-167.36c21.664-51.2 52.672-97.184 92.192-136.704s85.504-70.528 136.704-92.192c52.96-22.4 109.28-33.76 167.36-33.76s114.4 11.36 167.36 33.76c51.2 21.664 97.184 52.672 136.704 92.192s70.528 85.504 92.192 136.704c22.4 52.96 33.76 109.28 33.76 167.36s-11.36 114.4-33.76 167.36c-21.664 51.2-52.672 97.184-92.192 136.704z" />
  </svg>
);
