const countryChina = 'Китай';
const countryChile = 'Чили';
const countryAustralia = 'Австралия';
const countryIndia = 'Индию';
const countryJamaica = 'Ямайку'; 
let countryChinaPrice = 100;
let countryChilePrice = 250;
let countryAustraliaPrice = 170;
let countryIndiaPrice = 80;
let countryJamaicaPrice = 120;
const inputCountry = prompt('Введите страну');
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
