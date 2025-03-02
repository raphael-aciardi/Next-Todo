import Image from "next/image";

export function Header() {
  return (
    <div className="flex flex-col w-full gap-2 py-10 pt-20">
      <div className="flex justify-center items-center gap-0.5 w-full">
        <Image
          src="/logo.png"
          height={70}
          width={70}
          alt="Logo"
        />
        <Image
          src="/logoname.png"
          height={100}
          width={100}
          alt="Logo"
        />
      </div>
      <span className="text-stone-400 text-2xl text-center w-full">Organize and complete your pending tasks easily.</span>
    </div>

  );
}
