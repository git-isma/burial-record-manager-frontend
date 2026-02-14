import{b as Y,c as S,e as $,j as e,t as i,d as l,a as C}from"./index-DodhUEbA.js";import{B as j,b as h,c as x,d as p,C as N}from"./CommonStyles-Cgy4dfub.js";import{M}from"./index-BhworDv5.js";import{r as z}from"./pushNotifications-Dep1bbV6.js";const v=l.div`
  max-width: 800px;
  padding: 0 ${i.spacing.md};

  @media (min-width: 768px) {
    padding: 0;
  }

  h1 {
    body.dark-theme & {
      color: #e5e5e5;
    }
  }
`,m=l(N)`
  margin-bottom: ${i.spacing.lg};

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,a=l.div`
  display: flex;
  flex-direction: column;
  gap: ${i.spacing.md};
  justify-content: space-between;
  align-items: flex-start;
  padding: ${i.spacing.md} 0;
  border-bottom: 1px solid ${i.colors.gray200};
  min-height: auto;

  &:last-child {
    border-bottom: none;
  }

  body.dark-theme & {
    border-bottom-color: #404040;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 16px 0;
    min-height: 60px;
  }

  .setting-info {
    flex: 1;
    width: 100%;

    h4 {
      margin: 0 0 4px 0;
      font-size: 13px;
      font-weight: 600;
      color: ${i.colors.gray900};

      body.dark-theme & {
        color: #e5e5e5;
      }

      @media (min-width: 768px) {
        font-size: 14px;
      }
    }

    p {
      margin: 0;
      font-size: 12px;
      color: ${i.colors.gray600};
      word-break: break-word;

      body.dark-theme & {
        color: #a0a0a0;
      }

      @media (min-width: 768px) {
        font-size: 13px;
      }
    }
  }
`,f=l.button`
  width: 44px;
  height: 24px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  background: ${o=>o.$active?i.colors.primary:i.colors.gray300};
  flex-shrink: 0;
  min-height: 44px;
  min-width: 44px;
  touch-action: manipulation;

  &::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: white;
    top: 3px;
    left: ${o=>o.$active?"23px":"3px"};
    transition: all 0.3s;
  }

  @media (min-width: 768px) {
    width: 48px;
    height: 26px;
    border-radius: 13px;
    min-height: auto;
    min-width: auto;

    &::after {
      width: 20px;
      height: 20px;
      left: ${o=>o.$active?"25px":"3px"};
    }
  }
`,w=l.select`
  padding: 10px 12px;
  border: 1px solid ${i.colors.gray300};
  border-radius: 6px;
  font-size: 13px;
  color: ${i.colors.gray900};
  background: white;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 120px;
  min-height: 44px;
  touch-action: manipulation;

  &:focus {
    outline: none;
    border-color: ${i.colors.primary};
    box-shadow: 0 0 0 3px ${i.colors.primary}20;
  }

  body.dark-theme & {
    background: #2d2d2d;
    color: #e5e5e5;
    border-color: #404040;

    option {
      background: #2d2d2d;
      color: #e5e5e5;
    }
  }

  @media (min-width: 768px) {
    font-size: 14px;
    min-height: auto;
  }
