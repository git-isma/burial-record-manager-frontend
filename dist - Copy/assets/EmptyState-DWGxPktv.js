import{j as t,t as i,d as e}from"./index-DodhUEbA.js";import{B as o}from"./CommonStyles-Cgy4dfub.js";const m=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${i.spacing.xl} ${i.spacing.md};
  text-align: center;
  background: white;
  border-radius: ${i.borderRadius.lg};
  border: 2px dashed ${i.colors.gray300};
  min-height: 300px;

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #404040;
  }

  @media (min-width: 768px) {
    padding: ${i.spacing["3xl"]} ${i.spacing.xl};
    min-height: 400px;
  }
`,l=e.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f0f0f0 0%, #f8f8f8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin-bottom: ${i.spacing.lg};
  opacity: 0.8;
  color: #9ca3af;

  body.dark-theme & {
    background: linear-gradient(135deg, #2d2d2d 0%, #3d3d3d 100%);
    color: #6b7280;
  }

  svg {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
    font-size: 56px;
    margin-bottom: ${i.spacing.xl};

    svg {
      width: 56px;
      height: 56px;
    }
  }
`,g=e.h3`
  font-size: ${i.fontSizes.lg};
  font-weight: 700;
  color: ${i.colors.gray900};
  margin: 0 0 ${i.spacing.md} 0;

  body.dark-theme & {
    color: #e5e5e5;
  }

  @media (min-width: 768px) {
    font-size: ${i.fontSizes["2xl"]};
  }
`,h=e.p`
  font-size: ${i.fontSizes.sm};
  color: ${i.colors.gray600};
  margin: 0 0 ${i.spacing.lg} 0;
  max-width: 400px;
  line-height: 1.6;

  body.dark-theme & {
    color: #b0b0b0;
  }

  @media (min-width: 768px) {
    font-size: ${i.fontSizes.base};
    margin: 0 0 ${i.spacing.xl} 0;
  }
`,x=e.div`
  display: flex;
  gap: ${i.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    gap: ${i.spacing.md};
    flex-direction: row;
  }

  button {
    width: 100%;

    @media (min-width: 768px) {
      width: auto;
    }
  }
`;function y({icon:r="📭",title:a="No data found",description:s="There are no items to display at the moment.",action:n,actionText:p,secondaryAction:d,secondaryActionText:c}){return t.jsxs(m,{children:[t.jsx(l,{children:r}),t.jsx(g,{children:a}),t.jsx(h,{children:s}),(n||d)&&t.jsxs(x,{children:[n&&t.jsx(o,{$variant:"primary",onClick:n,children:p||"Get Started"}),d&&t.jsx(o,{$variant:"secondary",onClick:d,children:c||"Learn More"})]})]})}export{y as E};
