import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Automated Transcript Summarizer',
    description: 'Summarizes lecture videos using speech-to-text + LLM pipelines; produced timestamps and bullet summaries.',
    tags: ['Python', 'Whisper', 'LLM', 'FastAPI'],
    repo: 'https://github.com/KingVibhor/AI_Powered_Video_Summarizer'
  },
  {
    title: 'Twitter Bot (FastAPI)',
    description: 'Automated tweeting bot using FastAPI and SQLAlchemy; deployed with keep-alive scheduler.',
    tags: ['FastAPI', 'SQLAlchemy', 'Deployment'],
    repo: 'https://github.com/KingVibhor/twitterbot'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className="card"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-sm px-2 py-1 bg-gray-100 rounded">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4">
                <a href={p.repo} className="text-sm underline" target="_blank" rel="noopener noreferrer">Repo</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
