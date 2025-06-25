import { useState, useEffect } from "react"

export default function TechnologiesConstellation() {
  const [connections, setConnections] = useState([])

  const technologies = [
    { name: "React", x: 20, y: 30, size: "large", color: "bg-cyan-500" },
    { name: "JavaScript", x: 50, y: 20, size: "large", color: "bg-yellow-500" },
    { name: "Node.js", x: 80, y: 40, size: "large", color: "bg-green-500" },
    { name: "CSS3", x: 30, y: 60, size: "medium", color: "bg-blue-500" },
    { name: "HTML5", x: 70, y: 70, size: "medium", color: "bg-orange-500" },
    { name: "Wordpress", x: 15, y: 80, size: "medium", color: "bg-green-600" },
    { name: "Figma", x: 60, y: 50, size: "medium", color: "bg-red-600" },
    { name: "Express", x: 40, y: 40, size: "medium", color: "bg-gray-600" },
    { name: "Python", x: 85, y: 20, size: "small", color: "bg-pink-500" },
    { name: "Tailwind", x: 25, y: 15, size: "small", color: "bg-teal-500" },
    { name: "Java", x: 75, y: 85, size: "small", color: "bg-gray-700" },
    { name: "MongoDB", x: 90, y: 60, size: "small", color: "bg-green-700" },
    { name: "Git", x: 10, y: 50, size: "small", color: "bg-orange-600" },
    { name: "sql", x: 55, y: 80, size: "small", color: "bg-blue-600" },
  ]

  useEffect(() => {
    const generateConnections = () => {
      const newConnections = []
      technologies.forEach((tech, index) => {
        const nearbyTechs = technologies
          .map((otherTech, otherIndex) => ({
            index: otherIndex,
            distance: Math.sqrt(Math.pow(tech.x - otherTech.x, 2) + Math.pow(tech.y - otherTech.y, 2)),
          }))
          .filter((item) => item.index !== index && item.distance < 30)
          .sort((a, b) => a.distance - b.distance)
          .slice(0, 2)

        nearbyTechs.forEach((nearby) => {
          if (
            !newConnections.some(
              (conn) =>
                (conn.from === index && conn.to === nearby.index) || (conn.from === nearby.index && conn.to === index)
            )
          ) {
            newConnections.push({ from: index, to: nearby.index })
          }
        })
      })
      setConnections(newConnections)
    }

    generateConnections()
  }, [])

  const getSizeClass = (size) => {
    switch (size) {
      case "large":
        return "w-16 h-16 text-sm"
      case "medium":
        return "w-12 h-12 text-xs"
      case "small":
        return "w-8 h-8 text-xs"
      default:
        return "w-10 h-10 text-xs"
    }
  }

  return (
    <div id="skills" className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 py-16 overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Technologies
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I master key technologies that fuel innovation, efficiency, and impactful solutions.
          </p>
        </div>

        <div className="relative w-full h-96 md:h-[600px] max-w-6xl mx-auto">
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map((connection, index) => {
              const fromTech = technologies[connection.from]
              const toTech = technologies[connection.to]
              return (
                <line
                  key={index}
                  x1={`${fromTech.x}%`}
                  y1={`${fromTech.y}%`}
                  x2={`${toTech.x}%`}
                  y2={`${toTech.y}%`}
                  stroke="rgba(99, 102, 241, 0.3)"
                  strokeWidth="1"
                  className="animate-pulse"
                />
              )
            })}
          </svg>

          {technologies.map((tech, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{
                left: `${tech.x}%`,
                top: `${tech.y}%`,
              }}
            >
              <div
                className={`${tech.color} ${getSizeClass(tech.size)} rounded-full flex items-center justify-center font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl relative`}
              >
                <span className="text-center leading-tight">
                  {tech.size === "small" ? tech.name.slice(0, 3) : tech.name}
                </span>

                <div
                  className={`absolute inset-0 ${tech.color} rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-300 blur-md`}
                ></div>
              </div>

              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                {tech.name}
              </div>
            </div>
          ))}

          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 50 }).map((_, index) => (
              <div
                key={index}
                className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
