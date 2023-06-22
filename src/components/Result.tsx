import axios from "axios";
import { useEffect } from "react";
import { Types } from "../types";

interface Props {
  search: string;
  result: Types | null;
  setResult: (result: Types) => void;
}

const Result = ({ search, result, setResult }: Props) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://geo.ipify.org/api/v2/country?apiKey=at_yfj8bOcF1fhakhsJHrm1zdyBsBRkx&ipAddress=${search}`
        );
        const data = response.data;
        setResult(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();

    console.log(result);
  }, [search]);

  return (
    <div className="bg-white rounded-[15px] px-[32px] py-[37px] flex flex-col items-center mt-6 gap-6">
      <h1 className="flex flex-col text-[#2C2C2C] font-medium tracking-[-0.232px] text-[20px] gap-[7px] ">
        <span className="opacity-50 text-[10px] font-bold tracking-[1.75px] text-center">
          IP ADDRESS
        </span>
        {`${result !== null ? result?.ip : "loading"}`}
      </h1>
      <h1 className="flex flex-col text-[#2C2C2C] font-medium tracking-[-0.232px] text-[20px] gap-[7px] ">
        <span className="opacity-50 text-[10px] font-bold tracking-[1.75px] text-center">
          LOCATION
        </span>
        {result?.location.region}
      </h1>
      <h1 className="flex flex-col text-[#2C2C2C] font-medium tracking-[-0.232px] text-[20px] gap-[7px] ">
        <span className="opacity-50 text-[10px] font-bold tracking-[1.75px] text-center">
          TIMEZONE
        </span>
        {result?.location.timezone}
      </h1>
      <h1 className="flex flex-col text-[#2C2C2C] font-medium tracking-[-0.232px] text-[20px] gap-[7px] ">
        <span className="opacity-50 text-[10px] font-bold tracking-[1.75px] text-center">
          ISP
        </span>
        {result?.isp}
      </h1>
    </div>
  );
};

export default Result;
