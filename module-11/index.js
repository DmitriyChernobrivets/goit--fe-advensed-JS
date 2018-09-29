"use strict";
const LAPTOPS = [
  {
    size: 13,
    color: "white",
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "gray",
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "black",
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "white",
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "gray",
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "black",
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "white",
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "gray",
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "black",
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  }
];
const FORM = document.querySelector(".form");
const RESET = document.querySelector(".reset");
const ROOT = document.querySelector(".root");
const TEMPLATE = document.querySelector("#card").innerHTML.trim();
const templateFunc = Handlebars.compile(TEMPLATE);
let filteredArr = null;
let markup = null;
const CHECKBOXES = Array.from(
  document.querySelectorAll("input[type=checkbox]")
);

const resetFunc = () => {
  ROOT.innerHTML = "";
};

const checkboxFilter = filter => {
  CHECKBOXES.map(el => {
    switch (true) {
      case el.name === "size" && el.checked:
        filter.sizes.push(+el.value);
        break;
      case el.name === "color" && el.checked:
        filter.colors.push(el.value);
        break;
      case el.name === "release_date" && el.checked:
        filter.release_dates.push(+el.value);
        break;
    }
  });
};

const filterMatch = (obj, filter) => {
  return (
    (filter.sizes.includes(obj.size) || (filter.sizes.length === 0)) &&
    (filter.colors.includes(obj.color) || (filter.colors.length === 0)) &&
    (filter.release_dates.includes(obj.release_date) || (filter.release_dates.length == 0))
  );
}

const arrayFilter =()=> {
  filteredArr = LAPTOPS.filter(el => {
    filterMatch(el, filter);
  });
};

const isEmptySearch = (filter, markup) => {
  let isEmptySearch =
    filter.sizes.length == 0 &&
    filter.release_dates.length == 0 &&
    filter.colors.length == 0
      ? "<p class='err'>НИЧEГО НЕ НАЙДЕНО</>"
      : markup;
  return isEmptySearch;
};

const submitForm = e => {
  e.preventDefault();
  const filter = {
    sizes: [],
    colors: [],
    release_dates: []
  };
  checkboxFilter(filter);
  arrayFilter(filter);
  markup = templateFunc(filteredArr);
  ROOT.innerHTML = isEmptySearch(filter, markup);
};

FORM.addEventListener("submit", submitForm);
RESET.addEventListener("click", resetFunc);
