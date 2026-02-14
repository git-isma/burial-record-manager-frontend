import{t as a,d as l,b as M,c as N,r as p,a as x,j as e}from"./index-DodhUEbA.js";import{C as T,B as f,b as C,c as k,d as S,a as c}from"./CommonStyles-Cgy4dfub.js";import{a as D}from"./uploadToS3-BcvU4220.js";import{M as L,G}from"./index-BhworDv5.js";const R=l.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${a.spacing.md};

  @media (min-width: 768px) {
    padding: 0;
  }

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: ${a.colors.gray900};
    margin: 0 0 ${a.spacing.lg} 0;

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 24px;
      margin-bottom: ${a.spacing.xl};
    }
  }
`,j=l(T)`
  margin-bottom: ${a.spacing.lg};

  @media (min-width: 768px) {
    margin-bottom: ${a.spacing.xl};
  }
`,H=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${a.spacing.lg};
  margin-bottom: ${a.spacing.xl};
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: ${a.spacing.xl};
    margin-bottom: ${a.spacing.xl};
    text-align: left;
  }
`,O=l.div`
  position: relative;
  width: 100px;
  height: 100px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`,W=l.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${w=>w.$hasImage?"transparent":"linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  border: 3px solid white;
  overflow: hidden;

  body.dark-theme & {
    border-color: #2d2d2d;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
    font-size: 48px;
  }
`,J=l.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #6366f1;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all ${a.transitions.fast};
  min-height: 44px;
  min-width: 44px;
  touch-action: manipulation;

  body.dark-theme & {
    background: #7c3aed;
  }

  &:hover {
    background: #4f46e5;
    transform: scale(1.1);

    body.dark-theme & {
      background: #6d28d9;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  input {
    display: none;
  }

  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
    min-height: auto;
    min-width: auto;
  }
`,K=l.div`
  flex: 1;

  h2 {
    margin: 0 0 ${a.spacing.sm} 0;
    font-size: 18px;
    font-weight: 700;
    color: ${a.colors.gray900};

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    margin: 0 0 ${a.spacing.sm} 0;
    color: ${a.colors.gray600};
    font-size: 13px;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  .role-badge {
    display: inline-block;
    margin-top: ${a.spacing.sm};
    padding: ${a.spacing.sm} ${a.spacing.md};
    background: #6366f1;
    color: white;
    border-radius: ${a.borderRadius.md};
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;

    body.dark-theme & {
      background: #7c3aed;
    }

    @media (min-width: 768px) {
      font-size: 12px;
    }
  }
`,z=l.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${a.spacing.md};
  margin-bottom: ${a.spacing.md};

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${a.spacing.lg};
    margin-bottom: ${a.spacing.lg};
  }

  body.dark-theme & {
    h1 {
      color: #e5e5e5;
    }
  }
`,I=l.div`
  display: flex;
  flex-direction: column;
  gap: ${a.spacing.sm};
  margin-top: ${a.spacing.lg};

  @media (min-width: 768px) {
    flex-direction: row;
    gap: ${a.spacing.md};
    margin-top: ${a.spacing.xl};
  }

  button {
    width: 100%;

    @media (min-width: 768px) {
      width: auto;
    }
  }
