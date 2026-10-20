/**
 * Production images configuration.
 *
 * Uses root-relative static asset paths (`/images/<filename>`) which are
 * guaranteed to load reliably across all environments (local preview, AI Studio,
 * Vercel, Netlify, GitHub Pages) without CORS issues, rate limits, or ad-blocker restrictions.
 *
 * Also provides direct links to your GitHub repository for external referencing.
 */

export const GITHUB_REPO = 'leobsilva03/ABT-Webapp';
export const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/leobsilva03/ABT-Webapp/main/src/assets/images';
export const GITHUB_CDN_BASE = 'https://cdn.jsdelivr.net/gh/leobsilva03/ABT-Webapp@main/src/assets/images';

export const IMAGES = {
  logo: '/images/abt-logo.svg',
  hero: '/images/hero-abatement-team.jpg',
  about: '/images/about-technician-ppe.jpg',
  asbestos: '/images/service-asbestos-removal.jpg',
  lead: '/images/service-lead-abatement.jpg',
  mould: '/images/service-mould-remediation.jpg',
  skyline: '/images/ontario-toronto-skyline.jpg',
};
