const header = document.querySelector('.site-header')
const menu = header.querySelector('.header-menu-toggle')
const navigation = document.getElementById(menu.getAttribute('aria-controls'))

function setMenu(open) {
  menu.setAttribute('aria-expanded', String(open))
  navigation.classList.toggle('is-open', open)
}

menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'))
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) setMenu(false)
})
document.addEventListener('pointerdown', event => {
  if (!header.contains(event.target)) setMenu(false)
})
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    setMenu(false)
    menu.focus()
  }
})
window.matchMedia('(min-width: 640px)').addEventListener('change', () => setMenu(false))

const appearance = header.querySelector('.theme-preference select')
const system = window.matchMedia('(prefers-color-scheme: dark)')
const preferenceKey = 'clientos.theme-preference.v1'

function readPreference() {
  try {
    const value = localStorage.getItem(preferenceKey)
    return value === 'light' || value === 'dark' ? value : 'system'
  } catch {
    return 'system'
  }
}

function applyPreference() {
  const dark = appearance.value === 'dark' || (appearance.value === 'system' && system.matches)
  document.documentElement.dataset.theme = dark ? 'dark' : 'light'
}

appearance.value = readPreference()
applyPreference()
appearance.addEventListener('change', () => {
  applyPreference()
  try { localStorage.setItem(preferenceKey, appearance.value) } catch { /* Keep the current page usable. */ }
})
system.addEventListener('change', applyPreference)
window.addEventListener('storage', event => {
  if (event.key === preferenceKey || event.key === null) {
    appearance.value = readPreference()
    applyPreference()
  }
})
