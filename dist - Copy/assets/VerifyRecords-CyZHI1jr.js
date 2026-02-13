import{b as Z,e as U,c as ee,r as h,a as f,j as e,t as o,d as c}from"./index-DodhUEbA.js";import{P as re,B as $,C as F}from"./CommonStyles-Cgy4dfub.js";import{n as M,b as oe}from"./index-BhworDv5.js";import{M as te}from"./ModernDatePicker-CjMBbCTJ.js";import{C as ie,M as z}from"./Modal-CUm8GDAB.js";import{T as ae}from"./LoadingSkeleton-C_-Iu59V.js";import{E as se}from"./EmptyState-DWGxPktv.js";import"./clsx-B-dksMZM.js";const de=c(F)`
  margin-bottom: ${o.spacing.xl};
  
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
`,ne=c.div`
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
`,y=c.div`
  display: flex;
  flex-direction: column;
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
`;c(y)`
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
`;const ce=c.div`
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
`,le=c.div`
  font-family: ${o.fonts.body};
`,he=c(F)`
  h3 { 
    font-size: 18px; 
    font-weight: 700; 
    color: ${o.colors.gray900}; 
    margin: 0 0 ${o.spacing.lg} 0;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
`,xe=c.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: ${o.borderRadius.lg};
  border: 1px solid ${o.colors.gray200};

  body.dark-theme & {
    border-color: #3d3d3d;
  }
`,pe=c.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;

  thead { 
    background: ${o.colors.gray50};
    
    body.dark-theme & {
      background: #1f1f1f;
    }
  }

  th { 
    padding: 12px 16px; 
    text-align: left; 
    font-weight: 600; 
    color: ${o.colors.gray700}; 
    border-bottom: 2px solid ${o.colors.gray200}; 
    font-size: 12px; 
    text-transform: uppercase; 
    letter-spacing: 0.5px;
    white-space: nowrap;

    body.dark-theme & {
      color: #b0b0b0;
      border-bottom-color: #3d3d3d;
    }
  }

  td { 
    padding: 16px;
    color: ${o.colors.textPrimary}; 
    border-bottom: 1px solid ${o.colors.gray200};
    
    body.dark-theme & {
      color: #e5e5e5;
      border-bottom-color: #3d3d3d;
    }
  }

  tbody tr { 
    transition: all ${o.transitions.fast}; 
    &:hover { 
      background: ${o.colors.gray50};
      
      body.dark-theme & {
        background: #353535;
      }
    } 
  }
`,me=c.button`
  background: none;
  border: none;
  padding: 6px;
  cursor: pointer;
  color: ${o.colors.gray600};
  font-size: 18px;
  border-radius: 4px;
  transition: all ${o.transitions.fast};

  body.dark-theme & {
    color: #b0b0b0;
  }

  &:hover { 
    background: ${o.colors.gray100}; 
    
    body.dark-theme & {
      background: #3d3d3d;
    }
  }

  &.verify:hover { color: ${o.colors.success}; background: #d1fae5; }
  &.reject:hover { color: ${o.colors.danger}; background: #fee2e2; }
  &.view:hover { color: ${o.colors.primarySolid}; }
`,ge=c.div`
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
    
    body.dark-theme & {
      background: #2d2d2d;
      border-color: #3d3d3d;
      color: #e5e5e5;
    }

    &:hover:not(:disabled) { 
      background: ${o.colors.gray50};
      
      body.dark-theme & {
        background: #353535;
      }
    }
    
    &.active { 
      background: ${o.colors.primarySolid}; 
      color: white; 
      border-color: ${o.colors.primarySolid};
    }
    
    &:disabled { opacity: 0.5; cursor: not-allowed; }
  }
`,ue=c.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid ${o.colors.gray300};
  border-radius: 8px;
  min-height: 100px;
  margin-top: 8px;
  font-family: ${o.fonts.body};
  resize: vertical;

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #3d3d3d;
    color: #e5e5e5;
  }

  &:focus {
    outline: none;
    border-color: ${o.colors.primarySolid};
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`,b=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${o.spacing.lg};
  margin-bottom: ${o.spacing.xl};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,i=c.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,a=c.span`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${o.colors.gray500};

  body.dark-theme & {
    color: #a0a0a0;
  }
`,s=c.div`
  font-size: 15px;
  color: ${o.colors.textPrimary};
  font-weight: 500;
  padding: 10px 14px;
  background: ${o.colors.gray50};
  border-radius: ${o.borderRadius.md};
  border: 1px solid ${o.colors.gray200};
  min-height: 42px;
  display: flex;
  align-items: center;

  body.dark-theme & {
    color: #e5e5e5;
    background: #2d2d2d;
    border-color: #3d3d3d;
  }
`,p=c.h4`
    margin: 0 0 16px 0;
    font-size: 14px;
    color: ${o.colors.primary};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 8px;
    
    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: ${o.colors.gray200};
    }

    body.dark-theme & {
        color: #a78bfa;
        &::after {
          background: #3d3d3d;
        }
    }
