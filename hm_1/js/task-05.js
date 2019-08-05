const countryChina = 'Китай';
const countryChile = 'Чили';
const countryAustralia = 'Австралия';
const countryIndia = 'Индию';
const countryJamaica = 'Ямайку'; 
const countryChinaPrice = 100;
const countryChilePrice = 250;
const countryAustraliaPrice = 170;
const countryIndiaPrice = 80;
const countryJamaicaPrice = 120;
const inputCountry = prompt('Введите страну');
if (inputCountry === null) {
  alert('Отменено пользователем!');
}
switch (inputCountry.toLowerCase()) {
  case 'китай':
    console.log(`Доставка в ${countryChina} будет стоить ${countryChinaPrice} кредитов`);
    break;
      case 'чили':
        console.log(`Доставка в ${countryChile} будет стоить ${countryChilePrice} кредитов`);
        break;
          case 'австралия':
            console.log(`Доставка в ${countryAustralia} будет стоить ${countryAustraliaPrice} кредитов`);
            break;
              case 'индия':
                console.log(`Доставка в ${countryIndia} будет стоить ${countryIndiaPrice} кредитов`);
                break;     
                  case 'ямайка':
                    console.log(`Доставка на ${countryJamaica} будет стоить ${countryJamaicaPrice} кредитов`);
                    break;                    
                      default:
                        alert( 'В вашей стране доставка не доступна.');
}
