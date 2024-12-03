import { Laptop } from "lucide-react";
import SearchComponent from "./_components/search";

export default function ChatHomeScreen() {
  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center bg-[#222E35] text-center">
        <div className="max-w-md space-y-2">
          <Laptop className="w-72 h-72 mx-auto text-[#364147]" />
          <h2 className="text-[#E9EDEF] text-3xl font-light">
            Obviously, it's not Whatsapp.
          </h2>
          <p className="text-[#8696A0]">created by Xiabytes</p>
          <SearchComponent onSidebar={false} />
        </div>
      </div>
    </>
  );
}
