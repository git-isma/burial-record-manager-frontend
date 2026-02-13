import{j as o,t as r,d as i,m as p}from"./index-DodhUEbA.js";import{B as g}from"./CommonStyles-Cgy4dfub.js";import{g as h,l as u}from"./index-BhworDv5.js";const $=p`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,y=p`
  from {
    transform: translateY(40px) scale(0.9);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`,w=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${r.zIndex.modalBackdrop};
  animation: ${$} ${r.transitions.base};
  padding: ${r.spacing.md};

  @media (min-width: 768px) {
    padding: ${r.spacing.lg};
  }
`,k=i.div`
  background: ${r.colors.bgCard};
  border-radius: ${r.borderRadius.lg} ${r.borderRadius.lg} 0 0;
  padding: 0;
  max-width: ${e=>e.$maxWidth||"520px"};
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  box-shadow: ${r.shadows["2xl"]};
  animation: ${y} ${r.transitions.slow};
  display: flex;
  flex-direction: column;
  border: 1px solid ${r.colors.gray200};

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #3d3d3d;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
  }

  @media (min-width: 768px) {
    border-radius: ${r.borderRadius["2xl"]};
  }
`,j=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${r.spacing.lg} ${r.spacing.xl};
  border-bottom: 1px solid ${r.colors.gray200};
  background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
  gap: ${r.spacing.md};

  body.dark-theme & {
    background: #1f1f1f;
    border-bottom-color: #3d3d3d;
  }

  @media (min-width: 768px) {
    padding: ${r.spacing.xl} ${r.spacing["2xl"]};
  }

  h2 {
    margin: 0;
    font-size: ${r.fontSizes.lg};
    font-weight: 700;
    color: ${r.colors.textPrimary};
    display: flex;
    align-items: center;
    gap: ${r.spacing.md};
    flex: 1;
    min-width: 0;

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: ${r.fontSizes["2xl"]};
    }
  }
