import { gumroadCheckout, productOrigin } from './public-config.js'

function httpsUrl(value) {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && !url.username && !url.password ? url : null
  } catch {
    return null
  }
}

const gumroad = httpsUrl(gumroadCheckout)
const product = httpsUrl(productOrigin)
const local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname)
const localhostProduct = local ? 'http://127.0.0.1:4173' : ''
const productBase = product?.origin || localhostProduct

function enableLink(key, href) {
  if (!href) return
  for (const link of document.querySelectorAll(`[data-link="${key}"]`)) {
    link.href = href
    link.hidden = false
  }
  const placeholder = document.querySelector(`[data-placeholder="${key}"]`)
  if (placeholder) placeholder.hidden = true
}

if (gumroad && (gumroad.hostname === 'gumroad.com' || gumroad.hostname.endsWith('.gumroad.com')))
  enableLink('gumroad', gumroad.href)
if (productBase) {
  enableLink('account', productBase + '/account')
  enableLink('activate', productBase + '/activate')
  enableLink('privacy', productBase + '/privacy-policy')
  enableLink('refund', productBase + '/refund-policy')
}