`;function Z(){var $;const w=M(),{showToast:i}=N(),[B,E]=p.useState(!0),[m,h]=p.useState(!1),[s,g]=p.useState({username:"",email:"",phone:"",bio:"",role:"",profileImage:null}),[U,y]=p.useState(!1),[d,P]=p.useState({currentPassword:"",newPassword:"",confirmPassword:""});p.useEffect(()=>{v()},[]);const v=async()=>{try{const r=await x.getProfile();g(r.data)}catch(r){console.error("Error fetching profile:",r),i("Failed to load profile","error")}finally{E(!1)}},u=r=>{g({...s,[r.target.name]:r.target.value})},b=r=>{P({...d,[r.target.name]:r.target.value})},F=async r=>{const t=r.target.files[0];if(t){if(t.size>5e6){i("Image size should be less than 5MB","error");return}if(!t.type.startsWith("image/")){i("Please upload an image file","error");return}try{y(!0);const n=await D(t,"profiles");console.log("✅ Profile image uploaded to S3:",n);const o=await x.updateProfile({profileImage:n});g(o.data.user),i("Profile image updated successfully","success")}catch(n){console.error("Error uploading image:",n),i("Failed to upload image","error")}finally{y(!1)}}},q=async r=>{var t,n;r.preventDefault();try{h(!0);const o=await x.updateProfile(s);g(o.data.user),i("Profile updated successfully","success")}catch(o){console.error("Error updating profile:",o),i(((n=(t=o.response)==null?void 0:t.data)==null?void 0:n.message)||"Failed to update profile","error")}finally{h(!1)}},A=async r=>{var t,n;if(r.preventDefault(),d.newPassword!==d.confirmPassword){i("New passwords do not match","error");return}if(d.newPassword.length<6){i("Password must be at least 6 characters","error");return}try{h(!0);const o=await x.updateProfile({currentPassword:d.currentPassword,newPassword:d.newPassword});i("Password updated successfully","success"),P({currentPassword:"",newPassword:"",confirmPassword:""})}catch(o){console.error("Error updating password:",o),i(((n=(t=o.response)==null?void 0:t.data)==null?void 0:n.message)||"Failed to update password","error")}finally{h(!1)}};return B?e.jsx("div",{children:"Loading..."}):e.jsxs(R,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px"},children:[e.jsx("h1",{style:{margin:0,fontSize:"24px",fontWeight:"600"},children:"My Profile"}),e.jsxs(f,{$variant:"secondary",onClick:()=>w(-1),children:[e.jsx(L,{size:18})," Back"]})]}),e.jsx(j,{children:e.jsxs(H,{children:[e.jsxs(O,{children:[e.jsx(W,{$hasImage:!!s.profileImage,children:s.profileImage?e.jsx("img",{src:s.profileImage,alt:s.username}):($=s.username)==null?void 0:$.charAt(0).toUpperCase()}),e.jsxs(J,{children:[e.jsx(G,{size:20}),e.jsx("input",{type:"file",accept:"image/*",onChange:F,disabled:U})]})]}),e.jsxs(K,{children:[e.jsx("h2",{children:s.username}),e.jsx("p",{children:s.email}),e.jsx("span",{className:"role-badge",children:s.role})]})]})}),e.jsxs(j,{children:[e.jsx(C,{children:e.jsx(k,{children:"Personal Information"})}),e.jsx(S,{children:e.jsxs("form",{onSubmit:q,children:[e.jsxs(z,{children:[e.jsxs(c,{children:[e.jsx("label",{children:"Username"}),e.jsx("input",{type:"text",name:"username",value:s.username,onChange:u,required:!0})]}),e.jsxs(c,{children:[e.jsx("label",{children:"Email"}),e.jsx("input",{type:"email",name:"email",value:s.email,onChange:u,required:!0})]})]}),e.jsxs(c,{children:[e.jsx("label",{children:"Phone (Optional)"}),e.jsx("input",{type:"tel",name:"phone",value:s.phone||"",onChange:u,placeholder:"+254 700 000 000"})]}),e.jsxs(c,{children:[e.jsx("label",{children:"Bio (Optional)"}),e.jsx("textarea",{name:"bio",value:s.bio||"",onChange:u,placeholder:"Tell us about yourself...",rows:"4"})]}),e.jsxs(I,{children:[e.jsx(f,{type:"submit",$variant:"primary",disabled:m,children:m?"Saving...":"Save Changes"}),e.jsx(f,{type:"button",$variant:"secondary",onClick:v,children:"Cancel"})]})]})})]}),e.jsxs(j,{children:[e.jsx(C,{children:e.jsx(k,{children:"Change Password"})}),e.jsx(S,{children:e.jsxs("form",{onSubmit:A,children:[e.jsxs(c,{children:[e.jsx("label",{children:"Current Password"}),e.jsx("input",{type:"password",name:"currentPassword",value:d.currentPassword,onChange:b,required:!0})]}),e.jsxs(z,{children:[e.jsxs(c,{children:[e.jsx("label",{children:"New Password"}),e.jsx("input",{type:"password",name:"newPassword",value:d.newPassword,onChange:b,required:!0,minLength:"6"})]}),e.jsxs(c,{children:[e.jsx("label",{children:"Confirm New Password"}),e.jsx("input",{type:"password",name:"confirmPassword",value:d.confirmPassword,onChange:b,required:!0,minLength:"6"})]})]}),e.jsx(I,{children:e.jsx(f,{type:"submit",$variant:"primary",disabled:m,children:m?"Updating...":"Update Password"})})]})})]})]})}export{Z as default};
