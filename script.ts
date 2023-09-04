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
    s.zIndex = '2147483647'
    s.padding = '16px'
    s.textAlign = 'center'
    w.onclick = () => {
      w.remove()
    }
    const i = document.createElement('img')
    const S = i.style
    S.width = '480px'
    S.maxWidth = '100%'
    S.aspectRatio = '1'
    i.src = url
    w.appendChild(i)
    document.body.appendChild(w)
  })
  .catch(e => console.log(e))
