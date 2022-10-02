import { renderBlock } from './lib.js'

const btnSearch = document.getElementById('search-btn')
// btnSearch.addEventListener('click', diff)


function diff(start:Date, end: Date):number {
  const date1 = new Date(start)
  const date2 = new Date(end)
  const oneDay = 1000 * 60 * 60 * 24
  const diffTime = date2.getTime() - date1.getTime()
  const diffDays = Math.round(diffTime / oneDay)
  return diffDays
}

export function renderSearchFormBlock(dateFrom: Date, dateTo: Date) {
 
  if (dateFrom === dateTo) {
    alert('неправильно выбрана дата')
  } else {
    return diff(dateFrom, dateTo)
  }
  
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">дата въезда</label>
            <input id="check-in-date" type="date" value=${dateFrom} min="2021-05-11" max="2021-06-30" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">дата выезда</label>
            <input id="check-out-date" type="date" value=${dateTo} min="2021-05-11" max="2021-06-30" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button id="search-btn" onclick=diff()>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}