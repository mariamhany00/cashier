import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  
  return (
    <div className="fixed top-0 left-[13px] w-[260px] h-[1032px] bg-white text-gray-800 pt-[30px] pb-[30px] px-[43px]">
      <h2
        className="mb-6"
        style={{
          color: "#246FA8",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "48px",
          lineHeight: "100%",
          letterSpacing: "0%",
          textAlign: "center",
        }}
      >
        Yoomy
      </h2>
      <ul className="space-y-4 w-full">
        <li className="border border-[#246FA8] rounded-md py-2 flex justify-center items-center">
          <Link
            to="/home/dashboard"
            className="flex items-center gap-2 hover:text-[#1a4f7c] font-semibold text-lg text-[#246FA8]"
          >
            <svg
              className="w-6 h-6 text-[#246FA8]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
              />
            </svg>
            Dashboard
          </Link>
        </li>
        <li className="border border-[#246FA8] rounded-md py-2 flex justify-center items-center">
          <Link
            to="/home/tables"
            className="flex items-center gap-2 hover:text-[#1a4f7c] font-semibold text-lg text-[#246FA8] text-center"
          >
            <svg
              className="w-8 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M9.98189 4.50602c1.24881-.67469 2.78741-.67469 4.03621 0l3.9638 2.14148c.3634.19632.6862.44109.9612.72273l-6.9288 3.60207L5.20654 7.225c.2403-.22108.51215-.41573.81157-.5775l3.96378-2.14148ZM4.16678 8.84364C4.05757 9.18783 4 9.5493 4 9.91844v4.28296c0 1.3494.7693 2.5963 2.01811 3.2709l3.96378 2.1415c.32051.1732.66011.3019 1.00901.3862v-7.4L4.16678 8.84364ZM13.009 20c.3489-.0843.6886-.213 1.0091-.3862l3.9638-2.1415C19.2307 16.7977 20 15.5508 20 14.2014V9.91844c0-.30001-.038-.59496-.1109-.87967L13.009 12.6155V20Z" />
            </svg>
            Tables
          </Link>
        </li>
        <li className="border border-[#246FA8] rounded-md py-2 flex justify-center items-center">
          <Link
            to="/home/menu"
            className="flex items-center gap-2 hover:text-[#1a4f7c] font-semibold text-lg text-[#246FA8] text-center"
          >
            <svg
              className="w-[30px] h-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.011 13H20c-.367 2.5551-2.32 4.6825-4.9766 5.6162V20H8.97661v-1.3838C6.31996 17.6825 4.36697 15.5551 4 13h14.011Zm0 0c1.0995-.0059 1.989-.8991 1.989-2 0-.8637-.5475-1.59948-1.3143-1.87934M18.011 13H18m0-3.99997c.2409 0 .4718.04258.6857.12063m0 0c.8367-1.0335.7533-2.67022-.2802-3.50694-1.0335-.83672-2.5496-.6772-3.3864.35631-.293-1.50236-1.7485-2.15377-3.2509-1.8607-1.5023.29308-2.48263 1.74856-2.18956 3.25092C8.9805 6.17263 7.6182 5.26418 6.15462 6.00131 4.967 6.59945 4.45094 8.19239 5.04909 9.38002m0 0C4.37083 9.66467 4 10.3357 4 11.1174 4 12.1571 4.84288 13 5.88263 13m-.83354-3.61998c.2866-.12029 1.09613-.40074 2.04494.3418m5.27497-.89091c1.0047-.4589 2.1913-.01641 2.6502.98832"
              />
            </svg>
            Menu
          </Link>
        </li>
        <li className="border border-[#246FA8] rounded-md py-2 flex justify-center items-center">
          <Link
            to="/home/settings"
            className="flex items-center gap-2 hover:text-[#1a4f7c] font-semibold text-lg text-[#246FA8] text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[30px] h-[22px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Settings
          </Link>
        </li>
        <li className="border border-[#246FA8] rounded-md py-2 flex justify-center items-center">
          <Link
            to="/home/cashier"
            className="flex items-center gap-2 hover:text-[#1a4f7c] font-semibold text-lg text-[#246FA8] text-center"
          >
            <svg
              className="w-6 h-6 text-[#246FA8]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
            Cashier
          </Link>
        </li>
        <li className="border border-[#246FA8] rounded-md py-2 flex justify-center items-center">
          <Link
            to="/home/history"
            className="flex items-center gap-2 hover:text-[#1a4f7c] font-semibold text-lg text-[#246FA8] text-center"
          >
            <svg
              className="w-6 h-6 text-[#246FA8]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            History
          </Link>
        </li>
        <li className="border border-[#246FA8] rounded-md py-2 flex justify-center items-center">
          <Link
            to="/home/store"
            className="flex items-center gap-2 hover:text-[#1a4f7c] font-semibold text-lg text-[#246FA8] text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#246FA8]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
              />
            </svg>
            Store
          </Link>
        </li>
        <li className="border border-[#246FA8] rounded-md py-2 flex justify-center items-center">
          <Link
            to="/home/first"
            className="hover:text-[#1a4f7c] font-semibold text-lg text-[#246FA8] text-center"
          >
            First Page
          </Link>
        </li>
      </ul>
    </div>
  );
}
