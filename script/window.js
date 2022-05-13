buttonInfo = document.querySelector("#infoB");
buttonFaq = document.querySelector("#faqB");
info = document.querySelector("#info");
faq = document.querySelector("#faq");
w = document.querySelector(".window");

function show(card) {
  card.classList.remove('hidden');
  w.classList.remove('hidden');
  w.classList.add('show');
}

function hideMenu(card) {
  w.classList.remove('show');
  w.classList.add('hidden');
  card.classList.add('hidden');
}

buttonInfo.addEventListener('click', () => show(info));
buttonFaq.addEventListener('click', () => show(faq));
faq.addEventListener('click', () => hideMenu(faq));
info.addEventListener('click', () => hideMenu(info));

