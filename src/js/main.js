/** @format */

import { WatchesDetail } from "../js/module.js";
import { watches, countries } from "./data.js";

const pages = Array.from(document.querySelectorAll(".page")), // so as to get all Array prototypes to use
	verder = document.querySelectorAll(".verder"),
	terug = document.querySelectorAll(".terug"),
	mainPage = document.querySelector(".pages"),
	progress = document.querySelector(".progress-bar"),
	watchSelect = document.querySelector(".watchpicker"),
	countrySelect = document.querySelector(".countrypicker");

const switchPages = (btnType) => {
	btnType.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			if (btn.classList.contains("verder")) {
				changePage("verder");
			} else if (btn.classList.contains("terug")) {
				changePage("terug");
			}
		});
	});
};
switchPages(verder);
switchPages(terug);

const changePage = (btn) => {
	let index = 0;

	const active = document.querySelector(".pages .page.active");
	index = pages.indexOf(active);
	pages[index].classList.remove("active", "animated");
	if (btn === "verder") {
		index++;
		progress.style.width = `${index * 25}%`;
		pages[index].classList.add("active", "animated-right");
	} else if (btn === "terug") {
		index--;
		progress.style.width = `${index * 25}%`;
		pages[index].classList.add("active", "animated-left");
	}
};

/**
 * Create a new Instance of the WatchDetails class and get access to the methods inside of it
 * This class render the watch detail when user selects the type of watch they want
 * It can also render the Band details when user selects one of them
 */

const watch = new WatchesDetail(watches);
// console.log(watch.data);

watchSelect.addEventListener("change", (e) => {
	const val = e.target.value;
	let watch = new WatchesDetail(watches.find((el) => el.name === val));
	// console.log(watch);
	watch.loadWatchDetails(val);
});

const loadOptions = (arr, ParentEl) => {
	arr.map((data) => {
		return ParentEl.appendChild(document.createElement("OPTION")).appendChild(
			document.createTextNode(data.name)
		);
	});
};

loadOptions(countries, countrySelect);
loadOptions(watches, watchSelect);
