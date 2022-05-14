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
  faq.classList.add('hidden');
  info.classList.add('hidden');
}

buttonInfo.addEventListener('click', () => show(info));
buttonFaq.addEventListener('click', () => show(faq));
w.addEventListener('click', () => hideMenu());

