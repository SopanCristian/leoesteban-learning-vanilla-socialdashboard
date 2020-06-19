//console.log('ola ke ase')
//console.log(window.matchMedia('(prefers-color-scheme: dark)'))
const checkbox = document.querySelector('#checkbox')
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //console.log('asdad')
    checkbox.setAttribute('checked',true)
}

checkbox.addEventListener('change', function (event) {
    if (this.checked) {
      document.body.classList.remove('is-light-mode')
      document.body.classList.add('is-dark-mode')
    } else {
      document.body.classList.remove('is-dark-mode')
      document.body.classList.add('is-light-mode')
    }
  })