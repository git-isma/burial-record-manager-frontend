import{u as R,b as B,r as o,j as e,d as t,t as r,a as E,L}from"./index-DodhUEbA.js";import{a as w,b as j,M as q}from"./index-BhworDv5.js";const F=t.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`,T=t.div`
  background: white;
  border-radius: 16px;
  padding: 48px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  body.dark-theme & {
    background: #2d2d2d;
  }
`,A=t.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${r.colors.gray900};
  margin-bottom: 8px;

  body.dark-theme & {
    color: #e5e5e5;
  }
`,I=t.p`
  color: ${r.colors.gray600};
  margin-bottom: 32px;
  line-height: 1.6;

  body.dark-theme & {
    color: #b0b0b0;
  }
`,N=t.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,k=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    font-weight: 600;
    color: ${r.colors.gray700};

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
`,v=t.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 12px 40px 12px 16px;
    border: 2px solid ${r.colors.gray300};
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.2s;

    body.dark-theme & {
      background: #1f1f1f;
      border-color: #3d3d3d;
      color: #e5e5e5;
    }

    &:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
    }
  }
`,P=t.button`
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  color: ${r.colors.gray500};
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;

  &:hover {
    color: ${r.colors.gray700};
  }
`,V=t.button`
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,D=t(L)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  margin-top: 16px;

  &:hover {
    text-decoration: underline;
  }
`,G=t.div`
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;
  background: ${s=>s.$type==="success"?"#d1fae5":"#fee2e2"};
  color: ${s=>s.$type==="success"?"#065f46":"#991b1b"};
  border: 1px solid ${s=>s.$type==="success"?"#6ee7b7":"#fca5a5"};

  body.dark-theme & {
    background: ${s=>s.$type==="success"?"rgba(16, 185, 129, 0.2)":"rgba(239, 68, 68, 0.2)"};
    color: ${s=>s.$type==="success"?"#6ee7b7":"#fca5a5"};
  }
`,O=t.ul`
  font-size: 13px;
  color: ${r.colors.gray600};
  margin-top: 8px;
  padding-left: 20px;

  li {
    margin-bottom: 4px;
  }

  body.dark-theme & {
    color: #b0b0b0;
  }
`;function H(){const[s]=R(),$=B(),[d,u]=o.useState(""),[g,b]=o.useState(""),[l,S]=o.useState(!1),[c,z]=o.useState(!1),[h,f]=o.useState(!1),[p,a]=o.useState({type:"",text:""}),n=s.get("token");o.useEffect(()=>{n||a({type:"error",text:"Invalid or missing reset token"})},[n]);const C=()=>d.length<6?(a({type:"error",text:"Password must be at least 6 characters long"}),!1):d!==g?(a({type:"error",text:"Passwords do not match"}),!1):!0,M=async i=>{var m,y;if(i.preventDefault(),a({type:"",text:""}),!!C()){f(!0);try{const x=await E.resetPassword(n,d);a({type:"success",text:x.data.msg}),u(""),b(""),setTimeout(()=>{$("/login")},2e3)}catch(x){a({type:"error",text:((y=(m=x.response)==null?void 0:m.data)==null?void 0:y.msg)||"Failed to reset password. Please try again."})}finally{f(!1)}}};return e.jsx(F,{children:e.jsxs(T,{children:[e.jsx(A,{children:"Reset Password"}),e.jsx(I,{children:"Enter your new password below."}),p.text&&e.jsx(G,{$type:p.type,children:p.text}),e.jsxs(N,{onSubmit:M,children:[e.jsxs(k,{children:[e.jsx("label",{children:"New Password"}),e.jsxs(v,{children:[e.jsx("input",{type:l?"text":"password",value:d,onChange:i=>u(i.target.value),placeholder:"Enter new password",required:!0,disabled:!n}),e.jsx(P,{type:"button",onClick:()=>S(!l),children:l?e.jsx(w,{size:20}):e.jsx(j,{size:20})})]}),e.jsxs(O,{children:[e.jsx("li",{children:"At least 6 characters long"}),e.jsx("li",{children:"Mix of letters and numbers recommended"})]})]}),e.jsxs(k,{children:[e.jsx("label",{children:"Confirm Password"}),e.jsxs(v,{children:[e.jsx("input",{type:c?"text":"password",value:g,onChange:i=>b(i.target.value),placeholder:"Confirm new password",required:!0,disabled:!n}),e.jsx(P,{type:"button",onClick:()=>z(!c),children:c?e.jsx(w,{size:20}):e.jsx(j,{size:20})})]})]}),e.jsx(V,{type:"submit",disabled:h||!n,children:h?"Resetting...":"Reset Password"})]}),e.jsxs(D,{to:"/login",children:[e.jsx(q,{size:18}),"Back to Login"]})]})})}export{H as default};
