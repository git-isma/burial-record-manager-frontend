import{b as H,e as K,r as s,a as k,c as W,j as e,t as o,d as n}from"./index-DodhUEbA.js";import{P as q,S as J,C as L}from"./CommonStyles-Cgy4dfub.js";import{M as Q}from"./ModernDatePicker-CjMBbCTJ.js";import{z as X,n as Y,j as Z,w as ee,x as te,b as oe,l as re,m as ae}from"./index-BhworDv5.js";import{C as ie}from"./Modal-CUm8GDAB.js";import{T as ne}from"./LoadingSkeleton-C_-Iu59V.js";import{E as se}from"./EmptyState-DWGxPktv.js";import"./clsx-B-dksMZM.js";const de=n.div`
  font-family: ${o.fonts.body};
`,le=n(L)`
  margin-bottom: ${o.spacing.xl};
  /* Removed z-index: 50 to prevent overlapping with sticky header */
  
  h3 { 
    font-size: 16px; 
    font-weight: 700; 
    color: ${o.colors.gray900}; 
    margin: 0 0 ${o.spacing.lg} 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
`,ce=n.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${o.spacing.md};
  margin-bottom: ${o.spacing.md};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`,m=n.div`
  display: flex;
  flex-direction: column;
  position: relative; /* Ensure inputs like datepicker can position popups */
  
  label { 
    font-size: 13px; 
    font-weight: 500; 
    color: ${o.colors.gray700}; 
    margin-bottom: 6px;

    body.dark-theme & {
      color: #b0b0b0;
    }
  }
  input, select {
    padding: 10px 12px;
    border: 1px solid ${o.colors.gray300};
    border-radius: ${o.borderRadius.md};
    font-size: 14px;
    color: ${o.colors.textPrimary};
    background: white;
    transition: all ${o.transitions.fast};
    width: 100%;

    body.dark-theme & {
      background: #2d2d2d;
      border-color: #3d3d3d;
      color: #e5e5e5;
    }

    &:focus { 
      outline: none; 
      border-color: ${o.colors.primarySolid}; 
      box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);

      body.dark-theme & {
        border-color: #7c3aed;
      }
    }
    &::placeholder { 
      color: ${o.colors.gray400};

      body.dark-theme & {
        color: #6d6d6d;
      }
    }
  }
`,pe=n(m)`
  position: relative;
  input { padding-left: 36px; }
  &::before { 
    content: ''; 
    position: absolute; 
    left: 12px; 
    bottom: 12px; 
    width: 16px; 
    height: 16px; 
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%239ca3af" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>'); 
    background-repeat: no-repeat;
  }
`,ge=n.div`
  display: flex;
  gap: ${o.spacing.sm};
  flex-direction: column;
  justify-content: flex-start;
  margin-top: ${o.spacing.sm};

  @media (min-width: 640px) {
    flex-direction: row;
  }

  button {
    width: 100%;

    @media (min-width: 640px) {
      width: auto;
    }
  }
