import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';


export default function Badge({ children, color, size, icon }) {
  const styles = {
    color: {
      primary: "bg-pink-500 rounded-full",
      secondary: "bg-blue-500 rounded-full",
    },
    size: {
        small: "text-sm w-30 h-10 p-4",
        large: "text-lg w-30 h-10 p-4",
    },
    icon: {
      check: <AiOutlineCheckCircle/>,
      clock: <BiTime />,
    },
  };

  return (
    <div
      className={`flex items-center ${styles.color[color]} ${styles.size[size]}`}
    >
      {styles.icon[icon]}
      {children !== undefined && children}
    </div>
  );
  }
