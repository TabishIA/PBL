
   
    var enterName = document.querySelector("#enterName");
    var enterAddress = document.querySelector("#enterAddress");
    var enterSex = document.querySelector("#enterSex");
    var enterPhone = document.querySelector("#enterPhone");
    var enterDescription = document.querySelector("#enterDescription");
    var enterWorkType = document.querySelector("#enterWorkType");

    var findID = document.querySelector("#findID");
    var findName = document.querySelector("#findName");
    var findAddress = document.querySelector("#findAddress");
    var findSex = document.querySelector("#findSex");
    var findPhone = document.querySelector("#findPhone");
    var findDescription = document.querySelector("#findDescription");
    var findWorkType = document.querySelector("#findWorkType");

    var insertBtn = document.querySelector("#insert");
    var updateBtn = document.querySelector("#update");
    var removeBtn = document.querySelector("#remove");
    var findBtn = document.querySelector("#find");


        function InsertWorker() {
            const workersRef = db.ref("Workers");
            const newWorkerRef = workersRef.push(); // Generate unique key
            newWorkerRef.set({
                Name: enterName.value,
                Address: enterAddress.value,
                Sex: enterSex.value,
                Phone: enterPhone.value,
                Description: enterDescription.value,
                WorkType: enterWorkType.value
            })
            .then(() => {
                alert("Worker added successfully");
            })
            .catch((error) => {
                alert(error);
            });
        }

        function FindWorker() {
            const workerRef = db.ref("Workers/" + findID.value);

            workerRef.once("value")
            .then((snapshot) => {
                const workerData = snapshot.val();
                if (workerData) {
                    findName.innerText = "Name: " + workerData.Name;
                    findAddress.innerText = "Address: " + workerData.Address;
                    findSex.innerText = "Sex: " + workerData.Sex;
                    findPhone.innerText = "Phone: " + workerData.Phone;
                    findDescription.innerText = "Description: " + workerData.Description;
                    findWorkType.innerText = "Work Type: " + workerData.WorkType;
                } else {
                    alert("No worker found with that ID");
                }
            })
            .catch((error) => {
                alert(error);
            });
        }

        function UpdateWorker() {
            const workerRef = db.ref("Workers/" + findID.value);
            workerRef.update({
                Name: enterName.value,
                Address: enterAddress.value,
                Sex: enterSex.value,
                Phone: enterPhone.value,
                Description: enterDescription.value,
                WorkType: enterWorkType.value
            })
            .then(() => {
                alert("Worker updated successfully");
            })
            .catch((error) => {
                alert(error);
            });
        }

        function RemoveWorker() {
            const workerRef = db.ref("Workers/" + findID.value);
            workerRef.remove()
            .then(() => {
                alert("Worker deleted successfully");
            })
            .catch((error) => {
                alert(error);
            });
        }

        insertBtn.addEventListener('click', InsertWorker);
        updateBtn.addEventListener('click', UpdateWorker);
        removeBtn.addEventListener('click', RemoveWorker);
        findBtn.addEventListener('click', FindWorker);
