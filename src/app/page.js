import Hero from '../components/Hero'
import styles from '../styles/index.module.css'

async function fetchResumeUrl() {
  const folderId = '14nDEc7jJpXp8CvnZiaan7UgedC-AWmco'
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY

  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType='application/pdf'&key=${apiKey}`,
    { cache: 'no-store' }
  )
  const data = await res.json()

  if (data.files && data.files.length > 0) {
    const fileId = data.files[0].id
    return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`
  }
  return null
}

export default async function Home() {
  const resumeUrl = await fetchResumeUrl()

  return (
    <div className={styles.bod}>
      <Hero resumeUrl={resumeUrl} />
    </div>
  )
}

