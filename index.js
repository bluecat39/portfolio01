(() => {
  "use strict";

  //  ヘッダー表示
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("header_show", window.scrollY > 570);
  });

  //  ハンバーガーメニュー
  const hamburger = () => {
    document.getElementById("line1").classList.toggle("line_1");
    document.getElementById("line2").classList.toggle("line_2");
    document.getElementById("line3").classList.toggle("line_3");
    document.getElementById("nav").classList.toggle("in");
  };
  document.getElementById("hamburger").addEventListener("click", () => {
    hamburger();
  });

  //  メインビジュアル
  const changeMainV = () => {
    const mainVisual = document.querySelectorAll("[data-img]");

    const ifMainV = (small, large) => {
      if (screen.availWidth < 900) {
        mainVisual.forEach((mainV) => {
          mainV.style.width = 100 + small + "%";
        });
      } else {
        mainVisual.forEach((mainV) => {
          mainV.style.width = 100 / 3 + large + "%";
        });
      }
    };

    window.addEventListener("resize", () => {
      ifMainV(0, 0);
    });

    window.addEventListener("scroll", () => {
      const scrollYValue = window.pageYOffset;
      ifMainV(-scrollYValue * 0.1, scrollYValue * 0.1);
    });
  };
  changeMainV();

  // フェードイン定義
  const windowH = window.innerHeight;
  let divisor = 1.2,
    nowY;
  const $access = document.getElementById("js-access");

  //  サイドバーフェードイン
  const showSideBar = () => {
    const $sideBar = document.querySelector(".side-bar");
    const $gallery = document.getElementById("js-gallery");

    window.addEventListener("scroll", () => {
      nowY = window.scrollY || window.pageYOffset;

      const galleryY = $gallery.getBoundingClientRect().top + nowY;
      const accessY = $access.getBoundingClientRect().top + nowY;

      if (
        galleryY - windowH / divisor < nowY &&
        nowY < accessY - windowH / divisor
      ) {
        $sideBar.classList.add("sideBar_show");
      } else {
        $sideBar.classList.remove("sideBar_show");
      }
    });
  };
  showSideBar();

  //  各要素フェードイン
  const showScroll = () => {
    const $element = document.querySelectorAll(".fadeinElem");
    let elementY;

    window.addEventListener(
      "scroll",
      () => {
        nowY = window.scrollY || window.pageYOffset;
        let count = 0;
        while (count < $element.length) {
          ((args) => {
            elementY = $element[args].getBoundingClientRect().top + nowY;
            if (nowY > elementY - windowH / divisor) {
              $element[args].classList.add("show");
            } else {
              $element[args].classList.remove("show");
            }
          })(count);
          count++;
        }
      },
      false
    );
  };
  showScroll();

  //アクセスの背景登場イベント
  const showAccessBg = () => {
    const $accessBg = document.getElementById("js-accessBg");
    const $contact = document.getElementById("js-contact");
    window.addEventListener("scroll", () => {
      nowY = window.scrollY || window.pageYOffset;

      const accessY = $access.getBoundingClientRect().top + nowY,
        contactY = $contact.getBoundingClientRect().top + nowY;

      $accessBg.classList.toggle(
        "access-bg-show",
        accessY - windowH / divisor < nowY &&
          nowY < contactY - windowH / divisor
      );
      console.log(
        accessY - windowH / divisor < nowY &&
          nowY < contactY - windowH / divisor
      );
    });
  };
  showAccessBg();
})();