`,v=i.button`
  background: ${r.colors.gray100};
  border: none;
  width: 36px;
  height: 36px;
  border-radius: ${r.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${r.colors.gray600};
  cursor: pointer;
  transition: all ${r.transitions.base};
  flex-shrink: 0;

  body.dark-theme & {
    background: #3d3d3d;
    color: #b0b0b0;
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 24px;
  }

  &:hover {
    background: ${r.colors.danger};
    color: white;
    transform: rotate(90deg) scale(1.1);
    box-shadow: ${r.shadows.lg};
  }
`,z=i.div`
  padding: ${r.spacing.lg} ${r.spacing.xl};
  overflow-y: auto;
  flex: 1;

  body.dark-theme & {
    color: #e5e5e5;
  }

  @media (min-width: 768px) {
    padding: ${r.spacing["2xl"]};
  }
`,C=i.div`
  display: flex;
  justify-content: flex-end;
  gap: ${r.spacing.sm};
  padding: ${r.spacing.lg} ${r.spacing.xl};
  border-top: 1px solid ${r.colors.gray200};
  background: ${r.colors.gray50};
  flex-wrap: wrap;

  body.dark-theme & {
    background: #1f1f1f;
    border-top-color: #3d3d3d;
  }

  @media (min-width: 768px) {
    gap: ${r.spacing.md};
    padding: ${r.spacing.xl} ${r.spacing["2xl"]};
  }

  button {
    flex: 1;
    min-width: 100px;

    @media (min-width: 768px) {
      flex: auto;
    }
  }
`,f=({isOpen:e,onClose:a,title:s,children:l,maxWidth:c,footer:n,icon:d})=>e?o.jsx(w,{onClick:a,children:o.jsxs(k,{$maxWidth:c,onClick:t=>t.stopPropagation(),children:[o.jsxs(j,{children:[o.jsxs("h2",{children:[d&&o.jsx("span",{children:d}),s]}),o.jsx(v,{onClick:a,children:"×"})]}),o.jsx(z,{children:l}),n&&o.jsx(C,{children:n})]})}):null,M=p`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`,S=i.div`
  width: 64px;
  height: 64px;
  border-radius: ${r.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin: 0 auto ${r.spacing.lg};
  animation: ${M} 2s ease-in-out infinite;
  background: ${e=>e.$variant==="danger"?"linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)":e.$variant==="success"?"linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)":e.$variant==="warning"?"linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)":"linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)"};
  color: ${e=>e.$variant==="danger"?r.colors.danger:e.$variant==="success"?r.colors.success:e.$variant==="warning"?r.colors.warning:r.colors.info};
  box-shadow: ${e=>e.$variant==="danger"?"0 10px 30px rgba(239, 68, 68, 0.3)":e.$variant==="success"?"0 10px 30px rgba(16, 185, 129, 0.3)":e.$variant==="warning"?"0 10px 30px rgba(245, 158, 11, 0.3)":"0 10px 30px rgba(6, 182, 212, 0.3)"};

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 40px;
    margin: 0 auto ${r.spacing.xl};
  }
`,I=i.p`
  margin: 0;
  color: ${r.colors.textSecondary};
  text-align: center;
  font-size: ${r.fontSizes.base};
  line-height: 1.7;
  font-weight: 500;

  body.dark-theme & {
    color: #b0b0b0;
  }

  @media (min-width: 768px) {
    font-size: ${r.fontSizes.lg};
  }
`,E=({isOpen:e,onClose:a,onConfirm:s,title:l,message:c,confirmText:n="Confirm",cancelText:d="Cancel",variant:t="danger",icon:x=o.jsx(h,{size:32})})=>o.jsx(f,{isOpen:e,onClose:a,title:l,maxWidth:"480px",footer:o.jsxs(o.Fragment,{children:[o.jsx(g,{$variant:"secondary",onClick:a,children:d}),o.jsx(g,{$variant:t,onClick:s,children:n})]}),children:o.jsxs("div",{style:{textAlign:"center",padding:"20px 0"},children:[o.jsx(S,{$variant:t,children:x}),o.jsx(I,{children:c})]})}),R=i.input`
  width: 100%;
  padding: 14px 18px;
  border: 2px solid ${r.colors.gray200};
  border-radius: ${r.borderRadius.lg};
  font-size: ${r.fontSizes.base};
  transition: all ${r.transitions.base};
  font-family: ${r.fonts.body};
  background: ${r.colors.white};

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #3d3d3d;
    color: #e5e5e5;
  }

  &:focus {
    outline: none;
    border-color: ${r.colors.primarySolid};
    box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1);
    background: #fafbff;

    body.dark-theme & {
      background: #353535;
      border-color: #7c3aed;
    }
  }

  &::placeholder {
    color: ${r.colors.gray400};

    body.dark-theme & {
      color: #6d6d6d;
    }
  }
`,B=i.label`
  display: block;
  margin-bottom: ${r.spacing.md};
  font-weight: 600;
  color: ${r.colors.textPrimary};
  font-size: ${r.fontSizes.base};

  body.dark-theme & {
    color: #e5e5e5;
  }
`,Y=({isOpen:e,onClose:a,onSubmit:s,title:l,label:c,placeholder:n,value:d,onChange:t,submitText:x="Submit",type:m="text",icon:b=o.jsx(u,{size:32})})=>o.jsx(f,{isOpen:e,onClose:a,title:l,icon:b,maxWidth:"480px",footer:o.jsxs(o.Fragment,{children:[o.jsx(g,{$variant:"secondary",onClick:a,children:"Cancel"}),o.jsx(g,{$variant:"primary",onClick:s,children:x})]}),children:o.jsxs("div",{children:[o.jsx(B,{children:c}),o.jsx(R,{type:m,value:d,onChange:t,placeholder:n,autoFocus:!0})]})});export{E as C,Y as I,f as M};
