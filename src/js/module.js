/** @format */

export class WatchesDetail {
	constructor(e) {
		this.data = e;
	}
	loadWatchDetails(e) {
		const t = document.querySelector(".watch__title");
		t.innerHTML = "";
		e = this.data;
		// console.log(this.data);
		e = `<div class="watch__title--name">
                        ${e.name}
                      </div>
                      <div class="watch__title--detail">
                        <div class="price">
                            ${e.prijs}.
                        </div>
                        <div class="desc">

                              <span>
                                  <h6>Functions:</h6>
                                  <p>${e.desc[0].func}</p>
                              </span>
                              <span>
                              <h6>Uurwerk:</h6>
                              <p>${e.desc[0].uurwrk}</p>
                              </span>
                        </div>
                    </div>`;
		return t.insertAdjacentHTML("beforebegin", e), this;
	}
}
export class Band {
	constructor(e) {
		this.data = e;
	}
	loadBands() {
		const a = document.querySelector(".project__lists--items");
		console.log(this.data), (a.innerHTML = "");
		const n = this.limit;
		return (
			this.data.forEach(function (e, t) {
				e.id < n && a.insertAdjacentHTML("afterbegin", "");
			}),
			this
		);
	}
}

export default WatchesDetail;
