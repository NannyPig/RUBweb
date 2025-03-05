import { PropsWithChildren } from "react";

// interface MyButtonProps extends PropsWithChildren {
// //   label: string;
//   //   children: ReactNode;
// }

const MyButton = (props: PropsWithChildren) => {
  return (
    <button className="bg-sky-600 hover:bg-sky-500 px-4 py-2 rounded-lg text-white cursor-pointer">
      {props.children}
    </button>
  );
};

export default MyButton;
