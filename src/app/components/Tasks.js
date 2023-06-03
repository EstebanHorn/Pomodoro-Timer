import { BsPlusSquare, BsCheckSquare } from 'react-icons/bs';

export default function Tasks() {
    return (
      <div className="mt-10 ">
        <ul>
            <li className="bg-[#004280] h-14 my-2 flex items-center justify-center text-white text-4xl rounded-lg">
                Estudiar fisica
                <BsCheckSquare/>
            </li>
            <li className="bg-[#004280] h-14 flex my-2 items-center justify-center text-white text-4xl rounded-lg">
                <button>
                <BsPlusSquare/>
                </button> 
            </li>
        </ul>
      </div>
    );
  }
  