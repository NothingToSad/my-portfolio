"use client";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [visible, setVisible] = useState(false);
  const [dark, setDark] = useState(true);
  const [githubStats, setGithubStats] = useState<{repos:number,followers:number} | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    setVisible(true);
    const saved = localStorage.getItem("theme");
    if (saved) setDark(saved === "dark");
    fetch("https://api.github.com/users/NothingToSad")
      .then(r => r.json())
      .then(d => setGithubStats({ repos: d.public_repos, followers: d.followers }))
      .catch(() => {});
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const t = {
    bg:           dark ? "#0d0d0d"   : "#f5f3ef",
    bgCard:       dark ? "#111110"   : "#ffffff",
    bgNav:        dark ? "#0d0d0ddd" : "#f5f3efdd",
    border:       dark ? "#1e1d1b"   : "#dedad4",
    borderCard:   dark ? "#2a2825"   : "#e5e1da",
    text:         dark ? "#e8e4dc"   : "#1a1816",
    textMuted:    dark ? "#9a9088"   : "#6b6560",
    textFaint:    dark ? "#6b6560"   : "#a09890",
    textFaintest: dark ? "#3d3830"   : "#c0b8b0",
    accent:       "#c8a96e",
    accentHover:  "#d4b87a",
    highlightBg:  dark ? "#111008"   : "#fdfbf5",
    highlightBd:  dark ? "#3d3322"   : "#e8dfc8",
    timelineLine: dark ? "#2a2825"   : "#dedad4",
    tagBg:        dark ? "#1a1918"   : "#f0ede8",
  };

  const mono = "'IBM Plex Mono', monospace";
  const serif = "'IBM Plex Serif', Georgia, serif";

  const techStacks = [
    { name:"Python",           icon:"devicon-python-plain",           color:"#3776AB" },
    { name:"VB.NET",           icon:"devicon-visualstudio-plain",     color:"#68217A" },
    { name:"SQL",              icon:"devicon-azuresqldatabase-plain",  color:"#CC2927" },
    { name:"JavaScript",       icon:"devicon-javascript-plain",       color:"#F7DF1E" },
    { name:"Microsoft Power Bi", img:"/Power Bi.svg",                 color:"#ebb217" },
    { name:"KNIME",            img:"/knime.svg"                                       },
    { name:"Ultralytics-YOLO", img:"/Ultralytics-YOLO.svg",          color:"#2496ED" },
    { name:"Hugging Face",     img:"/hf-logo.svg"                                     },
    { name:"Dobot",            img:"/dobot.svg",                      color:"#092f4d" },
    { name:"Docker",           icon:"devicon-docker-plain",           color:"#2496ED" },
    { name:"Git",              icon:"devicon-git-plain",              color:"#F05032" },
    { name:"PyTorch",          icon:"devicon-pytorch-plain",          color:"#EE4C2C" },
    { name:"PHP",              icon:"devicon-php-plain",              color:"#777BB4" },
    { name:"HTML/CSS",         icon:"devicon-html5-plain",            color:"#E34F26" },
    { name:"Arduino",          icon:"devicon-arduino-plain",          color:"#00979D" },
  ];

  const timeline = [
    { year:"2022", type:"edu",    title:"เข้าศึกษา ม.บูรพา",               sub:"B.Sc. Applied AI & Smart Technology",          detail:"เรียนรู้ Machine Learning, Predictive Analytics, Robotics & Automation, Software Architecture" },
    { year:"2023", type:"mentor", title:"Technical Mentor — AI in Business", sub:"Module 3 · Burapha University",                detail:"ให้คำปรึกษาทีม Sophomore & Junior ด้าน AI Implementation, Code Architecture และ Business Pitching" },
    { year:"2024", type:"work",   title:"Software & AI Intern",              sub:"Sinfonia Technology (Thailand) Co., Ltd.",     detail:"8 เดือน — Torque Data System (VB.NET/RS232), Wire Detection (YOLO), Stock Forecasting (Linear Regression)" },
    { year:"2025", type:"open",   title:"Open to opportunities",             sub:"AI · Data · Software Engineering",            detail:"พร้อมร่วมงานทันที — ทั้งในไทยและ remote" },
  ];
  const typeColor: Record<string,string> = { edu:"#5b8dd9", mentor:"#c8a96e", work:"#5dba8a", open:"#a87fc8" };

  // projects พร้อมรูปภาพ
  const projects = [
    {
      id:1, tag:"Industrial Software · Cooperative Education", highlight:true,
      name:"Torque Data Recording & Verification System",
      company:"Sinfonia Technology (Thailand) Co., Ltd.",
      desc:"Developed and deployed a production-ready system for Loadport torque data recording and verification using VB.NET, interfacing directly with hardware via RS232 protocols. Automated factory data tracking and quality assurance for the manufacturing line.",
      stack:["VB.NET","RS232","Hardware Integration","Factory Automation"],
      beforeImg:"/รูปภาพ8.jpg",
      beforeLabel:"Before — Check Sheet เขียนมือ",
      afterImg:"/รูปภาพ6.png",
      afterLabel:"After — Check Sheet จาก excel",
      gallery:[
        { src:"/รูปภาพ1.png", caption:"Use Case Diagram" },
        { src:"/รูปภาพ2.png", caption:"System Workflow" },
        { src:"/รูปภาพ4.jpg", caption:"ผลการตรวจสอบ" },
        { src:"/รูปภาพ3.jpg", caption:"Excel Export Report" },
      ],
    },
    {
      id:2, tag:"Computer Vision · Cooperative Education", highlight:false,
      name:"Wire Detection & Classification (Segmentation)",
      company:"Sinfonia Technology (Thailand) Co., Ltd.",
      desc:"Built an AI prototype for automated wire detection and classification using the YOLO framework with segmentation capabilities, enhancing quality inspection in the manufacturing process. (Confidential — visuals not available)",
      stack:["Python","YOLO","Computer Vision","OpenCV"],
      beforeImg:null, beforeLabel:null, afterImg:null, afterLabel:null, gallery:[],
    },
    {
      id:3, tag:"Predictive Analytics · Prototype", highlight:false,
      name:"Stock Demand Forecasting System",
      company:"Sinfonia Technology (Thailand) Co., Ltd.",
      desc:"Engineered a stock forecasting prototype using Linear Regression with extensive feature engineering — including historical sales, time-series patterns, and inventory levels — to optimize purchase order predictions.",
      stack:["Python","Linear Regression","Feature Engineering","KNIME"],
      beforeImg:null, beforeLabel:null, afterImg:null, afterLabel:null,
      gallery:[{ src:"/รูปภาพ7.png", caption:"Dashboard ทำนายการสั่งซื้อ" }],
    },
  ];

  const skills = {
    "Programming Languages":["Python","VB.NET","SQL","JavaScript","HTML/CSS","PHP"],
    "AI & Machine Learning":["Object Detection (YOLO)","Predictive Modeling","Custom Small LLMs","Hugging Face","Robotics AI"],
    "Tools & Infrastructure":["Docker","Git","Power BI","KNIME","Arduino","DOBOT Magician"],
  };

  const sectionLabel = { fontFamily:mono, fontSize:"10px", letterSpacing:"0.18em", color:t.textFaint, textTransform:"uppercase" as const, marginBottom:"2rem" };

  return (
    <main style={{ fontFamily:serif, background:t.bg, color:t.text, minHeight:"100vh", opacity:visible?1:0, transition:"opacity 0.5s ease, background 0.3s ease, color 0.3s ease" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;1,300&family=IBM+Plex+Mono:wght@300;400&display=swap');
        @import url('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css');
        * { box-sizing:border-box; margin:0; padding:0; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        .fu{animation:fadeUp 0.65s ease forwards}
        .d1{animation-delay:.08s;opacity:0} .d2{animation-delay:.18s;opacity:0}
        .d3{animation-delay:.28s;opacity:0} .d4{animation-delay:.38s;opacity:0}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
        .pulse-dot{animation:pulse 2s ease-in-out infinite}
        .img-zoom { cursor:zoom-in; transition:transform 0.22s ease, box-shadow 0.22s ease; }
        .img-zoom:hover { transform:scale(1.02); box-shadow:0 6px 24px #0005; }
        @keyframes lbIn { from{opacity:0} to{opacity:1} }
        .lightbox { animation:lbIn 0.18s ease; }
      `}</style>

      {/* ── LIGHTBOX ── */}
      {lightboxImg && (
        <div className="lightbox" onClick={()=>setLightboxImg(null)}
          style={{ position:"fixed", inset:0, background:"#000000cc", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:"2rem", cursor:"zoom-out" }}>
          <img src={lightboxImg} alt="preview"
            style={{ maxWidth:"90vw", maxHeight:"90vh", objectFit:"contain", border:`0.5px solid ${t.borderCard}` }}
            onClick={e=>e.stopPropagation()} />
          <button onClick={()=>setLightboxImg(null)}
            style={{ position:"fixed", top:"1.5rem", right:"1.5rem", background:"#111", border:`0.5px solid ${t.borderCard}`, color:t.text, fontFamily:mono, fontSize:"12px", padding:"6px 14px", cursor:"pointer" }}>
            ✕ Close
          </button>
        </div>
      )}

      {/* ── NAV ── */}
      <nav style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1.1rem 2.5rem", borderBottom:`0.5px solid ${t.border}`, position:"sticky", top:0, background:t.bgNav, backdropFilter:"blur(10px)", zIndex:50, transition:"background 0.3s" }}>
        <span style={{ fontFamily:mono, fontSize:"12px", letterSpacing:"0.14em", color:t.accent }}>PORTFOLIO</span>
        <div style={{ display:"flex", alignItems:"center", gap:"1.75rem" }}>
          {["About","Projects","Skills","Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              style={{ fontFamily:mono, fontSize:"11px", letterSpacing:"0.12em", color:t.textFaint, textDecoration:"none", textTransform:"uppercase", transition:"color 0.2s" }}
              onMouseOver={e=>(e.currentTarget.style.color=t.accent)}
              onMouseOut={e=>(e.currentTarget.style.color=t.textFaint)}>
              {item}
            </a>
          ))}
          <button onClick={toggleTheme}
            style={{ background:"transparent", border:`0.5px solid ${t.borderCard}`, borderRadius:"20px", padding:"5px 12px", cursor:"pointer", display:"flex", alignItems:"center", gap:"6px", fontFamily:mono, fontSize:"11px", color:t.textFaint, transition:"all 0.2s" }}
            onMouseOver={e=>{ e.currentTarget.style.borderColor=t.accent; e.currentTarget.style.color=t.accent; }}
            onMouseOut={e=>{ e.currentTarget.style.borderColor=t.borderCard; e.currentTarget.style.color=t.textFaint; }}>
            {dark ? "☀ Light" : "☾ Dark"}
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="about" style={{ padding:"5rem 2.5rem 4rem", borderBottom:`0.5px solid ${t.border}`, maxWidth:"1100px", margin:"0 auto" }}>
        <div style={{ display:"flex", flexWrap:"wrap", gap:"3rem", alignItems:"center", justifyContent:"space-between" }}>

          {/* Text */}
          <div style={{ flex:"1 1 500px" }}>
            <p className="fu d1" style={{ fontFamily:mono, fontSize:"11px", letterSpacing:"0.16em", color:t.accent, textTransform:"uppercase", marginBottom:"1.25rem" }}>Applied AI Engineer</p>
            <h1 className="fu d2" style={{ fontSize:"clamp(36px,6vw,60px)", fontWeight:300, lineHeight:1.15, letterSpacing:"-0.01em", marginBottom:"1.5rem" }}>
              Suwat<br /><span style={{ fontStyle:"italic", color:t.textMuted }}>Punkhiew</span>
            </h1>
            <p className="fu d3" style={{ fontSize:"15px", color:t.textMuted, lineHeight:1.75, maxWidth:"560px", marginBottom:"2.5rem" }}>
              Applied AI graduate with 8 months of hands-on internship experience in industrial software development.
              Proven in deploying production-ready systems — from hardware-software integration to Computer Vision and Predictive Analytics.
              Bridges technical AI solutions with real business needs.
            </p>
            <div className="fu d4" style={{ display:"flex", gap:"12px", flexWrap:"wrap" }}>
              <a href="mailto:suwat.pkh@gmail.com"
                style={{ display:"inline-block", padding:"11px 24px", background:t.accent, color:"#0d0d0d", fontFamily:mono, fontSize:"11px", letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", transition:"background 0.2s" }}
                onMouseOver={e=>(e.currentTarget.style.background=t.accentHover)}
                onMouseOut={e=>(e.currentTarget.style.background=t.accent)}>
                Contact me
              </a>
              <a href="/resume-suwat.pdf" download
                style={{ display:"inline-block", padding:"11px 24px", background:"transparent", color:t.text, fontFamily:mono, fontSize:"11px", letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", border:`0.5px solid ${t.borderCard}`, transition:"all 0.2s" }}
                onMouseOver={e=>{ e.currentTarget.style.borderColor=t.accent; e.currentTarget.style.color=t.accent; }}
                onMouseOut={e=>{ e.currentTarget.style.borderColor=t.borderCard; e.currentTarget.style.color=t.text; }}>
                Resume ↓
              </a>
              <a href="https://github.com/NothingToSad" target="_blank" rel="noreferrer"
                style={{ display:"inline-block", padding:"11px 24px", background:"transparent", color:t.textFaint, fontFamily:mono, fontSize:"11px", letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", border:`0.5px solid ${t.borderCard}`, transition:"all 0.2s" }}
                onMouseOver={e=>{ e.currentTarget.style.borderColor=t.textFaint; e.currentTarget.style.color=t.text; }}
                onMouseOut={e=>{ e.currentTarget.style.borderColor=t.borderCard; e.currentTarget.style.color=t.textFaint; }}>
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="fu d3" style={{ flex:"0 0 240px", display:"flex", justifyContent:"center" }}>
            <div style={{ width:"240px", height:"240px", borderRadius:"50%", padding:"8px", border:`1px dashed ${t.borderCard}`, background:t.bgCard, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <img src="/profile.jpg" alt="Suwat Punkhiew"
                style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:"50%", filter:dark?"grayscale(20%) contrast(110%)":"none" }} />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display:"flex", gap:"0", marginTop:"4rem", borderTop:`0.5px solid ${t.border}`, paddingTop:"2rem", flexWrap:"wrap" }}>
          {[
            { num:"8",    unit:"months", label:"Internship experience" },
            { num:"3",    unit:"systems", label:"Deployed at Sinfonia Tech" },
            { num:githubStats ? String(githubStats.repos) : "—", unit:"repos", label:"Public GitHub repositories" },
            { num:"2022", unit:"–Now",   label:"B.Sc. Applied AI, Burapha U." },
          ].map((s,i,arr) => (
            <div key={i} style={{ paddingRight:i<arr.length-1?"3rem":"0", marginRight:i<arr.length-1?"3rem":"0", borderRight:i<arr.length-1?`0.5px solid ${t.border}`:"none", marginBottom:"1rem" }}>
              <div style={{ fontFamily:serif, fontSize:"28px", fontWeight:300, color:t.text }}>
                {s.num}<span style={{ fontSize:"14px", color:t.accent, marginLeft:"4px" }}>{s.unit}</span>
              </div>
              <div style={{ fontFamily:mono, fontSize:"11px", color:t.textFaint, marginTop:"4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding:"4rem 2.5rem", borderBottom:`0.5px solid ${t.border}`, maxWidth:"1100px", margin:"0 auto" }}>
        <p style={sectionLabel}>Career timeline</p>
        <div style={{ position:"relative", paddingLeft:"2rem" }}>
          <div style={{ position:"absolute", left:"7px", top:"8px", bottom:"8px", width:"0.5px", background:t.timelineLine }} />
          {timeline.map((item,i) => (
            <div key={i} style={{ position:"relative", marginBottom:i<timeline.length-1?"2rem":"0", paddingLeft:"1.5rem" }}>
              <div style={{ position:"absolute", left:"-25px", top:"6px", width:"12px", height:"12px", borderRadius:"50%", background:typeColor[item.type], border:`2px solid ${t.bg}`, boxShadow:`0 0 0 1px ${typeColor[item.type]}` }}>
                {item.type==="open" && <div className="pulse-dot" style={{ position:"absolute", inset:"-4px", borderRadius:"50%", background:typeColor[item.type], opacity:0.3 }} />}
              </div>
              <div style={{ display:"flex", alignItems:"baseline", gap:"12px", marginBottom:"4px", flexWrap:"wrap" }}>
                <span style={{ fontFamily:mono, fontSize:"11px", color:typeColor[item.type], letterSpacing:"0.08em" }}>{item.year}</span>
                <span style={{ fontSize:"15px", fontWeight:400, color:t.text }}>{item.title}</span>
              </div>
              <div style={{ fontFamily:mono, fontSize:"11px", color:t.textFaint, marginBottom:"6px" }}>{item.sub}</div>
              <div style={{ fontSize:"13px", color:t.textMuted, lineHeight:1.6 }}>{item.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding:"4rem 2.5rem", borderBottom:`0.5px solid ${t.border}`, maxWidth:"1100px", margin:"0 auto" }}>
        <p style={sectionLabel}>Selected projects</p>
        <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem" }}>
          {projects.map(p => (
            <div key={p.id} style={{ border:`0.5px solid ${p.highlight ? t.highlightBd : t.borderCard}`, background:p.highlight ? t.highlightBg : t.bgCard, transition:"border-color 0.2s, background 0.3s", overflow:"hidden" }}
              onMouseOver={e=>(e.currentTarget.style.borderColor=p.highlight?t.accent+"88":t.border)}
              onMouseOut={e=>(e.currentTarget.style.borderColor=p.highlight?t.highlightBd:t.borderCard)}>

              {/* Header */}
              <div style={{ padding:"1.75rem 1.75rem 1.25rem" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"0.75rem", flexWrap:"wrap", gap:"8px" }}>
                  <span style={{ fontFamily:mono, fontSize:"10px", letterSpacing:"0.1em", color:p.highlight?t.accent:t.textFaint }}>{p.tag}</span>
                  {p.highlight && <span style={{ fontFamily:mono, fontSize:"9px", padding:"3px 10px", border:`0.5px solid ${t.accent}55`, color:t.accent, letterSpacing:"0.1em" }}>MAIN PROJECT</span>}
                </div>
                <h3 style={{ fontSize:"18px", fontWeight:400, marginBottom:"4px", lineHeight:1.3, color:t.text }}>{p.name}</h3>
                <p style={{ fontFamily:mono, fontSize:"11px", color:t.textFaint, marginBottom:"1rem" }}>{p.company}</p>
                <p style={{ fontSize:"14px", color:t.textMuted, lineHeight:1.7, marginBottom:"1.25rem" }}>{p.desc}</p>
                <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
                  {p.stack.map(tag=>(
                    <span key={tag} style={{ fontFamily:mono, fontSize:"10px", padding:"3px 10px", border:`0.5px solid ${t.borderCard}`, color:t.textFaint, letterSpacing:"0.06em" }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Before → After (Torque เท่านั้น) */}
              {p.beforeImg && p.afterImg && (
                <div style={{ padding:"0 1.75rem 1.25rem" }}>
                  <p style={{ fontFamily:mono, fontSize:"10px", color:t.textFaint, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:"10px" }}>Before → After</p>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }}>
                    <div>
                      <img src={p.beforeImg} alt="before" className="img-zoom"
                        style={{ width:"100%", border:`0.5px solid ${t.borderCard}`, display:"block" }}
                        onClick={()=>setLightboxImg(p.beforeImg!)} />
                      <p style={{ fontFamily:mono, fontSize:"10px", color:"#e05555", marginTop:"6px" }}>✕ {p.beforeLabel}</p>
                    </div>
                    <div>
                      <img src={p.afterImg} alt="after" className="img-zoom"
                        style={{ width:"100%", border:`0.5px solid ${t.borderCard}`, display:"block" }}
                        onClick={()=>setLightboxImg(p.afterImg!)} />
                      <p style={{ fontFamily:mono, fontSize:"10px", color:"#5dba8a", marginTop:"6px" }}>✓ {p.afterLabel}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Gallery */}
              {p.gallery.length > 0 && (
                <div style={{ padding:"0 1.75rem 1.75rem" }}>
                  <p style={{ fontFamily:mono, fontSize:"10px", color:t.textFaint, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:"10px" }}>Gallery</p>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:"10px" }}>
                    {p.gallery.map((img,idx)=>(
                      <div key={idx} className="img-zoom" onClick={()=>setLightboxImg(img.src)}
                        style={{ border:`0.5px solid ${t.borderCard}`, overflow:"hidden", cursor:"zoom-in" }}>
                        <img src={img.src} alt={img.caption}
                          style={{ width:"100%", height:"100px", objectFit:"cover", display:"block" }} />
                        <p style={{ fontFamily:mono, fontSize:"10px", color:t.textFaintest, padding:"6px 8px", background:t.bgCard }}>{img.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS + TECH ICONS ── */}
      <section id="skills" style={{ padding:"4rem 2.5rem", borderBottom:`0.5px solid ${t.border}`, maxWidth:"1100px", margin:"0 auto" }}>
        <p style={sectionLabel}>Technical skills</p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:"10px", marginBottom:"3rem" }}>
          {techStacks.map(tech=>(
            <div key={tech.name}
              style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"6px", padding:"14px 16px", border:`0.5px solid ${t.borderCard}`, background:t.bgCard, minWidth:"72px", transition:"all 0.2s", cursor:"default" }}
              onMouseOver={e=>{ e.currentTarget.style.borderColor=tech.color||t.accent; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseOut={e=>{ e.currentTarget.style.borderColor=t.borderCard; e.currentTarget.style.transform="translateY(0)"; }}>
              {tech.icon
                ? <i className={tech.icon} style={{ fontSize:"28px", color:tech.color }} />
                : <img src={(tech as any).img} alt={tech.name} style={{ width:"28px", height:"28px", objectFit:"contain" }} />
              }
              <span style={{ fontFamily:mono, fontSize:"10px", color:t.textFaint, letterSpacing:"0.04em" }}>{tech.name}</span>
            </div>
          ))}
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"2rem" }}>
          {Object.entries(skills).map(([group,items])=>(
            <div key={group}>
              <p style={{ fontFamily:mono, fontSize:"11px", letterSpacing:"0.1em", color:t.accent, textTransform:"uppercase", marginBottom:"1rem", paddingBottom:"0.75rem", borderBottom:`0.5px solid ${t.border}` }}>{group}</p>
              {items.map(skill=>(
                <div key={skill} style={{ fontFamily:mono, fontSize:"12px", color:t.textFaint, padding:"6px 0", borderBottom:`0.5px solid ${t.border}`, display:"flex", alignItems:"center", gap:"10px", transition:"color 0.2s", cursor:"default" }}
                  onMouseOver={e=>(e.currentTarget.style.color=t.accent)}
                  onMouseOut={e=>(e.currentTarget.style.color=t.textFaint)}>
                  <span style={{ color:t.textFaintest }}>—</span>{skill}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ marginTop:"3rem", padding:"1.5rem", border:`0.5px solid ${t.borderCard}`, background:t.bgCard }}>
          <p style={{ fontFamily:mono, fontSize:"10px", letterSpacing:"0.14em", color:t.accent, textTransform:"uppercase", marginBottom:"0.75rem" }}>Education</p>
          <p style={{ fontSize:"15px", fontWeight:400, marginBottom:"4px", color:t.text }}>B.Sc. Applied Artificial Intelligence and Smart Technology</p>
          <p style={{ fontFamily:mono, fontSize:"12px", color:t.textFaint, marginBottom:"0.75rem" }}>Burapha University · 2022 – Present</p>
          <p style={{ fontSize:"13px", color:t.textMuted, lineHeight:1.6 }}>
            Machine Learning · Predictive Analytics · Object Oriented Programming · Natural Language Processing · Database Management · Data Analysis · Robotics & Automation · Software Architecture
          </p>
        </div>
      </section>

      {/* ── GITHUB STATS ── */}
      <section style={{ padding:"4rem 2.5rem", borderBottom:`0.5px solid ${t.border}`, maxWidth:"1100px", margin:"0 auto" }}>
        <p style={sectionLabel}>GitHub activity</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"12px", marginBottom:"1.5rem" }}>
          {[
            { label:"Public repos", value:githubStats?githubStats.repos:"…" },
            { label:"Followers",    value:githubStats?githubStats.followers:"…" },
            { label:"GitHub since", value:"2022" },
          ].map(s=>(
            <div key={s.label} style={{ padding:"1.5rem", border:`0.5px solid ${t.borderCard}`, background:t.bgCard }}>
              <div style={{ fontFamily:serif, fontSize:"32px", fontWeight:300, color:t.text, marginBottom:"4px" }}>{s.value}</div>
              <div style={{ fontFamily:mono, fontSize:"11px", color:t.textFaint }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ border:`0.5px solid ${t.borderCard}`, padding:"1.25rem", background:t.bgCard, display:"flex", flexDirection:"column", gap:"10px" }}>
          <span style={{ fontFamily:mono, fontSize:"10px", color:t.textFaint, letterSpacing:"0.1em", textTransform:"uppercase" }}>Contribution graph</span>
          <img src="https://ghchart.rshah.org/c8a96e/NothingToSad" alt="GitHub contribution chart"
            style={{ width:"100%", filter:dark?"invert(0)":"invert(1) hue-rotate(180deg)", borderRadius:"2px", opacity:0.85 }} />
          <a href="https://github.com/NothingToSad" target="_blank" rel="noreferrer"
            style={{ fontFamily:mono, fontSize:"11px", color:t.accent, textDecoration:"none", alignSelf:"flex-end" }}
            onMouseOver={e=>(e.currentTarget.style.opacity="0.7")}
            onMouseOut={e=>(e.currentTarget.style.opacity="1")}>
            View on GitHub ↗
          </a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding:"4rem 2.5rem", maxWidth:"1100px", margin:"0 auto" }}>
        <p style={sectionLabel}>Contact</p>
        <p style={{ fontSize:"clamp(22px,4vw,36px)", fontWeight:300, lineHeight:1.3, marginBottom:"2.5rem", maxWidth:"480px", fontStyle:"italic", color:t.textMuted }}>
          Open to AI, Data, and Software Engineering roles.
        </p>
        <div style={{ display:"flex", flexDirection:"column", marginBottom:"2.5rem" }}>
          {[
            { label:"Email",    value:"suwat.pkh@gmail.com",            href:"mailto:suwat.pkh@gmail.com" },
            { label:"Phone",    value:"+094-482-4448",                   href:"tel:+0944824448" },
            { label:"GitHub",   value:"github.com/NothingToSad",         href:"https://github.com/NothingToSad" },
            { label:"Location", value:"Bangplee, Samutprakarn, Thailand", href:null },
          ].map(c=>(
            <div key={c.label} style={{ display:"flex", alignItems:"center", gap:"1.5rem", padding:"1rem 0", borderBottom:`0.5px solid ${t.border}` }}>
              <span style={{ fontFamily:mono, fontSize:"10px", letterSpacing:"0.12em", color:t.textFaint, textTransform:"uppercase", minWidth:"70px" }}>{c.label}</span>
              {c.href
                ? <a href={c.href} target={c.href.startsWith("http")?"_blank":undefined} rel="noreferrer" style={{ fontSize:"14px", color:t.accent, textDecoration:"none", transition:"opacity 0.2s" }} onMouseOver={e=>(e.currentTarget.style.opacity="0.7")} onMouseOut={e=>(e.currentTarget.style.opacity="1")}>{c.value}</a>
                : <span style={{ fontSize:"14px", color:t.textMuted }}>{c.value}</span>
              }
            </div>
          ))}
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:"2rem", borderTop:`0.5px solid ${t.border}` }}>
          <span style={{ fontFamily:mono, fontSize:"11px", color:t.textFaintest }}>© 2026 Suwat Punkhiew</span>
          <span style={{ fontFamily:mono, fontSize:"11px", color:t.textFaintest }}>Built with Next.js · Deployed on Vercel</span>
        </div>
      </section>
    </main>
  );
}
