import{j as e,d as i,t,L as n}from"./index-DodhUEbA.js";import{c as o,d as r,e as d,f as s,M as c}from"./index-BhworDv5.js";const l=i.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`,x=i.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    padding: 48px;
  }

  body.dark-theme & {
    background: #2d2d2d;
  }
`,p=i.div`
  text-align: center;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,h=i.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
    margin-bottom: 24px;
  }
`,m=i.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${t.colors.gray900};
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  body.dark-theme & {
    color: #e5e5e5;
  }
`,g=i.p`
  color: ${t.colors.gray600};
  font-size: 14px;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  body.dark-theme & {
    color: #b0b0b0;
  }
`,b=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
`,a=i.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: ${t.colors.gray50};
  border-radius: 12px;
  text-decoration: none;
  color: ${t.colors.gray900};
  transition: all 0.2s;
  border: 2px solid transparent;
  min-height: 60px;

  @media (min-width: 768px) {
    gap: 16px;
    padding: 20px;
    min-height: auto;
  }

  body.dark-theme & {
    background: #1f1f1f;
    color: #e5e5e5;
  }

  &:hover {
    border-color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
  }

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;

    @media (min-width: 768px) {
      width: 48px;
      height: 48px;
    }
  }

  .content {
    flex: 1;
    min-width: 0;

    .label {
      font-size: 12px;
      color: ${t.colors.gray500};
      margin-bottom: 2px;

      @media (min-width: 768px) {
        font-size: 13px;
        margin-bottom: 4px;
      }

      body.dark-theme & {
        color: #a0a0a0;
      }
    }

    .value {
      font-size: 14px;
      font-weight: 600;
      word-break: break-word;

      @media (min-width: 768px) {
        font-size: 16px;
      }
    }
  }
`,u=i(n)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  justify-content: center;

  &:hover {
    text-decoration: underline;
  }
`;function w(){return e.jsx(l,{children:e.jsxs(x,{children:[e.jsxs(p,{children:[e.jsx(h,{children:e.jsx(o,{size:40,color:"white"})}),e.jsx(m,{children:"Help & Support"}),e.jsx(g,{children:"Need assistance? We're here to help. Contact our support team for any questions or issues."})]}),e.jsxs(b,{children:[e.jsxs(a,{href:"mailto:support@burial-permit.com",children:[e.jsx("div",{className:"icon",children:e.jsx(r,{size:24})}),e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"label",children:"Email Support"}),e.jsx("div",{className:"value",children:"support@burial-permit.com"})]})]}),e.jsxs(a,{href:"tel:+254700000000",children:[e.jsx("div",{className:"icon",children:e.jsx(d,{size:24})}),e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"label",children:"Phone Support"}),e.jsx("div",{className:"value",children:"+254 700 000 000"})]})]}),e.jsxs(a,{as:"div",style:{cursor:"default"},children:[e.jsx("div",{className:"icon",children:e.jsx(s,{size:24})}),e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"label",children:"Office Location"}),e.jsx("div",{className:"value",children:"Nairobi, Kenya"})]})]})]}),e.jsxs(u,{to:"/login",children:[e.jsx(c,{size:18}),"Back to Login"]})]})})}export{w as default};
