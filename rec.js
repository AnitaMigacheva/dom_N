// let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
// let links = document.querySelectorAll(selector);
// links.forEach(link => link.style.color = 'orange');


//-------1---------
//
// function sumTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

//-------2--------

// function sumTo(n) {
//   if (n == 1) {
//     return n;
//   }
//   return n + sumTo(n - 1);
// }
//
// alert( sumTo(5) );

//--------------------------
// <script type="text/javascript">
//   let div = document.createElement('div');
//   div.className = "alert";
//   div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
//   document.body.append(div);
//
//   setTimeout(() => div.remove(), 5000);
//
// </script>
