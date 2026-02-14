import{b as _,c as P,e as J,r as x,j as e,t,a as m,d,m as K}from"./index-DodhUEbA.js";import{S as V,C as O}from"./CommonStyles-Cgy4dfub.js";import{E as A}from"./EmptyState-DWGxPktv.js";import{D as X}from"./LoadingSkeleton-C_-Iu59V.js";import{g as q,h as k,i as H,j as Q,k as Z,l as ee,m as te,n as oe}from"./index-BhworDv5.js";import{R as re,B as ae,C as se,X as ie,Y as de,T as le,L as ne,a as ce}from"./BarChart-BjW-VyKG.js";import"./clsx-B-dksMZM.js";const pe=K`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,xe=d.div`
  font-family: ${t.fonts.body};
  background: radial-gradient(circle at top right, rgba(129, 140, 248, 0.08), transparent 600px),
              radial-gradient(circle at bottom left, rgba(52, 211, 153, 0.05), transparent 600px);
  min-height: 100vh;
  padding: ${t.spacing.lg} ${t.spacing.xl};
  animation: ${pe} 0.6s ease-out;
`,he=d.div`
  margin-bottom: ${t.spacing.xl};
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: ${t.colors.gray900};
    margin: 0 0 ${t.spacing.lg} 0;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
