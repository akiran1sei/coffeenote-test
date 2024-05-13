"use client";
import { useRouter } from "next/navigation";
import Buttons from "@/app/styles/Btn.module.css";
import Image from "next/image";
export function HomeBtn() {
  const router = useRouter();

  return (
    <button
      type="button"
      className={Buttons.icon_btn}
      onClick={() => router.replace("/pages/select")}
    >
      <Image
        src="/images/home_img.svg"
        alt="Homeボタン"
        width={24}
        height={24}
        priority
      />
    </button>
  );
}
