export const NAME = 'Tala Amm'
export const EMAIL = 'tala.aunv@gmail.com'

export const GITHUB_USERNAME = 'talaamm'
export const LINKEDIN_USERNAME = 'tala-al-amm'
export const DEVTO_USERNAME = 'talaamm'

export const RESUME_PATH = ' https://docs.google.com/document/d/19UIrhnuFAdnc48tpzK3FBJcd2dk1syM8mDORh8rKL_w/export?format=pdf'
export const BASE = import.meta.env.BASE_URL || '/'

// Helper function to ensure paths are constructed correctly
export const getAssetPath = (path: string): string => {
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Ensure BASE ends with a slash
  const baseWithSlash = BASE.endsWith('/') ? BASE : `${BASE}/`
  return `${baseWithSlash}${cleanPath}`
}

export const AVATAR_PATH = getAssetPath('avatar.jpeg')

export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`
export const LINKEDIN_URL = `https://linkedin.com/in/${LINKEDIN_USERNAME}`
export const DEVTO_URL = `https://dev.to/${DEVTO_USERNAME}`
export const RESUME_URL = RESUME_PATH 