$sellerId = 179571326;

const urlSellers = "https://api.mercadolibre.com/sites/MLA/search?seller_id=" + $sellerId;

const urlCategories = "https://api.mercadolibre.com/sites/MLA/categories/all";

const init = {
    method: "GET"
};

function importScript(name) {
    var s = document.createElement("script");
    s.src = name;
    document.querySelector("#ajax").appendChild(s);
}