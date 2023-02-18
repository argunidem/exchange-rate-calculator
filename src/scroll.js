export const scrollToCurrency = (e, data) => {
  if (data.currencies.length > 0) {
    const spanArray = Array.from(e.target.nextElementSibling.children).map(
      (li) => li.firstElementChild
    );
    const currencyLi = spanArray.find((element) => {
      return (
        element.innerText ===
        (data.isFirst ? data.converter.fromCurrency : data.converter.toCurrency)
      );
    });
    currencyLi.scrollIntoView({ behavior: 'smooth', block: 'center' });
    document.addEventListener('keydown', (e) => {
      const li = spanArray.find(
        (span) => e.key.toLowerCase() === span.innerText.charAt(0).toLowerCase()
      );
      if (li) {
        li.parentElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    });
  }
};
