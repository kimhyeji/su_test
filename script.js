function Box1__init() {
  let $tabList = $(".box-1__head ul");
  let $tabs = $tabList.find("li");
  let $prevBtn = $(".btn-prev");
  let $nextBtn = $(".btn-next");
  let visibleCount = 3;
  let currentIndex = 0;
  let totalTabs = $tabs.length;

  // 탭 클릭
  $tabs.click(function () {
    let $this = $(this);
    let thisIndex = $this.index();

    $tabs.removeClass("active");
    $this.addClass("active");

    $(".box-1__main ul li")
      .hide()
      .removeClass("active")
      .eq(thisIndex)
      .addClass("active")
      .fadeIn(500);
  });

  // 왼쪽 버튼
  $prevBtn.click(function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlide();
    }
  });

  // 오른쪽 버튼
  $nextBtn.click(function () {
    if (currentIndex < totalTabs - visibleCount) {
      currentIndex++;
      updateSlide();
    }
  });

  function updateSlide() {
    let tabWidth = $tabs.outerWidth(true);
    $tabList.css("transform", `translateX(${-tabWidth * currentIndex}px)`);
  }
}

Box1__init();
