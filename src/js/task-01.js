const mainList = document.querySelector("ul");
console.log(mainList);
const listItems = mainList.querySelectorAll(".item");
console.log(`Number of categories: ${listItems.length}`);
const h2Name = mainList.getElementsByTagName("h2");
listItems.forEach((element) => {
    console.log("Category:", element.getElementsByTagName("h2")[0].textContent);
    console.log("Elements:", element.getElementsByTagName("li").length);
});
