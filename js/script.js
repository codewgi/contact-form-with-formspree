const contactForm = document.querySelector("#contact-form");
const loader = document.querySelector("#loader");

contactForm.addEventListener("submit", (e) => 
{
    e.preventDefault();
    loader.classList.replace("hidden", "grid");
    const url = e.target.action;

    const formData = new FormData(contactForm);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    })
    .then(() => {
        contactForm.reset();
        loader.classList.replace("grid", "hidden");
    })
    .catch((err) => console.log("err", err))
})