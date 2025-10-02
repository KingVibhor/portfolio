export default function About() {
    return (
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700">I am a B.Tech student in AI & Data Science. I love building practical ML systems, automation tools, and APIs that make life easier.</p>
  
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="card">
              <h4 className="font-semibold">Education</h4>
              <p className="text-sm text-gray-600 mt-1">VIT Pune — B.Tech AI & Data Science (2022 - 2026)</p>
            </div>
            <div className="card">
              <h4 className="font-semibold">Experience</h4>
              <p className="text-sm text-gray-600 mt-1">AI Intern — EduPlusCampus (Jun 2024 - Dec 2024)</p>
            </div>
          </div>
        </div>
      </section>
    )
  }