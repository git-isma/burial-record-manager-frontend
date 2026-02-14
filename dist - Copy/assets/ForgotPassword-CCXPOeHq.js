import{r as i,j as o,d as t,t as r,a as b,L as m}from"./index-DodhUEbA.js";import{M as h}from"./index-BhworDv5.js";const f=t.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`,y=t.div`
  background: white;
  border-radius: 16px;
  padding: 48px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  body.dark-theme & {
    background: #2d2d2d;
  }
`,k=t.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${r.colors.gray900};
  margin-bottom: 8px;

  body.dark-theme & {
    color: #e5e5e5;
  }
`,w=t.p`
  color: ${r.colors.gray600};
  margin-bottom: 32px;
  line-height: 1.6;

  body.dark-theme & {
    color: #b0b0b0;
  }
`,j=t.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,$=t.div`
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

  input {
    padding: 12px 16px;
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
`,v=t.button`
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
`,S=t(m)`
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
`,z=t.div`
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;
  background: ${e=>e.$type==="success"?"#d1fae5":"#fee2e2"};
  color: ${e=>e.$type==="success"?"#065f46":"#991b1b"};
  border: 1px solid ${e=>e.$type==="success"?"#6ee7b7":"#fca5a5"};

  body.dark-theme & {
    background: ${e=>e.$type==="success"?"rgba(16, 185, 129, 0.2)":"rgba(239, 68, 68, 0.2)"};
    color: ${e=>e.$type==="success"?"#6ee7b7":"#fca5a5"};
  }
`;function F(){const[e,l]=i.useState(""),[c,p]=i.useState(!1),[a,s]=i.useState({type:"",text:""}),u=async n=>{var x,g;n.preventDefault(),p(!0),s({type:"",text:""});try{const d=await b.forgotPassword(e);s({type:"success",text:d.data.msg}),l("")}catch(d){s({type:"error",text:((g=(x=d.response)==null?void 0:x.data)==null?void 0:g.msg)||"Failed to send reset email. Please try again."})}finally{p(!1)}};return o.jsx(f,{children:o.jsxs(y,{children:[o.jsx(k,{children:"Forgot Password?"}),o.jsx(w,{children:"Enter your email address and we'll send you a link to reset your password."}),a.text&&o.jsx(z,{$type:a.type,children:a.text}),o.jsxs(j,{onSubmit:u,children:[o.jsxs($,{children:[o.jsx("label",{children:"Email Address"}),o.jsx("input",{type:"email",value:e,onChange:n=>l(n.target.value),placeholder:"Enter your email",required:!0})]}),o.jsx(v,{type:"submit",disabled:c,children:c?"Sending...":"Send Reset Link"})]}),o.jsxs(S,{to:"/login",children:[o.jsx(h,{size:18}),"Back to Login"]})]})})}export{F as default};
