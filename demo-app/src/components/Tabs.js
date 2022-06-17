import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./tabs.css";
const Tabs = () => {
  let [left, setLeft] = useState("10px");
  let [activeTab, setActiveTab] = useState("tab1");
  let tabs = ["tab1", "tab2", "tab3", "tab4", "tab5", "op", "po"];
  let [indicatorWidth, setIndicatorWidth] = useState(
    `calc(calc(100% / ${tabs.length}) - 4px)`
  );
  useEffect(() => {
    setIndicatorWidth(`calc(calc(100% / ${tabs.length}) - 4px)`);
  }, [tabs.length]);
  return (
    <div>
      <div className="tabs">
        <div className="tabs-header">
          {tabs.map((v, index) => {
            return (
              <div
                onClick={() => {
                  setLeft(
                    `calc(calc(calc(calc(${indicatorWidth}) * ${index}) + 10px) + ${index}px)`
                  );
                  setActiveTab(v);
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    border: "none",
                    outline: "none",
                  }}
                  to={"/"}
                >
                  {v}
                </Link>
              </div>
            );
          })}
        </div>
        <div
          style={{ left: left, width: indicatorWidth }}
          className="tab-indicator"
        ></div>
        <div className="tab-body">
          {activeTab === "tab1" && (
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              maiores ipsa sunt minima optio minus architecto quasi dicta,
              numquam eligendi, cumque ullam a deserunt perferendis similique
              facere non placeat eos! Quaerat, illum quasi necessitatibus illo
              mollitia non placeat, a vitae minus maiores at. Molestias
              voluptatum qui maiores perferendis cumque, beatae illo enim
              aliquam dolores velit aperiam ducimus facere explicabo inventore?
            </div>
          )}
          {activeTab === "tab2" && (
            <div>
              numquam necessitatibus rerum ducimus? Deleniti, error corporis.
              Voluptatum nihil vel placeat laudantium labore, quia neque quidem
              nisi explicabo ipsum illo aperiam aspernatur at saepe doloribus
              quis ad omnis quaerat iste. Dolorem alias nostrum vel fugiat!
              Laboriosam, nesciunt! Inventore ea illo doloribus, sequi eius
              error. Asperiores architecto debitis ab iste soluta, doloremque
              dolorum repudiandae recusandae repellendus ratione ad obcaecati
              odio voluptate eum distinctio cum, nam aliquid nulla. Maxime?
            </div>
          )}
          {activeTab === "tab3" && (
            <div>
              tates quod repellendus libero aliquid quibusdam, voluptas
              perferendis? Nemo ratione repudiandae pariatur, deleniti nisi
              possimus natus doloremque quae aliquam sequi inventore iure, culpa
              reprehenderit, commodi rerum modi temporibus consectetur aliquid
              voluptatem quas velit nobis? Eligendi a quibusdam libero? Animi
              dolores cum beatae possimus, eaque molestiae molestias nostrum
              harum? Placeat saepe quaerat distinctio, harum, incidunt
              praesentium minima odit, tempora tenetur ex est quae ea eligendi
              non. Possimus, fugiat dicta. Eaque placeat, consectetur officia
              reiciendis explicabo ea quaerat exercitationem, dolorem
              repellendus natus quos earum unde maxime? Ut nisi laboriosam
              quisquam quae atque hic recusandae delectus cum, quam ullam saepe
              blanditiis.
            </div>
          )}
          {activeTab === "tab4" && (
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              voluptate obcaecati officiis odit voluptatum quibusdam suscipit
              voluptatibus incidunt saepe tenetur dicta, totam quae aperiam rem
              possimus praesentium distinctio numquam fugit. Debitis
              perferendis, consequatur aperiam ipsa mollitia necessitatibus
              minima! Nam velit numquam consectetur assumenda rem fugiat
              quibusdam exercitationem quas facere aliquid ratione aspernatur
              praesentium, in fuga blanditiis dolorem. At, iste eveniet.
              Accusamus pariatur rerum, veniam ullam illum quibusdam qui.
              Laboriosam, temporibus velit non perspiciatis rerum rem tempora
              laborum libero. Minus tempora inventore laudantium? Volup
            </div>
          )}
          {activeTab === "tab5" && (
            <div>
              <h1>Hello World</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
