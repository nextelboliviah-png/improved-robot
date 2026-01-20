const itemsEl = document.querySelector("#items");
const tabs = document.querySelectorAll(".tab");

const loginModal = document.querySelector("#loginModal");
const loginTitle = document.querySelector("#loginTitle");
const loginHint = document.querySelector("#loginHint");
const userEl = document.querySelector("#user");
const passEl = document.querySelector("#pass");

const openAdmin = document.querySelector("#openAdmin");
const openOwner = document.querySelector("#openOwner");

const demoItems = [
  { title: "Recurso 01", desc: "Descripción corta del recurso." },
  { title: "Recurso 02", desc: "Descripción corta del recurso." },
  { title: "Recurso 03", desc: "Descripción corta del recurso." },
  { title: "Recurso 04", desc: "Descripción corta del recurso." },
];

function renderItems(list){
  itemsEl.innerHTML = "";
  list.forEach(i => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<strong>${i.title}</strong><div class="muted">${i.desc}</div>`;
    itemsEl.appendChild(div);
  });
}

function setActiveTab(view){
  tabs.forEach(t => t.classList.toggle("active", t.dataset.view === view));
  // Aquí puedes cambiar contenido según la pestaña (admin/owner/panel)
  // Por ejemplo, filtrar items o mostrar otra sección.
}

tabs.forEach(t => {
  t.addEventListener("click", () => setActiveTab(t.dataset.view));
});

function openLogin(role){
  loginTitle.textContent = `Login ${role}`;
  loginHint.textContent = `Demo: aquí conectarías tu backend real (Firebase, API, etc.).`;
  userEl.value = "";
  passEl.value = "";
  loginModal.showModal();
}

openAdmin.addEventListener("click", () => openLogin("Admin"));
openOwner.addEventListener("click", () => openLogin("Dueño"));

document.querySelector("#loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  // IMPORTANTE: Nunca guardes contraseñas en frontend.
  // Aquí normalmente harías un POST a tu servidor.
  alert("Demo: login enviado (conecta esto a tu backend).");
  loginModal.close();
});

renderItems(demoItems);
setActiveTab("panel");
