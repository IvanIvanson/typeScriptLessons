 
export function renderBlock(elementId: string, html: string) {
 
  const element: HTMLElement = document.getElementById(elementId) as HTMLElement
  element.innerHTML = html
}

interface Message{
  type: string, 
  text: string

}

interface Action{
  name: string, 
  handler:() => void | null
}

export function renderToast(message:Message | null, action?:Action):void {
  let messageText = ''
  
  if (message !== null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }
  
  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button !== null) {
    button.onclick = function() {
      if (action && action.handler !== null) {
        action.handler()
      }
      renderToast(null)
    }
  }
}
