import { NOT_EKLE, NOT_SIL } from './actions'

const s10chLocalStorageKey = 's10ch'

const baslangicDegerleri = {
  notlar: [
    {
      id: '75g1IyB8JLehAr0Lr5v3p',
      date: 'Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)',
      body: 'Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!',
    },
  ],
}

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key))
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key)

  if (eskiNotlar) {
    return localStorageStateOku(key)
  } else {
    return baslangicDegerleri
  }
}

function reducer(
  state = baslangicNotlariniGetir(s10chLocalStorageKey),
  action
) {
  //let newNotlar = [];
  let newState = {}
  switch (action.type) {
    case NOT_EKLE:
      // ...
      newState = {
        ...state,
        notlar: [action.payload, ...state.notlar],
      }
      localStorageStateYaz(s10chLocalStorageKey, newState)
      return newState
    case NOT_SIL:
      // ...
      newState = {
        ...state,
        notlar: state.notlar.filter((not) => not.id !== action.payload),
      }
      localStorageStateYaz(s10chLocalStorageKey, newState)
      return newState
    default:
      return state
  }
}
export default reducer
