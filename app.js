// Program Guardian - Application Code
// Auto-generated from remixed-b3e53bf6.tsx

const { useState, useMemo, useRef, useEffect } = React;
const { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, BarChart, Bar, Cell } = Recharts;


// â”€â”€â”€ PALETTE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const P = {
  bg0:"#EAF1FB",bg1:"#F0F5FC",bg2:"#FFFFFF",bg3:"#F6FAFE",bg4:"#E8F0FA",
  panel:"#FFFFFF",border:"rgba(59,130,246,0.18)",borderHi:"rgba(59,130,246,0.45)",
  cyan:"#2563EB",cyanL:"#3B82F6",electric:"#0EA5E9",
  blue:"#2563EB",blueL:"#60A5FA",
  emerald:"#10B981",amber:"#F59E0B",rose:"#EF4444",
  violet:"#8B5CF6",pink:"#EC4899",gold:"#F59E0B",
  t0:"#0F172A",t1:"#1E293B",t2:"#475569",t3:"#64748B",
};

// â”€â”€â”€ AGENTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const AGENTS = [
  {id:"larry", firstName:"Larry", name:"Program Guardian",      role:"Lead Orchestrator",       persona:"Calm and decisive â€” anchors the team and routes every call.",       color:P.cyan,    lead:true,  avatar:{skin:"#F0D4B5",hair:"#1A1410",armor:"#E8F4FF",armorDark:"#4A6FA8",trim:P.cyan,   eye:"#1D4ED8",gender:"m"},tags:["Orchestration","Routing","Synthesis"]},
  {id:"bea",   firstName:"Bea",   name:"Business Acumen Suite", role:"Strategy & Finance",      persona:"The executive translator â€” turns data into narrative.",            color:P.blue,    avatar:{skin:"#E8C4A0",hair:"#8B4513",armor:"#DCE8F5",armorDark:"#3B5A8C",trim:P.blue,  eye:"#2563EB",gender:"f"},tags:["EVM","Portfolio","Brief"]},
  {id:"peter", firstName:"Peter", name:"Program Health Agent",  role:"Budget & Forecast",       persona:"Analytical â€” watches the numbers and raises early warnings.",       color:P.emerald, avatar:{skin:"#F5D2A8",hair:"#3C2415",armor:"#D4E8DC",armorDark:"#2C5A48",trim:P.emerald,eye:"#059669",gender:"m"},tags:["CPI/SPI","EAC","Forecast"]},
  {id:"eddie", firstName:"Eddie", name:"Program Expert Agent",  role:"Domain Knowledge",        persona:"Institutional memory â€” deep recall of every document.",            color:P.violet,  avatar:{skin:"#E8B89A",hair:"#1C1C1C",armor:"#DCD4F0",armorDark:"#3B2868",trim:P.violet, eye:"#7C3AED",gender:"m"},tags:["RAG","Insights","Context"]},
  {id:"ivy",   firstName:"Ivy",   name:"IMS Agent",             role:"Schedule & Timeline",     persona:"Schedule-focused and blunt about slips.",                          color:P.electric,avatar:{skin:"#D4A574",hair:"#5C2D1A",armor:"#D0E8F0",armorDark:"#1E4A6C",trim:P.electric,eye:"#0EA5E9",gender:"f"},tags:["IMS","Float","Milestones"]},
  {id:"connie",firstName:"Connie",name:"Contracts Agent",       role:"Customer & Deliverables", persona:"Formal and deadline-aware â€” deliverable-obsessed.",               color:P.amber,   avatar:{skin:"#FAEBD7",hair:"#2D1810",armor:"#F0E4C8",armorDark:"#6C4A00",trim:P.amber,  eye:"#92400E",gender:"f"},tags:["CDRLs","Milestones","Compliance"]},
  {id:"tony",  firstName:"Tony",  name:"Techie Agent",          role:"Tech & Systems",          persona:"Engineering voice â€” talks reqs, test, and interfaces.",            color:P.pink,    avatar:{skin:"#F0C8A0",hair:"#0F1024",armor:"#F0D4E0",armorDark:"#5C0A28",trim:P.pink,   eye:"#DB2777",gender:"m"},tags:["Requirements","Test","ICD"]},
  {id:"sully", firstName:"Sully", name:"Ops Supply Chain",      role:"Logistics & Resources",   persona:"Pragmatic â€” supplier-focused, sees the chain end-to-end.",         color:P.gold,    avatar:{skin:"#C8956C",hair:"#2C1F18",armor:"#F0E0C0",armorDark:"#5C3A00",trim:P.gold,   eye:"#B45309",gender:"m"},tags:["Suppliers","Delivery","Resources"]},
  {id:"ronnie",firstName:"Ronnie",name:"ROADS Agent",           role:"Risk & Mitigation",       persona:"Risk-first mindset â€” always tracking exposure.",                   color:P.rose,    avatar:{skin:"#E8D0BC",hair:"#3C1810",armor:"#F0D4D8",armorDark:"#5C0A1C",trim:P.rose,   eye:"#BE123C",gender:"f"},tags:["Risk","Alerts","Mitigation"]},
];
const getAgent = (id) => AGENTS.find(a => a.id === id);

// â”€â”€â”€ HUMAN COUNTERPARTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const HUMANS = {
  larry: {name:"Col. R. Mitchell",title:"Program Manager",            initials:"RM",color:"#2563EB",ch:"#pg-program-mgmt"},
  bea:   {name:"S. Thornton",     title:"Finance & Strategy Lead",    initials:"ST",color:"#3B82F6",ch:"#pg-finance"},
  peter: {name:"S. Kim",          title:"Program Controller",         initials:"SK",color:"#10B981",ch:"#pg-cost"},
  eddie: {name:"D. Reeves",       title:"Program Analyst",            initials:"DR",color:"#8B5CF6",ch:"#pg-knowledge"},
  ivy:   {name:"J. Torres",       title:"Integrated Master Scheduler",initials:"JT",color:"#0EA5E9",ch:"#pg-schedule"},
  connie:{name:"M. Walsh",        title:"Contracts Manager",          initials:"MW",color:"#D97706",ch:"#pg-contracts"},
  tony:  {name:"R. Chen",         title:"Systems Engineering Lead",   initials:"RC",color:"#DB2777",ch:"#pg-tech"},
  sully: {name:"B. Davis",        title:"Supply Chain Manager",       initials:"BD",color:"#B45309",ch:"#pg-supply"},
  ronnie:{name:"A. Garcia",       title:"Risk Manager",               initials:"AG",color:"#EF4444",ch:"#pg-risk"},
};

const QUICK_REPLIES = {
  larry: ["Understood. Calling a recovery meeting at 0900 tomorrow. All agents â€” continue analysis.","Got the escalation. I'll brief the customer today. Agents â€” maintain current posture."],
  bea:   ["Portfolio impact noted. I'll update the roll-up for the next monthly brief.","Financial picture aligns. Please proceed and route findings through normal channels."],
  peter: ["I've reviewed the numbers. Labor variance is real â€” confirm with the CAMs and proceed.","Understood. Finalize the EAC and flag for formal rebaseline review. I'll approve."],
  eddie: ["Document index looks current. I'll validate the latest contract amendments are filed.","Confirmed. Continue the archive search and route any gaps to the team."],
  ivy:   ["Schedule slip is on my radar. I'll coordinate recovery options with the scheduler today.","Confirmed. Flag any additional float impacts immediately. I'll brief the PMR team."],
  connie:["CDRL chain reviewed. I'll coordinate directly with the customer on A024 today.","Acknowledged. Continue tracking and alert me immediately if further slips are identified."],
  tony:  ["ICD-007 noted. I'm convening the interface team for disposition by end of week.","Test status acknowledged. Proceed with the formal test readiness review."],
  sully: ["Northrop issue confirmed. I'm calling the supplier PM today to escalate.","Supply chain noted. Please update the delivery risk register and brief me at the next review."],
  ronnie:["R-07 mitigation is my top priority. I'll work it with the team this week.","Confirmed. Update the register and flag for the next formal Risk Review Board."],
};

let _notifId = 10;
function makeNotif(seq) {
  const toAg = getAgent(seq.to);
  const fromAg = getAgent(seq.from);
  if (!toAg || !fromAg) return null;
  const isEsc = seq.to === "larry";
  const humanId = isEsc ? "larry" : seq.to;
  const useEmail = ["peter","eddie","connie","larry"].includes(humanId);
  const now = new Date();
  const t = `${now.getHours()}:${String(now.getMinutes()).padStart(2,"0")}`;
  return {
    id: _notifId++,
    type: useEmail ? "email" : "teams",
    humanId,
    agentId: seq.from,
    time: t,
    subject: useEmail
      ? `[PG] ${isEsc ? "Escalation â€” PM Attention Required" : `Task: ${toAg.firstName} the ${toAg.role}`}`
      : (HUMANS[humanId] ? HUMANS[humanId].ch : "#pg-general"),
    message: isEsc
      ? `${fromAg.firstName} the ${fromAg.role} requires PM-level decision. ${seq.text || ""}. Your direction is requested.`
      : `${fromAg.firstName} the ${fromAg.role} is coordinating with ${toAg.firstName} the ${toAg.role}. Action: ${seq.text || ""}. Your awareness and direction are requested.`,
    status: "sent",
    replied: false,
  };
}

const INIT_NOTIFS = [
  {id:1,type:"email", humanId:"peter", agentId:"larry",time:"10:15",subject:"[PG] Morning Cost Review â€” Action Required",  message:"Peter the Program Health Agent has been activated for daily cost analysis on WBS 3.2. EAC variance flagged. Please validate cost baseline and coordinate with your CAMs.",        status:"read",      replied:false},
  {id:2,type:"teams", humanId:"ronnie",agentId:"larry",time:"10:16",subject:"#pg-risk",                                    message:"@a.garcia â€” Ronnie the ROADS Agent is updating R-07. $1.2M exposure identified. Risk Manager review requested â€” please confirm mitigation status and timeline.",    status:"delivered", replied:false},
  {id:3,type:"teams", humanId:"ivy",   agentId:"larry",time:"10:16",subject:"#pg-schedule",                                message:"@j.torres â€” Ivy the IMS Agent flagged a critical path shift. Subsystem Integration is now the driver, MS-14 has a 9-day slip. IMS baseline review required.",      status:"delivered", replied:false},
  {id:4,type:"email", humanId:"connie",agentId:"larry",time:"10:17",subject:"[PG] CDRL Review Required â€” A012 & A024",     message:"Connie the Contracts Agent has been tasked with CDRL chain review. A024 flagged overdue. Contracts Manager coordination with the customer may be required.",      status:"sent",      replied:false},
];

// â”€â”€â”€ ANIMATION CSS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const ANIMS = `
@keyframes pgDot{0%,80%,100%{opacity:.3;transform:scale(.7)}40%{opacity:1;transform:scale(1)}}
@keyframes pgBubble{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}
@keyframes pgRing{0%{transform:scale(1);opacity:.7}100%{transform:scale(1.55);opacity:0}}
@keyframes pgGear{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes pgBlink{0%,100%{opacity:1}50%{opacity:.3}}
@keyframes pgArrow{0%,100%{transform:translateX(0)}50%{transform:translateX(5px)}}
@keyframes pgFadeUp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
@keyframes pgSlideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}
@keyframes pgFadeIn{from{opacity:0}to{opacity:1}}
@keyframes pgOrbit{from{transform:rotate(0deg) translateX(16px) rotate(0deg)}to{transform:rotate(360deg) translateX(16px) rotate(-360deg)}}
@keyframes pgStream{0%{transform:translateX(-8px);opacity:0}50%{opacity:1}100%{transform:translateX(16px);opacity:0}}
@keyframes pgTicker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@keyframes pgPop{0%{opacity:0;transform:scale(.88)}100%{opacity:1;transform:scale(1)}}
`;

// â”€â”€â”€ AVATAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function lighten(hex,a){const n=parseInt(hex.replace("#",""),16);return`#${[Math.min(255,((n>>16)&255)+a),Math.min(255,((n>>8)&255)+a),Math.min(255,(n&255)+a)].map(v=>v.toString(16).padStart(2,"0")).join("")}`}
function darken(hex,a){const n=parseInt(hex.replace("#",""),16);return`#${[Math.max(0,((n>>16)&255)-a),Math.max(0,((n>>8)&255)-a),Math.max(0,(n&255)-a)].map(v=>v.toString(16).padStart(2,"0")).join("")}`}
function hexPts(cx,cy,r,s){const p=[];for(let i=0;i<s;i++){const a=(Math.PI*2*i)/s-Math.PI/2;p.push(`${cx+r*Math.cos(a)},${cy+r*Math.sin(a)}`)}return p.join(" ")}

