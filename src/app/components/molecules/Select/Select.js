"use client";
import styles from "@/app/styles/Contents.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Select(context) {
  const data = context.data.allItems;
  const limitedData = data;
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  // const [showSearchButton, setShowSearchButton] = useState(false);
  const [checkbox, setCheckBox] = useState([]);

  const handleDeleteClick = () => {
    // 親コンポーネントにメッセージを送信
    setShowDeleteButton(!showDeleteButton);
  };
  // const handleSearchClick = () => {
  //   // 親コンポーネントにメッセージを送信
  //   setShowSearchButton(!showSearchButton);
  // };
  async function handleDeleteSubmit(e) {
    e.preventDefault();
    try {
      if (confirm("削除しますか？")) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/pages/api/delete/multiple`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "DELETE",

            body: JSON.stringify([...checkbox]),
          }
        );

        const json = await response.json();
        setShowDeleteButton(false);
        await location.reload();
        return alert(json.message);
      }
    } catch (err) {
      return alert("アイテム削除失敗/Select");
    }
  }

  return (
    <>
      <header className={styles.select_header}>
        <nav className={styles.select_header_menu}>
          <ul className={styles.select_menu_list}>
            <li className={styles.select_header_menu_item}>
              <button
                className={styles.select_header_menu_btn}
                onClick={handleDeleteClick}
              >
                <Image
                  src="/images/delete_img.svg"
                  alt="削除"
                  width={48}
                  height={48}
                  priority
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <h1 className={styles.contents_title}>SELECT</h1>
      <div className={styles.select_header_active_contents}>
        <ul className={styles.select_header_active_menu}>
          {showDeleteButton && (
            <li
              className={styles.select_header_active_menu_item}
              hidden={!showDeleteButton}
            >
              <button
                type="submit"
                onClick={handleDeleteSubmit}
                className={styles.select_delete_btn}
              >
                Delete
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className={styles.select_list_box}>
        <div className={styles.select_wrap}>
          {limitedData.map((beans, index) => (
            <div className={styles.select_beans} key={beans._id}>
              {showDeleteButton && (
                <div className={styles.select_checkbox}>
                  <input
                    type="checkbox"
                    defaultValue={beans._id}
                    onChange={(e) => setCheckBox([...checkbox, e.target.value])}
                  />
                </div>
              )}
              <div className={styles.select_index}>{index + 1}</div>
              <div className={styles.select_beans_data}>
                <div className={styles.select_date}>
                  <span className={styles.select_img_box}>
                    <Image
                      src="/images/calendar_month_img.svg"
                      alt="カレンダー"
                      width={48}
                      height={48}
                      priority
                    />
                  </span>
                  {beans.date}
                </div>
                <div className={styles.select_username}>
                  <span className={styles.select_img_box}>
                    <Image
                      src="/images/person_img.svg"
                      alt="ユーザー"
                      width={48}
                      height={48}
                      priority
                    />
                  </span>
                  {beans.username}
                </div>
                <div className={styles.select_groupname}>
                  <span className={styles.select_img_box}>
                    <Image
                      src="/images/group_img.svg"
                      alt="グループ名"
                      width={48}
                      height={48}
                      priority
                    />
                  </span>
                  {beans.groupname}
                </div>
              </div>
              <ul className={styles.select_list}>
                <li
                  className={`${styles.select_item_list} ${styles.select_item_coffee}`}
                >
                  <div className={styles.select_item_value}>
                    <span className={styles.select_img_box}>
                      <Image
                        src="/images/coffee_img.svg"
                        alt="coffee"
                        width={48}
                        height={48}
                        priority
                      />
                    </span>
                    {beans.coffee}
                  </div>
                </li>
                <li
                  className={`${styles.select_item_list} ${styles.select_item_roast}`}
                >
                  <div className={styles.select_item_title}>Roast</div>

                  <div className={styles.select_item_value}>
                    {beans.roastDegree} <br />
                    <output>
                      <input
                        type="range"
                        className={styles.select_input_roast}
                        value={beans.roast}
                        readOnly
                      />
                    </output>
                    <br />
                    {beans.roast}%
                  </div>
                </li>
                <li
                  className={`${styles.select_item_list} ${styles.select_item_aroma}`}
                >
                  <div className={styles.select_item_title}>Aroma</div>

                  <div className={styles.select_item_value}>
                    <table
                      border="0"
                      className={styles.select_item_aroma_table}
                    >
                      <tbody>
                        <tr className={styles.select_item_aroma_table_row}>
                          <th className={styles.select_item_smallTxt}>Dry</th>
                          <th className={styles.select_item_smallTxt}>Crust</th>
                          <th className={styles.select_item_smallTxt}>Break</th>
                        </tr>
                        <tr className={styles.select_item_aroma_table_row}>
                          <td>
                            {beans.aromaDryStrength}|{beans.aromaDryQuality}
                          </td>
                          <td>
                            {beans.aromaCrustStrength}|{beans.aromaCrustQuality}
                          </td>
                          <td>
                            {beans.aromaBreakStrength}|{beans.aromaBreakQuality}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>

                <li
                  className={`${styles.select_item_list} ${styles.select_item_result}`}
                >
                  <div className={styles.select_item_title}>Result</div>

                  <div className={styles.select_item_value}>
                    {beans.result}
                    <span className={styles.select_item_smallTxt}>/64</span>
                  </div>
                </li>

                <li
                  className={`${styles.select_item_list} ${styles.select_item_total}`}
                >
                  <div className={styles.select_item_title}>TOTAL(+36)</div>

                  <div className={styles.select_item_value} colSpan={2}>
                    {beans.total}
                    <span className={styles.select_item_smallTxt}>/100</span>
                  </div>
                </li>

                <li
                  className={`${styles.select_item_list} ${styles.select_item_defects}`}
                >
                  <div className={styles.select_item_title}>Defects</div>

                  <div className={styles.select_item_value}>
                    {beans.defects}
                  </div>
                </li>
                <li
                  className={`${styles.select_item_list} ${styles.select_item_cleancap}`}
                >
                  <div className={styles.select_item_title}>CleanCap</div>

                  <div className={styles.select_item_value}>
                    {beans.cleancap}
                  </div>
                </li>
                <li
                  className={`${styles.select_item_list} ${styles.select_item_sweet}`}
                >
                  <div className={styles.select_item_title}>Sweet</div>

                  <div className={styles.select_item_value}>{beans.sweet}</div>
                </li>
                <li
                  className={`${styles.select_item_list} ${styles.select_item_acidity}`}
                >
                  <div className={styles.select_item_title}>Acidity</div>

                  <div className={styles.select_item_value}>
                    {beans.acidity}
                  </div>
                </li>
                <li
                  className={`${styles.select_item_list} ${styles.select_item_mouthfeel}`}
                >
                  <div className={styles.select_item_title}>Mouthfeel</div>

                  <div className={styles.select_item_value}>
                    {beans.mouthfeel}
                  </div>
                </li>
                <li
                  className={`${styles.select_item_list} ${styles.select_item_flavor}`}
                >
                  <div className={styles.select_item_title}>Flavor</div>

                  <div className={styles.select_item_value}>{beans.flavor}</div>
                </li>
                <li
                  className={`${styles.select_item_list} ${styles.select_item_after}`}
                >
                  <div className={styles.select_item_title}>After</div>

                  <div className={styles.select_item_value}>{beans.after}</div>
                </li>
                <li
                  className={`${styles.select_item_list} ${styles.select_item_balance}`}
                >
                  <div className={styles.select_item_title}>Balance</div>

                  <div className={styles.select_item_value}>
                    {beans.balance}
                  </div>
                </li>
                <li
                  className={`${styles.select_item_list} ${styles.select_item_overall}`}
                >
                  <div className={styles.select_item_title}>OverAll</div>

                  <div className={styles.select_item_value}>
                    {beans.overall}
                  </div>
                </li>

                <li
                  className={`${styles.select_item_list} ${styles.select_item_impression}`}
                >
                  <div className={styles.select_item_title}>Impression</div>
                  {beans.impression.slice(0, 20)}
                </li>
                <li
                  className={`${styles.select_btn_box} ${styles.select_item_btn}`}
                >
                  <button type="button" className={styles.icon_btn}>
                    <Link
                      href={`/pages/update/${beans._id}`}
                      scroll={false}
                      passHref
                    >
                      <Image
                        src="/images/edit_img.svg"
                        alt="編集ボタン"
                        width={48}
                        height={48}
                        priority
                      />
                    </Link>
                  </button>
                  <button type="button" className={styles.icon_btn}>
                    <Link href={`/pages/${beans._id}`} scroll={false} passHref>
                      <Image
                        src="/images/visibility_img.svg"
                        alt="閲覧ボタン"
                        width={48}
                        height={48}
                        priority
                      />
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
