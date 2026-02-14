import{r as d,j as e,L as h,d as o,a as v,i as L,t as a,m as b}from"./index-DodhUEbA.js";import{i as z}from"./ISMA-logo-oeXNIxO4.js";const S=b`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,u=b`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,$=o.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  position: relative;
  overflow: hidden;

  body.dark-theme & {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: ${u} 20s ease-in-out infinite;
  }
`,E=o.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: ${S} 0.6s ease-out;
  position: relative;
  z-index: 1;
  margin: 16px;

  body.dark-theme & {
    background: #2d2d2d;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
  }

  @media (min-width: 640px) {
    padding: 32px;
    margin: 0;
  }

  @media (min-width: 768px) {
    padding: 48px;
  }
`,C=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
  text-align: left;

  .logo-image {
    width: 64px;
    height: 64px;
    margin: 0;
    background: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    animation: ${u} 3s ease-in-out infinite;
    flex-shrink: 0;

    @media (min-width: 640px) {
      width: 80px;
      height: 80px;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  h1 {
    font-size: 18px;
    font-weight: 800;
    color: #0f172a;
    margin: 0;
    line-height: 1.1;
    font-family: 'Inter', sans-serif;

    body.dark-theme & {
      color: #f8fafc;
    }

    @media (min-width: 640px) {
      font-size: 22px;
    }
  }

  p {
    color: #64748b;
    font-size: 12px;
    margin: 0;
    font-weight: 500;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    body.dark-theme & {
      color: #94a3b8;
    }

    @media (min-width: 640px) {
      font-size: 13px;
    }
  }
`,I=o.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,f=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: 500;
    color: ${a.colors.gray700};
    font-size: 14px;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }

  input {
    padding: 12px 16px;
    border: 1px solid ${a.colors.gray300};
    border-radius: 6px;
    font-size: 14px;
    transition: all ${a.transitions.fast};
    font-family: inherit;
    background: white;

    body.dark-theme & {
      background: #1f1f1f;
      border-color: #3d3d3d;
      color: #e5e5e5;
    }

    &:focus {
      outline: none;
      border-color: #6366f1;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);

      body.dark-theme & {
        border-color: #7c3aed;
      }
    }

    &::placeholder {
      color: ${a.colors.gray400};

      body.dark-theme & {
        color: #6d6d6d;
      }
    }
  }
`,F=o.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${a.transitions.base};
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

  body.dark-theme & {
    background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);

    &::before {
      left: 100%;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Y=o.div`
  background: #fee2e2;
  color: #dc2626;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 14px;
  border: 1px solid #fecaca;
`,q=o.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  font-size: 12px;
  gap: 8px;
  flex-wrap: wrap;

  @media (min-width: 640px) {
    font-size: 13px;
  }

  a {
    color: ${a.colors.gray600};
    text-decoration: none;
    flex: 1;
    min-width: 120px;
    text-align: center;
    
    &:hover {
      color: #6366f1;
      text-decoration: underline;
    }
  }
`,D=o.div`
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  border-radius: 6px;
  padding: 12px;
  margin-top: 24px;
  font-size: 12px;
  color: #0369a1;

  body.dark-theme & {
    background: #1e3a5f;
    border-color: #2d5a8f;
    color: #7dd3fc;
  }

  strong {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
  }

  p {
    margin: 2px 0;
  }
`;function B({onLogin:w}){const[t,y]=d.useState({email:"",password:""}),[s,l]=d.useState(""),[p,c]=d.useState(!1),x=r=>{y({...t,[r.target.name]:r.target.value})},j=async r=>{var g,m;r.preventDefault(),l(""),c(!0);try{const n=await v.login(t),{token:i,user:k}=n.data;localStorage.setItem("token",i),L.defaults.headers.common["x-auth-token"]=i,window.dispatchEvent(new Event("userLoggedIn")),w(k,i)}catch(n){l(((m=(g=n.response)==null?void 0:g.data)==null?void 0:m.msg)||"Login failed. Please try again.")}finally{c(!1)}};return e.jsx($,{children:e.jsxs(E,{children:[e.jsxs(C,{children:[e.jsx("div",{className:"logo-image",children:e.jsx("img",{src:z,alt:"Islamia School & Mosque Association Logo",style:{width:"100%",height:"100%",objectFit:"contain"}})}),e.jsxs("div",{className:"text-container",children:[e.jsxs("h1",{children:["Islamia School &",e.jsx("br",{}),"Mosque Association"]}),e.jsx("p",{children:"Burial Legacy Application"})]})]}),s&&e.jsx(Y,{children:s}),e.jsxs(I,{onSubmit:j,children:[e.jsxs(f,{children:[e.jsx("label",{children:"Username or Email"}),e.jsx("input",{type:"email",name:"email",placeholder:"john.doe@example.com",value:t.email,onChange:x,required:!0})]}),e.jsxs(f,{children:[e.jsx("label",{children:"Password"}),e.jsx("input",{type:"password",name:"password",placeholder:"••••••••",value:t.password,onChange:x,required:!0})]}),e.jsx(F,{type:"submit",disabled:p,children:p?"Logging in...":"Login"})]}),e.jsxs(q,{children:[e.jsx(h,{to:"/forgot-password",children:"Forgot Password?"}),e.jsx(h,{to:"/support",children:"Support Contact"})]}),e.jsxs(D,{children:[e.jsx("strong",{children:"Default Credentials"}),e.jsx("p",{children:"Email: admin@burial-permit.com"}),e.jsx("p",{children:"Password: admin123"})]})]})})}export{B as default};
