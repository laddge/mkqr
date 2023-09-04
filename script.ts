import { toDataURL } from 'qrcode'

toDataURL(location.href)
  .then(url => {
    const w = document.createElement('div')
    const s = w.style
    s.width = '100vw'
    s.height = '100vh'
    s.position = 'fixed'
    s.top = '0px'
    s.left = '0px'
    s.backgroundColor = 'rgba(0, 0, 0, .5)'
    document.body.appendChild(w)
  })
  .catch(e => console.log(e))
