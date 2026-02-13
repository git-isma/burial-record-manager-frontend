import{r as s,b as z,j as o,d as n,t,e as u,a as M,N as x,O as C}from"./index-DodhUEbA.js";import{q as L,H as j,c as S,I as $,J as E,K as I,l as O,v as T,w as R,h as A,k as Y,L as H,N as P}from"./index-BhworDv5.js";import{s as B}from"./pushNotifications-Dep1bbV6.js";import{i as v}from"./ISMA-logo-oeXNIxO4.js";const D=n.div`
  position: relative;
`,U=n.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${e=>e.$hasImage?"transparent":t.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s;
  overflow: hidden;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border-color: ${t.colors.primaryHover};
    transform: scale(1.05);
  }
`,V=n.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  min-width: 220px;
  z-index: 1000;
  opacity: ${e=>e.$isOpen?1:0};
  visibility: ${e=>e.$isOpen?"visible":"hidden"};
  transform: ${e=>e.$isOpen?"translateY(0)":"translateY(-10px)"};
  transition: all 0.2s;

  body.dark-theme & {
    background: #2d2d2d;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  }
`,F=n.div`
  padding: 16px;
  border-bottom: 1px solid ${t.colors.gray200};

  body.dark-theme & {
    border-bottom-color: #3d3d3d;
  }

  .name {
    font-weight: 600;
    color: ${t.colors.gray900};
    margin-bottom: 4px;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }

  .email {
    font-size: 13px;
    color: ${t.colors.gray600};

    body.dark-theme & {
      color: #b0b0b0;
    }
  }

  .role {
    display: inline-block;
    margin-top: 8px;
    padding: 4px 8px;
    background: ${t.colors.primary}20;
    color: ${t.colors.primary};
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;

    body.dark-theme & {
      background: #7c3aed40;
      color: #a78bfa;
    }
  }
`,b=n.button`
  width: 100%;
  padding: 12px 16px;
  text-align: left;
  background: none;
  border: none;
  color: ${t.colors.gray700};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 10px;

  body.dark-theme & {
    color: #e5e5e5;
  }

  &:hover {
    background: ${t.colors.gray50};
    color: ${t.colors.gray900};

    body.dark-theme & {
      background: #353535;
      color: #e5e5e5;
    }
  }

  &.danger {
    color: ${t.colors.danger};

    &:hover {
      background: ${t.colors.danger}10;

      body.dark-theme & {
        background: #7f1d1d;
      }
    }
  }
`,q=n.div`
  height: 1px;
  background: ${t.colors.gray200};
  margin: 4px 0;

  body.dark-theme & {
    background: #3d3d3d;
  }
`;function _({user:e,onLogout:d}){var m;const[r,l]=s.useState(!1),a=s.useRef(null),p=z();s.useEffect(()=>{const c=g=>{a.current&&!a.current.contains(g.target)&&l(!1)};return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[]);const h=c=>{l(!1),c&&p(c)};return o.jsxs(D,{ref:a,children:[o.jsx(U,{onClick:()=>l(!r),title:e==null?void 0:e.username,$hasImage:!!(e!=null&&e.profileImage),children:e!=null&&e.profileImage?o.jsx("img",{src:e.profileImage,alt:e.username}):(m=e==null?void 0:e.username)==null?void 0:m.charAt(0).toUpperCase()}),o.jsxs(V,{$isOpen:r,children:[o.jsxs(F,{children:[o.jsx("div",{className:"name",children:e==null?void 0:e.username}),o.jsx("div",{className:"email",children:e==null?void 0:e.email}),o.jsx("span",{className:"role",children:e==null?void 0:e.role})]}),o.jsxs("div",{style:{padding:"4px 0"},children:[o.jsxs(b,{onClick:()=>h("/profile"),children:[o.jsx(L,{size:18}),o.jsx("span",{children:"My Profile"})]}),o.jsxs(b,{onClick:()=>h("/settings"),children:[o.jsx(j,{size:18}),o.jsx("span",{children:"Settings"})]}),o.jsxs(b,{onClick:()=>h("/help"),children:[o.jsx(S,{size:18}),o.jsx("span",{children:"Help & Support"})]}),o.jsx(q,{}),o.jsxs(b,{className:"danger",onClick:()=>{l(!1),d()},children:[o.jsx($,{size:18}),o.jsx("span",{children:"Logout"})]})]})]})]})}const G=n.div`
  position: relative;
`,J=n.button`
  position: relative;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: ${t.colors.gray600};
  font-size: 20px;
  border-radius: 8px;
  transition: all 0.2s;

  body.dark-theme & {
    color: #b0b0b0;
  }

  &:hover {
    background: ${t.colors.gray100};
    color: ${t.colors.gray900};

    body.dark-theme & {
      background: #3d3d3d;
      color: #e5e5e5;
    }
  }

  .badge {
    position: absolute;
    top: 6px;
    right: 6px;
    min-width: 18px;
    height: 18px;
    background: ${t.colors.danger};
    border-radius: 50%;
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 700;
    color: white;
    padding: 0 4px;
    animation: pulse 2s ease-in-out infinite;

    body.dark-theme & {
      border-color: #1f1f1f;
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }
  }
`,K=n.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  width: 360px;
  max-width: 90vw;
  z-index: 1000;
  opacity: ${e=>e.$isOpen?1:0};
  visibility: ${e=>e.$isOpen?"visible":"hidden"};
  transform: ${e=>e.$isOpen?"translateY(0)":"translateY(-10px)"};
  transition: all 0.2s;

  body.dark-theme & {
    background: #2d2d2d;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  }
`,Q=n.div`
  padding: 16px;
  border-bottom: 1px solid ${t.colors.gray200};
  display: flex;
  justify-content: space-between;
  align-items: center;

  body.dark-theme & {
    border-bottom-color: #3d3d3d;
  }

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: ${t.colors.gray900};

    body.dark-theme & {
      color: #e5e5e5;
    }
  }

  button {
    background: none;
    border: none;
    color: ${t.colors.primary};
    font-size: 13px;
    cursor: pointer;
    padding: 4px 8px;

    body.dark-theme & {
      color: #a78bfa;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`,W=n.div`
  max-height: 400px;
  overflow-y: auto;
`,X=n.div`
  padding: 12px 16px;
  border-bottom: 1px solid ${t.colors.gray100};
  cursor: pointer;
  transition: background 0.2s;
  background: ${e=>e.$unread?t.colors.primary+"05":"white"};

  body.dark-theme & {
    background: ${e=>e.$unread?"#7c3aed20":"#2d2d2d"};
    border-bottom-color: #3d3d3d;
  }

  &:hover {
    background: ${t.colors.gray50};

    body.dark-theme & {
      background: #353535;
    }
  }

  &:last-child {
    border-bottom: none;
  }

  .notification-header {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 4px;
  }

  .icon {
    font-size: 20px;
    flex-shrink: 0;
  }

  .content {
    flex: 1;
  }

  .title {
    font-weight: 500;
    color: ${t.colors.gray900};
    font-size: 14px;
    margin-bottom: 4px;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }

  .message {
    color: ${t.colors.gray600};
    font-size: 13px;
    line-height: 1.4;

    body.dark-theme & {
      color: #b0b0b0;
    }
  }

  .time {
    color: ${t.colors.gray500};
    font-size: 12px;
    margin-top: 4px;

    body.dark-theme & {
      color: #a0a0a0;
    }
  }
`,Z=n.div`
  padding: 40px 20px;
  text-align: center;
  color: ${t.colors.gray500};

  body.dark-theme & {
    color: #a0a0a0;
  }

  .icon {
    font-size: 48px;
    margin-bottom: 12px;
  }

  .text {
    font-size: 14px;
  }
`;function oo(){const[e,d]=s.useState(!1),[r,l]=s.useState([]),[a,p]=s.useState(0),[h,m]=s.useState(!1),c=s.useRef(null),{settings:g}=u(),f=s.useRef(0);s.useEffect(()=>{const i=y=>{c.current&&!c.current.contains(y.target)&&d(!1)};return document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i)},[]),s.useEffect(()=>{if(g.pushNotifications&&a>f.current&&f.current>0){const i=r.find(y=>y.unread);i&&B(i.title,{body:i.message,icon:i.icon||"🔔"})}f.current=a},[a,g.pushNotifications,r]);const N=async()=>{try{await M.markAllNotificationsRead(),l([]),p(0)}catch(i){console.error("Error marking notifications as read:",i)}},k=a>0;return o.jsxs(G,{ref:c,children:[o.jsxs(J,{onClick:()=>d(!e),title:"Notifications",children:[o.jsx(E,{size:22}),k&&o.jsx("span",{className:"badge",children:a>9?"9+":a})]}),o.jsxs(K,{$isOpen:e,children:[o.jsxs(Q,{children:[o.jsx("h3",{children:"Notifications"}),k&&o.jsx("button",{onClick:N,children:"Mark all as read"})]}),o.jsx(W,{children:r.length>0?r.map(i=>o.jsx(X,{$unread:i.unread,onClick:()=>d(!1),children:o.jsxs("div",{className:"notification-header",children:[o.jsx("span",{className:"icon",children:i.icon}),o.jsxs("div",{className:"content",children:[o.jsx("div",{className:"title",children:i.title}),o.jsx("div",{className:"message",children:i.message}),o.jsx("div",{className:"time",children:i.time})]})]})},i.id)):o.jsxs(Z,{children:[o.jsx("div",{className:"icon",children:"🔔"}),o.jsx("div",{className:"text",children:"No notifications"})]})})]})]})}const eo=n.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${e=>e.theme.mode==="dark"?"#4a9eff":"#2563eb"};
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  opacity: ${e=>e.$visible?"1":"0"};
  visibility: ${e=>e.$visible?"visible":"hidden"};
  transform: ${e=>e.$visible?"translateY(0)":"translateY(20px)"};
  z-index: 1000;

  &:hover {
    background: ${e=>e.theme.mode==="dark"?"#3b8ae6":"#1d4ed8"};
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media print {
    display: none;
  }
`,to=()=>{const[e,d]=s.useState(!1),{theme:r}=u();s.useEffect(()=>{const a=()=>{const p=document.documentElement.scrollTop;d(p>300)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o.jsx(eo,{onClick:l,$visible:e,theme:r,"aria-label":"Scroll to top",children:"↑"})},no=n.div`
  display: flex;
  min-height: 100vh;
  background: ${t.colors.gray50};
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  body.dark-theme & {
    background: #1a1a1a;
  }
`,io=n.aside`
  width: 100%;
  height: auto;
  background: white;
  color: ${t.colors.gray900};
  position: relative;
  border-bottom: 1px solid ${t.colors.gray200};
  z-index: 100;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  
  body.dark-theme & {
    background: #1f1f1f;
    border-bottom-color: #404040;
  }

  @media (min-width: 768px) {
    width: 240px;
    height: 100vh;
    position: fixed;
    border-right: 1px solid ${t.colors.gray200};
    border-bottom: none;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;

    body.dark-theme & {
      border-right-color: #404040;
      border-bottom-color: transparent;
    }
  }
  
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${t.colors.gray300};
    border-radius: 3px;
    
    &:hover {
      background: ${t.colors.gray400};
    }

    body.dark-theme & {
      background: #555;

      &:hover {
        background: #666;
      }
    }
  }

  @media print {
    display: none !important;
  }
`,ao=n.div`
  padding: 16px 20px;
  border-right: 1px solid ${t.colors.gray200};
  display: none;

  body.dark-theme & {
    border-right-color: #404040;
  }

  @media (min-width: 768px) {
    display: block;
    padding: 24px 16px;
    border-right: none;
    border-bottom: 1px solid ${t.colors.gray200};

    .logo-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 16px;
      
      img {
        width: 100px;
        height: 100px;
        object-fit: contain;
        background: white;
        border-radius: 12px;
        padding: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      }

      .brand-text {
        display: flex;
        flex-direction: column;
        gap: 4px;

        h2 {
          font-size: 16px;
          font-weight: 900;
          color: #6366f1; /* Vibrant blue/purple */
          margin: 0;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-family: 'Inter', system-ui, sans-serif;
        }

        p {
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          margin: 0;
          letter-spacing: 0.05em;
          text-transform: uppercase;

          body.dark-theme & {
            color: #94a3b8;
          }
        }
      }
    }
  }
`,ro=n.div`
  padding: 8px 8px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  overflow-x: auto;
  flex: 1;

  @media (min-width: 768px) {
    padding: 16px 12px;
    flex-direction: column;
    gap: 2px;
    overflow-x: visible;
    flex: none;
  }

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${t.colors.gray300};
    border-radius: 2px;
  }
`,w=n.nav`
  display: flex;
  flex-direction: row;
  gap: 4px;
  min-width: min-content;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 2px;
    min-width: auto;
  }

  a {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    color: ${t.colors.gray700};
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    font-family: ${t.fonts.body};
    border-radius: 6px;
    transition: all ${t.transitions.fast};
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    flex-shrink: 0;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 768px) {
      font-size: 14px;
      white-space: normal;
      flex-shrink: 1;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 3px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      transform: scaleY(0);
      transition: transform ${t.transitions.base};
      border-radius: 0 3px 3px 0;

      @media (max-width: 767px) {
        width: 100%;
        height: 3px;
        top: auto;
        bottom: 0;
      }
    }

    .nav-icon {
      font-size: 18px;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform ${t.transitions.base};
      flex-shrink: 0;
    }

    .nav-text {
      flex: 1;
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }

    &:hover {
      background: ${t.colors.gray100};
      color: ${t.colors.gray900};

      @media (min-width: 768px) {
        padding-left: 16px;
      }

      body.dark-theme & {
        background: #2d2d2d;
        color: #e5e5e5;
      }

      .nav-icon {
        transform: scale(1.1);
      }
    }

    &.active {
      background: linear-gradient(90deg, rgba(102, 126, 234, 0.1) 0%, transparent 100%);
      color: #667eea;
      font-weight: 600;

      body.dark-theme & {
        background: linear-gradient(90deg, rgba(124, 58, 237, 0.2) 0%, transparent 100%);
        color: #a78bfa;
      }

      &::before {
        transform: scaleY(1);
      }
    }
  }
`,so=n.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  color: #dc2626;
  background: none;
  border: none;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  font-family: ${t.fonts.body};
  border-radius: 6px;
  transition: all ${t.transitions.fast};
  cursor: pointer;
  width: 100%;
  text-align: left;

  body.dark-theme & {
    color: #f87171;
  }

  .nav-icon {
    font-size: 18px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform ${t.transitions.base};
  }

  .nav-text {
    flex: 1;
  }

  &:hover {
    background: #fee2e2;
    color: #b91c1c;
    padding-left: 16px;

    body.dark-theme & {
      background: rgba(220, 38, 38, 0.2);
      color: #fca5a5;
    }

    .nav-icon {
      transform: scale(1.1);
    }
  }
`,lo=n.div`
  margin-top: auto;
  width: auto;
  padding: 8px;
  border-left: 1px solid ${t.colors.gray200};
  background: white;
  display: flex;
  flex-direction: row;
  gap: 4px;

  body.dark-theme & {
    background: #1f1f1f;
    border-left-color: #404040;
  }

  @media (min-width: 768px) {
    width: 100%;
    padding: 12px;
    border-left: none;
    border-top: 1px solid ${t.colors.gray200};
    flex-direction: column;
    gap: 2px;

    body.dark-theme & {
      border-left-color: transparent;
      border-top-color: #404040;
    }
  }
`,co=n.main`
  margin-left: 0;
  margin-top: 0;
  flex: 1;
  min-height: auto;
  background: #fafafa;
  width: 100%;

  body.dark-theme & {
    background: #1a1a1a;
  }

  @media (min-width: 768px) {
    margin-left: 240px;
    margin-top: 0;
    min-height: 100vh;
  }

  @media print {
    margin-left: 0 !important;
    margin-top: 0 !important;
    width: 100% !important;
  }
`,po=n.div`
  background: white;
  padding: 12px 16px;
  border-bottom: 1px solid ${t.colors.gray200};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 50;
  gap: 12px;

  body.dark-theme & {
    background: #1f1f1f;
    border-bottom-color: #404040;
  }

  @media (min-width: 768px) {
    padding: 16px 32px;
    gap: 16px;
  }

  @media print {
    display: none !important;
  }

  .mobile-only-logo {
    @media (min-width: 768px) {
      display: none !important;
    }
  }
`,xo=n.h1`
  font-size: 16px;
  font-weight: 700;
  color: ${t.colors.gray900};
  margin: 0;
  font-family: ${t.fonts.body};
  flex: 1;
  min-width: 0;

  body.dark-theme & {
    color: #e5e5e5;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,ho=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    gap: 16px;
  }
`,mo=n.div`
  padding: 16px;

  @media (min-width: 640px) {
    padding: 24px;
  }

  @media (min-width: 768px) {
    padding: 32px;
  }

  @media print {
    padding: 0 !important;
  }
`,go=n.button`
  position: relative;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: ${t.colors.gray600};
  font-size: 20px;
  border-radius: 8px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  body.dark-theme & {
    color: #b0b0b0;
  }

  &:hover {
    background: ${t.colors.gray100};
    color: ${t.colors.gray900};

    body.dark-theme & {
      background: #3d3d3d;
      color: #e5e5e5;
    }
  }
`;function ko({user:e,onLogout:d}){const{settings:r,updateSettings:l}=u(),a=()=>{const m=r.theme==="dark"?"light":"dark";l({...r,theme:m})},p=()=>r.theme==="dark"?o.jsx(H,{size:22}):o.jsx(P,{size:22}),h=()=>r.theme==="dark"?"Theme: Dark":"Theme: Light";return o.jsxs(no,{children:[o.jsxs(io,{children:[o.jsx(ao,{children:o.jsxs("div",{className:"logo-container",children:[o.jsx("img",{src:v,alt:"Logo"}),o.jsxs("div",{className:"brand-text",children:[o.jsx("h2",{children:"Islamia School & Mosque Association"}),o.jsx("p",{children:"BURIAL LEGACY APPLICATION"})]})]})}),o.jsx(ro,{children:o.jsxs(w,{children:[((e==null?void 0:e.role)==="admin"||(e==null?void 0:e.role)==="viewer")&&o.jsxs(x,{to:"/",end:!0,children:[o.jsx("span",{className:"nav-icon",children:o.jsx(I,{})}),o.jsx("span",{className:"nav-text",children:"Dashboard"})]}),((e==null?void 0:e.role)==="admin"||(e==null?void 0:e.role)==="data_entry")&&o.jsxs(x,{to:"/data-capture",children:[o.jsx("span",{className:"nav-icon",children:o.jsx(O,{})}),o.jsx("span",{className:"nav-text",children:"New Record"})]}),o.jsxs(x,{to:"/records",children:[o.jsx("span",{className:"nav-icon",children:o.jsx(T,{})}),o.jsx("span",{className:"nav-text",children:"Records"})]}),((e==null?void 0:e.role)==="admin"||(e==null?void 0:e.role)==="data_entry")&&o.jsxs(x,{to:"/verify-records",children:[o.jsx("span",{className:"nav-icon",children:o.jsx(R,{})}),o.jsx("span",{className:"nav-text",children:"Verify Public Records"})]}),((e==null?void 0:e.role)==="admin"||(e==null?void 0:e.role)==="viewer")&&o.jsxs(x,{to:"/reports",children:[o.jsx("span",{className:"nav-icon",children:o.jsx(A,{})}),o.jsx("span",{className:"nav-text",children:"Reports"})]}),(e==null?void 0:e.role)==="admin"&&o.jsxs(x,{to:"/users",children:[o.jsx("span",{className:"nav-icon",children:o.jsx(Y,{})}),o.jsx("span",{className:"nav-text",children:"Users"})]})]})}),o.jsx(lo,{children:o.jsxs(w,{children:[o.jsxs(x,{to:"/settings",children:[o.jsx("span",{className:"nav-icon",children:o.jsx(j,{})}),o.jsx("span",{className:"nav-text",children:"Settings"})]}),o.jsxs(so,{onClick:d,children:[o.jsx("span",{className:"nav-icon",children:o.jsx($,{})}),o.jsx("span",{className:"nav-text",children:"Logout"})]})]})})]}),o.jsxs(co,{children:[o.jsxs(po,{children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[o.jsx("img",{src:v,alt:"Logo",style:{width:"48px",height:"48px",objectFit:"contain"},className:"mobile-only-logo"}),o.jsx(xo,{children:"Burial Legacy Application - Data Capture & Management"})]}),o.jsxs(ho,{children:[o.jsx(go,{onClick:a,title:h(),children:p()}),o.jsx(oo,{}),o.jsx(_,{user:e,onLogout:d})]})]}),o.jsx(mo,{children:o.jsx(C,{})}),o.jsx(to,{})]})]})}export{ko as default};
