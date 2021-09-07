/** @format */

export class WatchesDetail {
	constructor(e) {
		this.data = e;
	}

	loadWatchDetails(e) {
		const t = document.querySelector(".watch__title");
		t.innerHTML = "";
		e = this.data;
		this._renderHTML(e, t);
	}

	loadBandDetails(e) {
		const t = document.querySelector(".band__title");
		t.innerHTML = "";
		e = this.data;
		this._renderHTML(e, t);
	}

	_renderHTML(data, ParentEl) {
		data = `<div class="watch__title--name">
        ${data.name}
      </div>
      <div class="watch__title--detail">
        <div class="price">
            ${data.prijs}.
        </div>
        <div class="desc">

              <span>
                  <h6>Functions:</h6>
                  <p>${data.desc[0].func}</p>
              </span>
              <span>
              <h6>Uurwerk:</h6>
              <p>${data.desc[0].uurwrk}</p>
              </span>
        </div>
    </div>`;
		return ParentEl.insertAdjacentHTML("beforebegin", data), this;
	}
}

export default WatchesDetail;