`,be=d.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${t.spacing.md};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${t.spacing.lg};
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,f=d.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: ${t.spacing.lg};
  border-radius: ${t.borderRadius.xl};
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: default;

  body.dark-theme & {
    background: rgba(45, 45, 45, 0.8);
    border-color: rgba(255, 255, 255, 0.05);
  }

  &:hover {
    transform: translateY(-6px);
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: ${t.colors.primaryLight};

    body.dark-theme & {
      background: rgba(55, 55, 55, 0.9);
      border-color: #444;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
    }
  }

  @media (min-width: 640px) {
    padding: ${t.spacing.lg};
  }
  
  .stat-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
  }
  
  .stat-label {
    font-size: 11px;
    color: ${t.colors.gray600};
    font-weight: 500;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 640px) {
      font-size: 13px;
    }
  }
  
  .stat-icon {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    background: ${i=>i.$iconBg||t.colors.gray100};
    color: ${i=>i.$iconColor||t.colors.gray600};
    transition: transform 0.3s ease;

    @media (min-width: 640px) {
      width: 40px;
      height: 40px;
      font-size: 18px;
    }
  }

  &:hover .stat-icon {
    transform: scale(1.1) rotate(5deg);
    background: ${i=>i.$iconBg||t.colors.gray100};
    box-shadow: 0 8px 16px -4px ${i=>i.$iconColor?`${i.$iconColor}66`:"rgba(0,0,0,0.1)"};
  }
  
  .stat-value {
    font-size: 24px;
    font-weight: 800;
    color: ${t.colors.textPrimary};
    margin-bottom: 4px;

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 640px) {
      font-size: 32px;
    }
  }
  
  .stat-trend {
    font-size: 11px;
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 600;
    margin-top: 2px;
    
    &.up { color: #10b981; }
    &.down { color: #f43f5e; }
    &.neutral { color: ${t.colors.gray500}; }

    @media (min-width: 640px) {
      font-size: 12px;
    }

    body.dark-theme & {
      &.up { color: #34d399; }
      &.down { color: #fb7185; }
      &.neutral { color: #a0a0a0; }
    }
  }
`,E=["#818cf8","#60a5fa","#34d399","#fbbf24","#f87171"],ge=({active:i,payload:h,label:b,isDarkMode:l})=>i&&h&&h.length?e.jsxs("div",{style:{backgroundColor:l?"#1e1e1e":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(10px)",border:`1px solid ${l?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.05)"}`,padding:"12px",borderRadius:"12px",boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.1)"},children:[e.jsx("p",{style:{margin:"0 0 8px 0",fontSize:"11px",fontWeight:700,color:l?"#888":"#94a3b8",textTransform:"uppercase",letterSpacing:"0.05em"},children:b}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:h.map((c,u)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",justifyContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:c.color}}),e.jsx("span",{style:{fontSize:"13px",color:l?"#ccc":"#4b5563"},children:c.name})]}),e.jsx("span",{style:{fontSize:"13px",fontWeight:600,color:l?"#fff":"#111827"},children:c.value})]},u))})]}):null,me=d.div`
  margin-bottom: ${t.spacing.xl};
`,fe=d(O)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  body.dark-theme & {
    background: rgba(45, 45, 45, 0.7);
    border-color: rgba(255, 255, 255, 0.05);
  }

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
    color: ${t.colors.gray900};
    letter-spacing: -0.01em;
    margin: 0 0 4px 0;

    body.dark-theme & {
      color: #f3f4f6;
    }
  }
  
  h3 {
    font-size: 14px;
    font-weight: 400;
    color: ${t.colors.gray500};
    margin: 0 0 ${t.spacing.lg} 0;

    body.dark-theme & {
      color: #9ca3af;
    }
  }
`,ue=d(O)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  
  body.dark-theme & {
    background: rgba(45, 45, 45, 0.7);
    border-color: rgba(255, 255, 255, 0.05);
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
    color: ${t.colors.gray900};
    margin: 0 0 8px 0;
    letter-spacing: -0.01em;

    body.dark-theme & {
      color: #f3f4f6;
    }
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
    color: ${t.colors.gray500};
    margin: 0 0 ${t.spacing.xl} 0;

    body.dark-theme & {
      color: #9ca3af;
    }
  }
`,ye=d.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: ${t.borderRadius.lg};
  border: 1px solid ${t.colors.gray200};

  body.dark-theme & {
    border-color: #3d3d3d;
  }

  @media (min-width: 768px) {
    border: none;
    overflow-x: visible;
  }
`,je=d.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  min-width: 500px;

  @media (min-width: 768px) {
    min-width: auto;
    font-size: 13px;
  }
  
  thead {
    background: ${t.colors.gray50};
    display: none;
    position: sticky;
    top: 0;
    z-index: 10;

    body.dark-theme & {
      background: #1f1f1f;
    }

    @media (min-width: 768px) {
      display: table-header-group;
    }
  }
  
  th {
    padding: 12px 16px;
    text-align: left;
    font-weight: 600;
    color: ${t.colors.gray700};
    border-bottom: 2px solid ${t.colors.gray200};
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    white-space: nowrap;

    body.dark-theme & {
      color: #b0b0b0;
      border-bottom-color: #3d3d3d;
    }

    @media (min-width: 768px) {
      font-size: 12px;
    }
  }

  tbody {
    display: block;

    @media (min-width: 768px) {
      display: table-row-group;
    }
  }

  tr {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 12px;
    border: 1px solid ${t.colors.gray200};
    border-radius: ${t.borderRadius.lg};
    overflow: hidden;
    background: white;
    transition: all 0.2s ease;

    body.dark-theme & {
      background: #2d2d2d;
      border-color: #3d3d3d;
    }

    @media (min-width: 768px) {
      display: table-row;
      margin-bottom: 0;
      border: none;
      border-bottom: 1px solid ${t.colors.gray200};
      border-radius: 0;
      background: transparent;

      body.dark-theme & {
        border-bottom-color: #3d3d3d;
      }

      &:hover {
        background: rgba(129, 140, 248, 0.02);
        body.dark-theme & {
          background: rgba(255, 255, 255, 0.02);
        }
      }
    }
  }

  th {
    padding: 16px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${t.colors.gray500};
    border-bottom: 1px solid ${t.colors.gray200};

    body.dark-theme & {
      color: #888;
      border-bottom-color: #3d3d3d;
    }
  }
  
  td {
    padding: 16px;
    color: ${t.colors.textPrimary};
    border-bottom: 1px solid ${t.colors.gray200};
    display: flex;
    align-items: center;

    body.dark-theme & {
      border-bottom-color: #3d3d3d;
    }
    justify-content: flex-start;
    flex-direction: column;
    gap: 4px;
    min-height: 44px;

    body.dark-theme & {
      color: #e5e5e5;
      border-bottom-color: #3d3d3d;
    }

    @media (min-width: 768px) {
      display: table-cell;
      justify-content: flex-start;
      flex-direction: row;
      gap: 0;
      padding: 14px 16px;
      border-bottom: 1px solid ${t.colors.gray200};
      min-height: auto;

      body.dark-theme & {
        border-bottom-color: #3d3d3d;
      }
    }

    &::before {
      content: attr(data-label);
      font-weight: 600;
      color: ${t.colors.gray700};
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      order: -1;

      body.dark-theme & {
        color: #b0b0b0;
      }

      @media (min-width: 768px) {
        display: none;
      }
    }
  }
  
  tbody tr:hover {
    background: ${t.colors.gray50};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    body.dark-theme & {
      background: #353535;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    @media (min-width: 768px) {
      background: ${t.colors.gray50};
      box-shadow: none;
    }
  }
`,v=d.button`
  background: white;
  border: 1px solid ${t.colors.gray200};
  padding: 8px;
  cursor: pointer;
  color: ${t.colors.gray600};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  body.dark-theme & {
    background: #3d3d3d;
    border-color: #4d4d4d;
    color: #e5e5e5;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border-color: ${t.colors.primaryLight};
    color: ${t.colors.primary};

    body.dark-theme & {
      color: #818cf8;
      border-color: #555;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;function Re(){var D,L,B;const i=_(),{showToast:h}=P(),{settings:b,formatDate:l}=J(),[c,u]=x.useState(null),[g,T]=x.useState(null),[w,$]=x.useState([]),[y,S]=x.useState([]),[W,z]=x.useState(!0),[N,R]=x.useState(null),r=(b==null?void 0:b.theme)==="dark",M=async()=>{try{const o=await m.getCurrentUser();u(o.data)}catch(o){console.error("Error fetching user:",o)}},j=async()=>{var o,s;localStorage.getItem("token");try{z(!0),R(null);const a=await Promise.allSettled([m.getOverview(),m.getRecentRecords(),m.getMonthlyTrends()]);a[0].status==="fulfilled"?T(a[0].value.data):(console.error("Error fetching stats:",a[0].reason),h("Failed to load statistics","error")),a[1].status==="fulfilled"?$(a[1].value.data):(console.error("Error fetching recent records:",a[1].reason),$([])),a[2].status==="fulfilled"?S(a[2].value.data):(console.error("Error fetching monthly data:",a[2].reason),S([]))}catch(a){console.error("Error fetching dashboard data:",a),R(((s=(o=a.response)==null?void 0:o.data)==null?void 0:s.message)||a.message||"Failed to load dashboard data"),h("Failed to load dashboard data","error")}finally{z(!1)}};x.useEffect(()=>{M(),j()},[]);const U=o=>{i(`/document/${o}`)},G=o=>{i(`/data-capture?edit=${o}`)},I=o=>{const s=`
Burial Record: ${o.recordNumber}
Name: ${o.fullName}
Date of Death: ${l(o.dateOfDeath)}
Burial Location: ${o.burialLocation}
Status: ${o.status}
    `,a=new Blob([s],{type:"text/plain"}),p=URL.createObjectURL(a),n=document.createElement("a");n.href=p,n.download=`${o.recordNumber}.txt`,n.click(),URL.revokeObjectURL(p)};if(W)return e.jsx(X,{});if(N)return e.jsx(A,{icon:e.jsx(q,{size:48}),title:"Failed to Load Dashboard",description:N,action:j,actionText:"Retry"});if(!g)return e.jsx(A,{icon:e.jsx(k,{size:48}),title:"No Dashboard Data",description:"Dashboard data is not available at the moment.",action:j,actionText:"Refresh"});const Y=()=>{if(!y||y.length===0)return{chartData:[],locations:[]};const o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s={},a=new Set;return y.forEach(p=>{const n=o[p._id.month-1];s[n]||(s[n]={month:n}),s[n][p._id.burialLocation]=p.count,a.add(p._id.burialLocation)}),{chartData:Object.values(s),locations:Array.from(a)}},{chartData:C,locations:F}=Y();return e.jsxs(xe,{children:[e.jsxs("div",{style:{marginBottom:"40px"},children:[e.jsx("h1",{style:{fontSize:"32px",fontWeight:800,color:r?"#fff":"#111827",letterSpacing:"-0.03em",marginBottom:"8px"},children:(c==null?void 0:c.role)==="admin"?"Admin Overview":"Dashboard"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#10b981"}}),e.jsx("p",{style:{fontSize:"14px",color:r?"#888":"#6b7280",fontWeight:500},children:"System is online and healthy"})]})]}),e.jsxs(he,{children:[e.jsx("h2",{children:"Overview"}),e.jsxs(be,{children:[e.jsxs(f,{children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-label",children:"Total Records"}),e.jsx("div",{className:"stat-icon",style:{background:r?"rgba(129, 140, 248, 0.1)":"#f5f7ff"},children:e.jsx(k,{size:20,color:"#818cf8"})})]}),e.jsx("div",{className:"stat-value",style:{letterSpacing:"-0.02em"},children:((D=g.totalRecords)==null?void 0:D.toLocaleString())||0})]}),e.jsxs(f,{children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-label",children:"Verified"}),e.jsx("div",{className:"stat-icon",style:{background:r?"rgba(52, 211, 153, 0.1)":"#f0fdf4"},children:e.jsx(H,{size:20,color:"#34d399"})})]}),e.jsx("div",{className:"stat-value",style:{letterSpacing:"-0.02em"},children:((L=g.verifiedRecords)==null?void 0:L.toLocaleString())||0})]}),e.jsxs(f,{children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-label",children:"Pending"}),e.jsx("div",{className:"stat-icon",style:{background:r?"rgba(251, 191, 36, 0.1)":"#fffbeb"},children:e.jsx(Q,{size:20,color:"#fbbf24"})})]}),e.jsx("div",{className:"stat-value",style:{letterSpacing:"-0.02em"},children:((B=g.pendingRecords)==null?void 0:B.toLocaleString())||0})]}),e.jsxs(f,{children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-label",children:"User Activity"}),e.jsx("div",{className:"stat-icon",style:{background:r?"rgba(129, 140, 248, 0.1)":"#f5f7ff"},children:e.jsx(Z,{size:20,color:"#818cf8"})})]}),e.jsx("div",{className:"stat-value",style:{letterSpacing:"-0.02em"},children:"14.2k"})]})]})]}),e.jsx(me,{children:e.jsxs(fe,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"32px"},children:e.jsxs("div",{children:[e.jsx("h2",{style:{fontSize:"18px",fontWeight:600,color:r?"#eee":"#111827",margin:0},children:"Burial Activity"}),e.jsx("p",{style:{fontSize:"13px",color:r?"#777":"#6b7280",marginTop:"4px"},children:"Monthly record entries by location"})]})}),C.length>0?e.jsx(re,{width:"100%",height:280,children:e.jsxs(ae,{data:C,margin:{top:0,right:0,left:-25,bottom:0},barGap:8,children:[e.jsx("defs",{children:E.map((o,s)=>e.jsxs("linearGradient",{id:`barGradient-${s}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:o,stopOpacity:1}),e.jsx("stop",{offset:"100%",stopColor:o,stopOpacity:.6})]},`barGradient-${s}`))}),e.jsx(se,{strokeDasharray:"4 4",vertical:!1,stroke:r?"rgba(255,255,255,0.05)":"#f3f4f6"}),e.jsx(ie,{dataKey:"month",axisLine:!1,tickLine:!1,tick:{fill:r?"#555":"#9ca3af",fontSize:11,fontWeight:500},dy:10}),e.jsx(de,{axisLine:!1,tickLine:!1,tick:{fill:r?"#555":"#9ca3af",fontSize:11,fontWeight:500},allowDecimals:!1}),e.jsx(le,{cursor:{fill:r?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)"},content:e.jsx(ge,{isDarkMode:r})}),e.jsx(ne,{verticalAlign:"top",align:"right",iconType:"circle",iconSize:6,wrapperStyle:{paddingBottom:"32px",fontSize:"12px",color:r?"#888":"#4b5563"}}),F.map((o,s)=>e.jsx(ce,{dataKey:o,fill:`url(#barGradient-${s%E.length})`,radius:[6,6,0,0],maxBarSize:12,animationDuration:1500,animationBegin:s*100},o))]})}):e.jsxs("div",{style:{height:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:r?"#a0a0a0":t.colors.gray500,backgroundColor:r?"#1f1f1f":t.colors.gray50,borderRadius:"8px"},children:[e.jsx("div",{style:{marginBottom:"16px"},children:e.jsx(k,{size:48,color:"#9ca3af"})}),e.jsx("div",{style:{fontSize:"16px",fontWeight:500},children:"No data available for chart"})]})]})}),e.jsxs(ue,{children:[e.jsx("h2",{children:"Last 10 Uploads"}),e.jsx("h3",{children:"Recently Submitted Records"}),w.length>0?e.jsx(ye,{children:e.jsxs(je,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Record No."}),e.jsx("th",{children:"Deceased Name"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:w.map(o=>e.jsxs("tr",{children:[e.jsx("td",{"data-label":"Record No",style:{fontWeight:600},children:o.recordNumber}),e.jsx("td",{"data-label":"Name",children:`${o.firstName} ${o.middleName||""} ${o.lastName}`.replace(/\s+/g," ").trim()}),e.jsx("td",{"data-label":"Date",children:l(o.dateOfDeath)}),e.jsx("td",{"data-label":"Status",children:e.jsx(V,{$status:o.status,children:o.status})}),e.jsx("td",{"data-label":"Actions",children:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(v,{title:"View Details",onClick:()=>U(o._id),children:"👁"}),e.jsx(v,{title:"Edit Record",onClick:()=>G(o._id),children:e.jsx(ee,{size:18})}),e.jsx(v,{title:"Download",onClick:()=>I(o),children:e.jsx(te,{size:18})})]})})]},o._id))})]})}):e.jsxs("div",{style:{padding:"40px",textAlign:"center",color:r?"#a0a0a0":t.colors.gray500,backgroundColor:r?"#1f1f1f":t.colors.gray50,borderRadius:"8px"},children:[e.jsx("div",{style:{marginBottom:"16px"},children:e.jsx(oe,{size:48,color:"#9ca3af"})}),e.jsx("div",{style:{fontSize:"16px",fontWeight:500},children:"No recent uploads"})]})]}),e.jsx("div",{style:{textAlign:"center",padding:"24px",color:r?"#6d6d6d":t.colors.gray500,fontSize:"12px"},children:"© 2025 Burial Legacy Application. All rights reserved."})]})}export{Re as default};
