"use client";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      tag: "Industrial Software · Cooperative Education",
      name: "Torque Data Recording & Verification System",
      company: "Sinfonia Technology (Thailand) Co., Ltd.",
      desc: "Developed and deployed a production-ready system for Loadport torque data recording and verification using VB.NET, interfacing directly with hardware via RS232 protocols. Automated factory data tracking and quality assurance for the manufacturing line.",
      stack: ["VB.NET", "RS232", "Hardware Integration", "Factory Automation"],
      highlight: true,
    },
    {
      id: 2,
      tag: "Computer Vision · Cooperative Education",
      name: "Wire Detection & Classification (Segmentation)",
      company: "Sinfonia Technology (Thailand) Co., Ltd.",
      desc: "Built an AI prototype for automated wire detection and classification using the YOLO framework with segmentation capabilities, enhancing quality inspection in the manufacturing process. (Confidential — visuals not available)",
      stack: ["Python", "YOLO", "Computer Vision", "OpenCV"],
      highlight: false,
    },
    {
      id: 3,
      tag: "Predictive Analytics · Prototype",
      name: "Stock Demand Forecasting System",
      company: "Sinfonia Technology (Thailand) Co., Ltd.",
      desc: "Engineered a stock forecasting prototype using Linear Regression with extensive feature engineering — including historical sales, time-series patterns, and inventory levels — to optimize purchase order predictions.",
      stack: ["Python", "Linear Regression", "Feature Engineering", "KNIME"],
      highlight: false,
    },
  ];

  const skills = {
    "Programming Languages": ["Python", "VB.NET", "SQL", "JavaScript", "HTML/CSS", "PHP"],
    "AI & Machine Learning": ["Object Detection (YOLO)", "Predictive Modeling", "Custom Small LLMs", "Hugging Face", "Robotics AI"],
    "Tools & Infrastructure": ["Docker", "Git", "Power BI", "KNIME", "Arduino", "DOBOT Magician"],
  };

  return (
    <main
      style={{
        fontFamily: "'IBM Plex Serif', Georgia, serif",
        background: "#0d0d0d",
        color: "#e8e4dc",
        minHeight: "100vh",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;1,300&family=IBM+Plex+Mono:wght@300;400&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        ::selection { background: #c8a96e33; }

        .nav-link {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.12em;
          color: #6b6560;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #c8a96e; }

        .project-card {
          border: 0.5px solid #2a2825;
          padding: 1.75rem;
          background: #111110;
          transition: border-color 0.25s;
        }
        .project-card:hover { border-color: #3d3830; }

        .highlight-card {
          border: 0.5px solid #3d3322;
          background: #111008;
        }
        .highlight-card:hover { border-color: #c8a96e55; }

        .skill-item {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: #6b6560;
          padding: 6px 0;
          border-bottom: 0.5px solid #1e1d1b;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.2s;
        }
        .skill-item:hover { color: #c8a96e; }
        .skill-item:last-child { border-bottom: none; }

        .btn-main {
          display: inline-block;
          padding: 11px 24px;
          background: #c8a96e;
          color: #0d0d0d;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-main:hover { background: #d4b87a; }

        .btn-ghost {
          display: inline-block;
          padding: 11px 24px;
          background: transparent;
          color: #6b6560;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border: 0.5px solid #2a2825;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-ghost:hover { border-color: #6b6560; color: #e8e4dc; }

        .tag-pill {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          padding: 3px 10px;
          border: 0.5px solid #2a2825;
          color: #6b6560;
          letter-spacing: 0.06em;
        }

        .section-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
          color: #6b6560;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .divider {
          border: none;
          border-top: 0.5px solid #1e1d1b;
          margin: 0;
        }

        .accent { color: #c8a96e; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.22s; opacity: 0; }
        .delay-3 { animation-delay: 0.34s; opacity: 0; }
        .delay-4 { animation-delay: 0.46s; opacity: 0; }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.25rem 2.5rem",
          borderBottom: "0.5px solid #1e1d1b",
          position: "sticky",
          top: 0,
          background: "#0d0d0ddd",
          backdropFilter: "blur(8px)",
          zIndex: 50,
        }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "12px",
            letterSpacing: "0.14em",
            color: "#c8a96e",
          }}
        >
          SP<span style={{ color: "#3d3830" }}>_</span>PORTFOLIO
        </span>
        <div style={{ display: "flex", gap: "2rem" }}>
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        id="about"
        style={{
          padding: "5rem 2.5rem 4rem",
          borderBottom: "0.5px solid #1e1d1b",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p
          className="fade-up delay-1"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.16em",
            color: "#c8a96e",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}
        >
          Applied AI Engineer
        </p>
        <h1
          className="fade-up delay-2"
          style={{
            fontSize: "clamp(36px, 6vw, 60px)",
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            marginBottom: "1.5rem",
            fontFamily: "'IBM Plex Serif', Georgia, serif",
          }}
        >
          Suwat<br />
          <span style={{ fontStyle: "italic", color: "#9a9088" }}>Punkhiew</span>
        </h1>

        <p
          className="fade-up delay-3"
          style={{
            fontSize: "15px",
            color: "#9a9088",
            lineHeight: 1.75,
            maxWidth: "560px",
            marginBottom: "2.5rem",
          }}
        >
          Applied AI graduate with 8 months of hands-on internship experience in industrial software development.
          Proven in deploying production-ready systems — from hardware-software integration to Computer Vision and Predictive Analytics.
          Bridges technical AI solutions with real business needs.
        </p>

        <div className="fade-up delay-4" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="mailto:suwat.pkh@gmail.com" className="btn-main">
            Contact me
          </a>
          <a href="https://github.com/NothingToSad" target="_blank" rel="noreferrer" className="btn-ghost">
            GitHub ↗
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, auto)",
            gap: "0",
            marginTop: "4rem",
            borderTop: "0.5px solid #1e1d1b",
            paddingTop: "2rem",
            width: "fit-content",
          }}
        >
          {[
            { num: "8", unit: "months", label: "Internship experience" },
            { num: "3", unit: "systems", label: "Deployed at Sinfonia Tech" },
            { num: "2022", unit: "–Now", label: "B.Sc. Applied AI, Burapha U." },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                paddingRight: i < 2 ? "3rem" : "0",
                marginRight: i < 2 ? "3rem" : "0",
                borderRight: i < 2 ? "0.5px solid #1e1d1b" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'IBM Plex Serif', serif",
                  fontSize: "28px",
                  fontWeight: 300,
                  color: "#e8e4dc",
                }}
              >
                {s.num}
                <span style={{ fontSize: "14px", color: "#c8a96e", marginLeft: "4px" }}>{s.unit}</span>
              </div>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "11px",
                  color: "#6b6560",
                  marginTop: "4px",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        style={{
          padding: "4rem 2.5rem",
          borderBottom: "0.5px solid #1e1d1b",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p className="section-label">Selected projects</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {projects.map((p) => (
            <div key={p.id} className={`project-card ${p.highlight ? "highlight-card" : ""}`}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "0.75rem",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    color: p.highlight ? "#c8a96e" : "#6b6560",
                  }}
                >
                  {p.tag}
                </span>
                {p.highlight && (
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "9px",
                      padding: "3px 10px",
                      border: "0.5px solid #c8a96e55",
                      color: "#c8a96e",
                      letterSpacing: "0.1em",
                    }}
                  >
                    MAIN PROJECT
                  </span>
                )}
              </div>

              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  marginBottom: "4px",
                  lineHeight: 1.3,
                }}
              >
                {p.name}
              </h3>
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "11px",
                  color: "#6b6560",
                  marginBottom: "1rem",
                }}
              >
                {p.company}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#9a9088",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                {p.desc}
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {p.stack.map((t) => (
                  <span key={t} className="tag-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        style={{
          padding: "4rem 2.5rem",
          borderBottom: "0.5px solid #1e1d1b",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p className="section-label">Technical skills</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
          }}
        >
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  color: "#c8a96e",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "0.5px solid #1e1d1b",
                }}
              >
                {group}
              </p>
              {items.map((skill) => (
                <div key={skill} className="skill-item">
                  <span style={{ color: "#3d3830" }}>—</span>
                  {skill}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Education block */}
        <div
          style={{
            marginTop: "3rem",
            padding: "1.5rem",
            border: "0.5px solid #1e1d1b",
            background: "#111110",
          }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "#c8a96e",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Education
          </p>
          <p style={{ fontSize: "15px", fontWeight: 400, marginBottom: "4px" }}>
            B.Sc. Applied Artificial Intelligence and Smart Technology
          </p>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "12px",
              color: "#6b6560",
              marginBottom: "0.75rem",
            }}
          >
            Burapha University · 2022 – Present
          </p>
          <p style={{ fontSize: "13px", color: "#9a9088", lineHeight: 1.6 }}>
            Machine Learning · Predictive Analytics · OOP · Database Management ·
            Data Analysis · Robotics & Automation · Software Architecture
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "4rem 2.5rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p className="section-label">Contact</p>
        <p
          style={{
            fontSize: "clamp(22px, 4vw, 36px)",
            fontWeight: 300,
            lineHeight: 1.3,
            marginBottom: "2.5rem",
            maxWidth: "480px",
            fontStyle: "italic",
            color: "#9a9088",
          }}
        >
          Open to AI, Data, and Software Engineering roles.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "2.5rem" }}>
          {[
            { label: "Email", value: "suwat.pkh@gmail.com", href: "mailto:suwat.pkh@gmail.com" },
            { label: "Phone", value: "+094-482-4448", href: "tel:+0944824448" },
            { label: "GitHub", value: "github.com/NothingToSad", href: "https://github.com/NothingToSad" },
            { label: "Location", value: "Bangplee, Samutprakarn, Thailand", href: null },
          ].map((c) => (
            <div
              key={c.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "1rem 0",
                borderBottom: "0.5px solid #1e1d1b",
              }}
            >
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  color: "#6b6560",
                  textTransform: "uppercase",
                  minWidth: "70px",
                }}
              >
                {c.label}
              </span>
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  style={{
                    fontSize: "14px",
                    color: "#c8a96e",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {c.value}
                </a>
              ) : (
                <span style={{ fontSize: "14px", color: "#9a9088" }}>{c.value}</span>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "2rem",
            borderTop: "0.5px solid #1e1d1b",
          }}
        >
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              color: "#3d3830",
            }}
          >
            © 2026 Suwat Punkhiew
          </span>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              color: "#3d3830",
            }}
          >
            Built with Next.js · Deployed on Vercel
          </span>
        </div>
      </section>
    </main>
  );
}
