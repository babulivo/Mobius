function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add('jw-modal-open');
}

function closeModal() {
    document.querySelector('.jw-modal.open').classList.remove('open');
    document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function () {
    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal();
        }
    });
});


function handleFormSubmission(event) {
    event.preventDefault();

    document.getElementById("process").classList.add("hidden");
    document.getElementById("successMessage").classList.remove("hidden");

    setTimeout(function () {
        document.getElementById("subscribeForm").reset();
        document.getElementById("process").classList.remove("hidden");
        document.getElementById("successMessage").classList.add("hidden");
    }, 3000);
}

function handleFormSupport(event) {
    event.preventDefault();

    document.getElementById("supportForm").classList.add("hidden");
    document.getElementById("supportSuccessMsg").classList.remove("hidden");

    setTimeout(function () {
        closeModal();
        document.getElementById("supportForm").classList.remove("hidden");
        document.getElementById("supportSuccessMsg").classList.add("hidden");
        document.getElementById("supportForm").reset();
    }, 3000);
}


document.getElementById("subscribeForm").addEventListener("submit", handleFormSubmission);
document.getElementById("supportForm").addEventListener("submit", handleFormSupport);