`,$=n.button`
  padding: 10px 20px;
  border-radius: ${o.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${o.transitions.fast};
  border: none;
  ${d=>d.$variant==="primary"&&`background: ${o.colors.primarySolid}; color: white; &:hover { background: ${o.colors.primaryHover}; }`}
  ${d=>d.$variant==="secondary"&&`background: white; color: ${o.colors.gray700}; border: 1px solid ${o.colors.gray300}; &:hover { background: ${o.colors.gray50}; }`}
`,he=n(L)`
  h3 { 
    font-size: 18px; 
    font-weight: 700; 
    color: ${o.colors.gray900}; 
    margin: 0 0 ${o.spacing.lg} 0;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
`,xe=n.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: ${o.borderRadius.lg};
  border: 1px solid ${o.colors.gray200};

  body.dark-theme & {
    border-color: #3d3d3d;
  }

  @media (min-width: 768px) {
    border: none;
    overflow-x: visible;
  }
`,ue=n.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  min-width: 600px;

  @media (min-width: 768px) {
    min-width: auto;
    font-size: 13px;
  }

  thead { 
    background: ${o.colors.gray50};
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
    color: ${o.colors.gray700}; 
    border-bottom: 2px solid ${o.colors.gray200}; 
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
    grid-template-columns: 40px 1fr;
    gap: 0;
    margin-bottom: 12px;
    border: 1px solid ${o.colors.gray200};
    border-radius: ${o.borderRadius.lg};
    overflow: hidden;
    background: white;

    body.dark-theme & {
      background: #2d2d2d;
      border-color: #3d3d3d;
    }

    @media (min-width: 640px) {
      margin-bottom: 14px;
    }

    @media (min-width: 768px) {
      display: table-row;
      margin-bottom: 0;
      border: none;
      border-bottom: 1px solid ${o.colors.gray200};
      border-radius: 0;
      background: transparent;
    }
  }

  td { 
    padding: 12px 16px;
    color: ${o.colors.textPrimary}; 
    border-bottom: 1px solid ${o.colors.gray200};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    position: relative;
    min-height: 44px;
    flex-direction: column;
    gap: 4px;

    body.dark-theme & {
      color: #e5e5e5;
      border-bottom-color: #3d3d3d;
    }

    @media (min-width: 768px) {
      display: table-cell;
      text-align: left;
      justify-content: flex-start;
      flex-direction: row;
      gap: 0;
      padding: 16px;
      border-bottom: 1px solid ${o.colors.gray200};
      min-height: auto;

      body.dark-theme & {
        border-bottom-color: #3d3d3d;
      }
    }

    &:first-child {
      grid-column: 1;
      justify-content: center;
      flex-direction: row;
      padding: 12px 8px;

      @media (min-width: 768px) {
        grid-column: auto;
        padding: 16px;
      }
    }

    &:not(:first-child) {
      grid-column: 2;
      border-left: 1px solid ${o.colors.gray200};
      flex-direction: column;
      align-items: flex-start;

      body.dark-theme & {
        border-left-color: #3d3d3d;
      }

      @media (min-width: 768px) {
        grid-column: auto;
        border-left: none;
        flex-direction: row;
        align-items: center;
      }

      &::before {
        content: attr(data-label);
        font-weight: 600;
        color: ${o.colors.gray700};
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
  }

  tbody tr { 
    transition: all ${o.transitions.fast}; 
    &:hover { 
      background: ${o.colors.gray50};
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

      body.dark-theme & {
        background: #353535;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      }

      @media (min-width: 768px) {
        background: ${o.colors.gray50};
        box-shadow: none;
      }
    } 
  }
`,v=n.button`
  background: none;
  border: none;
  padding: 6px;
  cursor: pointer;
  color: ${o.colors.gray600};
  font-size: 16px;
  border-radius: 4px;
  transition: all ${o.transitions.fast};

  body.dark-theme & {
    color: #b0b0b0;
  }

  &:hover { 
    background: ${o.colors.gray100}; 
    color: ${o.colors.primarySolid};

    body.dark-theme & {
      background: #3d3d3d;
      color: #a78bfa;
    }
  }
`,me=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid ${o.colors.gray200};

  body.dark-theme & {
    border-top-color: #3d3d3d;
  }

  button {
    padding: 8px 12px;
    background: white;
    border: 1px solid ${o.colors.gray300};
    border-radius: ${o.borderRadius.md};
    color: ${o.colors.gray700};
    font-size: 13px;
    cursor: pointer;
    font-weight: 500;
    min-width: 36px;
    transition: all ${o.transitions.fast};

    body.dark-theme & {
      background: #2d2d2d;
      border-color: #3d3d3d;
      color: #e5e5e5;
    }

    &:hover:not(:disabled) { 
      background: ${o.colors.gray50}; 
      border-color: ${o.colors.primarySolid}; 
      color: ${o.colors.primarySolid};

      body.dark-theme & {
        background: #353535;
        border-color: #7c3aed;
        color: #a78bfa;
      }
    }
    &.active { 
      background: ${o.colors.primarySolid}; 
      color: white; 
      border-color: ${o.colors.primarySolid};

      body.dark-theme & {
        background: #7c3aed;
        border-color: #7c3aed;
      }
    }
    &:disabled { opacity: 0.5; cursor: not-allowed; }
  }
  span { 
    color: ${o.colors.gray400};
    padding: 0 4px;

    body.dark-theme & {
      color: #6d6d6d;
    }
  }
`,be=n.div`
  text-align: center;
  padding: 24px;
  color: ${o.colors.gray500};
  font-size: 12px;

  body.dark-theme & {
    color: #a0a0a0;
  }
`;function Pe({user:d}){const y=H(),{formatDate:R}=K(),[p,P]=s.useState([]),[B,S]=s.useState([]),[l,C]=s.useState({search:"",burialLocation:"",status:"",gender:"",dateRange:new Date().toISOString().split("T")[0]}),[r,g]=s.useState({currentPage:1,totalPages:1,total:0}),[M,D]=s.useState(!1),[c,b]=s.useState([]),[F,j]=s.useState({isOpen:!1});s.useEffect(()=>{x(),A()},[]);const A=async()=>{try{const t=await k.getLocations();Array.isArray(t.data)?S(t.data):t.data.success&&S(t.data.data||[])}catch(t){console.error("Error fetching locations:",t)}};s.useEffect(()=>{x()},[r.currentPage]);const x=async()=>{var t,a;D(!0);try{const i={...l,page:r.currentPage,limit:10};(d==null?void 0:d.role)==="data_entry"&&(i.createdBy=d._id);const h=await k.getRecords(i);P(h.data.records||[]),g({currentPage:h.data.currentPage||1,totalPages:h.data.totalPages||1,total:h.data.total||0})}catch(i){console.error("Error fetching records:",i),f(((a=(t=i.response)==null?void 0:t.data)==null?void 0:a.msg)||"Failed to load records","error"),P([])}finally{D(!1)}},u=t=>{C({...l,[t.target.name]:t.target.value})},T=()=>{g({...r,currentPage:1}),x()},z=()=>{C({search:"",burialLocation:"",status:"",gender:"",dateRange:new Date().toISOString().split("T")[0]}),g({...r,currentPage:1}),setTimeout(x,100)},E=t=>{y(`/document/${t}`)},O=t=>{y(`/data-capture?edit=${t}`)},V=t=>{const a=`${t.firstName} ${t.middleName||""} ${t.lastName}`.replace(/\s+/g," ").trim(),i=`Burial Record: ${t.recordNumber}
Name: ${a}
Date of Death: ${R(t.dateOfDeath)}
Next of Kin: ${t.nextOfKinName}
Burial Location: ${t.burialLocation}
Status: ${t.status}`,h=new Blob([i],{type:"text/plain"}),N=URL.createObjectURL(h),w=document.createElement("a");w.href=N,w.download=`${t.recordNumber}.txt`,w.click(),URL.revokeObjectURL(N)},{showToast:f}=W(),_=t=>{b(a=>a.includes(t)?a.filter(i=>i!==t):[...a,t])},G=t=>{t.target.checked?b(p.map(a=>a._id)):b([])},I=()=>{if(c.length===0){f("Please select records to delete","warning");return}j({isOpen:!0})},U=async()=>{var t,a;try{const i=await k.bulkDeleteRecords(c);j({isOpen:!1}),b([]),setTimeout(()=>{f(i.data.msg||"Records deleted successfully","success")},100),x()}catch(i){f(((a=(t=i.response)==null?void 0:t.data)==null?void 0:a.msg)||"Error deleting records","error")}};return e.jsxs(de,{children:[e.jsxs(q,{children:[e.jsx("h1",{children:"Burial Records"}),e.jsx("p",{children:"Manage and search through all recorded burial records efficiently."})]}),e.jsxs(le,{children:[e.jsx("h3",{children:"Filter Records"}),e.jsxs(ce,{children:[e.jsxs(m,{children:[e.jsx("label",{children:"Date Range"}),e.jsx(Q,{value:l.dateRange,onChange:u,name:"dateRange",placeholder:"Pick a date"})]}),e.jsxs(m,{children:[e.jsx("label",{children:"Burial Location"}),e.jsxs("select",{name:"burialLocation",value:l.burialLocation,onChange:u,children:[e.jsx("option",{value:"",children:"All Locations"}),B.map(t=>e.jsx("option",{value:t.name,children:t.name},t._id))]})]}),e.jsxs(m,{children:[e.jsx("label",{children:"Gender"}),e.jsxs("select",{name:"gender",value:l.gender,onChange:u,children:[e.jsx("option",{value:"",children:"Select Gender"}),e.jsx("option",{value:"Male",children:"Male"}),e.jsx("option",{value:"Female",children:"Female"})]})]}),e.jsxs(m,{children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{name:"status",value:l.status,onChange:u,children:[e.jsx("option",{value:"",children:"Select Status"}),e.jsx("option",{value:"Pending",children:"Verification Pending"}),e.jsx("option",{value:"Verified",children:"Verified"}),e.jsx("option",{value:"Rejected",children:"Rejected"})]})]}),e.jsxs(pe,{children:[e.jsx("label",{children:"Search by Record ID/Name"}),e.jsx("input",{type:"text",name:"search",placeholder:"Enter Record ID or Name",value:l.search,onChange:u})]})]}),e.jsxs(ge,{children:[e.jsx($,{$variant:"primary",onClick:T,children:"Apply Filters"}),e.jsx($,{$variant:"secondary",onClick:z,children:"Reset"})]})]}),e.jsxs(he,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[e.jsx("h3",{style:{margin:0},children:"All Burial Records"}),c.length>0&&e.jsxs($,{$variant:"danger",onClick:I,style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(X,{size:18})," Delete Selected (",c.length,")"]})]}),M?e.jsx(ne,{rows:10}):p.length===0?e.jsx(se,{icon:e.jsx(Y,{size:48}),title:"No Records Found",description:"No burial records match your current filters. Try adjusting your search criteria or create a new record.",action:()=>y("/data-capture"),actionText:"Create New Record",secondaryAction:z,secondaryActionText:"Clear Filters"}):e.jsxs(e.Fragment,{children:[e.jsx(xe,{children:e.jsxs(ue,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"40px"},children:e.jsx("input",{type:"checkbox",onChange:G,checked:c.length===p.length&&p.length>0,style:{cursor:"pointer",width:"16px",height:"16px"}})}),e.jsx("th",{children:"Record No"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Date of Death"}),e.jsx("th",{children:"Burial Location"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:p.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("input",{type:"checkbox",checked:c.includes(t._id),onChange:()=>_(t._id),style:{cursor:"pointer",width:"16px",height:"16px"}})}),e.jsx("td",{"data-label":"Record No",style:{fontWeight:600},children:t.recordNumber}),e.jsx("td",{"data-label":"Name",children:`${t.firstName} ${t.middleName||""} ${t.lastName}`.replace(/\s+/g," ").trim()}),e.jsx("td",{"data-label":"Date of Death",children:R(t.dateOfDeath)}),e.jsx("td",{"data-label":"Location",children:t.burialLocation}),e.jsx("td",{"data-label":"Status",children:e.jsxs(J,{$status:t.status,children:[t.status==="Pending"&&e.jsx(Z,{size:16,style:{marginRight:"6px"}}),t.status==="Verified"&&e.jsx(ee,{size:16,style:{marginRight:"6px"}}),t.status==="Rejected"&&e.jsx(te,{size:16,style:{marginRight:"6px"}}),t.status==="Pending"?"Verification Pending":t.status]})}),e.jsx("td",{"data-label":"Actions",children:e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[e.jsx(v,{title:"View Details",onClick:()=>E(t._id),children:e.jsx(oe,{size:18})}),e.jsx(v,{title:"Edit",onClick:()=>O(t._id),children:e.jsx(re,{size:18})}),e.jsx(v,{title:"Download",onClick:()=>V(t),children:e.jsx(ae,{size:18})})]})})]},t._id))})]})}),p.length>0&&r.totalPages>1&&e.jsxs(me,{children:[e.jsx("button",{onClick:()=>g({...r,currentPage:r.currentPage-1}),disabled:r.currentPage===1,children:"« Previous"}),e.jsx("button",{className:"active",children:r.currentPage}),r.currentPage<r.totalPages-1&&e.jsx("span",{children:"..."}),r.currentPage<r.totalPages&&e.jsx("button",{onClick:()=>g({...r,currentPage:r.totalPages}),children:r.totalPages}),e.jsx("button",{onClick:()=>g({...r,currentPage:r.currentPage+1}),disabled:r.currentPage===r.totalPages,children:"Next »"})]})]})]}),e.jsx(be,{children:"© 2025 Burial Legacy Application. All rights reserved."}),e.jsx(ie,{isOpen:F.isOpen,onClose:()=>j({isOpen:!1}),onConfirm:U,title:"Delete Multiple Records",message:`Are you sure you want to delete ${c.length} record(s)? This action cannot be undone.`,confirmText:"Delete All",cancelText:"Cancel",variant:"danger"})]})}export{Pe as default};
