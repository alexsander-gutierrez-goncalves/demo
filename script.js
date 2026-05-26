(function () {
  /** @type {HTMLAnchorElement} */
  [...document.getElementsByClassName('whatsapp')].forEach(e => {
    e.onclick = () => {
      const hour = new Date().getHours();
      const messages = [
        "Olá bom dia, tudo bem?, vim pelo site",
        "Olá boa tarde, tudo bem? vim pelo site",
        "Olá boa noite, tudo bem? vim pelo site"
      ];

      const message = encodeURI(
        hour > 8 && hour < 13 ? messages[0] :
          hour > 13 && hour < 18 ? messages[1] : messages[2]
      );
      e.href = `https://wa.me/5515997908554?text=${message}`;
    }
  });
}())