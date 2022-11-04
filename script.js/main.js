let images = [{
    url: "https://postila.ru/data/29/9a/52/00/299a520014c873af8eb5481bce94d635088a70e17ced4352b5f4ff1f0985c616.gif",
    //title: "Желаю всего самого наилучшего !"
  }, {
    url: "http://img0.liveinternet.ru/images/attach/c/8/102/722/102722324_81966463_Rozhd.gif",
    //title: "С Рождественским сочельником"
  }, {
    url: "https://s-zametki.ru/wp-content/uploads/2018/01/animatsionnye-otkrytki-s-rozhdestvom-samye-krasivye-rozhdestvenskie-1.gif",
    //title: "Классного Рождества"
  }, {
    url: "https://proprikol.ru/wp-content/uploads/2019/12/gifki-animaczii-s-rozhdestvom-39.gif",
    //title: "Пусть прилипает всё только хорошее"
  },{
    url: "https://kartinkigif.ru/_ph/56/2/324598085.gif",
    //title: "Света. Радости. Добра."
  }, {
    url:"http://img0.liveinternet.ru/images/attach/c/7/95/881/95881578_4723908_95766168_3979078_95763770_3324853_53206098_01_1_.gif",
    //title: 'Семейного уюта и тепла !'
  }, {
    url:"https://img-fotki.yandex.ru/get/9301/199203331.40/0_a8685_89cb5527_orig",
    //title: "Счастья. Любви."
  }, {
    url:"https://i10.fotocdn.net/v1/235/anim_m/325/2775008490.jpg",
    //title:"" 
  }, {
    url:"https://i0.wp.com/lifeo.ru/wp-content/uploads/gif-s-rozhdestvom-30-gap.jpg",
    //title:'Город наш заметает поршею. Рождество к нам приходит опять. Яжелаю Вам только хорошего. То, что можно друзьям пожелать !'
  }, {
    url:'https://bestgif.su/_ph/13/2/844935174.gif',
    //title:''
  }, {
    url:'https://img-fotki.yandex.ru/get/9510/199203331.41/0_a86d9_10cf42b6_orig',
    //title:''
  }, {
    url:'https://kartinki-life.ru/articles/2019/11/23/otkrytki-mercaushhie-animacionnye-gif-zimniy-sneg-1-22.gif',
   //title:''
  }, {
    url:'https://static.tunnel.ru/media/images/2016-09/post_comment/203633/image.gif',
     //title:''
  }, {
    url:'https://avatars.dzeninfra.ru/get-zen_doc/3965361/pub_5ff59ad9bb14d54ffbaf34cd_5ff5a16aaf142f0b17817bfd/orig',
    //title:''
  }, {
    url:'https://proprikol.ru/wp-content/uploads/2019/12/gifki-animaczii-s-rozhdestvom-58.gif',
   //title:''
  }, {
    url:'https://ferma-biz.ru/wp-content/uploads/2019/12/siyayuschaya-gif-otkritka-na-katolicheskoe-rozhdestvo.orig_-1.gif',
    //title:''
  }, {
    url:'https://www.cobracountry.com/wp-content/uploads/Xmas/Xmas-anim-whiteXmas-590x424.gif',
    //title:''
  }
  ];

function initSlider(options) {
  if (!images || !images.length) return;
  
  options = options || {
    titles: false,
    dots: true,
    autoplay: false
  };
  
  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".slider__arrows");
  let sliderDots = document.querySelector(".slider__dots");
  
    initImages();
    initArrows();
  
  if (options.dots) {
    initDots();
  }
  
  if (options.titles) {
    initTitles();
  }
  
  if (options.autoplay) {
    initAutoplay();
  }
  
  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}
        "style="background-image:url(${images[index].url});" 
        data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  
  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }
  
  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }
  
function moveSlider(num) {
  sliderImages.querySelector(".active").classList.remove("active");
  sliderImages.querySelector(".n" + num).classList.add("active");
  if (options.dots) {
  sliderDots.querySelector(".active").classList.remove("active");
  sliderDots.querySelector(".n" + num).classList.add("active");
  }
  if (options.titles) changeTitle(num);
}
  
function initTitles() {
  let titleDiv = `<div class="slider__images-title">${images[0]/*.title*/}</div>`;//*.title*/чтобы не отображался текст
  sliderImages.innerHTML += cropTitle(titleDiv, 100);//исправил 50 на 100, чтоб текст был полный
}
  
function changeTitle(num) {
  if (!images[num]/*.title*/) return;
  let sliderTitle = sliderImages.querySelector(".slider__images-title");
  sliderTitle.innerText = cropTitle(images[num].title, 100);//исправил 50 на 100
}//чтобы не отображался текст
  
function cropTitle(/*title,*/ size) {
  if (title.length >= size) {//исправил <= на >=, чтоб был полный текст
    return title;
  } else {
    return title.substr(0, size) + "";//...Убрал с кавычек, чтоб текст был полный
  }
}//чтобы не отображался текст
  
function initAutoplay() {
//отключаем автомат.перелисывания фото
  setInterval(() => {
    let curNumber = +sliderImages.querySelector(".active").dataset.index;
    let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, options.autoplayInterval);
  }
}

let sliderOptions = {
  dots: true,
  //titles: true,
  autoplay: true,
  autoplayInterval: 13000
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});

const cardOff = document.querySelector('.cardOff_tree');/*нажимаем на елку, чтобы  выключить Деда Мороза и Снегурку*/
//const photoOff = document.querySelector('.photoOff img');//нужно если нажимать на самого Деда Мороза и Снегурку, чтобы их выключить
// можно нажимать на самого Деда Мороза и Снегурку /*photoOff*/
cardOff/*photoOff*/.addEventListener('click', function showHide(event) {
  event.stopPropagation();//чтоб событие не всплывало 
  const photoOff = document.querySelector('.photoOff img');/*dancingSantaWithShowMaiden*/
    //photoOff.style.cursor = "pointer";
  if (photoOff.style.display == "block") { // если элемент найден // 
    photoOff.style.display = "none";
    return true;
  } else { // иначе он не найден
    photoOff.style.display = "block";
    return false;
  }
  //alert("hi");
});