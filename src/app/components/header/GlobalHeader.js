"use client";
import header from "@/app/styles/Header.module.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function GlobalHeader(res) {
  const [isActive, setIsActive] = useState(false);
  const [isActiveCreate, setIsActiveCreate] = useState(false);
  const router = useRouter();

  const handleNavigateButtonClick = () => {
    setIsActive(!isActive);
  };
  const handleCreateButtonClick = () => {
    setIsActiveCreate(!isActiveCreate);
  };
  const handleReloadClick = () => {
    location.reload();
  };
  const handleNavigateToGroupCreatePage = () => {
    if (router.pathname === "/pages/group") {
      return;
    }
    router.push("/pages/group");
    handleNavigateButtonClick();
  };
  const handleNavigateToCreatePage = () => {
    if (router.pathname === "/pages/create") {
      return;
    }
    router.push("/pages/create");
    handleNavigateButtonClick();
  };
  const handleNavigateToSelectPage = () => {
    if (router.pathname === "/pages/select") {
      return;
    }
    router.push("/pages/select");
    handleNavigateButtonClick();
  };

  return (
    <header
      className={
        isActive ? `${header["header"]} ${header["active"]}` : header["header"]
      }
    >
      <div className={header.header_title}>
        <h1 className={header.header_title_txt}>Tasting Note</h1>
      </div>

      <div className={header.header_button}>
        <button
          type="button"
          className={header.button}
          onClick={handleNavigateButtonClick}
        >
          <span className={header.menu_bar}></span>
          <span className={header.menu_bar}></span>
          <span className={header.menu_bar}></span>
          <span className={header.visuallyHidden}>メニュー</span>
        </button>
      </div>

      {isActive && (
        <nav
          className={header.menu}
          // className={
          //   isActive ? `${header["menu"]} ${header["active"]}` : header["menu"]
          // }
        >
          <ul className={header.menu_list}>
            <li className={header.menu_item}>
              <button onClick={handleNavigateToSelectPage}>Select</button>
            </li>
            <li
              className={
                isActiveCreate
                  ? `${header["menu_item"]} ${header["active_create"]}`
                  : header["menu_item"]
              }
            >
              <button
                className={header.create_button}
                onClick={handleCreateButtonClick}
              >
                Create
                <span className={header.more_open}></span>
                <span className={header.more_close}></span>
              </button>
              {isActiveCreate && (
                <ul className={header.create_menu}>
                  <li className={header.create_menu_item}>
                    <button onClick={handleNavigateToGroupCreatePage}>
                      Group
                    </button>
                  </li>
                  <li className={header.create_menu_item}>
                    <button onClick={handleNavigateToCreatePage}>
                      NewPage
                    </button>
                  </li>
                </ul>
              )}
              {/* <li className={header.menu_item}>
               */}
            </li>

            <li className={header.menu_item}>
              <s>
                {/* <Link href={"/pages/download"} scroll={false} passHref> */}
                Download
                {/* </Link> */}
              </s>
            </li>
            <li className={header.menu_item}>
              <button
                type="button"
                onClick={handleReloadClick}
                className={header.reload_btn}
              >
                <span className={header.reload_img}>
                  <Image
                    src="/images/refresh_img.svg"
                    alt="リロードボタン"
                    width={48}
                    height={48}
                    priority
                  />
                </span>
                <span className={header.reload_txt}>Refresh</span>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
