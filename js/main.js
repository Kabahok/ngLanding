"use strict";

console.log('global');
"use strict";

console.log('maxgraph');
"use strict";

var switchItem = document.querySelector(".promo__switch"),
    switchRound = document.querySelector(".promo__round");
switchItem.addEventListener('click', function () {
  switchRound.classList.toggle('active');
});
//# sourceMappingURL=main.js.map