`;function R(){const o=Y(),{showToast:s}=S(),{settings:n,updateSettings:b,loading:k}=$(),g=async t=>{try{if(t==="pushNotifications"&&!n[t]&&!await z()){s("Push notification permission denied. Please enable it in your browser settings.","error");return}const r={...n,[t]:!n[t]},d=await b(r);s(d.message||"Setting updated successfully","success")}catch{s("Failed to update setting","error")}},y=async(t,r)=>{try{const d={...n,[t]:r},c=await b(d);s(c.message||"Setting updated successfully","success")}catch{s("Failed to update setting","error")}},D=async()=>{try{s("Preparing data export...","info");const t=await C.exportData(),r=JSON.stringify(t.data,null,2),d=new Blob([r],{type:"application/json"}),c=URL.createObjectURL(d),u=document.createElement("a");u.href=c,u.download=`burial-record-data-${new Date().toISOString().split("T")[0]}.json`,u.click(),URL.revokeObjectURL(c),s("Data exported successfully","success")}catch(t){console.error("Error exporting data:",t),s("Failed to export data","error")}};return k?e.jsx(v,{children:e.jsx("div",{style:{textAlign:"center",padding:"40px"},children:"Loading settings..."})}):e.jsxs(v,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px"},children:[e.jsx("h1",{style:{margin:0,fontSize:"24px",fontWeight:"600"},children:"Settings"}),e.jsxs(j,{$variant:"secondary",onClick:()=>o(-1),children:[e.jsx(M,{size:18})," Back"]})]}),e.jsxs(m,{children:[e.jsx(h,{children:e.jsx(x,{children:"Notifications"})}),e.jsxs(p,{children:[e.jsxs(a,{children:[e.jsxs("div",{className:"setting-info",children:[e.jsx("h4",{children:"Email Notifications"}),e.jsx("p",{children:"Receive email notifications for important updates"})]}),e.jsx(f,{$active:n.emailNotifications,onClick:()=>g("emailNotifications")})]}),e.jsxs(a,{children:[e.jsxs("div",{className:"setting-info",children:[e.jsx("h4",{children:"Push Notifications"}),e.jsx("p",{children:"Receive push notifications in your browser"})]}),e.jsx(f,{$active:n.pushNotifications,onClick:()=>g("pushNotifications")})]})]})]}),e.jsxs(m,{children:[e.jsx(h,{children:e.jsx(x,{children:"Preferences"})}),e.jsxs(p,{children:[e.jsxs(a,{children:[e.jsxs("div",{className:"setting-info",children:[e.jsx("h4",{children:"Auto Save"}),e.jsx("p",{children:"Automatically save form data as you type"})]}),e.jsx(f,{$active:n.autoSave,onClick:()=>g("autoSave")})]}),e.jsxs(a,{children:[e.jsxs("div",{className:"setting-info",children:[e.jsx("h4",{children:"Theme"}),e.jsx("p",{children:"Choose your preferred theme"})]}),e.jsxs(w,{value:n.theme,onChange:t=>y("theme",t.target.value),children:[e.jsx("option",{value:"light",children:"Light"}),e.jsx("option",{value:"dark",children:"Dark"}),e.jsx("option",{value:"auto",children:"Auto"})]})]}),e.jsxs(a,{children:[e.jsxs("div",{className:"setting-info",children:[e.jsx("h4",{children:"Date Format"}),e.jsx("p",{children:"Choose how dates are displayed"})]}),e.jsxs(w,{value:n.dateFormat,onChange:t=>y("dateFormat",t.target.value),children:[e.jsx("option",{value:"DD/MM/YYYY",children:"DD/MM/YYYY"}),e.jsx("option",{value:"MM/DD/YYYY",children:"MM/DD/YYYY"}),e.jsx("option",{value:"YYYY-MM-DD",children:"YYYY-MM-DD"})]})]})]})]}),e.jsxs(m,{children:[e.jsx(h,{children:e.jsx(x,{children:"Data & Storage"})}),e.jsx(p,{children:e.jsxs(a,{children:[e.jsxs("div",{className:"setting-info",children:[e.jsx("h4",{children:"Export Data"}),e.jsx("p",{children:"Download all your data as a backup"})]}),e.jsx(j,{onClick:D,children:"Export"})]})})]}),e.jsxs(m,{children:[e.jsx(h,{children:e.jsx(x,{children:"Danger Zone"})}),e.jsx(p,{children:e.jsxs(a,{children:[e.jsxs("div",{className:"setting-info",children:[e.jsx("h4",{children:"Delete Account"}),e.jsx("p",{children:"Permanently delete your account and all data"})]}),e.jsx(j,{className:"danger",onClick:()=>s("Contact admin to delete account","error"),children:"Delete Account"})]})})]})]})}export{R as default};
