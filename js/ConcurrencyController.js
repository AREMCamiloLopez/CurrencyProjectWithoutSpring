/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var currencyNames = 'https://openexchangerates.org/api/currencies.json?app_id=ada1e8cac2164d1fbea78c5f2559657e';
var currencyPrices = 'https://openexchangerates.org/api/latest.json?app_id=ada1e8cac2164d1fbea78c5f2559657e';

function loadCurrencies() {

    axios.get(currencyNames)
            .then(function (response) {
                for (var x in response) {
                    if (x === "data") {
                        for (var y in response[x]) {
                            var dropElement = document.createElement("a");
                            dropElement.setAttribute("class", "dropdown-item");
                            dropElement.setAttribute("onclick", "changeDropName(\"" + y + "\"" + "," + "\"1\")");
                            dropElement.innerHTML = y + " - " + response[x][y];
                            var dropElementCopy = dropElement.cloneNode(true);
                            dropElementCopy.setAttribute("onclick", "changeDropName(\"" + y + "\"" + "," + "\"2\")");
                            document.getElementById("menuButton1").appendChild(dropElement);
                            document.getElementById("menuButton2").appendChild(dropElementCopy);
                        }
                    }
                }
            });
    document.getElementById("body").style.overflowY = "hidden";
    createCurrenciesTable();
    updateCurrencies();
}

function changeDropName(nombre, id) {
    document.getElementById("currency" + id).innerHTML = nombre;
    document.getElementById("currency" + id + "Value").value = 0;
    document.getElementById("currency2Value").value = 0;
    getCurrencyPrice(String(document.getElementById("currency1").textContent));
}

function showOrHideCurrenciesTable() {
    if (document.getElementById("currencyTable").style.visibility === "visible") {
        document.getElementById("currencyTable").style.visibility = "hidden";
        document.getElementById("body").style.overflowY = "hidden";
        document.getElementById("formDiv").style.width = "100%";
        document.getElementById("secondDiv").style.width = "0%";
    } else {
        document.getElementById("currencyTable").style.visibility = "visible";
        document.getElementById("body").style.overflowY = "visible";
        document.getElementById("formDiv").style.width = "50%";
        document.getElementById("secondDiv").style.width = "50%";
    }
}

function showAlert(phrase, alert) {
    if (document.getElementById("updateCurrency") === null) {

        var divElement = document.createElement("div");
        divElement.setAttribute("class", "alert " + alert);
        divElement.setAttribute("role", "alert");
        divElement.setAttribute("id", "updateCurrency")
        divElement.innerHTML = phrase + "!";
        document.getElementById("mainForm").appendChild(divElement);
        setTimeout(function () {
            $('#updateCurrency').remove();
        }, 5000);
    }
}

function createCurrenciesTable() {

    if (document.getElementById("currencyTable") === null) {

        var headers = ["Name", "Full name"]

        var main = document.getElementById("secondDiv");
        var table = document.createElement("table");

        table.setAttribute("id", "currencyTable");
        table.setAttribute("class", "table table-striped");

        table.style.visibility = "hidden";
        table.style.position = "relative";
        table.style.width = "90%";

        var mainRow = document.createElement("tr");

        for (var x in headers) {
            var mainRowElement = document.createElement("th");
            mainRowElement.innerHTML = headers[x];
            mainRow.appendChild(mainRowElement);
        }

        table.appendChild(mainRow);
        axios.get(currencyNames)
                .then(function (response) {
                    for (var x in response) {
                        if (x === "data") {
                            for (var y in response[x]) {
                                var row = document.createElement("tr");
                                var rowItem1 = document.createElement("td");
                                var rowItem2 = document.createElement("td");
                                rowItem1.innerHTML = y;
                                rowItem2.innerHTML = response[x][y];
                                row.appendChild(rowItem1);
                                row.appendChild(rowItem2);
                                table.appendChild(row);
                            }

                        }
                    }
                });
        main.appendChild(table);
    } else {
        document.getElementById("currencyTable").remove();
    }
}

var currencyPrice;

function getCurrencyPrice(currencyName) {
    var response = globalCurrencyPrices;
    for (var x in response) {
        if (x === "data") {
            for (var y in response[x]) {
                if (y === "rates") {
                    for (var z in response[x][y]) {
                        if (z === currencyName) {
                            currencyPrice = response[x][y][z];
                        }
                    }
                }
            }
        }
    }
}

var globalCurrencyPrices;

function updateCurrencies() {
    axios.get(currencyPrices)
            .then(function (response) {
                globalCurrencyPrices = response;
            });
    showAlert("Currencies updated", "alert-success");
}

function convertCurrency() {

    if (!document.getElementById("currency1").textContent.includes("Currency")) {

        if (Number(document.getElementById("currency1Value").value) !== 0) {
            var currencyValue = document.getElementById("currency1Value").value;
            document.getElementById("currency2Value").value = currencyValue / currencyPrice;
            showAlert("Convertion completed", "alert-success");
        } else {
            showAlert("You must insert a value", "alert-danger");
        }
    } else {
        showAlert("You must select a currency", "alert-danger");
    }


}
