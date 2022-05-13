buttonInfo = document.querySelector("#infoB");
buttonFaq = document.querySelector("#faqB");
info = document.querySelector("#info");
faq = document.querySelector("#faq");

function show(card) {
  card.classList.remove('hidden');
}

function hideMenu(card) {
  card.classList.add('hidden');
}

buttonInfo.addEventListener('click', () => show(info));
buttonFaq.addEventListener('click', () => show(faq));
faq.addEventListener('click', () => hideMenu(faq));
info.addEventListener('click', () => hideMenu(info));