function Avatar({ agent, size=56, glow=true, active=false, calling=false, framed=false }) {
  const av=agent.avatar,s=size,cx=s/2,cy=s/2,hr=s*0.20,isF=av.gender==="f";
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{flexShrink:0,display:"block"}}>
      <defs>
        <radialGradient id={`bg-${agent.id}`} cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor={agent.color} stopOpacity={active||calling?0.5:0.25}/><stop offset="100%" stopColor={agent.color} stopOpacity="0"/></radialGradient>
        <radialGradient id={`sk-${agent.id}`} cx="45%" cy="40%" r="60%"><stop offset="0%" stopColor={lighten(av.skin,18)}/><stop offset="100%" stopColor={av.skin}/></radialGradient>
        <linearGradient id={`ar-${agent.id}`} x1="0%" y1="0%" x2="50%" y2="100%"><stop offset="0%" stopColor="#fff"/><stop offset="40%" stopColor={av.armor}/><stop offset="100%" stopColor={av.armorDark}/></linearGradient>
        <linearGradient id={`hr-${agent.id}`} x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor={lighten(av.hair,10)}/><stop offset="100%" stopColor={av.hair}/></linearGradient>
        <clipPath id={`cl-${agent.id}`}><circle cx={cx} cy={cy} r={s*0.46}/></clipPath>
      </defs>
      {glow&&<circle cx={cx} cy={cy} r={s*0.48} fill={`url(#bg-${agent.id})`}/>}
      <circle cx={cx} cy={cy} r={s*0.46} fill="none" stroke={agent.color} strokeWidth={active||calling?s*0.026:s*0.014} opacity={active||calling?0.9:0.55}/>
      {active&&<circle cx={cx} cy={cy} r={s*0.46} fill="none" stroke={agent.color} strokeWidth={s*0.018} opacity={0.5} style={{animation:"pgRing 1.6s ease-out infinite"}}/>}
      {calling&&<><circle cx={cx} cy={cy} r={s*0.46} fill="none" stroke={agent.color} strokeWidth={s*0.018} opacity={0.6} style={{animation:"pgRing 1.1s ease-out infinite"}}/><circle cx={cx} cy={cy} r={s*0.46} fill="none" stroke={agent.color} strokeWidth={s*0.014} opacity={0.4} style={{animation:"pgRing 1.1s ease-out 0.55s infinite"}}/></>}
      <circle cx={cx} cy={cy} r={s*0.42} fill="#1A2A4E"/>
      <circle cx={cx} cy={cy} r={s*0.42} fill={`url(#bg-${agent.id})`} opacity={0.4}/>
      <g clipPath={`url(#cl-${agent.id})`}>
        <path d={`M${cx-s*.32} ${s*.92}L${cx-s*.30} ${s*.74}Q${cx-s*.22} ${s*.66} ${cx-s*.12} ${s*.66}L${cx+s*.12} ${s*.66}Q${cx+s*.22} ${s*.66} ${cx+s*.30} ${s*.74}L${cx+s*.32} ${s*.92}Z`} fill={`url(#ar-${agent.id})`}/>
        <path d={`M${cx-s*.42} ${s*.78}Q${cx-s*.40} ${s*.62} ${cx-s*.26} ${s*.66}L${cx-s*.28} ${s*.84}Z`} fill={av.armorDark}/>
        <path d={`M${cx+s*.42} ${s*.78}Q${cx+s*.40} ${s*.62} ${cx+s*.26} ${s*.66}L${cx+s*.28} ${s*.84}Z`} fill={av.armorDark}/>
        <path d={`M${cx-s*.10} ${s*.70}L${cx+s*.10} ${s*.70}`} stroke={av.trim} strokeWidth={s*.012} opacity={.9}/>
        <circle cx={cx} cy={s*.75} r={s*.022} fill={av.trim} opacity={.95}><animate attributeName="opacity" values=".5;1;.5" dur="2s" repeatCount="indefinite"/></circle>
        <rect x={cx-s*.045} y={s*.62} width={s*.09} height={s*.07} fill={av.skin}/>
        <ellipse cx={cx} cy={cy-s*.04} rx={hr} ry={hr*1.12} fill={`url(#sk-${agent.id})`}/>
        {isF ? (<>
          <path d={`M${cx-hr*.95} ${cy-hr*.4}Q${cx-hr*1.05} ${cy+hr*.5} ${cx-hr*.7} ${cy+hr*.9}L${cx-hr*.5} ${cy+hr*.7}Q${cx-hr*.7} ${cy+hr*.2} ${cx-hr*.7} ${cy-hr*.3}Z`} fill={`url(#hr-${agent.id})`}/>
          <path d={`M${cx+hr*.95} ${cy-hr*.4}Q${cx+hr*1.05} ${cy+hr*.5} ${cx+hr*.7} ${cy+hr*.9}L${cx+hr*.5} ${cy+hr*.7}Q${cx+hr*.7} ${cy+hr*.2} ${cx+hr*.7} ${cy-hr*.3}Z`} fill={`url(#hr-${agent.id})`}/>
          <path d={`M${cx-hr*.95} ${cy-hr*.4}Q${cx-hr*.7} ${cy-hr*1.25} ${cx} ${cy-hr*1.15}Q${cx+hr*.7} ${cy-hr*1.25} ${cx+hr*.95} ${cy-hr*.4}Q${cx+hr*.9} ${cy-hr*.75} ${cx+hr*.3} ${cy-hr*.85}Q${cx} ${cy-hr*.7} ${cx-hr*.5} ${cy-hr*.85}Q${cx-hr*.9} ${cy-hr*.75} ${cx-hr*.95} ${cy-hr*.4}Z`} fill={`url(#hr-${agent.id})`}/>
        </>) : (
          <path d={`M${cx-hr*.95} ${cy-hr*.4}Q${cx-hr*.7} ${cy-hr*1.25} ${cx} ${cy-hr*1.15}Q${cx+hr*.7} ${cy-hr*1.25} ${cx+hr*.95} ${cy-hr*.4}Q${cx+hr*.9} ${cy-hr*.7} ${cx+hr*.5} ${cy-hr*.85}Q${cx} ${cy-hr*.75} ${cx-hr*.5} ${cy-hr*.85}Q${cx-hr*.9} ${cy-hr*.7} ${cx-hr*.95} ${cy-hr*.4}Z`} fill={`url(#hr-${agent.id})`}/>
        )}
        <path d={`M${cx-hr*.5} ${cy-s*.06}Q${cx-hr*.32} ${cy-s*.075} ${cx-hr*.15} ${cy-s*.06}`} stroke={av.hair} strokeWidth={s*.012} fill="none" strokeLinecap="round"/>
        <path d={`M${cx+hr*.15} ${cy-s*.06}Q${cx+hr*.32} ${cy-s*.075} ${cx+hr*.5} ${cy-s*.06}`} stroke={av.hair} strokeWidth={s*.012} fill="none" strokeLinecap="round"/>
        <ellipse cx={cx-hr*.32} cy={cy-s*.02} rx={hr*.13} ry={hr*.085} fill="white"/>
        <ellipse cx={cx+hr*.32} cy={cy-s*.02} rx={hr*.13} ry={hr*.085} fill="white"/>
        <circle cx={cx-hr*.30} cy={cy-s*.018} r={hr*.07} fill={av.eye}/>
        <circle cx={cx+hr*.30} cy={cy-s*.018} r={hr*.07} fill={av.eye}/>
        <circle cx={cx-hr*.28} cy={cy-s*.022} r={hr*.03} fill="#000"/>
        <circle cx={cx+hr*.28} cy={cy-s*.022} r={hr*.03} fill="#000"/>
        <circle cx={cx-hr*.26} cy={cy-s*.030} r={hr*.014} fill="#fff"/>
        <circle cx={cx+hr*.34} cy={cy-s*.030} r={hr*.014} fill="#fff"/>
        <path d={`M${cx-hr*.18} ${cy+hr*.42}Q${cx} ${cy+hr*.5} ${cx+hr*.18} ${cy+hr*.42}`} stroke={darken(av.skin,25)} strokeWidth={s*.014} fill="none" strokeLinecap="round"/>
      </g>
      {framed&&agent.lead&&<polygon points={hexPts(cx,cy,s*.485,6)} fill="none" stroke={P.gold} strokeWidth={s*.012} opacity={.7}/>}
    </svg>
  );
}

