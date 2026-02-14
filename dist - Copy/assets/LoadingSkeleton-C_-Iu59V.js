import{j as t,d as o,t as s}from"./index-DodhUEbA.js";const d=o.div`
  background: #e5e7eb;
  border-radius: ${i=>i.$radius||"4px"};
  width: ${i=>i.$width||"100%"};
  height: ${i=>i.$height||"20px"};
  margin-bottom: ${i=>i.$marginBottom||"0"};

  body.dark-theme & {
    background: #3d3d3d;
  }
`,x=o.div`
  background: white;
  border-radius: ${s.borderRadius.lg};
  padding: ${s.spacing.xl};
  margin-bottom: ${s.spacing.xl};
  border: 1px solid ${s.colors.gray200};

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #404040;
  }
`,r=o.div`
  display: flex;
  gap: ${i=>i.$gap||s.spacing.md};
  margin-bottom: ${i=>i.$marginBottom||s.spacing.md};
  align-items: ${i=>i.$align||"flex-start"};
`,h=({rows:i=5})=>t.jsxs(x,{children:[t.jsx(d,{$height:"24px",$width:"200px",$marginBottom:"20px"}),[...Array(i)].map((n,a)=>t.jsxs(r,{$marginBottom:"16px",children:[t.jsx(d,{$height:"16px",$width:"30%"}),t.jsx(d,{$height:"16px",$width:"25%"}),t.jsx(d,{$height:"16px",$width:"20%"}),t.jsx(d,{$height:"16px",$width:"15%"})]},a))]}),e=()=>t.jsxs(x,{children:[t.jsxs(r,{$align:"center",$marginBottom:"16px",children:[t.jsx(d,{$height:"56px",$width:"56px",$radius:"16px"}),t.jsxs("div",{style:{flex:1},children:[t.jsx(d,{$height:"14px",$width:"120px",$marginBottom:"8px"}),t.jsx(d,{$height:"36px",$width:"80px"})]})]}),t.jsx(d,{$height:"13px",$width:"150px"})]}),p=()=>t.jsxs("div",{children:[t.jsx(d,{$height:"32px",$width:"250px",$marginBottom:"32px"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"24px",marginBottom:"32px"},children:[t.jsx(e,{}),t.jsx(e,{}),t.jsx(e,{}),t.jsx(e,{})]}),t.jsx(h,{rows:8})]});export{p as D,h as T};