`,je=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${o.spacing.md};
  margin-top: ${o.spacing.sm};
`,fe=c.div`
  border: 1px solid ${o.colors.gray200};
  border-radius: ${o.borderRadius.lg};
  overflow: hidden;
  transition: all ${o.transitions.base};
  background: white;
  
  body.dark-theme & {
    background: #2d2d2d;
    border-color: #3d3d3d;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${o.shadows.md};
    border-color: ${o.colors.primary};
  }
`,be=c.div`
    width: 100%;
    height: 120px;
    background: ${o.colors.gray100};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    body.dark-theme & {
      background: #1f1f1f;
    }
`,ye=c.div`
  padding: 8px 12px;
  font-size: 12px;
  border-top: 1px solid ${o.colors.gray200};
  
  body.dark-theme & {
    border-top-color: #3d3d3d;
  }

  .name {
    font-weight: 600;
    color: ${o.colors.textPrimary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 2px;
    
    body.dark-theme & {
      color: #e5e5e5;
    }
  }

  .type {
    color: ${o.colors.gray500};
    font-size: 11px;
  }
`;function Re(){Z();const{formatDate:m}=U(),{showToast:v}=ee(),[I,P]=h.useState([]),[K,E]=h.useState([]),[G,k]=h.useState(!1),[l,x]=h.useState({currentPage:1,totalPages:1,total:0}),[g,T]=h.useState({dateOfDeath:"",burialLocation:"",gender:"",applicantEmail:"",ageCategory:""}),[A,O]=h.useState({isOpen:!1,recordId:null,recordName:""}),[D,N]=h.useState({isOpen:!1,recordId:null,recordName:""}),[r,u]=h.useState({isOpen:!1,record:null}),[B,L]=h.useState(""),[C,S]=h.useState(!1);h.useEffect(()=>{R(),_()},[l.currentPage]);const _=async()=>{try{const t=await f.getLocations();Array.isArray(t.data)?E(t.data):t.data.success&&E(t.data.data||[])}catch(t){console.error("Error fetching locations:",t)}},R=async()=>{k(!0);try{const t={page:l.currentPage,limit:10,status:"Pending",endDate:new Date().toISOString().split("T")[0],...g},n=await f.getPublicRecords(t);if(n.data.success){P(n.data.data||[]);const d=n.data.pagination||{};x({currentPage:d.currentPage||1,totalPages:d.totalPages||1,total:d.total||0})}else P([])}catch(t){console.error("Error fetching public records:",t),P([])}finally{k(!1)}},W=t=>{O({isOpen:!0,recordId:t._id,recordName:`${t.firstName} ${t.lastName}`})},H=t=>{N({isOpen:!0,recordId:t._id,recordName:`${t.firstName} ${t.lastName}`}),L("")},Y=async t=>{u({isOpen:!0,record:t});try{const n=await f.getPublicRecord(t._id);let d=n.data.success===!0?n.data.data:n.data;Array.isArray(d)&&d.length>0?d=d[0]:d&&d.docs&&Array.isArray(d.docs)&&(d=d.docs[0]),d&&d._id&&u(j=>({...j,record:d}))}catch(n){console.error("Failed to fetch details",n)}},q=async()=>{var t,n;S(!0);try{const d=await f.verifyPublicRecord(A.recordId,{status:"Verified"});v(d.data.message||"Record verified successfully","success"),O({isOpen:!1,recordId:null,recordName:""}),R()}catch(d){v(((n=(t=d.response)==null?void 0:t.data)==null?void 0:n.msg)||"Error verifying record","error")}finally{S(!1)}},J=async()=>{var t,n;if(!B.trim()){v("Please provide a reason for rejection","warning");return}S(!0);try{const d=await f.verifyPublicRecord(D.recordId,{status:"Rejected",rejectionReason:B});v(d.data.message||"Record rejected","info"),N({isOpen:!1,recordId:null,recordName:""}),R()}catch(d){v(((n=(t=d.response)==null?void 0:t.data)==null?void 0:n.msg)||"Error rejecting record","error")}finally{S(!1)}},w=t=>{const{name:n,value:d}=t.target;T(j=>({...j,[n]:d}))},Q=()=>{x(t=>({...t,currentPage:1})),R()},X=()=>{T({dateOfDeath:"",burialLocation:"",gender:"",applicantEmail:"",ageCategory:""}),x(t=>({...t,currentPage:1})),setTimeout(()=>{k(!0),f.getPublicRecords({page:1,limit:10,status:"Pending",endDate:new Date().toISOString().split("T")[0]}).then(t=>{if(t.data.success){P(t.data.data||[]);const n=t.data.pagination||{};x({currentPage:1,totalPages:n.totalPages||1,total:n.total||0})}else P([])}).finally(()=>k(!1))},0)};return e.jsxs(le,{children:[e.jsxs(re,{children:[e.jsx("h1",{children:"Verify Public Records"}),e.jsx("p",{children:"Review and verify burial record submissions from the public."})]}),e.jsxs(de,{children:[e.jsx("h3",{children:"Filter Records"}),e.jsxs(ne,{children:[e.jsxs(y,{children:[e.jsx("label",{children:"Date of Death"}),e.jsx(te,{value:g.dateOfDeath,onChange:w,name:"dateOfDeath",placeholder:"Pick a date"})]}),e.jsxs(y,{children:[e.jsx("label",{children:"Burial Location"}),e.jsxs("select",{name:"burialLocation",value:g.burialLocation,onChange:w,children:[e.jsx("option",{value:"",children:"All Locations"}),K.map(t=>e.jsx("option",{value:t.name,children:t.name},t._id))]})]}),e.jsxs(y,{children:[e.jsx("label",{children:"Gender"}),e.jsxs("select",{name:"gender",value:g.gender,onChange:w,children:[e.jsx("option",{value:"",children:"Select Gender"}),e.jsx("option",{value:"Male",children:"Male"}),e.jsx("option",{value:"Female",children:"Female"})]})]}),e.jsxs(y,{children:[e.jsx("label",{children:"Applicant Email / ID"}),e.jsx("input",{type:"text",name:"applicantEmail",placeholder:"Enter Email or ID",value:g.applicantEmail,onChange:w})]}),e.jsxs(y,{children:[e.jsx("label",{children:"Age Category"}),e.jsxs("select",{name:"ageCategory",value:g.ageCategory,onChange:w,children:[e.jsx("option",{value:"",children:"All Categories"}),e.jsx("option",{value:"Stillborn",children:"Stillborn"}),e.jsx("option",{value:"Infant",children:"Infant"}),e.jsx("option",{value:"Child",children:"Child"}),e.jsx("option",{value:"Adult",children:"Adult"})]})]})]}),e.jsxs(ce,{children:[e.jsx($,{$variant:"primary",onClick:Q,children:"Apply Filters"}),e.jsx($,{$variant:"secondary",onClick:X,children:"Reset"})]})]}),e.jsxs(he,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:e.jsx("h3",{style:{margin:0},children:"Verification Pending Records"})}),G?e.jsx(ae,{rows:5}):I.length===0?e.jsx(se,{icon:e.jsx(M,{size:48}),title:"No Verification Pending Records",description:"There are no public record submissions waiting for verification."}):e.jsxs(e.Fragment,{children:[e.jsx(xe,{children:e.jsxs(pe,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Submitted Date"}),e.jsx("th",{children:"Applicant ID"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Date of Death"}),e.jsx("th",{children:"Burial Location"}),e.jsx("th",{children:"Submitted By"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:I.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:m(t.createdAt)}),e.jsx("td",{children:t.applicantId||"N/A"}),e.jsx("td",{children:`${t.firstName} ${t.middleName||""} ${t.lastName}`}),e.jsx("td",{children:m(t.dateOfDeath)}),e.jsx("td",{children:t.burialLocation}),e.jsx("td",{children:t.applicantEmail||"N/A"}),e.jsx("td",{children:e.jsx("div",{style:{display:"flex",gap:"8px"},children:e.jsx(me,{className:"view",title:"View Details",onClick:()=>Y(t),children:e.jsx(oe,{})})})})]},t._id))})]})}),I.length>0&&l.totalPages>1&&e.jsxs(ge,{children:[e.jsx("button",{onClick:()=>x({...l,currentPage:l.currentPage-1}),disabled:l.currentPage===1,children:"« Previous"}),e.jsx("button",{className:"active",children:l.currentPage}),l.currentPage<l.totalPages-1&&e.jsx("span",{children:"..."}),l.currentPage<l.totalPages&&e.jsx("button",{onClick:()=>x({...l,currentPage:l.totalPages}),children:l.totalPages}),e.jsx("button",{onClick:()=>x({...l,currentPage:l.currentPage+1}),disabled:l.currentPage===l.totalPages,children:"Next »"})]})]})]}),e.jsx(ie,{isOpen:A.isOpen,onClose:()=>O({isOpen:!1,recordId:null,recordName:""}),onConfirm:q,title:"Verify Record",message:`Are you sure you want to verify the record for "${A.recordName}"? This will move it to the main burial records.`,confirmText:C?"Verifying...":"Verify Record",cancelText:"Cancel",variant:"success"}),e.jsx(z,{isOpen:D.isOpen,onClose:()=>N({isOpen:!1,recordId:null,recordName:""}),title:"Reject Record",children:e.jsxs("div",{style:{padding:"0 4px"},children:[e.jsxs("p",{style:{marginBottom:"12px",color:o.colors.gray700},children:["Please provide a reason for rejecting the record for ",e.jsx("strong",{children:D.recordName}),". This will be sent to the applicant."]}),e.jsx(ue,{placeholder:"Enter rejection reason...",value:B,onChange:t=>L(t.target.value)}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px",marginTop:"24px"},children:[e.jsx("button",{onClick:()=>N({isOpen:!1,recordId:null,recordName:""}),style:{padding:"10px 16px",background:"white",border:`1px solid ${o.colors.gray300}`,borderRadius:"6px",cursor:"pointer",fontWeight:600,color:o.colors.gray700},children:"Cancel"}),e.jsx("button",{onClick:J,disabled:C,style:{padding:"10px 16px",background:o.colors.danger,border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:600,color:"white",opacity:C?.7:1},children:C?"Rejecting...":"Reject Record"})]})]})}),e.jsx(z,{isOpen:r.isOpen,onClose:()=>u({isOpen:!1,record:null}),title:"Record Details",maxWidth:"800px",footer:e.jsxs("div",{style:{display:"flex",gap:"12px",width:"100%",justifyContent:"flex-end"},children:[e.jsx($,{$variant:"secondary",onClick:()=>u({isOpen:!1,record:null}),children:"Close"}),r.record&&e.jsxs(e.Fragment,{children:[e.jsx($,{$variant:"danger",onClick:()=>{const t=r.record;u({isOpen:!1,record:null}),H(t)},children:"Reject"}),e.jsx($,{$variant:"success",onClick:()=>{const t=r.record;u({isOpen:!1,record:null}),W(t)},children:"Verify"})]})]}),children:r.record?e.jsxs("div",{style:{padding:"0 8px"},children:[e.jsx(p,{children:"Deceased Information"}),e.jsxs(b,{children:[r.record.recordNumber&&e.jsxs(i,{children:[e.jsx(a,{children:"Record Number"}),e.jsx(s,{children:r.record.recordNumber})]}),r.record.firstName&&e.jsxs(i,{children:[e.jsx(a,{children:"First Name"}),e.jsx(s,{children:r.record.firstName})]}),r.record.middleName&&e.jsxs(i,{children:[e.jsx(a,{children:"Middle Name"}),e.jsx(s,{children:r.record.middleName})]}),r.record.lastName&&e.jsxs(i,{children:[e.jsx(a,{children:"Last Name"}),e.jsx(s,{children:r.record.lastName})]}),r.record.idPassportNo&&e.jsxs(i,{children:[e.jsx(a,{children:"ID / Passport No"}),e.jsx(s,{children:r.record.idPassportNo})]}),r.record.gender&&e.jsxs(i,{children:[e.jsx(a,{children:"Gender"}),e.jsx(s,{children:r.record.gender})]}),r.record.age&&e.jsxs(i,{children:[e.jsx(a,{children:"Age"}),e.jsx(s,{children:r.record.age})]}),r.record.ageCategory&&e.jsxs(i,{children:[e.jsx(a,{children:"Age Category"}),e.jsx(s,{children:r.record.ageCategory})]}),r.record.nationality&&e.jsxs(i,{children:[e.jsx(a,{children:"Nationality"}),e.jsx(s,{children:r.record.nationality})]}),r.record.dateOfDeath&&e.jsxs(i,{children:[e.jsx(a,{children:"Date of Death"}),e.jsx(s,{children:m(r.record.dateOfDeath)})]}),r.record.dateOfBurial&&e.jsxs(i,{children:[e.jsx(a,{children:"Date of Burial"}),e.jsx(s,{children:m(r.record.dateOfBurial)})]})]}),e.jsx(p,{children:"Next of Kin Information"}),e.jsxs(b,{children:[r.record.nextOfKinName&&e.jsxs(i,{children:[e.jsx(a,{children:"Name"}),e.jsx(s,{children:r.record.nextOfKinName})]}),r.record.nextOfKinRelationship&&e.jsxs(i,{children:[e.jsx(a,{children:"Relationship"}),e.jsx(s,{children:r.record.nextOfKinRelationship})]}),r.record.nextOfKinContact&&e.jsxs(i,{children:[e.jsx(a,{children:"Contact"}),e.jsx(s,{children:r.record.nextOfKinContact})]}),r.record.nextOfKinIdPassport&&e.jsxs(i,{children:[e.jsx(a,{children:"ID / Passport No"}),e.jsx(s,{children:r.record.nextOfKinIdPassport})]})]}),e.jsx(p,{children:"Burial Permit Details"}),e.jsxs(b,{children:[r.record.burialPermitNumber&&e.jsxs(i,{children:[e.jsx(a,{children:"Permit Number"}),e.jsx(s,{children:r.record.burialPermitNumber})]}),r.record.burialPermitDate&&e.jsxs(i,{children:[e.jsx(a,{children:"Permit Date"}),e.jsx(s,{children:m(r.record.burialPermitDate)})]}),r.record.burialPermitIssuedBy&&e.jsxs(i,{children:[e.jsx(a,{children:"Issued By"}),e.jsx(s,{children:r.record.burialPermitIssuedBy})]}),r.record.burialPermitIssuedByContact&&e.jsxs(i,{children:[e.jsx(a,{children:"Issuer Contact"}),e.jsx(s,{children:r.record.burialPermitIssuedByContact})]}),r.record.burialPermitIssuedTo&&e.jsxs(i,{children:[e.jsx(a,{children:"Issued To"}),e.jsx(s,{children:r.record.burialPermitIssuedTo})]}),r.record.burialPermitIssuedToContact&&e.jsxs(i,{children:[e.jsx(a,{children:"Recipient Contact"}),e.jsx(s,{children:r.record.burialPermitIssuedToContact})]})]}),e.jsx(p,{children:"Burial Location & Services"}),e.jsxs(b,{children:[r.record.burialLocation&&e.jsxs(i,{children:[e.jsx(a,{children:"Burial Location"}),e.jsx(s,{children:r.record.burialLocation})]}),r.record.primaryService&&e.jsxs(i,{children:[e.jsx(a,{children:"Primary Service"}),e.jsx(s,{children:r.record.primaryService})]}),r.record.amountPaidBurial&&e.jsxs(i,{children:[e.jsx(a,{children:"Amount Payable for Burial"}),e.jsxs(s,{children:["KES ",r.record.amountPaidBurial.toLocaleString()]})]}),r.record.secondaryService&&r.record.secondaryService!=="None"&&e.jsxs(i,{children:[e.jsx(a,{children:"Secondary Service"}),e.jsx(s,{children:r.record.secondaryService})]}),r.record.amountPaidSecondary&&e.jsxs(i,{children:[e.jsx(a,{children:"Secondary Amount"}),e.jsxs(s,{children:["KES ",r.record.amountPaidSecondary.toLocaleString()]})]}),r.record.tertiaryService&&r.record.tertiaryService!=="None"&&e.jsxs(i,{children:[e.jsx(a,{children:"Other Services"}),e.jsx(s,{children:r.record.tertiaryService})]}),r.record.amountPaidTertiary&&e.jsxs(i,{children:[e.jsx(a,{children:"Other Services Amount"}),e.jsxs(s,{children:["KES ",r.record.amountPaidTertiary.toLocaleString()]})]})]}),e.jsx(p,{children:"Payment Information"}),e.jsxs(b,{children:[r.record.mpesaRefNo&&e.jsxs(i,{children:[e.jsx(a,{children:"M-Pesa Ref No"}),e.jsx(s,{children:r.record.mpesaRefNo})]}),r.record.receiptNo&&e.jsxs(i,{children:[e.jsx(a,{children:"Receipt No"}),e.jsx(s,{children:r.record.receiptNo})]})]}),e.jsx(p,{children:"Submission Information"}),e.jsxs(b,{children:[r.record.recordNumber&&e.jsxs(i,{children:[e.jsx(a,{children:"Record Number"}),e.jsx(s,{children:r.record.recordNumber})]}),r.record.applicantId&&e.jsxs(i,{children:[e.jsx(a,{children:"Applicant ID"}),e.jsx(s,{children:r.record.applicantId})]}),r.record.applicantName&&e.jsxs(i,{children:[e.jsx(a,{children:"Applicant Name"}),e.jsx(s,{children:r.record.applicantName})]}),r.record.applicantEmail&&e.jsxs(i,{children:[e.jsx(a,{children:"Applicant Email"}),e.jsx(s,{children:r.record.applicantEmail})]}),r.record.applicantPhone&&e.jsxs(i,{children:[e.jsx(a,{children:"Applicant Phone"}),e.jsx(s,{children:r.record.applicantPhone})]}),r.record.applicantIdPassport&&e.jsxs(i,{children:[e.jsx(a,{children:"Applicant ID / Passport"}),e.jsx(s,{children:r.record.applicantIdPassport})]}),r.record.createdAt&&e.jsxs(i,{children:[e.jsx(a,{children:"Submitted On"}),e.jsx(s,{children:m(r.record.createdAt)})]})]}),e.jsx(p,{children:"Attachments"}),r.record.attachments&&r.record.attachments.length>0?e.jsx(je,{children:r.record.attachments.map((t,n)=>{const d=t.path||t.url,j=t.filename||t.name||`Attachment ${n+1}`,V=(d==null?void 0:d.match(/\.(jpeg|jpg|gif|png|webp)$/i))||t.type&&t.type.startsWith("image/");return e.jsxs(fe,{onClick:()=>window.open(d,"_blank"),style:{cursor:"pointer"},children:[e.jsx(be,{children:V?e.jsx("img",{src:d,alt:"Attachment"}):e.jsx(M,{size:48,color:o.colors.primarySolid})}),e.jsxs(ye,{children:[e.jsx("div",{className:"name",title:j,children:j}),e.jsx("div",{className:"type",children:V?"Image":"Document"})]})]},n)})}):e.jsx("div",{style:{padding:"24px",textAlign:"center",color:o.colors.gray500,background:o.colors.gray50,borderRadius:o.borderRadius.md,border:`1px dashed ${o.colors.gray300}`},children:"No attachments available for this record."})]}):e.jsx("div",{style:{padding:"40px",textAlign:"center",color:o.colors.gray500},children:"Searching records..."})})]})}export{Re as default};
