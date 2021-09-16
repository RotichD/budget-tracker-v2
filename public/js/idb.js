let db; //holds db connection

const request = indexedDB.open("budget_tracker", 1);

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  db.createObjectStore("new_fund", { autoIncrement: true });
};

request.onsuccess = function (event) {
  db = event.target.result;
    if (navigator.onLine) {
    }
};

request.onerror = function (event) {
  console.log(event.target.errorCode);
};

//writing Data to ObjectStores
function saveRecord(record) {
  const transaction = db.transaction(["new_fund"], "readwrite");

  const fundObjectStore = transaction.objectStore("new_fund");

  fundObjectStore.add(record);
}