// â”€â”€â”€ HUMAN BADGE (distinct from armored avatars) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function HumanBadge({ humanId, size=32 }) {
  const h = HUMANS[humanId];
  if (!h) return null;
  return (
    <div style={{width:size,height:size,borderRadius:Math.round(size*.3),background:`${h.color}15`,border:`1.5px solid ${h.color}55`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:Math.round(size*.32),fontWeight:700,color:h.color,flexShrink:0,letterSpacing:"-.01em",position:"relative"}}>
      {h.initials}
      <div style={{position:"absolute",bottom:-2,right:-2,width:Math.round(size*.3),height:Math.round(size*.3),borderRadius:99,background:P.emerald,border:"1px solid white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:Math.round(size*.16)}}>ðŸ‘¤</div>
    </div>
  );
}

// â”€â”€â”€ ACTIVITY ANIMATIONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function Anim({ agent, type, size=44 }) {
  return (
    <div style={{position:"relative",width:size,height:size,display:"inline-block"}}>
      <Avatar agent={agent} size={size} glow={type!=="idle"} active={["computing","working","reviewing","synthesizing"].includes(type)} calling={type==="calling"}/>
      {type==="thinking" && (
        <div style={{position:"absolute",top:-8,left:"50%",transform:"translateX(-50%)",display:"flex",gap:3,pointerEvents:"none"}}>
          {[0,1,2].map(i=><div key={i} style={{width:4,height:4,borderRadius:99,background:agent.color,animation:`pgDot 1.4s ease-in-out ${i*.2}s infinite`}}/>)}
        </div>
      )}
      {type==="talking" && (
        <div style={{position:"absolute",top:size*.05,right:-8,width:14,height:10,borderRadius:5,background:agent.color,animation:"pgBubble 1.4s ease-in-out infinite",pointerEvents:"none"}}>
          <div style={{position:"absolute",bottom:-3,left:3,width:0,height:0,borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderTop:`3px solid ${agent.color}`}}/>
        </div>
      )}
      {(type==="working"||type==="computing") && (
        <svg style={{position:"absolute",top:-3,right:-3,width:14,height:14,animation:"pgGear 2s linear infinite"}} viewBox="0 0 14 14">
          <circle cx={7} cy={7} r={2} fill={agent.color}/>
          {[0,60,120,180,240,300].map(a=><rect key={a} x={6} y={1.5} width={2} height={2.5} fill={agent.color} transform={`rotate(${a} 7 7)`}/>)}
        </svg>
      )}
      {type==="computing" && (
        <div style={{position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",display:"flex",gap:2,fontSize:9,fontFamily:"monospace",color:agent.color,fontWeight:700,pointerEvents:"none"}}>
          {["1","0","1","0","1"].map((c,i)=><span key={i} style={{animation:`pgBlink 1.2s ease-in-out ${i*.15}s infinite`}}>{c}</span>)}
        </div>
      )}
      {type==="alerting" && (
        <>
          <div style={{position:"absolute",inset:-3,borderRadius:"50%",border:`2px solid ${P.amber}`,animation:"pgRing 1.1s ease-out infinite",pointerEvents:"none"}}/>
          <div style={{position:"absolute",top:-6,right:-6,width:18,height:18,borderRadius:99,background:P.amber,color:"white",fontSize:11,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",animation:"pgBubble 1.1s ease-in-out infinite",pointerEvents:"none"}}>!</div>
        </>
      )}
      {type==="synthesizing" && [0,120,240].map((_,i)=>(
        <div key={i} style={{position:"absolute",top:"50%",left:"50%",width:5,height:5,borderRadius:99,background:agent.color,marginTop:-2.5,marginLeft:-2.5,animation:`pgOrbit 2s linear ${i*.67}s infinite`,pointerEvents:"none"}}/>
      ))}
      {type==="querying" && (
        <div style={{position:"absolute",left:-14,top:"50%",transform:"translateY(-50%)",display:"flex",flexDirection:"column",gap:2,pointerEvents:"none"}}>
          {[0,1,2].map(i=><div key={i} style={{width:8,height:2,background:agent.color,borderRadius:99,animation:`pgStream 1.6s ease-in-out ${i*.3}s infinite`}}/>)}
        </div>
      )}
    </div>
  );
}

// â”€â”€â”€ SHARED PRIMITIVES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const SH = "0 1px 3px rgba(15,23,42,.04),0 4px 12px rgba(37,99,235,.06)";
const RR = 14;
function GridBg({o=1}){return <div style={{position:"absolute",inset:0,pointerEvents:"none",opacity:o,backgroundImage:`linear-gradient(${P.cyan}0A 1px,transparent 1px),linear-gradient(90deg,${P.cyan}0A 1px,transparent 1px)`,backgroundSize:"40px 40px"}}/>;}
function Corners({c=P.cyan,s=10,i=0,o=.35}){
  const st={position:"absolute",width:s,height:s,pointerEvents:"none",opacity:o};
  return(
    <>
      <div style={{...st,top:i,left:i,borderTop:`1.5px solid ${c}`,borderLeft:`1.5px solid ${c}`}}/>
      <div style={{...st,top:i,right:i,borderTop:`1.5px solid ${c}`,borderRight:`1.5px solid ${c}`}}/>
      <div style={{...st,bottom:i,left:i,borderBottom:`1.5px solid ${c}`,borderLeft:`1.5px solid ${c}`}}/>
      <div style={{...st,bottom:i,right:i,borderBottom:`1.5px solid ${c}`,borderRight:`1.5px solid ${c}`}}/>
    </>
  );
}

// â”€â”€â”€ WAR ROOM DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const IDLE_ST = {
  larry: ["Coordinating daily sync","Monitoring all channels","Routing team queries"],
  bea:   ["Refreshing portfolio view","Reviewing EVM data","Preparing quad slide"],
  peter: ["Analyzing EAC variance","Watching CPI trend","Updating cost baseline"],
  eddie: ["Indexing new documents","Searching program archive","Loading SOW context"],
  ivy:   ["Recalculating critical path","Checking float on MS-14","Reviewing IMS baseline"],
  connie:["Tracking CDRL A024","Reviewing deliverable chain","Monitoring compliance"],
  tony:  ["Validating ICD-007","Running req closure","Checking test pass rate"],
  sully: ["Checking Northrop delivery","Modeling supplier risk","Updating resource plan"],
  ronnie:["Updating risk register","Burning down R-14","Tracking open issues"],
};
const CALL_SEQS = [
  {from:"larry", to:"peter",  text:"Larry calling Peter the Program Health Agent â€” pull the EAC delta on WBS 3.2"},
  {from:"larry", to:"ronnie", text:"Larry routing R-07 to Ronnie the ROADS Agent"},
  {from:"larry", to:"ivy",    text:"Larry asking Ivy the IMS Agent for a critical path update"},
  {from:"peter", to:"bea",    text:"Peter the Program Health Agent routing EAC projection to Bea the Business Acumen Agent"},
  {from:"ivy",   to:"larry",  text:"Ivy the IMS Agent flagging MS-14 slip â€” 9 days â€” escalating to Larry"},
  {from:"ronnie",to:"larry",  text:"Ronnie the ROADS Agent surfacing R-07 exposure â€” PM attention needed"},
  {from:"connie",to:"larry",  text:"Connie the Contracts Agent reporting A024 overdue â€” flagging to Larry"},
  {from:"larry", to:"sully",  text:"Larry asking Sully the Supply Chain Agent to verify Northrop sensor delivery"},
  {from:"larry", to:"connie", text:"Larry routing CDRL schedule request to Connie the Contracts Agent"},
  {from:"tony",  to:"larry",  text:"Tony the Techie Agent reporting ICD-007 amber â€” routing to Larry"},
];
const ANIM_POOL = ["thinking","computing","working","talking","alerting","synthesizing","querying","reviewing"];

function buildIdle() { return AGENTS.reduce((acc,a)=>({...acc,[a.id]:{anim:"idle",text:IDLE_ST[a.id][0]}}),{}); }

function WarRoomPanel({ workflow, onWorkflowDone, onNotify }) {
  const [statuses, setStatuses] = useState(buildIdle);
  const [callSeq,  setCallSeq]  = useState(null);
  const [callText, setCallText] = useState("");
  const [wfStep,   setWfStep]   = useState(0);

  useEffect(() => {
    if (workflow) return;
    const t = setInterval(() => {
      if (Math.random() < 0.35) {
        const seq = CALL_SEQS[Math.floor(Math.random()*CALL_SEQS.length)];
        setCallSeq(seq); setCallText(seq.text);
        setStatuses(p => ({...p,
          [seq.from]:{anim:"calling",  text:`Calling ${getAgent(seq.to).firstName}â€¦`},
          [seq.to]:  {anim:"thinking", text:`Receiving from ${getAgent(seq.from).firstName}â€¦`},
        }));
        if (onNotify) { const n=makeNotif(seq); if(n) onNotify(n); }
        setTimeout(() => {
          setStatuses(p => ({...p,
            [seq.from]:{anim:"talking",   text:IDLE_ST[seq.from][0]},
            [seq.to]:  {anim:"computing", text:IDLE_ST[seq.to][0]},
          }));
          setTimeout(() => {
            setCallSeq(null); setCallText("");
            setStatuses(p => ({...p,
              [seq.from]:{anim:"idle",text:IDLE_ST[seq.from][0]},
              [seq.to]:  {anim:"idle",text:IDLE_ST[seq.to][0]},
            }));
          }, 3000);
        }, 2500);
      } else {
        const ra = AGENTS[Math.floor(Math.random()*AGENTS.length)];
        const an = ANIM_POOL[Math.floor(Math.random()*ANIM_POOL.length)];
        const tx = IDLE_ST[ra.id][Math.floor(Math.random()*IDLE_ST[ra.id].length)];
        setStatuses(p => ({...p,[ra.id]:{anim:an,text:tx}}));
        setTimeout(() => setStatuses(p=>({...p,[ra.id]:{anim:"idle",text:IDLE_ST[ra.id][0]}})), 3500);
      }
    }, 4500);
    return () => clearInterval(t);
  }, [workflow, onNotify]);

  useEffect(() => { if (!workflow||!workflow.length) return; setWfStep(0); }, [workflow]);

  useEffect(() => {
    if (!workflow) return;
    const step = workflow[wfStep];
    if (!step) { setTimeout(onWorkflowDone, 600); return; }
    const ns = buildIdle();
    step.agents.forEach(({id,anim,text}) => { ns[id]={anim,text:text||IDLE_ST[id][0]}; });
    setStatuses(ns);
    if (step.call) {
      setCallSeq({from:step.call.from,to:step.call.to,text:step.statusText||""});
      if (onNotify) { const n=makeNotif({...step.call,text:step.statusText||""}); if(n) onNotify(n); }
    } else { setCallSeq(null); }
    setCallText(step.statusText||"");
    const t = setTimeout(() => setWfStep(s=>s+1), step.duration||1200);
    return () => clearTimeout(t);
  }, [wfStep, workflow]);

  const larry   = getAgent("larry");
  const team    = AGENTS.filter(a=>!a.lead);
  const larrySt = statuses.larry||{anim:"idle",text:IDLE_ST.larry[0]};

  return (
    <div style={{background:`linear-gradient(135deg,${P.bg2},${P.bg3})`,border:`1.5px solid ${workflow?"#2563EB99":P.border}`,borderRadius:RR,padding:"14px 16px 12px",boxShadow:workflow?`0 4px 20px ${P.cyan}22`:SH,position:"relative",overflow:"hidden",transition:"all .3s"}}>
      <Corners c={P.cyan} i={7} s={9} o={workflow?.5:.3}/>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div style={{width:8,height:8,borderRadius:99,background:workflow?P.cyan:P.emerald,animation:"pgBlink 1.2s ease-in-out infinite"}}/>
          <span style={{fontSize:10.5,fontWeight:700,letterSpacing:".15em",color:workflow?P.cyan:P.t2,textTransform:"uppercase"}}>{workflow?"â— Team Executing":"War Room Â· All Agents Live"}</span>
        </div>
        {workflow
          ? <div style={{display:"flex",gap:3}}>{workflow.map((_,i)=><div key={i} style={{width:18,height:3,borderRadius:99,background:i<=wfStep?P.cyan:P.bg4,transition:"background .3s"}}/>)}</div>
          : <span style={{fontSize:9.5,color:P.t3}}>9 AGENTS Â· 9 HUMAN COUNTERPARTS</span>
        }
      </div>

      {/* Larry row */}
      <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:12,padding:"10px 14px",background:`${P.cyan}08`,borderRadius:10,border:`1px solid ${P.cyan}33`}}>
        <div style={{position:"relative"}}>
          <Anim agent={larry} type={larrySt.anim} size={58}/>
          {larrySt.anim==="calling" && <div style={{position:"absolute",right:-6,top:"50%",fontSize:18,color:P.cyan,animation:"pgArrow .9s ease-in-out infinite",transform:"translateY(-50%)"}}>â†’</div>}
        </div>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:16,fontWeight:700,color:P.t0}}><span style={{color:P.cyan}}>Larry</span> Â· Lead Program Guardian</div>
          <div style={{fontSize:12,color:P.t2,marginTop:2,fontStyle:"italic"}}>{larrySt.text}</div>
          {callText && <div style={{marginTop:5,fontSize:11.5,fontWeight:600,color:P.cyan,animation:"pgFadeUp .4s ease-out"}}>{callText}<span style={{display:"inline-block",width:6,height:12,background:P.cyan,marginLeft:4,animation:"pgBlink .8s ease-in-out infinite",verticalAlign:"middle",borderRadius:1}}/></div>}
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:5}}>
          <span style={{fontSize:9,fontWeight:700,padding:"3px 8px",borderRadius:4,background:`${P.gold}20`,color:"#78350F",letterSpacing:".1em"}}>LEAD AGENT</span>
          <div style={{display:"flex",alignItems:"center",gap:5,padding:"3px 8px",borderRadius:4,background:`${P.cyan}15`}}>
            <HumanBadge humanId="larry" size={16}/><span style={{fontSize:9,color:P.cyan,fontWeight:700}}>Col. R. Mitchell</span>
          </div>
        </div>
      </div>

      {/* Team grid */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8}}>
        {team.map(a => {
          const st = statuses[a.id]||{anim:"idle",text:IDLE_ST[a.id][0]};
          const isInCall = callSeq&&(callSeq.from===a.id||callSeq.to===a.id);
          return (
            <div key={a.id} style={{background:isInCall?`${a.color}10`:P.bg3,border:`1px solid ${isInCall?a.color+"44":P.border}`,borderRadius:10,padding:"9px 7px",display:"flex",flexDirection:"column",alignItems:"center",gap:5,transition:"all .25s",position:"relative"}}>
              <div style={{position:"relative"}}>
                <Anim agent={a} type={st.anim} size={40}/>
                {isInCall&&callSeq.from===a.id && <div style={{position:"absolute",right:-8,top:"50%",fontSize:14,color:a.color,animation:"pgArrow .9s ease-in-out infinite",transform:"translateY(-50%)"}}>â†’</div>}
                {isInCall&&callSeq.to===a.id   && <div style={{position:"absolute",left:-10,top:"50%",fontSize:12,color:a.color,opacity:.8,transform:"translateY(-50%)"}}>â†</div>}
              </div>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:11.5,fontWeight:700,color:a.color,lineHeight:1.2}}>{a.firstName}</div>
                <div style={{fontSize:9,color:P.t3,marginTop:1}}>{a.role}</div>
              </div>
              <div style={{fontSize:9.5,color:P.t1,textAlign:"center",lineHeight:1.35,opacity:st.anim!=="idle"?1:.65,minHeight:24}}>{st.text}</div>
              <div style={{display:"flex",alignItems:"center",gap:4,padding:"3px 6px",background:`${a.color}08`,borderRadius:6,border:`1px solid ${a.color}22`,width:"100%",justifyContent:"center"}}>
                <HumanBadge humanId={a.id} size={14}/>
                <span style={{fontSize:8.5,color:P.t2,fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{HUMANS[a.id]?.name.split(" ").slice(-1)[0]}</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:3}}>
                <div style={{width:5,height:5,borderRadius:99,background:st.anim==="alerting"?P.amber:st.anim==="idle"?P.t3:a.color}}/>
                <span style={{fontSize:8.5,color:st.anim==="idle"?P.t3:a.color,fontWeight:st.anim!=="idle"?700:400,textTransform:"uppercase",letterSpacing:".06em"}}>{st.anim}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// â”€â”€â”€ LIVE TICKER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const TICKER = ["Larry coordinating daily sync","Peter the Program Health Agent flagging EAC variance Â· S. Kim notified","Ronnie the ROADS Agent updated R-07 Â· A. Garcia notified via Teams","Ivy the IMS Agent: MS-14 shifted 9 days Â· J. Torres notified","Connie the Contracts Agent: CDRL A024 due in 3 days Â· M. Walsh notified","Bea the Business Acumen Agent synthesizing portfolio brief","Eddie the Program Expert indexed 4 new contract amendments","Sully the Supply Chain Agent checking Northrop Â· B. Davis notified","Col. R. Mitchell replied to Larry Â· recovery meeting set 0900","S. Kim replied to Peter the Program Health Agent â€” EAC baseline confirmed","A. Garcia replied to Ronnie the ROADS Agent â€” R-07 mitigation prioritized"];
function LiveTicker() {
  const items = [...TICKER,...TICKER];
  return (
    <div style={{background:P.bg1,borderTop:`1px solid ${P.border}`,padding:"5px 0",overflow:"hidden",flexShrink:0}}>
      <div style={{display:"flex",alignItems:"center"}}>
        <div style={{background:P.cyan,color:"#fff",fontSize:9.5,fontWeight:700,padding:"3px 10px",letterSpacing:".14em",flexShrink:0}}>LIVE</div>
        <div style={{flex:1,overflow:"hidden"}}>
          <div style={{display:"flex",whiteSpace:"nowrap",animation:"pgTicker 80s linear infinite"}}>
            {items.map((t,i)=><span key={i} style={{fontSize:11,color:P.t2,padding:"0 28px",display:"inline-flex",alignItems:"center",gap:8}}><span style={{color:P.cyan,fontSize:8}}>â—</span>{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

// â”€â”€â”€ HUMAN LOOP PANEL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function HumanLoopPanel({ notifications, onReply }) {
  const [notifs,     setNotifs]     = useState(notifications);
  const [replyId,    setReplyId]    = useState(null);
  const [replyInput, setReplyInput] = useState("");

  useEffect(() => { setNotifs(notifications); }, [notifications]);

  const unread = notifs.filter(n => n.status !== "read" && !n.replied).length;

  function doReply(notif, text) {
    setNotifs(p => p.map(n => n.id===notif.id ? {...n, replied:true, status:"read"} : n));
    const toAgId = notif.agentId === "larry" ? "larry" : notif.humanId;
    onReply(notif.humanId, toAgId, text);
    setReplyId(null);
    setReplyInput("");
  }

  return (
    <div style={{background:P.panel,border:`1px solid ${P.border}`,borderRadius:RR,display:"flex",flexDirection:"column",height:"100%",position:"relative",overflow:"hidden",boxShadow:SH}}>
      <Corners c={P.emerald} i={8}/>

      {/* header */}
      <div style={{padding:"13px 14px 10px",borderBottom:`1px solid ${P.border}`,flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:5}}>
          <div style={{width:26,height:26,borderRadius:7,background:"#10B98115",border:"1px solid #10B98133",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13}}>ðŸ‘¥</div>
          <span style={{fontSize:12,fontWeight:700,letterSpacing:".1em",color:P.emerald,textTransform:"uppercase"}}>Human Loop</span>
          {unread>0 && <div style={{marginLeft:"auto",width:18,height:18,borderRadius:99,background:P.rose,color:"#fff",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center"}}>{unread}</div>}
        </div>
        <div style={{fontSize:10,color:P.t3,marginBottom:6}}>9 agents Â· 9 human counterparts</div>
        <div style={{display:"flex",alignItems:"center",gap:5,padding:"5px 8px",background:`${P.emerald}08`,borderRadius:7,border:`1px solid ${P.emerald}22`}}>
          <div style={{width:6,height:6,borderRadius:99,background:P.emerald,animation:"pgBlink 1.8s ease-in-out infinite"}}/>
          <span style={{fontSize:10,color:P.emerald,fontWeight:700}}>Human-in-the-Loop Active</span>
        </div>
      </div>

      {/* notification list */}
      <div style={{flex:1,overflowY:"auto",padding:"10px"}}>
        {notifs.map(n => {
          const human   = HUMANS[n.humanId];
          const fromAg  = getAgent(n.agentId);
          const expanded = replyId === n.id;
          if (!human || !fromAg) return null;
          return (
            <div key={n.id} style={{background:n.replied?`${P.emerald}05`:n.status==="read"?P.bg3:P.bg2,border:`1px solid ${n.replied?P.emerald+"44":n.status==="read"?P.border:fromAg.color+"44"}`,borderRadius:10,padding:"9px 10px",marginBottom:8,animation:"pgPop .3s ease-out"}}>
              {/* type + time */}
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:7}}>
                <span style={{fontSize:9,fontWeight:700,padding:"2px 6px",borderRadius:4,background:n.type==="email"?"#2563EB10":"#7C3AED10",color:n.type==="email"?"#2563EB":"#7C3AED"}}>
                  {n.type==="email"?"ðŸ“§ EMAIL":"ðŸ’¬ TEAMS"}
                </span>
                <div style={{display:"flex",alignItems:"center",gap:5,fontSize:9}}>
                  {n.replied
                    ? <span style={{color:P.emerald,fontWeight:700}}>âœ“ Replied</span>
                    : <span style={{color:n.status==="read"?P.emerald:n.status==="delivered"?P.cyan:P.t3,fontWeight:600}}>
                        {n.status==="read"?"âœ“âœ“ Read":n.status==="delivered"?"âœ“ Delivered":"â— Sent"}
                      </span>
                  }
                  <span style={{color:P.t3}}>{n.time}</span>
                </div>
              </div>
              {/* who */}
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:7}}>
                <HumanBadge humanId={n.humanId} size={30}/>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:12,fontWeight:700,color:P.t0}}>{human.name}</div>
                  <div style={{fontSize:9.5,color:P.t3}}>{human.title}</div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:4,flexShrink:0}}>
                  <span style={{fontSize:9,color:P.t3}}>via</span>
                  <Avatar agent={fromAg} size={20} glow={false}/>
                  <span style={{fontSize:9.5,color:fromAg.color,fontWeight:600}}>{fromAg.firstName}</span>
                </div>
              </div>
              {/* subject + preview */}
              <div style={{fontSize:11,fontWeight:700,color:P.t0,marginBottom:3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{n.subject}</div>
              <div style={{fontSize:10.5,color:P.t2,lineHeight:1.45,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",marginBottom:8}}>{n.message}</div>
              {/* actions */}
              {!n.replied && !expanded && (
                <div style={{display:"flex",gap:5}}>
                  <button onClick={()=>setReplyId(n.id)} style={{flex:1,fontSize:10,fontWeight:600,padding:"5px 0",borderRadius:6,border:`1px solid ${human.color}44`,background:`${human.color}08`,color:human.color,cursor:"pointer"}}>
                    Reply as {human.initials} â†’
                  </button>
                  {n.agentId!=="larry" && n.humanId!=="larry" && (
                    <button onClick={()=>{
                      onReply("larry","larry",`FWD from ${human.name}: ${n.message.slice(0,80)}â€¦`);
                      setNotifs(p=>p.map(x=>x.id===n.id?{...x,replied:true,status:"read"}:x));
                    }} style={{fontSize:10,fontWeight:600,padding:"5px 8px",borderRadius:6,border:`1px solid ${P.cyan}44`,background:`${P.cyan}08`,color:P.cyan,cursor:"pointer"}}>+Larry</button>
                  )}
                </div>
              )}
              {/* reply panel */}
              {expanded && (
                <div style={{borderTop:`1px solid ${P.border}`,paddingTop:8}}>
                  <div style={{fontSize:9.5,color:P.t3,marginBottom:5}}>Quick replies as <strong>{human.name}</strong>:</div>
                  {(QUICK_REPLIES[n.humanId]||[]).map((qr,qi)=>(
                    <button key={qi} onClick={()=>doReply(n,qr)} style={{display:"block",width:"100%",fontSize:10.5,padding:"5px 8px",borderRadius:6,border:`1px solid ${human.color}33`,background:`${human.color}06`,color:P.t1,cursor:"pointer",textAlign:"left",lineHeight:1.4,marginBottom:4}}>{qr}</button>
                  ))}
                  <div style={{display:"flex",gap:5,marginTop:4}}>
                    <input value={replyInput} onChange={e=>setReplyInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&replyInput.trim()&&doReply(n,replyInput)} placeholder="Custom messageâ€¦" style={{flex:1,fontSize:10.5,padding:"5px 8px",borderRadius:6,border:`1px solid ${P.border}`,background:P.bg2,outline:"none",color:P.t0,fontFamily:"inherit"}}/>
                    <button onClick={()=>replyInput.trim()&&doReply(n,replyInput)} style={{fontSize:10.5,fontWeight:700,padding:"5px 9px",borderRadius:6,border:"none",background:human.color,color:"#fff",cursor:"pointer"}}>Send</button>
                    <button onClick={()=>{setReplyId(null);setReplyInput("");}} style={{fontSize:10,padding:"5px 7px",borderRadius:6,border:`1px solid ${P.border}`,background:"transparent",color:P.t3,cursor:"pointer"}}>âœ•</button>
                  </div>
                </div>
              )}
              {n.replied && <div style={{fontSize:10,color:P.emerald,fontWeight:600,display:"flex",alignItems:"center",gap:4}}><span>âœ“</span><span>{human.name} replied Â· added to Team Chat</span></div>}
            </div>
          );
        })}
      </div>

      {/* footer */}
      <div style={{padding:"9px 12px",borderTop:`1px solid ${P.border}`,background:P.bg3,flexShrink:0}}>
        <div style={{fontSize:10,color:P.t3,textAlign:"center",lineHeight:1.5}}>Every agent action notifies the responsible human via email or Teams. Replies flow back into Team Chat.</div>
      </div>
    </div>
  );
}

// â”€â”€â”€ WORKFLOWS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const WORKFLOWS = {
  chatMessage: [
    {statusText:"Larry receiving your requestâ€¦",        agents:[{id:"larry",anim:"thinking",text:"Reading the PM's questionâ€¦"}],                                                                                                                    duration:900},
    {statusText:"Larry routing to the right agentsâ€¦",   agents:[{id:"larry",anim:"calling",text:"Calling Peter the Program Health Agent + Ronnie the ROADS Agentâ€¦"},{id:"peter",anim:"thinking",text:"Standing byâ€¦"},{id:"ronnie",anim:"thinking",text:"Standing byâ€¦"}], call:{from:"larry",to:"peter"}, duration:1100},
    {statusText:"Peter pulling data Â· Ronnie checking riskâ€¦", agents:[{id:"larry",anim:"working",text:"Orchestratingâ€¦"},{id:"peter",anim:"computing",text:"Pulling EAC varianceâ€¦"},{id:"ronnie",anim:"working",text:"Checking R-07â€¦"}],           duration:1300},
    {statusText:"Eddie the Program Expert searching the knowledge baseâ€¦", agents:[{id:"larry",anim:"working",text:"Orchestratingâ€¦"},{id:"eddie",anim:"querying",text:"Searching program docsâ€¦"}], call:{from:"larry",to:"eddie"},                 duration:1100},
    {statusText:"Bea the Business Acumen Agent synthesizingâ€¦", agents:[{id:"bea",anim:"synthesizing",text:"Building responseâ€¦"},{id:"peter",anim:"talking",text:"Routing to Beaâ€¦"},{id:"larry",anim:"thinking",text:"Awaiting synthesisâ€¦"}], call:{from:"peter",to:"bea"}, duration:1200},
    {statusText:"Larry assembling the final responseâ€¦", agents:[{id:"larry",anim:"synthesizing",text:"Assembling answerâ€¦"}],                                                                                                                       duration:900},
  ],
  programSwitch: [
    {statusText:"Larry switching program contextâ€¦",   agents:[{id:"larry",anim:"working",text:"Loading new programâ€¦"}],                                                                                        duration:800},
    {statusText:"Eddie the Program Expert loading the knowledge baseâ€¦", agents:[{id:"larry",anim:"calling",text:"Calling Eddie the Program Expertâ€¦"},{id:"eddie",anim:"computing",text:"Loading program docsâ€¦"}], call:{from:"larry",to:"eddie"}, duration:1100},
    {statusText:"Peter recalculating Â· Ronnie refreshing risk registerâ€¦", agents:[{id:"peter",anim:"computing",text:"Recalculating EAC/CPIâ€¦"},{id:"ronnie",anim:"working",text:"Refreshing risk registerâ€¦"},{id:"ivy",anim:"computing",text:"Reloading IMSâ€¦"}], duration:1200},
    {statusText:"Team aligned â€” ready for new program.", agents:[{id:"larry",anim:"talking",text:"All agents synchronized"}],                                                                                  duration:700},
  ],
  customize:[{statusText:"Larry updating your workspaceâ€¦", agents:[{id:"larry",anim:"working",text:"Applying configurationâ€¦"}], duration:900}],
};

// â”€â”€â”€ DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function seeded(seed){let s=seed;return()=>{s=(s*1664525+1013904223)&0xffffffff;return(s>>>0)/0xffffffff;}}
function rv(r,mn,mx,dp=2){return parseFloat((mn+r()*(mx-mn)).toFixed(dp));}
const PROFIT_DATA=[{month:"Sep 25",actual:7.85},{month:"Oct 25",actual:7.34},{month:"Nov 25",actual:6.60},{month:"Dec 25",actual:6.03},{month:"Jan 26",actual:5.20},{month:"Feb 26",actual:4.58,forecast:4.58},{month:"Mar 26",forecast:3.95},{month:"Apr 26",forecast:3.40},{month:"May 26",forecast:2.88},{month:"Jun 26",forecast:2.35,warn:true},{month:"Jul 26",forecast:1.80,warn:true},{month:"Aug 26",forecast:1.20,warn:true}];

function genData(pid) {
  const r = seeded(pid.split("").reduce((a,c)=>a+c.charCodeAt(0),0)*31337);
  return {
    actions:[{id:1,text:"Resolve EV discrepancy on WBS 4.1.2",owner:"M. Torres",due:"May 21",priority:"high"},{id:2,text:"Update IMS for supplier schedule impact",owner:"J. Reeves",due:"May 23",priority:"high"},{id:3,text:"Complete RCCA for CPI degradation",owner:"S. Kim",due:"May 27",priority:"med"},{id:4,text:"Submit MR for labor replan",owner:"D. Patel",due:"Jun 2",priority:"low"}],
    alerts:[{type:"warn",text:"IBR action items due in 3 days",agentId:"bea",time:"1h ago"},{type:"alert",text:"CPI slipped on WBS 3.2",agentId:"peter",time:"2h ago"},{type:"ok",text:"Risk burn-down on R-14 complete",agentId:"ronnie",time:"4h ago"}],
    evm:{bcwp:rv(r,60,120,1),bcws:rv(r,65,125,1),acwp:rv(r,55,125,1),vac:rv(r,-3.5,2.5,1)},
    cpi:parseFloat(rv(r,.88,1.03).toFixed(2)), spi:parseFloat(rv(r,.90,1.05).toFixed(2)),
    cpiTrend:Array.from({length:6},()=>parseFloat(rv(r,.88,1.03).toFixed(2))),
    spiTrend:Array.from({length:6},()=>parseFloat(rv(r,.90,1.04).toFixed(2))),
    bac:Math.round(rv(r,80,180)), eac:Math.round(rv(r,85,195)),
    criticalPath:[{task:"Subsystem Integration Test",slip:"+9d",risk:"high"},{task:"Supplier Delivery â€” Sensor",slip:"+5d",risk:"med"},{task:"PDR Closeout",slip:"+2d",risk:"low"}],
    nextMilestones:[{name:"PMR",days:18},{name:"PDR Dry Run",days:30},{name:"PDR",days:49}],
    cdrls:[{code:"A001",title:"Monthly Status Report",status:"green",due:"Jun 5"},{code:"A012",title:"Test Plan",status:"amber",due:"Jun 12"},{code:"A024",title:"Trade Study Results",status:"red",due:"Jun 8"}],
    reqs:{total:412,closed:287,open:125}, testPass:Math.round(rv(r,72,97)),
    suppliers:[{name:"Northrop Sensors",status:"green"},{name:"Honeywell Avionics",status:"amber"},{name:"L3 Comm Systems",status:"green"},{name:"Boeing Structures",status:"red"}],
    risks:[{id:"R-07",title:"Supplier Delivery Slip",exposure:"$2.1M",priority:"high"},{id:"R-14",title:"Software IV&V Capacity",exposure:"$1.4M",priority:"high"},{id:"R-22",title:"Test Article Availability",exposure:"$0.8M",priority:"med"},{id:"R-31",title:"Workforce Attrition",exposure:"$0.6M",priority:"med"}],
    openIssues:Math.round(rv(r,8,22)),
    mitigationTrend:Array.from({length:6},(_,i)=>Math.max(0,Math.round(20-i*2.5+rv(r,-1,1)))),
  };
}

// â”€â”€â”€ CHART â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function ProfitChart() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={PROFIT_DATA} margin={{top:20,right:4,left:-22,bottom:0}}>
        <XAxis dataKey="month" tick={{fontSize:9,fill:P.t3}} axisLine={{stroke:P.border}} tickLine={false}/>
        <YAxis tick={{fontSize:9,fill:P.t3}} axisLine={false} tickLine={false} domain={[0,12]} tickFormatter={v=>`${v}%`}/>
        <Tooltip contentStyle={{background:P.bg2,border:`1px solid ${P.borderHi}`,borderRadius:6,fontSize:11}} formatter={v=>[v!=null?`${v.toFixed(2)}%`:"",""]}/>
        <ReferenceLine y={1.5} stroke={P.emerald} strokeDasharray="4 4" strokeOpacity={.6}/>
        <Bar dataKey="actual"   radius={[3,3,0,0]}>{PROFIT_DATA.map((e,i)=><Cell key={i} fill={e.actual==null   ?"transparent":P.emerald}/>)}</Bar>
        <Bar dataKey="forecast" radius={[3,3,0,0]}>{PROFIT_DATA.map((e,i)=><Cell key={i} fill={e.forecast==null||i<5?"transparent":e.warn?"#FCD34D":`${P.emerald}55`}/>)}</Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

// â”€â”€â”€ CARD SHELL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function Card({agent,title,icon,wide=false,children}) {
  return (
    <div style={{background:P.panel,border:`1px solid ${P.border}`,borderRadius:RR,padding:14,position:"relative",boxShadow:SH,gridColumn:wide?"1 / -1":"auto",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <Corners c={agent.color} i={5} s={8} o={.35}/>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10,paddingBottom:9,borderBottom:`1px solid ${P.border}`}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <Avatar agent={agent} size={26} glow={false}/>
          <div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:".08em",color:agent.color,textTransform:"uppercase",lineHeight:1.2}}>{title}</div>
            <div style={{fontSize:9.5,color:P.t3,marginTop:1}}><span style={{color:agent.color,fontWeight:700}}>{agent.firstName}</span> Â· {agent.name}</div>
          </div>
        </div>
        <div style={{width:26,height:26,borderRadius:99,background:`${agent.color}12`,border:`1px solid ${agent.color}22`,color:agent.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12}}>{icon}</div>
      </div>
      <div style={{flex:1}}>{children}</div>
    </div>
  );
}
function priC(p){return p==="high"?P.rose:p==="med"?P.amber:P.emerald;}
const COL={green:P.emerald,amber:P.amber,red:P.rose};

// â”€â”€â”€ CARDS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function ActionsCard({data}) {
  return (
    <Card agent={getAgent("larry")} title="Open Action Items" icon="âœ“" wide>
      <div style={{display:"flex",flexDirection:"column",gap:5}}>
        {data.actions.map(a=>(
          <div key={a.id} style={{display:"flex",alignItems:"center",gap:9,padding:"7px 10px",background:P.bg3,borderRadius:7}}>
            <div style={{width:7,height:7,borderRadius:99,background:priC(a.priority),flexShrink:0}}/>
            <div style={{flex:1,fontSize:12,color:P.t0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{a.text}</div>
            <div style={{fontSize:10.5,color:P.t2}}>{a.owner}</div>
            <span style={{fontSize:10,fontWeight:600,padding:"2px 7px",borderRadius:99,background:`${priC(a.priority)}15`,color:priC(a.priority)}}>{a.due}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
function AlertsCard({data}) {
  return (
    <Card agent={getAgent("larry")} title="Team Alerts" icon="ðŸ””">
      <div style={{display:"flex",flexDirection:"column",gap:9}}>
        {data.alerts.map((a,i)=>{
          const tagAg = getAgent(a.agentId)||getAgent("larry");
          const c = {warn:P.amber,alert:P.rose,ok:P.emerald}[a.type];
          return (
            <div key={i} style={{display:"flex",gap:9,alignItems:"flex-start"}}>
              <div style={{width:3,alignSelf:"stretch",background:c,borderRadius:99,flexShrink:0}}/>
              <Avatar agent={tagAg} size={22} glow={false}/>
              <div style={{flex:1}}>
                <div style={{fontSize:11.5,color:P.t0,lineHeight:1.4}}>{a.text}</div>
                <div style={{fontSize:10,color:tagAg.color,fontWeight:600,marginTop:2}}>{tagAg.firstName} Â· {a.time}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
function EVMCard({data}) {
  const e = data.evm;
  const tiles = [{l:"BCWP",v:`$${e.bcwp}M`},{l:"BCWS",v:`$${e.bcws}M`},{l:"ACWP",v:`$${e.acwp}M`},{l:"VAC",v:`${e.vac>=0?"+":""}${e.vac}M`,alert:e.vac<0}];
  return (
    <Card agent={getAgent("bea")} title="EVM Snapshot" icon="â—ˆ">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7}}>
        {tiles.map(t=>(
          <div key={t.l} style={{background:t.alert?`${P.rose}10`:P.bg3,borderRadius:8,padding:"9px 11px",border:`1px solid ${t.alert?P.rose+"33":P.border}`}}>
            <div style={{fontSize:9,color:t.alert?P.rose:P.t3,fontWeight:700,letterSpacing:".08em"}}>{t.l}</div>
            <div style={{fontSize:17,fontWeight:700,color:t.alert?P.rose:P.t0,marginTop:2}}>{t.v}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
function ROSCard() {
  return (
    <div style={{gridColumn:"1 / -1",background:P.panel,border:`1px solid ${P.border}`,borderRadius:RR,padding:18,position:"relative",boxShadow:SH}}>
      <Corners c={P.emerald} i={8}/>
      <div style={{display:"flex",gap:18,alignItems:"center",marginBottom:14}}>
        <Avatar agent={getAgent("peter")} size={68} glow/>
        <div>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:".1em",color:P.emerald,textTransform:"uppercase"}}>ROS Health Â· Profit Recognition</div>
          <div style={{fontSize:22,fontWeight:700,color:P.t0,marginTop:2}}><span style={{color:P.emerald}}>Peter</span> Â· Program Health Agent</div>
          <div style={{fontSize:11.5,color:P.t2,fontStyle:"italic",marginTop:3}}>"Analytical â€” watches the numbers and raises early warnings."</div>
        </div>
        <div style={{marginLeft:"auto",textAlign:"center"}}>
          <div style={{fontSize:38,fontWeight:700,color:P.emerald,lineHeight:1}}>4.58%</div>
          <div style={{fontSize:11,color:P.rose,marginTop:4}}>â–¼ -0.67% this month</div>
          <div style={{fontSize:11,color:P.rose}}>â–¼ -2.01% over 3 months</div>
        </div>
      </div>
      <ProfitChart/>
    </div>
  );
}
function CPISPICard({data}) {
  const td = data.cpiTrend.map((v,i)=>({m:`M${i+1}`,cpi:v,spi:data.spiTrend[i]}));
  const pa = getAgent("peter");
  return (
    <Card agent={pa} title="CPI / SPI Trend" icon="â–¦">
      <div style={{display:"flex",gap:14,marginBottom:6}}>
        <div><span style={{fontSize:10,color:P.t3}}>CPI </span><span style={{fontSize:14,fontWeight:700,color:data.cpi>=1?P.emerald:P.amber}}>{data.cpi}</span></div>
        <div><span style={{fontSize:10,color:P.t3}}>SPI </span><span style={{fontSize:14,fontWeight:700,color:data.spi>=1?P.emerald:P.cyan}}>{data.spi}</span></div>
      </div>
      <ResponsiveContainer width="100%" height={90}>
        <LineChart data={td} margin={{top:4,right:4,left:-34,bottom:0}}>
          <XAxis dataKey="m" tick={{fontSize:8.5,fill:P.t3}} axisLine={false} tickLine={false}/>
          <YAxis domain={[.85,1.05]} tick={{fontSize:8.5,fill:P.t3}} axisLine={false} tickLine={false}/>
          <ReferenceLine y={1} stroke={P.t3} strokeDasharray="3 3" strokeOpacity={.3}/>
          <Line type="monotone" dataKey="cpi" stroke={pa.color} strokeWidth={2} dot={{r:2.5,fill:pa.color}}/>
          <Line type="monotone" dataKey="spi" stroke={P.cyan}     strokeWidth={2} dot={{r:2.5,fill:P.cyan}}/>
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
function EACCard({data}) {
  const delta = data.eac - data.bac;
  const c = delta>0?P.rose:P.emerald;
  return (
    <Card agent={getAgent("peter")} title="EAC vs BAC" icon="â–¦">
      <div style={{display:"flex",flexDirection:"column",gap:11}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div><div style={{fontSize:9.5,color:P.t3,fontWeight:600}}>BAC</div><div style={{fontSize:22,fontWeight:700,color:P.t0}}>${data.bac}M</div></div>
          <div style={{textAlign:"right"}}><div style={{fontSize:9.5,color:P.t3,fontWeight:600}}>EAC</div><div style={{fontSize:22,fontWeight:700,color:c}}>${data.eac}M</div></div>
        </div>
        <div style={{background:P.bg3,borderRadius:7,padding:"8px 11px",border:`1px solid ${c}33`,fontSize:12,textAlign:"center"}}>
          <span style={{color:P.t3}}>Variance: </span><span style={{color:c,fontWeight:700}}>{delta>0?"+":""}${delta}M</span>
        </div>
      </div>
    </Card>
  );
}
function CritPathCard({data}) {
  return (
    <Card agent={getAgent("ivy")} title="Critical Path Drivers" icon="â–·" wide>
      <div style={{display:"flex",flexDirection:"column",gap:6}}>
        {data.criticalPath.map((t,i)=>{
          const c = priC(t.risk);
          return (
            <div key={i} style={{display:"flex",alignItems:"center",gap:11,padding:"9px 11px",background:P.bg3,borderRadius:7,borderLeft:`3px solid ${c}`}}>
              <div style={{flex:1,fontSize:12,color:P.t0}}>{t.task}</div>
              <span style={{fontSize:13,fontWeight:700,color:c}}>{t.slip}</span>
              <span style={{fontSize:9.5,fontWeight:600,padding:"2px 7px",borderRadius:99,background:`${c}15`,color:c,textTransform:"uppercase"}}>{t.risk}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
function MilestonesCard({data}) {
  const ia = getAgent("ivy");
  return (
    <Card agent={ia} title="Milestone Countdown" icon="â–·">
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
        {data.nextMilestones.map((m,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:11,padding:"5px 0",borderTop:i===0?"none":`1px solid ${P.border}`}}>
            <div style={{width:42,textAlign:"center"}}>
              <div style={{fontSize:20,fontWeight:700,color:ia.color,lineHeight:1}}>{m.days}</div>
              <div style={{fontSize:8.5,color:P.t3}}>DAYS</div>
            </div>
            <div style={{flex:1,fontSize:13,color:P.t0,fontWeight:500}}>{m.name}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
function CDRLCard({data}) {
  return (
    <Card agent={getAgent("connie")} title="CDRL Status" icon="â—«">
      <div style={{display:"flex",flexDirection:"column",gap:5}}>
        {data.cdrls.map((d,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:9,padding:"7px 9px",background:P.bg3,borderRadius:7}}>
            <div style={{width:7,height:7,borderRadius:99,background:COL[d.status]}}/>
            <div style={{fontSize:10,fontWeight:700,color:P.t2,fontFamily:"monospace"}}>{d.code}</div>
            <div style={{flex:1,fontSize:11.5,color:P.t0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{d.title}</div>
            <div style={{fontSize:10,color:P.t3}}>{d.due}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
function ReqCard({data}) {
  const pct = Math.round(data.reqs.closed/data.reqs.total*100);
  const ta  = getAgent("tony");
  return (
    <Card agent={ta} title="Requirements Burndown" icon="â¬•">
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <span style={{fontSize:11,color:P.t3}}>Closed</span>
          <span style={{fontSize:13,fontWeight:700,color:P.t0}}>{data.reqs.closed}/{data.reqs.total}</span>
        </div>
        <div style={{height:6,background:P.bg4,borderRadius:99,overflow:"hidden"}}>
          <div style={{height:"100%",width:`${pct}%`,background:ta.color,borderRadius:99}}/>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:11}}>
          <span style={{color:P.emerald}}>â— {data.reqs.closed} closed</span>
          <span style={{color:P.amber}}>â— {data.reqs.open} open</span>
        </div>
      </div>
    </Card>
  );
}
function TestCard({data}) {
  const p = data.testPass;
  const c = p>=90?P.emerald:p>=75?P.amber:P.rose;
  return (
    <Card agent={getAgent("tony")} title="Test Pass Rate" icon="â¬•">
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:9}}>
        <div style={{fontSize:44,fontWeight:700,color:c,lineHeight:1}}>{p}%</div>
        <div style={{width:"100%",height:5,background:P.bg4,borderRadius:99,overflow:"hidden"}}>
          <div style={{height:"100%",width:`${p}%`,background:c,borderRadius:99}}/>
        </div>
        <div style={{fontSize:11,color:P.t3}}>Verification status across test suites</div>
      </div>
    </Card>
  );
}
function SupplierCard({data}) {
  return (
    <Card agent={getAgent("sully")} title="Supplier Status" icon="â—¬" wide>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7}}>
        {data.suppliers.map((s,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:9,padding:"9px 11px",background:P.bg3,borderRadius:7}}>
            <div style={{width:7,height:7,borderRadius:99,background:COL[s.status],flexShrink:0}}/>
            <div style={{flex:1,fontSize:12,color:P.t0,fontWeight:500}}>{s.name}</div>
            <span style={{fontSize:9.5,fontWeight:600,padding:"2px 7px",borderRadius:99,background:`${COL[s.status]}15`,color:COL[s.status],textTransform:"uppercase"}}>{s.status}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
function RiskCard({data}) {
  return (
    <Card agent={getAgent("ronnie")} title="Risk Register Â· Top 4" icon="âš " wide>
      <div style={{display:"flex",flexDirection:"column",gap:5}}>
        {data.risks.map(r=>{
          const c = priC(r.priority);
          return (
            <div key={r.id} style={{display:"flex",alignItems:"center",gap:9,padding:"8px 11px",background:P.bg3,borderRadius:7}}>
              <div style={{width:7,height:7,borderRadius:99,background:c,flexShrink:0}}/>
              <div style={{fontSize:10.5,fontWeight:700,color:P.t2,fontFamily:"monospace",flexShrink:0}}>{r.id}</div>
              <div style={{flex:1,fontSize:12,color:P.t0}}>{r.title}</div>
              <div style={{fontSize:12.5,fontWeight:700,color:c}}>{r.exposure}</div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
function MitigationCard({data}) {
  const td = data.mitigationTrend.map((v,i)=>({m:`M${i+1}`,v}));
  const ra = getAgent("ronnie");
  return (
    <Card agent={ra} title="Mitigation Burn-down" icon="âš ">
      <ResponsiveContainer width="100%" height={90}>
        <LineChart data={td} margin={{top:4,right:4,left:-34,bottom:0}}>
          <XAxis dataKey="m" tick={{fontSize:8.5,fill:P.t3}} axisLine={false} tickLine={false}/>
          <YAxis tick={{fontSize:8.5,fill:P.t3}} axisLine={false} tickLine={false}/>
          <Line type="monotone" dataKey="v" stroke={ra.color} strokeWidth={2.5} dot={{r:3,fill:ra.color}}/>
        </LineChart>
      </ResponsiveContainer>
      <div style={{fontSize:10.5,color:P.t2,textAlign:"center",marginTop:4}}>Risks closed over 6-month window</div>
    </Card>
  );
}
const CARD_CATALOG = [
  {id:"actions",   Comp:ActionsCard},   {id:"alerts",     Comp:AlertsCard},
  {id:"evm",       Comp:EVMCard},       {id:"ros",        Comp:ROSCard},
  {id:"cpi",       Comp:CPISPICard},    {id:"eac",        Comp:EACCard},
  {id:"crit",      Comp:CritPathCard},  {id:"milestones", Comp:MilestonesCard},
  {id:"cdrl",      Comp:CDRLCard},      {id:"reqs",       Comp:ReqCard},
  {id:"test",      Comp:TestCard},      {id:"supplier",   Comp:SupplierCard},
  {id:"risk",      Comp:RiskCard},      {id:"mitigation", Comp:MitigationCard},
];
const DEFAULT_CARDS = ["ros","cpi","eac","actions","risk","alerts"];

// â”€â”€â”€ TEAM CHAT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const INIT_CHAT = [
  {agentId:"larry",  time:"10:15 AM", text:"Good morning. Pulling the team together. Peter the Program Health Agent â€” what's the read on cost today?"},
  {agentId:"peter",  time:"10:15 AM", text:"Profit Recognition at 4.58% and trending down. Two-month variance is unfavorable."},
  {agentId:"peter",  toAgentId:"ronnie", time:"10:16 AM", text:"Routing the EAC delta to Ronnie the ROADS Agent â€” $1.2M exposure if the trend holds."},
  {agentId:"ronnie", time:"10:16 AM", text:"Got it Peter. Logging as R-07 update. Larry â€” recommend PM-level escalation."},
  {agentId:"ivy",    time:"10:16 AM", text:"Adding context: critical path shifted. Subsystem Integration is now the driver. MS-14 has 9-day slip."},
  {agentId:"larry",  toAgentId:"connie", time:"10:17 AM", text:"Connie the Contracts Agent â€” pull the CDRLs tied to the Subsystem Integration test?"},
  {agentId:"connie", time:"10:17 AM", text:"On it Larry. A012 Test Plan due in 8 days, currently amber. I'll surface the full chain."},
  {agentId:"larry",  time:"10:17 AM", text:"Mitigation steps generated. See the Recommended Actions panel. Team on standby."},
];
const REPLIES = [
  "I'll have Peter the Program Health Agent pull the EAC. He's already flagged WBS 3.2 at 12% over plan â€” labor variance is the driver. Want me to loop in Bea the Business Acumen Agent for portfolio impact?",
  "Ivy the IMS Agent is on it â€” she's calling out a 9-day slip on MS-14. Sully the Supply Chain Agent is checking the supplier side. Want a what-if for a replan?",
  "Ronnie the ROADS Agent has 14 open risks. R-07 is the top exposure at $2.1M â€” three mitigations are past due. Should I escalate?",
  "7 INAR items still open, three past due. I've routed them to Connie the Contracts Agent and the responsible CAMs. Status brief incoming.",
  "Eddie the Program Expert is searching the program archive now. Connie the Contracts Agent is checking the CDRL chain. Results in a moment.",
];
let replyIdx = 0;

function TeamChat({ messages, onSend }) {
  const [input, setInput] = useState("");
  const [foc,   setFoc]   = useState(false);
  const botRef = useRef(null);
  useEffect(() => { botRef.current?.scrollIntoView({behavior:"smooth"}); }, [messages]);

  function send() { if (!input.trim()) return; onSend(input); setInput(""); }

  return (
    <div style={{background:P.panel,border:`1px solid ${P.border}`,borderRadius:RR,display:"flex",flexDirection:"column",height:"100%",position:"relative",overflow:"hidden",boxShadow:SH}}>
      <Corners c={P.cyan} i={8}/>
      <div style={{padding:"13px 16px 11px",borderBottom:`1px solid ${P.border}`,flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:5}}>
          <div style={{width:26,height:26,borderRadius:7,background:`${P.cyan}15`,border:`1px solid ${P.cyan}33`,display:"flex",alignItems:"center",justifyContent:"center",color:P.cyan,fontSize:12}}>ðŸ’¬</div>
          <span style={{fontSize:13,fontWeight:700,letterSpacing:".1em",color:P.cyan,textTransform:"uppercase"}}>Agent Team Chat</span>
        </div>
        <div style={{fontSize:10.5,color:P.t3}}>Agents Â· PM Â· Human Counterparts</div>
      </div>

      <div style={{flex:1,overflowY:"auto",padding:"12px 14px",display:"flex",flexDirection:"column",gap:12}}>
        {messages.map((m, i) => {
          // â”€â”€ human counterpart message â”€â”€
          if (m.type === "human") {
            const human    = HUMANS[m.humanId];
            const targetAg = getAgent(m.toAgentId) || getAgent("larry");
            if (!human) return null;
            return (
              <div key={i} style={{display:"flex",gap:9,alignItems:"flex-start",animation:"pgFadeUp .3s ease-out"}}>
                <HumanBadge humanId={m.humanId} size={32}/>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:"flex",alignItems:"baseline",gap:5,marginBottom:2,flexWrap:"wrap"}}>
                    <span style={{fontSize:11.5,fontWeight:700,color:human.color}}>ðŸ‘¤ {human.name}</span>
                    <span style={{fontSize:9.5,color:P.t3}}>â†’</span>
                    <Avatar agent={targetAg} size={16} glow={false}/>
                    <span style={{fontSize:11,color:targetAg.color,fontWeight:600}}>{targetAg.firstName}</span>
                    <span style={{fontSize:10,color:P.t3,marginLeft:"auto"}}>{m.time}</span>
                  </div>
                  <div style={{fontSize:9.5,color:P.t3,marginBottom:4}}>{human.title} Â· Human Counterpart</div>
                  <div style={{fontSize:12.5,color:P.t1,lineHeight:1.55,background:`${human.color}08`,border:`1px solid ${human.color}22`,borderRadius:"4px 11px 11px 11px",padding:"8px 12px"}}>{m.text}</div>
                </div>
              </div>
            );
          }
          // â”€â”€ PM message â”€â”€
          if (m.agentId === "user") {
            return (
              <div key={i} style={{display:"flex",gap:8,flexDirection:"row-reverse",alignItems:"flex-end"}}>
                <div style={{width:32,height:32,borderRadius:8,background:`${P.cyan}15`,border:`1px solid ${P.cyan}33`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:P.cyan}}>PM</div>
                <div style={{maxWidth:"78%",background:`${P.cyan}10`,border:`1px solid ${P.cyan}22`,borderRadius:"11px 11px 3px 11px",padding:"8px 12px",fontSize:12.5,color:P.t0,lineHeight:1.55}}>{m.text}</div>
              </div>
            );
          }
          // â”€â”€ agent message â”€â”€
          const tagAg = getAgent(m.agentId) || AGENTS[0];
          const destAg = m.toAgentId ? getAgent(m.toAgentId) : null;
          return (
            <div key={i} style={{display:"flex",gap:8,alignItems:"flex-start"}}>
              <div style={{display:"flex",alignItems:"center",gap:3,flexShrink:0}}>
                <Avatar agent={tagAg} size={30} glow={false}/>
                {destAg && (
                  <>
                    <span style={{fontSize:12,color:tagAg.color,fontWeight:700,animation:"pgArrow 1s ease-in-out infinite"}}>â†’</span>
                    <Avatar agent={destAg} size={24} glow={false}/>
                  </>
                )}
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{display:"flex",alignItems:"baseline",gap:5,marginBottom:3}}>
                  <span style={{fontSize:12,fontWeight:700,color:tagAg.color}}>{tagAg.firstName}</span>
                  {destAg && (
                    <>
                      <span style={{fontSize:10.5,color:P.t3}}>â†’</span>
                      <span style={{fontSize:11.5,fontWeight:700,color:destAg.color}}>{destAg.firstName}</span>
                    </>
                  )}
                  <span style={{fontSize:10,color:P.t3,marginLeft:"auto"}}>{m.time}</span>
                </div>
                <div style={{fontSize:12.5,color:P.t1,lineHeight:1.55}}>{m.text}</div>
              </div>
            </div>
          );
        })}
        <div ref={botRef}/>
      </div>

      <div style={{padding:"10px 13px",borderTop:`1px solid ${P.border}`,background:P.bg3,flexShrink:0}}>
        <div style={{display:"flex",gap:7,background:P.bg2,border:`1.5px solid ${foc?P.cyan:P.border}`,borderRadius:8,padding:"7px 11px",transition:"border-color .2s"}}>
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} onFocus={()=>setFoc(true)} onBlur={()=>setFoc(false)} placeholder="Ask Larry to coordinateâ€¦" style={{flex:1,fontSize:12.5,background:"transparent",border:"none",outline:"none",color:P.t0,fontFamily:"inherit"}}/>
          <button onClick={send} style={{width:28,height:28,borderRadius:7,border:"none",background:`${P.cyan}15`,color:P.cyan,cursor:"pointer",fontSize:13,display:"flex",alignItems:"center",justifyContent:"center"}}>âž¤</button>
        </div>
      </div>
    </div>
  );
}

// â”€â”€â”€ CUSTOMIZE DRAWER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const DRAWER_META = {
  actions:   {agentId:"larry", title:"Open Action Items",     desc:"PM-level action tracking"},
  alerts:    {agentId:"larry", title:"Team Alerts",           desc:"Real-time agent notifications"},
  evm:       {agentId:"bea",   title:"EVM Snapshot",          desc:"BCWP/BCWS/ACWP/VAC"},
  ros:       {agentId:"peter", title:"ROS Health (featured)", desc:"Profit recognition deep-dive", wide:true},
  cpi:       {agentId:"peter", title:"CPI/SPI Trend",         desc:"Performance indices"},
  eac:       {agentId:"peter", title:"EAC vs BAC",            desc:"Budget variance"},
  crit:      {agentId:"ivy",   title:"Critical Path Drivers", desc:"Schedule risk drivers",        wide:true},
  milestones:{agentId:"ivy",   title:"Milestone Countdown",   desc:"Days to next milestones"},
  cdrl:      {agentId:"connie",title:"CDRL Status",           desc:"Data deliverables"},
  reqs:      {agentId:"tony",  title:"Requirements Burndown", desc:"Open vs closed reqs"},
  test:      {agentId:"tony",  title:"Test Pass Rate",        desc:"Verification status"},
  supplier:  {agentId:"sully", title:"Supplier Status",       desc:"Supplier risk grid",           wide:true},
  risk:      {agentId:"ronnie",title:"Risk Register",         desc:"Top exposure items",           wide:true},
  mitigation:{agentId:"ronnie",title:"Mitigation Burn-down",  desc:"Risk closure trend"},
};
function Drawer({open,onClose,active,setActive}) {
  if (!open) return null;
  const groups = AGENTS.map(a=>({agent:a,cards:Object.entries(DRAWER_META).filter(([_k,m])=>m.agentId===a.id)}));
  function toggle(id){setActive(p=>p.includes(id)?p.filter(c=>c!==id):[...p,id]);}
  return (
    <>
      <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(15,23,42,.28)",zIndex:300,animation:"pgFadeIn .18s"}}/>
      <div style={{position:"fixed",top:0,right:0,bottom:0,width:440,maxWidth:"95vw",background:P.bg1,borderLeft:`1px solid ${P.border}`,boxShadow:"-12px 0 36px rgba(15,23,42,.14)",zIndex:301,display:"flex",flexDirection:"column",animation:"pgSlideIn .25s ease-out"}}>
        <div style={{padding:"16px 20px",borderBottom:`1px solid ${P.border}`,background:P.bg2,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div>
            <div style={{fontSize:10.5,fontWeight:700,letterSpacing:".14em",color:P.cyan,textTransform:"uppercase"}}>Customize</div>
            <div style={{fontSize:18,fontWeight:700,color:P.t0,marginTop:2}}>Command Central</div>
          </div>
          <button onClick={onClose} style={{width:30,height:30,borderRadius:7,border:`1px solid ${P.border}`,background:"transparent",color:P.t2,cursor:"pointer",fontSize:13}}>âœ•</button>
        </div>
        <div style={{flex:1,overflowY:"auto",padding:"12px 16px"}}>
          {groups.map(({agent,cards})=>(
            <div key={agent.id} style={{marginBottom:9,background:P.bg2,border:`1px solid ${P.border}`,borderRadius:10,overflow:"hidden"}}>
              <div style={{display:"flex",alignItems:"center",gap:10,padding:"10px 13px",background:`${agent.color}06`}}>
                <Avatar agent={agent} size={32} glow={false}/>
                <div style={{flex:1}}>
                  <div style={{fontSize:13,fontWeight:700,color:P.t0}}><span style={{color:agent.color}}>{agent.firstName}</span> Â· {agent.name}</div>
                  <div style={{fontSize:10,color:agent.color,fontWeight:600,marginTop:1}}>{cards.filter(([id])=>active.includes(id)).length}/{cards.length} cards active</div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:5}}>
                  <HumanBadge humanId={agent.id} size={20}/>
                  <div style={{fontSize:9.5,color:P.t3}}>{HUMANS[agent.id]?.name}</div>
                </div>
              </div>
              {cards.map(([id,meta])=>{
                const on = active.includes(id);
                return (
                  <div key={id} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 13px",borderTop:`1px solid ${P.border}`}}>
                    <div style={{flex:1}}>
                      <div style={{fontSize:12.5,fontWeight:600,color:on?P.t0:P.t2}}>
                        {meta.title}
                        {meta.wide && <span style={{fontSize:8.5,fontWeight:700,padding:"1px 5px",borderRadius:4,background:`${P.cyan}15`,color:P.cyan,marginLeft:6}}>WIDE</span>}
                      </div>
                      <div style={{fontSize:10.5,color:P.t3,marginTop:1}}>{meta.desc}</div>
                    </div>
                    <div onClick={()=>toggle(id)} style={{position:"relative",width:32,height:18,borderRadius:99,background:on?agent.color:"#CBD5E1",cursor:"pointer",transition:"background .15s",flexShrink:0}}>
                      <div style={{position:"absolute",top:2,left:on?16:2,width:14,height:14,borderRadius:99,background:"white",boxShadow:"0 1px 3px rgba(0,0,0,.25)",transition:"left .15s"}}/>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div style={{padding:"12px 20px",borderTop:`1px solid ${P.border}`,background:P.bg2}}>
          <button onClick={()=>setActive(DEFAULT_CARDS)} style={{width:"100%",marginBottom:8,padding:"10px",borderRadius:8,border:`1px solid ${P.border}`,background:"transparent",color:P.t2,fontSize:12,fontWeight:600,cursor:"pointer"}}>Reset to Defaults</button>
          <button onClick={onClose} style={{width:"100%",padding:"12px",borderRadius:9,border:"none",background:P.cyan,color:"white",fontSize:12.5,fontWeight:700,cursor:"pointer",letterSpacing:".12em"}}>DONE</button>
        </div>
      </div>
    </>
  );
}

// â”€â”€â”€ PROGRAMS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const PROGRAMS = [
  {id:"f35",   label:"F-35 Block IV",       contract:"NNR-2022-0041",     month:"18 of 42"},
  {id:"ch53",  label:"CH-53K King Stallion", contract:"N00019-2019-0087",  month:"34 of 60"},
  {id:"thaad", label:"THAAD Interceptor",   contract:"HQ0147-21-C-0001",  month:"9 of 36"},
  {id:"lrso",  label:"LRSO Program",        contract:"FA8681-23-C-0011",  month:"5 of 48"},
];

// â”€â”€â”€ HEADER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function Header({view,onNav,programId,setProgramId}) {
  const [progOpen, setProgOpen] = useState(false);
  const prog  = PROGRAMS.find(p=>p.id===programId);
  const larry = getAgent("larry");
  return (
    <div style={{display:"flex",alignItems:"center",gap:16,padding:"12px 18px",background:P.bg1,flexShrink:0,borderBottom:`1px solid ${P.border}`,position:"relative",zIndex:10}}>
      <Avatar agent={larry} size={60} glow framed/>
      <div onClick={()=>onNav("command")} style={{cursor:"pointer",flexShrink:0}}>
        <div style={{fontSize:26,fontWeight:700,color:P.t0,lineHeight:1}}>PROGRAM GUARDIAN</div>
        <div style={{fontSize:13,fontWeight:500,letterSpacing:".32em",color:P.cyan,marginTop:4}}>COMMAND CENTRAL</div>
      </div>
      <div style={{flex:1}}/>
      <div style={{display:"flex",gap:0,background:P.bg2,border:`1.5px solid ${P.border}`,borderRadius:12,padding:6,boxShadow:SH}}>
        {[{id:"command",label:"COMMAND",icon:"â¬›"},{id:"team",label:"TEAM",icon:"ðŸ‘¥"},{id:"autonomy",label:"AUTONOMY",icon:"âš™"},{id:"chat",label:"DIRECT CHAT",icon:"ðŸ’¬"}].map((n,i)=>{
          const isActive = view===n.id;
          return (
            <div key={n.id} style={{display:"flex",alignItems:"center"}}>
              {i>0&&<div style={{width:1,height:20,background:P.border,margin:"0 3px"}}/>}
              <button onClick={()=>onNav(n.id)} style={{display:"flex",alignItems:"center",gap:6,padding:"7px 14px",borderRadius:7,border:"none",background:isActive?`${P.cyan}12`:"transparent",color:isActive?P.cyan:P.t2,fontSize:11,fontWeight:600,letterSpacing:".1em",cursor:"pointer",transition:"all .15s",textTransform:"uppercase"}}>
                <span>{n.icon}</span>{n.label}
              </button>
            </div>
          );
        })}
      </div>
      <div style={{position:"relative"}}>
        <div onClick={()=>setProgOpen(v=>!v)} style={{display:"flex",alignItems:"center",gap:9,cursor:"pointer",padding:"8px 13px",borderRadius:9,border:`1px solid ${progOpen?P.cyan:P.border}`,background:P.bg2,boxShadow:SH}}>
          <div style={{width:6,height:6,borderRadius:99,background:P.emerald}}/>
          <div>
            <div style={{fontSize:12,fontWeight:600,color:P.t0,lineHeight:1.2}}>{prog.label}</div>
            <div style={{fontSize:10,color:P.t3}}>{prog.contract}</div>
          </div>
          <span style={{fontSize:10,color:P.t3}}>â–¾</span>
        </div>
        {progOpen && (
          <div style={{position:"absolute",top:50,right:0,zIndex:200,background:P.bg2,border:`1px solid ${P.border}`,borderRadius:9,overflow:"hidden",minWidth:240,boxShadow:"0 16px 40px rgba(15,23,42,.12)"}}>
            {PROGRAMS.map(p=>(
              <div key={p.id} onClick={()=>{setProgramId(p.id);setProgOpen(false);}} style={{padding:"9px 13px",cursor:"pointer",background:p.id===programId?`${P.cyan}10`:"transparent",borderLeft:`2px solid ${p.id===programId?P.cyan:"transparent"}`,transition:"all .12s"}}>
                <div style={{fontSize:13,fontWeight:600,color:p.id===programId?P.cyan:P.t0}}>{p.label}</div>
                <div style={{fontSize:10,color:P.t3,marginTop:1}}>{p.contract} Â· Mo {p.month}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// â”€â”€â”€ VIEWS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function CommandView({activeCards,onCustomize,programId,workflow,triggerWorkflow}) {
  const [chatMsgs,    setChatMsgs]    = useState(INIT_CHAT);
  const [notifList,   setNotifList]   = useState(INIT_NOTIFS);
  const notifIdRef = useRef(INIT_NOTIFS.length + 1);
  const data = useMemo(()=>genData(programId),[programId]);

  // ── Resizable / collapsible Team Chat column ──
  const CHAT_MIN = 220, CHAT_MAX = 560, CHAT_DEFAULT = 288;
  const [chatWidth, setChatWidth] = useState(() => {
    const s = parseInt(localStorage.getItem("pg_chatWidth"), 10);
    return (s >= CHAT_MIN && s <= CHAT_MAX) ? s : CHAT_DEFAULT;
  });
  const [chatCollapsed, setChatCollapsed] = useState(() => localStorage.getItem("pg_chatCollapsed") === "1");
  useEffect(() => { localStorage.setItem("pg_chatWidth", String(chatWidth)); }, [chatWidth]);
  useEffect(() => { localStorage.setItem("pg_chatCollapsed", chatCollapsed ? "1" : "0"); }, [chatCollapsed]);

  function startChatDrag(e) {
    e.preventDefault();
    if (chatCollapsed) setChatCollapsed(false);
    const startX = e.clientX, startW = chatWidth;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    function move(ev) {
      const w = Math.min(CHAT_MAX, Math.max(CHAT_MIN, startW - (ev.clientX - startX)));
      setChatWidth(w);
    }
    function up() {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  }

  function addNotification(notif) {
    if (!notif) return;
    setNotifList(p => [{...notif, id:notifIdRef.current++}, ...p].slice(0,15));
  }

  function handleHumanReply(humanId, toAgentId, text) {
    const now = new Date();
    const t = `${now.getHours()}:${String(now.getMinutes()).padStart(2,"0")}`;
    setChatMsgs(p => [...p, {type:"human", humanId, toAgentId, time:t, text}]);
  }

  function handleSend(text) {
    setChatMsgs(p=>[...p,{agentId:"user",time:"Just now",text}]);
    triggerWorkflow("chatMessage");
    setTimeout(()=>setChatMsgs(p=>[...p,{agentId:"larry",time:"Just now",text:REPLIES[replyIdx++%REPLIES.length]}]), 6500);
  }

  const cards = activeCards.map(id=>CARD_CATALOG.find(c=>c.id===id)).filter(Boolean);

  return (
    <div style={{flex:1,display:"grid",gridTemplateColumns:`252px 1fr 10px ${chatCollapsed?0:chatWidth}px`,gap:14,padding:14,overflow:"hidden",minHeight:0}}>

      <HumanLoopPanel notifications={notifList} onReply={handleHumanReply}/>

      <div style={{display:"flex",flexDirection:"column",gap:13,overflowY:"auto",minWidth:0}}>
        <WarRoomPanel workflow={workflow} onWorkflowDone={()=>{}} onNotify={addNotification}/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{fontSize:10.5,fontWeight:700,letterSpacing:".14em",color:P.cyan,textTransform:"uppercase"}}>Your Workspace Â· {cards.length} cards active</div>
          <button onClick={onCustomize} style={{display:"flex",alignItems:"center",gap:6,fontSize:11,fontWeight:600,padding:"6px 13px",borderRadius:7,border:`1px solid ${P.border}`,background:P.bg2,color:P.cyan,cursor:"pointer",boxShadow:SH}}>âš™ CUSTOMIZE</button>
        </div>
        {cards.length===0
          ? <div style={{background:P.panel,border:`1px dashed ${P.border}`,borderRadius:RR,padding:"50px 24px",textAlign:"center",boxShadow:SH}}>
              <div style={{fontSize:32,marginBottom:12}}>ðŸ“Š</div>
              <div style={{fontSize:14,fontWeight:600,color:P.t0,marginBottom:6}}>No cards selected</div>
              <button onClick={onCustomize} style={{fontSize:12,fontWeight:600,padding:"10px 22px",borderRadius:8,border:"none",background:P.cyan,color:"white",cursor:"pointer",marginTop:8}}>âš™ CUSTOMIZE</button>
            </div>
          : <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              {cards.map(c=><c.Comp key={c.id} data={data}/>)}
            </div>
        }
      </div>

      <div onMouseDown={startChatDrag}
           onDoubleClick={()=>setChatCollapsed(c=>!c)}
           title={chatCollapsed ? "Drag or double-click to open chat" : "Drag to resize · double-click to collapse"}
           style={{cursor:"col-resize",display:"flex",alignItems:"center",justifyContent:"center",alignSelf:"stretch"}}>
        <div style={{width:4,height:48,borderRadius:3,background:P.borderHi,transition:"background .15s"}}
             onMouseEnter={e=>e.currentTarget.style.background=P.cyan}
             onMouseLeave={e=>e.currentTarget.style.background=P.borderHi}/>
      </div>

      <div style={{height:"100%",overflow:"hidden",minHeight:0,display:chatCollapsed?"none":"block"}}>
        <TeamChat messages={chatMsgs} onSend={handleSend}/>
      </div>

    </div>
  );
}

function TeamView({onChat}) {
  const larry = AGENTS[0];
  const team  = AGENTS.slice(1);
  return (
    <div style={{flex:1,overflowY:"auto",padding:"24px 28px 40px"}}>
      <div style={{textAlign:"center",marginBottom:24}}>
        <div style={{fontSize:10.5,fontWeight:700,letterSpacing:".2em",color:P.cyan,marginBottom:6}}>MEET THE TEAM</div>
        <h1 style={{margin:"0 0 4px",fontSize:32,fontWeight:700,color:P.t0}}>PROGRAM GUARDIAN</h1>
        <div style={{fontSize:13,fontWeight:500,letterSpacing:".32em",color:P.cyan,marginBottom:12}}>AI AGENT TEAM Â· 9 AGENTS Â· 9 HUMAN COUNTERPARTS</div>
      </div>
      <div style={{display:"flex",justifyContent:"center",marginBottom:28}}>
        <div style={{background:P.bg2,border:`1.5px solid ${P.cyan}66`,borderRadius:14,padding:"20px 28px",display:"flex",gap:20,alignItems:"center",maxWidth:580,boxShadow:SH,position:"relative"}}>
          <Corners c={P.cyan} i={8}/>
          <Avatar agent={larry} size={100} glow framed/>
          <div>
            <div style={{display:"inline-block",fontSize:9.5,fontWeight:700,padding:"3px 9px",borderRadius:99,background:`${P.gold}20`,color:"#92400E",letterSpacing:".12em",marginBottom:6}}>LEAD AGENT</div>
            <div style={{fontSize:22,fontWeight:700,color:P.t0,marginBottom:2}}><span style={{color:larry.color}}>Larry</span> Â· Lead Program Guardian</div>
            <div style={{fontSize:11.5,color:P.t2,lineHeight:1.6,marginBottom:8,maxWidth:260,fontStyle:"italic"}}>"{larry.persona}"</div>
            <div style={{display:"flex",alignItems:"center",gap:8,padding:"7px 10px",background:`${P.cyan}08`,borderRadius:8,border:`1px solid ${P.cyan}22`,marginBottom:8}}>
              <HumanBadge humanId="larry" size={28}/>
              <div><div style={{fontSize:11.5,fontWeight:700,color:P.t0}}>Col. R. Mitchell</div><div style={{fontSize:10,color:P.t3}}>Program Manager Â· Human Counterpart</div></div>
            </div>
            <button onClick={()=>onChat(larry)} style={{fontSize:11,fontWeight:600,padding:"6px 13px",borderRadius:7,border:`1px solid ${P.cyan}55`,background:`${P.cyan}10`,color:P.cyan,cursor:"pointer"}}>CHAT WITH LARRY â†’</button>
          </div>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))",gap:12,maxWidth:1200,margin:"0 auto"}}>
        {team.map(a=>{
          const human = HUMANS[a.id];
          return (
            <div key={a.id} onClick={()=>onChat(a)}
              style={{background:P.panel,border:`1px solid ${P.border}`,borderRadius:RR,padding:"14px 12px 12px",cursor:"pointer",transition:"all .18s",display:"flex",flexDirection:"column",alignItems:"center",gap:8,position:"relative",boxShadow:SH}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=a.color+"77";e.currentTarget.style.transform="translateY(-3px)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=P.border;e.currentTarget.style.transform="none";}}>
              <Corners c={a.color} i={5} s={7}/>
              <Avatar agent={a} size={68} glow/>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:13,fontWeight:700,color:P.t0,marginBottom:2}}><span style={{color:a.color}}>{a.firstName}</span> Â· {a.name.split(" ")[0]}</div>
                <div style={{fontSize:10,fontWeight:600,color:a.color,letterSpacing:".06em",textTransform:"uppercase",marginBottom:5}}>{a.role}</div>
                <div style={{fontSize:10,color:P.t3,fontStyle:"italic",lineHeight:1.4}}>"{a.persona}"</div>
              </div>
              <div style={{display:"flex",flexWrap:"wrap",gap:3,justifyContent:"center"}}>
                {a.tags.map(t=><span key={t} style={{fontSize:9,fontWeight:600,padding:"2px 6px",borderRadius:4,background:`${a.color}10`,color:a.color}}>{t}</span>)}
              </div>
              <div style={{width:"100%",display:"flex",alignItems:"center",gap:8,padding:"7px 10px",background:`${a.color}06`,borderRadius:8,border:`1px solid ${a.color}22`,marginTop:2}}>
                <HumanBadge humanId={a.id} size={24}/>
                <div style={{minWidth:0}}>
                  <div style={{fontSize:11,fontWeight:700,color:P.t0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{human?.name}</div>
                  <div style={{fontSize:9.5,color:P.t3}}>{human?.title}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AutonomyView() {
  const [lvls, setLvls] = useState(()=>AGENTS.reduce((acc,a)=>({...acc,[a.id]:a.lead?3:2}),{}));
  const LEVELS = [{v:0,label:"Observe",c:P.t3},{v:1,label:"Suggest",c:P.cyan},{v:2,label:"Semi-Auto",c:P.amber},{v:3,label:"Autonomous",c:P.emerald}];
  return (
    <div style={{flex:1,overflowY:"auto",padding:"24px 28px"}}>
      <div style={{marginBottom:20}}>
        <div style={{fontSize:10.5,fontWeight:700,letterSpacing:".16em",color:P.cyan,marginBottom:5}}>AUTONOMY SETTINGS</div>
        <h2 style={{margin:0,fontSize:22,fontWeight:700,color:P.t0}}>Autonomous Where Safe Â· Human Where Strategic</h2>
        <p style={{margin:"6px 0 0",fontSize:12.5,color:P.t2}}>Set each agent's operating level. Human counterparts are notified of all autonomous actions.</p>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:9}}>
        {AGENTS.map(a=>{
          const human = HUMANS[a.id];
          return (
            <div key={a.id} style={{background:P.panel,border:`1px solid ${P.border}`,borderRadius:RR,padding:"12px 16px",display:"flex",gap:14,alignItems:"center",position:"relative",boxShadow:SH}}>
              <Corners c={a.color} i={5} s={8}/>
              <Avatar agent={a} size={50} glow/>
              <div style={{width:2,height:44,background:P.border,flexShrink:0}}/>
              <HumanBadge humanId={a.id} size={36}/>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:13.5,fontWeight:700,color:P.t0}}>
                  <span style={{color:a.color}}>{a.firstName}</span> the {a.name}
                  <span style={{fontSize:10,color:P.t3,fontWeight:400}}> â†” </span>
                  <span style={{color:human?.color,fontSize:12}}>{human?.name}</span>
                </div>
                <div style={{fontSize:10,color:P.t3,marginTop:2}}>{a.role} Â· Human: {human?.title}</div>
              </div>
              <div style={{display:"flex",gap:5}}>
                {LEVELS.map(l=>{
                  const isA = lvls[a.id]===l.v;
                  return <button key={l.v} onClick={()=>setLvls(p=>({...p,[a.id]:l.v}))} style={{padding:"6px 12px",borderRadius:6,border:`1px solid ${isA?l.c:P.border}`,background:isA?`${l.c}12`:P.bg2,color:isA?l.c:P.t3,fontSize:10.5,fontWeight:600,letterSpacing:".06em",textTransform:"uppercase",cursor:"pointer"}}>{l.label}</button>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DirectChatView({initial}) {
  const [active, setActive] = useState(initial||AGENTS[0]);
  const [msgs,   setMsgs]   = useState([]);
  const [input,  setInput]  = useState("");
  const [foc,    setFoc]    = useState(false);
  const botRef = useRef(null);
  useEffect(()=>{botRef.current?.scrollIntoView({behavior:"smooth"});},[msgs]);
  useEffect(()=>{
    setMsgs([{agentId:active.id, time:"Just now", text:`Hi â€” I'm ${active.firstName}. ${active.lead?"I coordinate the full team and have complete program visibility.":`My domain is ${active.role.toLowerCase()}.`} How can I help?`}]);
  },[active.id]);
  function send(){if(!input.trim())return;const t=input;setInput("");setMsgs(p=>[...p,{agentId:"user",time:"Just now",text:t}]);setTimeout(()=>setMsgs(p=>[...p,{agentId:active.id,time:"Just now",text:REPLIES[replyIdx++%REPLIES.length]}]),900);}
  return (
    <div style={{flex:1,display:"grid",gridTemplateColumns:"260px 1fr",gap:14,padding:14,overflow:"hidden"}}>
      <div style={{background:P.panel,border:`1px solid ${P.border}`,borderRadius:RR,padding:12,overflowY:"auto",boxShadow:SH,position:"relative"}}>
        <Corners c={P.cyan} i={5} s={7}/>
        <div style={{fontSize:10.5,fontWeight:700,letterSpacing:".12em",color:P.cyan,marginBottom:10,textTransform:"uppercase",paddingBottom:8,borderBottom:`1px solid ${P.border}`}}>Pick a Teammate</div>
        {AGENTS.map(a=>{
          const sel = active.id===a.id;
          return (
            <div key={a.id} onClick={()=>setActive(a)} style={{display:"flex",gap:9,padding:"7px 9px",marginBottom:3,borderRadius:8,cursor:"pointer",background:sel?`${a.color}10`:"transparent",border:`1px solid ${sel?a.color+"44":"transparent"}`,alignItems:"center",transition:"all .12s"}}>
              <Avatar agent={a} size={34} glow={sel} framed={false}/>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:12.5,fontWeight:600,color:P.t0}}><span style={{color:a.color,fontWeight:700}}>{a.firstName}</span></div>
                <div style={{fontSize:10,color:a.color,fontWeight:500}}>{a.role}</div>
                <div style={{fontSize:9.5,color:P.t3}}>{HUMANS[a.id]?.name}</div>
              </div>
              {sel&&<div style={{width:6,height:6,borderRadius:99,background:P.emerald}}/>}
            </div>
          );
        })}
      </div>
      <div style={{background:P.panel,border:`1px solid ${P.border}`,borderRadius:RR,display:"flex",flexDirection:"column",overflow:"hidden",position:"relative",boxShadow:SH}}>
        <Corners c={active.color} i={8}/>
        <div style={{padding:"13px 16px",borderBottom:`1px solid ${P.border}`,display:"flex",alignItems:"center",gap:11}}>
          <Avatar agent={active} size={44} glow/>
          <div style={{flex:1}}>
            <div style={{fontSize:14,fontWeight:700,color:P.t0}}><span style={{color:active.color}}>{active.firstName}</span> Â· {active.name}</div>
            <div style={{fontSize:10.5,color:active.color,fontWeight:600,letterSpacing:".06em",textTransform:"uppercase"}}>{active.role}</div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:8,padding:"5px 9px",background:`${active.color}08`,borderRadius:7,border:`1px solid ${active.color}22`}}>
            <HumanBadge humanId={active.id} size={22}/>
            <div><div style={{fontSize:10.5,fontWeight:700,color:P.t0}}>{HUMANS[active.id]?.name}</div><div style={{fontSize:9.5,color:P.t3}}>{HUMANS[active.id]?.title}</div></div>
          </div>
        </div>
        <div style={{flex:1,overflowY:"auto",padding:"16px 20px",display:"flex",flexDirection:"column",gap:13}}>
          {msgs.map((m,i)=>{
            const isU = m.agentId==="user";
            const mAg = getAgent(m.agentId)||active;
            return (
              <div key={i} style={{display:"flex",gap:9,flexDirection:isU?"row-reverse":"row",alignItems:"flex-end"}}>
                {!isU && <Avatar agent={mAg} size={34} glow framed={false}/>}
                {isU  && <div style={{width:34,height:34,borderRadius:8,background:`${P.cyan}15`,border:`1px solid ${P.cyan}33`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:P.cyan}}>PM</div>}
                <div style={{maxWidth:"72%",background:isU?`${P.cyan}10`:P.bg3,border:`1px solid ${isU?P.cyan+"33":P.border}`,borderRadius:isU?"11px 11px 3px 11px":"3px 11px 11px 11px",padding:"9px 13px",fontSize:12.5,lineHeight:1.6,color:P.t0}}>{m.text}</div>
              </div>
            );
          })}
          <div ref={botRef}/>
        </div>
        <div style={{padding:"11px 16px",borderTop:`1px solid ${P.border}`,background:P.bg3}}>
          <div style={{display:"flex",gap:7,background:P.bg2,border:`1.5px solid ${foc?active.color:P.border}`,borderRadius:8,padding:"7px 11px"}}>
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} onFocus={()=>setFoc(true)} onBlur={()=>setFoc(false)} placeholder={`Message ${active.firstName}â€¦`} style={{flex:1,fontSize:12.5,background:"transparent",border:"none",outline:"none",color:P.t0,fontFamily:"inherit"}}/>
            <button onClick={send} style={{width:28,height:28,borderRadius:7,border:"none",background:active.color,color:"#fff",cursor:"pointer",fontSize:12}}>âž¤</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// â”€â”€â”€ LANDING â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function Landing({onEnter}) {
  const featured = AGENTS.slice(0,5);
  return (
    <div style={{width:"100%",minHeight:"100vh",background:P.bg0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"60px 24px",position:"fixed",inset:0,zIndex:999,overflowY:"auto"}}>
      <GridBg o={0.5}/>
      <div style={{position:"relative",textAlign:"center",maxWidth:720}}>
        <div style={{fontSize:10.5,fontWeight:700,letterSpacing:".22em",color:P.cyan,marginBottom:12}}>LOCKHEED MARTIN Â· RMS EP&T</div>
        <h1 style={{margin:"0 0 4px",fontSize:"clamp(42px,7vw,76px)",fontWeight:700,lineHeight:.96,color:P.t0}}>PROGRAM GUARDIAN</h1>
        <div style={{fontSize:16,fontWeight:500,letterSpacing:".32em",color:P.cyan,marginBottom:16}}>AI AGENT TEAM Â· HUMAN-IN-THE-LOOP</div>
        <p style={{margin:"0 auto 22px",fontSize:14,color:P.t2,maxWidth:520,lineHeight:1.7}}>
          9 AI agents, each paired with a human counterpart. Larry coordinates. Peter watches cost. Ronnie tracks risk. Ivy owns schedule â€” every agent action notifies the responsible human automatically.
        </p>
        <div style={{display:"flex",justifyContent:"center",alignItems:"flex-end",marginBottom:26,gap:0}}>
          {featured.map((a,i)=>(
            <div key={a.id} style={{marginLeft:i===0?0:-18,zIndex:featured.length-i,transition:"transform .25s"}} onMouseEnter={e=>e.currentTarget.style.transform="translateY(-10px) scale(1.08)"} onMouseLeave={e=>e.currentTarget.style.transform="none"}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5}}>
                <Avatar agent={a} size={a.lead?100:72} glow framed={a.lead}/>
                <div style={{fontSize:10.5,fontWeight:700,color:a.color}}>{a.firstName}</div>
              </div>
            </div>
          ))}
          <div style={{marginLeft:-18,width:72,height:72,borderRadius:"50%",background:P.bg2,border:`2px solid ${P.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,color:P.t2}}>+4</div>
        </div>
        <div style={{display:"flex",gap:10,justifyContent:"center",marginBottom:32}}>
          <button onClick={onEnter} style={{fontSize:13,fontWeight:600,padding:"13px 34px",borderRadius:8,border:`1px solid ${P.cyan}`,background:P.cyan,color:"#fff",cursor:"pointer",letterSpacing:".14em",boxShadow:`0 4px 16px ${P.cyan}33`}}>ENTER COMMAND CENTRAL</button>
          <button onClick={onEnter} style={{fontSize:13,fontWeight:600,padding:"13px 26px",borderRadius:8,border:`1px solid ${P.border}`,background:P.bg2,color:P.t1,cursor:"pointer",letterSpacing:".14em"}}>MEET THE TEAM</button>
        </div>
        <div style={{display:"flex",justifyContent:"center",gap:44,paddingTop:24,borderTop:`1px solid ${P.border}`}}>
          {[{v:"9",l:"Named agents"},{v:"9",l:"Human counterparts"},{v:"Real-time",l:"Human loop"}].map(s=>(
            <div key={s.l} style={{textAlign:"center"}}>
              <div style={{fontSize:24,fontWeight:700,color:P.cyan}}>{s.v}</div>
              <div style={{fontSize:10,color:P.t3,marginTop:3,letterSpacing:".08em",textTransform:"uppercase"}}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// â”€â”€â”€ APP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function App() {
  const [page,        setPage]        = useState("landing");
  const [view,        setView]        = useState("command");
  const [programId,   setProgramId]   = useState("f35");
  const [chatAgent,   setChatAgent]   = useState(null);
  const [activeCards, setActiveCards] = useState(DEFAULT_CARDS);
  const [drawerOpen,  setDrawerOpen]  = useState(false);
  const [workflow,    setWorkflow]    = useState(null);

  function triggerWorkflow(type) {
    const wf = WORKFLOWS[type];
    if (!wf) return;
    setWorkflow(wf);
    setTimeout(()=>setWorkflow(null), wf.length*1200+600);
  }
  function switchProgram(id) { setProgramId(id); triggerWorkflow("programSwitch"); }

  if (page === "landing") {
    return (
      <>
        <style>{ANIMS}</style>
        <Landing onEnter={()=>setPage("app")}/>
      </>
    );
  }

  return (
    <div style={{display:"flex",flexDirection:"column",width:"100%",height:"100vh",fontFamily:"'Inter',system-ui,sans-serif",background:P.bg0,color:P.t0,overflow:"hidden",position:"fixed",inset:0}}>
      <style>{ANIMS}</style>
      <GridBg o={0.5}/>
      <div style={{position:"relative",display:"flex",flexDirection:"column",height:"100%",zIndex:1}}>
        <Header view={view} onNav={setView} programId={programId} setProgramId={switchProgram}/>
        {view==="command"  && <CommandView activeCards={activeCards} onCustomize={()=>{setDrawerOpen(true);triggerWorkflow("customize");}} programId={programId} workflow={workflow} triggerWorkflow={triggerWorkflow}/>}
        {view==="team"     && <TeamView onChat={a=>{setChatAgent(a);setView("chat");}}/>}
        {view==="autonomy" && <AutonomyView/>}
        {view==="chat"     && <DirectChatView initial={chatAgent}/>}
        <LiveTicker/>
      </div>
      <Drawer open={drawerOpen} onClose={()=>setDrawerOpen(false)} active={activeCards} setActive={setActiveCards}/>
    </div>
  );
}

// Render the app
try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  
  // Wait for React to render before hiding loader
  const checkRender = setInterval(() => {
    const rootEl = document.getElementById('root');
    if (rootEl && rootEl.children.length > 0) {
      clearInterval(checkRender);
      const loading = document.getElementById('loading');
      if (loading) loading.style.display = 'none';
    }
  }, 100);
  
  setTimeout(() => {
    clearInterval(checkRender);
    const loading = document.getElementById('loading');
    if (loading) loading.style.display = 'none';
  }, 5000);
} catch (error) {
  console.error('Error rendering app:', error);
  const loadingText = document.getElementById('loading-text');
  if (loadingText) {
    loadingText.textContent = 'ERROR: ' + error.message;
    loadingText.style.color = '#EF4444';
  }
}
