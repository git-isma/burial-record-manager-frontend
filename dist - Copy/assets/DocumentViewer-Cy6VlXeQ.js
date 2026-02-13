import{l as g,b as u,e as f,r as c,i as j,j as e,d}from"./index-DodhUEbA.js";import{C as x,B as l,S as k}from"./CommonStyles-Cgy4dfub.js";import{q as m,F as h,f as y,w,M as v}from"./index-BhworDv5.js";const z=(n,a)=>{const r=document.createElement("a");r.href=n,r.download=a,r.target="_blank",r.rel="noopener noreferrer",document.body.appendChild(r),r.click(),document.body.removeChild(r)},D=d.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }

  h2 {
    body.dark-theme & {
      color: #e5e5e5;
    }
  }

  p {
    body.dark-theme & {
      color: #b0b0b0;
    }
  }
`,P=d.iframe`
  width: 100%;
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 8px;

  @media (min-width: 768px) {
    height: 600px;
  }

  body.dark-theme & {
    border-color: #404040;
  }
`,S=d.img`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-height: 600px;
  object-fit: contain;

  body.dark-theme & {
    border-color: #404040;
  }
`,s=d.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;

  body.dark-theme & {
    border-bottom-color: #404040;
  }

  &:last-of-type {
    border-bottom: none;
  }

  strong {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 6px;
    color: #6b7280;
    font-size: 13px;
    font-weight: 500;

    body.dark-theme & {
      color: #b0b0b0;
    }
  }

  p {
    margin: 0;
    color: #111827;
    font-size: 15px;
    font-weight: 500;
    padding-left: 22px;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
`,N=d(x)`
  position: relative;
  max-height: none;
  overflow-y: visible;

  @media (min-width: 1024px) {
    position: sticky;
    top: 20px;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
  }
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;

    body.dark-theme & {
      background: #2d2d2d;
    }
  }
  
  &::-webkit-scrollbar-thumb {
    background: #6366f1;
    border-radius: 10px;

    body.dark-theme & {
      background: #7c3aed;
    }
    
    &:hover {
      background: #4f46e5;

      body.dark-theme & {
        background: #8b5cf6;
      }
    }
  }
`,C=d.div`
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e5e7eb;

  body.dark-theme & {
    border-bottom-color: #404040;
  }
  
  .permit-number {
    font-size: 20px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 4px;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
  
  .subtitle {
    font-size: 13px;
    color: #6b7280;
    font-weight: 500;

    body.dark-theme & {
      color: #b0b0b0;
    }
  }
`;function L(){const{id:n}=g(),a=u(),{formatDate:r}=f(),[t,b]=c.useState(null);c.useEffect(()=>{p()},[n]);const p=async()=>{const o=localStorage.getItem("token");try{const i=await j.get(`/records/${n}`,{headers:{"x-auth-token":o}});b(i.data)}catch(i){console.error(i)}};return t?e.jsxs(D,{children:[e.jsxs(x,{children:[e.jsx("h2",{style:{marginBottom:"20px"},children:"Document Preview"}),t.attachments&&t.attachments.length>0?e.jsx("div",{children:t.attachments.map((o,i)=>e.jsxs("div",{style:{marginBottom:"20px"},children:[o.filename.endsWith(".pdf")?e.jsx(P,{src:o.path,title:"PDF Preview"}):e.jsx(S,{src:o.path,alt:"Record scan"}),e.jsx("div",{style:{marginTop:"10px"},children:e.jsxs(l,{$variant:"secondary",onClick:()=>z(o.path,o.filename),children:["📥 Download ",o.filename]})})]},i))}):e.jsx("p",{children:"No attachments available"})]}),e.jsxs(N,{children:[e.jsxs(C,{children:[e.jsx("div",{className:"permit-number",children:t.recordNumber}),e.jsx("div",{className:"subtitle",children:`${t.firstName} ${t.middleName||""} ${t.lastName}`.replace(/\s+/g," ").trim()})]}),e.jsxs(s,{children:[e.jsxs("strong",{children:[e.jsx(m,{size:16})," Gender & Age"]}),e.jsxs("p",{children:[t.gender,", ",t.age," years"]})]}),e.jsxs(s,{children:[e.jsxs("strong",{children:[e.jsx(h,{size:16})," Date of Death"]}),e.jsx("p",{children:r(t.dateOfDeath)})]}),e.jsxs(s,{children:[e.jsxs("strong",{children:[e.jsx(y,{size:16})," Burial Location"]}),e.jsx("p",{children:t.burialLocation})]}),e.jsxs(s,{children:[e.jsxs("strong",{children:[e.jsx(m,{size:16})," Next of Kin"]}),e.jsx("p",{children:t.nextOfKinName}),e.jsx("p",{style:{fontSize:"13px",color:"#6b7280"},children:t.nextOfKinContact})]}),e.jsxs(s,{children:[e.jsxs("strong",{children:[e.jsx(w,{size:16})," Status"]}),e.jsx("p",{children:e.jsx(k,{$status:t.status==="Pending"?"Pending Verification":t.status,children:t.status==="Pending"?"Pending Verification":t.status})})]}),e.jsxs(s,{children:[e.jsxs("strong",{children:[e.jsx(h,{size:16})," Created On"]}),e.jsxs("p",{children:[r(t.createdAt)," at ",new Date(t.createdAt).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})]})]}),e.jsxs(l,{$variant:"secondary",onClick:()=>a("/records"),style:{width:"100%",marginTop:"16px"},children:[e.jsx(v,{size:18})," Back to Records"]})]})]}):e.jsx("div",{children:"Loading..."})}export{L as default};
