// const header = document.querySelector(".content")

// function toggleShow (){
//     header.classList.toggle("show")
// }
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: false,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
{
  // 1 masala faqat 0dan katta sonlar chiqsin
  function son(array) {
    let sum = array.filter((sin) => sin > 0);
    console.log(sum);
  }

  console.log(son([-5, 6, 3, -3, false]));
  console.log(son([12, 5, 33, -4, -6, true]));
}
{
  // 2 masala 10liklar xonasidagi sonni qaaytaring
  function son(number) {
    return Math.floor (number / 10) % 10;
  }

  console.log(son(123));
  console.log(son(4563));
}
{
  // 3 masala 1kirsa true 0 kirsa false boshqa sonlar un nan qaytsn
  function son(number) {
    if( number===1){
        return true
    } else if (number===0){
        return false
    } else {
        return NaN
    }
  }

  console.log(son(1));
  console.log(son(0));
  console.log(son(4));
}
{
  // 3 masala 1kirsa true 0 kirsa false boshqa sonlar un nan qaytsn
  function son(number) {
    if( number===1){
        return true
    } else if (number===0){
        return false
    } else {
        return NaN
    }
  }

  console.log(son(1));
  console.log(son(0));
  console.log(son(4));
}
// {
//     // 4 - masala
//     // try {
//     //     function card(num, boolean) {
//     //         if (boolean === false) {
//     //             return num
//     //                 .slice(15)
//     //                 .replace(25, "**** **** **** **")
//     //         } else {
//     //             return num
//     //         }
//     //     }
//     //     console.log( card("8600 1234 5671 2589", false) )
//     //     console.log( card("8600 1234 5671 2589", true) );
//     // } 
//     // catch (error) {
//     //     console.log("xato bor");
//     // }
// }

// { 
//     // 5 - masala
//     // try {
//     //     function checkPassword(password) {
//     //         if (password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password)) {
//     //             return true
//     //         }else{
//     //             return false
//     //         }
//     //     }
//     //     console.log( checkPassword("12345678") );
//     //     console.log( checkPassword("12345hello") );
//     // } catch (error) {
//     //    console.log("xato bor"); 
//     // }
// }

// {
//     // 6 - masala
//     // try {
//     //     function camelCase(str) {
//     //         return str.toLowerCase()
//     //                   .split(`-`)
//     //                   .map((text, index) => {
//     //                     if (index === 0) {
//     //                         return text;
//     //                     }
//     //                     return text.charAt(0). toUpperCase() + text.slice(1);
//     //                   })
//     //                   .join(``);
//     //     }
//     //     console.log(camelCase("kabab-case"));
//     //     console.log(camelCase("lorem-ipsum-dolor"));
//     // } catch (error) {
//     //     console.log("xato bor");
//     // }
// }

// {
//     try {
//         function bigAndSmall(num) {
//             const numbers = num.trim()
//                                .split(` `)
//                                .map(Number)
            
//             const min = Math.min(...numbers);
//             const max = Math.max(...numbers);

//             return {min, max}
//         }
//         console.log( bigAndSmall("1 2 3 4 5 "));
//         console.log( bigAndSmall("5 25 33 44"));
//     } catch (error) {
//         console.log("xatolik boe");
//     }
// }