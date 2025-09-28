export const isMobile = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
