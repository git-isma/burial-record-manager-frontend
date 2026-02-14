import{r as g,j as e,d as f,t,u as Re,b as De,c as Be,e as Te,a as j,I as ze}from"./index-DodhUEbA.js";import{u as Oe}from"./uploadToS3-BcvU4220.js";import{P as Ae,B as y,C as Me,F as z,a as s}from"./CommonStyles-Cgy4dfub.js";import{M as W}from"./ModernDatePicker-CjMBbCTJ.js";import{M as Fe}from"./Modal-CUm8GDAB.js";import{M as Le,o as le,p as Z,q as de,r as v,s as V,t as Ee,u as ce,g as ue,v as qe,i as Ke,j as Ve,w as Ge,x as Ue,y as ge,z as He}from"./index-BhworDv5.js";import"./clsx-B-dksMZM.js";const Ye=f.div`
  position: relative;
  display: inline-flex;
`,Je=f.div`
  position: absolute;
  bottom: ${o=>o.$position==="top"?"100%":"auto"};
  top: ${o=>o.$position==="bottom"?"100%":"auto"};
  left: ${o=>o.$position==="left"?"auto":o.$position==="right"?"100%":"50%"};
  right: ${o=>o.$position==="left"?"100%":"auto"};
  transform: ${o=>{const k=o.$position==="top"||o.$position==="bottom"?"translateX(-50%)":o.$position==="left"||o.$position==="right"?"translateY(-50%)":"none",h=o.$visible?"scale(1)":"scale(0.95)";return`${k} ${h}`}};
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: #f1f5f9;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 13px;
  line-height: 1.6;
  font-weight: 500;
  white-space: ${o=>o.$multiline?"normal":"nowrap"};
  ${o=>o.$width?`width: ${o.$width};`:`max-width: ${o.$multiline?"280px":"none"};`};
  z-index: ${t.zIndex.tooltip};
  text-align: ${o=>o.$multiline?"left":"center"};
  pointer-events: none;
  opacity: ${o=>o.$visible?1:0};
  visibility: ${o=>o.$visible?"visible":"hidden"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  margin: ${o=>o.$position==="top"?"0 0 10px 0":o.$position==="bottom"?"10px 0 0 0":o.$position==="left"?"0 10px 0 0":o.$position==="right"?"0 0 0 10px":"0"};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1);

  body.dark-theme & {
    background: linear-gradient(135deg, #18181b 0%, #09090b 100%);
    color: #e4e4e7;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08);
  }

  &::before {
    content: '';
    position: absolute;
    ${o=>o.$position==="top"?"top: 100%; left: 50%; transform: translateX(-50%);":o.$position==="bottom"?"bottom: 100%; left: 50%; transform: translateX(-50%);":o.$position==="left"?"left: 100%; top: 50%; transform: translateY(-50%);":o.$position==="right"?"right: 100%; top: 50%; transform: translateY(-50%);":""}
    border: 7px solid transparent;
    ${o=>o.$position==="top"?"border-top-color: #1e293b;":o.$position==="bottom"?"border-bottom-color: #1e293b;":o.$position==="left"?"border-left-color: #1e293b;":o.$position==="right"?"border-right-color: #1e293b;":""}
  }

  body.dark-theme &::before {
    ${o=>o.$position==="top"?"border-top-color: #18181b;":o.$position==="bottom"?"border-bottom-color: #18181b;":o.$position==="left"?"border-left-color: #18181b;":o.$position==="right"?"border-right-color: #18181b;":""}
  }
`;function X({children:o,content:k,position:h="top",delay:S=200,multiline:u=!1,width:$}){const[N,a]=g.useState(!1),[m,C]=g.useState(null),R=()=>{const A=setTimeout(()=>{a(!0)},S);C(A)},O=()=>{m&&clearTimeout(m),a(!1)};return k?e.jsxs(Ye,{onMouseEnter:R,onMouseLeave:O,onFocus:R,onBlur:O,children:[o,e.jsx(Je,{$visible:N,$position:h,$multiline:u,$width:$,children:k})]}):o}const _e=["Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Czechia","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"],P=f.h3`
  margin-top: ${o=>o.$first?"0":t.spacing.xl};
  margin-bottom: ${t.spacing.lg};
  color: ${t.colors.textPrimary};
  font-size: ${t.fontSizes.xl};
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: ${t.spacing.sm};
  padding-bottom: ${t.spacing.sm};
  border-bottom: 2px solid ${t.colors.gray200};

  body.dark-theme & {
    color: #e5e5e5;
    border-bottom-color: #3d3d3d;
  }

  span {
    font-size: 24px;
  }
`,We=f.div`
  display: flex;
  gap: ${t.spacing.md};
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: ${t.spacing.lg};
  }

  label {
    display: flex;
    align-items: center;
    gap: ${t.spacing.sm};
    padding: ${t.spacing.md} ${t.spacing.lg};
    border: 2px solid ${t.colors.gray200};
    border-radius: ${t.borderRadius.lg};
    cursor: pointer;
    transition: all ${t.transitions.base};
    font-weight: 500;
    background: white;
    flex: 1;
    min-width: 0;
    min-height: 44px;
    touch-action: manipulation;

    @media (min-width: 640px) {
      flex: auto;
    }

    body.dark-theme & {
      background: #2d2d2d;
      border-color: #3d3d3d;
      color: #e5e5e5;
    }

    input {
      width: auto;
      margin: 0;
      cursor: pointer;
      flex-shrink: 0;
      min-width: 20px;
      min-height: 20px;
    }

    &:hover {
      border-color: ${t.colors.primarySolid};
      background: linear-gradient(135deg, #fafbff 0%, #ffffff 100%);

      body.dark-theme & {
        background: #353535;
        border-color: #7c3aed;
      }
    }

    input:checked + & {
      border-color: ${t.colors.primarySolid};
      background: linear-gradient(135deg, #f0f4ff 0%, #e8eeff 100%);

      body.dark-theme & {
        background: #3d2d5d;
        border-color: #7c3aed;
      }
    }
  }
`,Ze=f.div`
  border: 3px dashed ${t.colors.gray300};
  border-radius: ${t.borderRadius.xl};
  padding: ${t.spacing.lg};
  text-align: center;
  transition: all ${t.transitions.base};
  background: ${t.colors.gray50};
  cursor: pointer;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  touch-action: manipulation;

  @media (min-width: 768px) {
    padding: ${t.spacing.xl};
    min-height: 140px;
  }

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #3d3d3d;
  }

  &:hover {
    border-color: ${t.colors.primarySolid};
    background: linear-gradient(135deg, #fafbff 0%, #ffffff 100%);

    body.dark-theme & {
      background: #353535;
      border-color: #7c3aed;
    }
  }

  .icon {
    font-size: 40px;
    margin-bottom: ${t.spacing.md};
    flex-shrink: 0;

    @media (min-width: 768px) {
      font-size: 48px;
    }
  }

  p {
    color: ${t.colors.gray600};
    font-size: 13px;
    margin: ${t.spacing.sm} 0;
    word-break: break-word;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  input[type="file"] {
    display: none;
  }
`,Xe=f.div`
  margin-top: ${t.spacing.md};
  padding: ${t.spacing.md};
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border-radius: ${t.borderRadius.lg};
  color: ${t.colors.success};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${t.spacing.sm};

  body.dark-theme & {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    color: #6ee7b7;
  }

  svg {
    margin-right: 8px;
  }
`,Qe=f.div`
  margin-top: ${t.spacing.lg};
  padding: ${t.spacing.lg};
  background: ${t.colors.gray50};
  border-radius: ${t.borderRadius.lg};
  border: 1px solid ${t.colors.gray200};

  body.dark-theme & {
    background: #1f1f1f;
    border-color: #3d3d3d;
  }

  h4 {
    margin: 0 0 ${t.spacing.md} 0;
    font-size: 14px;
    font-weight: 600;
    color: ${t.colors.gray900};
    display: flex;
    align-items: center;
    gap: ${t.spacing.sm};

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
`,ea=f.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${t.spacing.md};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,aa=f.a`
  display: flex;
  align-items: center;
  gap: ${t.spacing.md};
  padding: ${t.spacing.md};
  background: white;
  border: 1px solid ${t.colors.gray200};
  border-radius: ${t.borderRadius.lg};
  text-decoration: none;
  transition: all ${t.transitions.base};
  cursor: pointer;
  min-height: 60px;

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #3d3d3d;
  }

  &:hover {
    border-color: ${t.colors.primarySolid};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);

    body.dark-theme & {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      border-color: #7c3aed;
    }
  }

  .file-icon {
    font-size: 24px;
    flex-shrink: 0;
  }

  .file-info {
    flex: 1;
    min-width: 0;

    .file-name {
      font-size: 13px;
      font-weight: 600;
      color: ${t.colors.gray900};
      margin: 0 0 4px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      body.dark-theme & {
        color: #e5e5e5;
      }
    }

    .file-date {
      font-size: 11px;
      color: ${t.colors.gray500};
      margin: 0;

      body.dark-theme & {
        color: #a0a0a0;
      }
    }
  }

  .download-icon {
    font-size: 18px;
    color: ${t.colors.primarySolid};
    flex-shrink: 0;
    transition: all ${t.transitions.fast};

    body.dark-theme & {
      color: #a78bfa;
    }
  }

  &:hover .download-icon {
    transform: scale(1.2);
  }
`,me=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${t.spacing.xs};
  color: #6b7280;
  cursor: help;
  transition: all ${t.transitions.base};
  opacity: 0.7;

  body.dark-theme & {
    color: #9ca3af;
  }

  &:hover {
    color: #3b82f6;
    opacity: 1;
    transform: scale(1.15);

    body.dark-theme & {
      color: #60a5fa;
    }
  }
`,w=f.p`
  margin-top: 6px;
  font-size: 12px;
  color: #6b7280;
  line-height: 1.4;
  display: flex;
  align-items: center;

  body.dark-theme & {
    color: #9ca3af;
  }

  svg {
    flex-shrink: 0;
  }
`,pe=f.div`
  margin-bottom: ${t.spacing.lg};
  padding: ${t.spacing.md};
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  border-radius: ${t.borderRadius.md};
  display: flex;
  gap: ${t.spacing.md};

  body.dark-theme & {
    background: #78350f;
    border-left-color: #f59e0b;
  }

  .icon {
    flex-shrink: 0;
    color: #d97706;
    font-size: 20px;

    body.dark-theme & {
      color: #fbbf24;
    }
  }

  .content {
    flex: 1;

    h4 {
      margin: 0 0 6px 0;
      font-size: 13px;
      font-weight: 600;
      color: #92400e;

      body.dark-theme & {
        color: #fcd34d;
      }
    }

    p {
      margin: 0;
      font-size: 12px;
      color: #b45309;
      line-height: 1.5;

      body.dark-theme & {
        color: #fde68a;
      }
    }

    ul {
      margin: 6px 0 0 0;
      padding-left: 20px;
      font-size: 12px;
      color: #b45309;

      body.dark-theme & {
        color: #fde68a;
      }

      li {
        margin: 4px 0;
      }
    }
  }
`;f.div`
  margin-bottom: ${t.spacing.lg};
  padding: ${t.spacing.md};
  background: #d1fae5;
  border-left: 4px solid #10b981;
  border-radius: ${t.borderRadius.md};
  display: flex;
  gap: ${t.spacing.md};

  body.dark-theme & {
    background: #064e3b;
    border-left-color: #10b981;
  }

  .icon {
    flex-shrink: 0;
    color: #059669;
    font-size: 20px;

    body.dark-theme & {
      color: #6ee7b7;
    }
  }

  .content {
    flex: 1;

    h4 {
      margin: 0 0 6px 0;
      font-size: 13px;
      font-weight: 600;
      color: #065f46;

      body.dark-theme & {
        color: #a7f3d0;
      }
    }

    p {
      margin: 0;
      font-size: 12px;
      color: #047857;
      line-height: 1.5;

      body.dark-theme & {
        color: #86efac;
      }
    }
  }
`;const ta=f.div`
  margin-top: ${t.spacing["2xl"]};
  padding-top: ${t.spacing.xl};
  border-top: 2px solid ${t.colors.gray200};
  display: flex;
  gap: ${t.spacing.md};
  align-items: center;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }

  body.dark-theme & {
    border-top-color: #3d3d3d;
  }

  button {
    width: 100%;

    @media (min-width: 640px) {
      width: auto;
    }
  }
`,ra=f.div`
  margin: ${t.spacing.xl} 0;
  padding: ${t.spacing.lg};
  background: #f8fafc;
  border: 1px solid ${t.colors.gray200};
  border-radius: ${t.borderRadius.lg};
  display: flex;
  align-items: flex-start;
  gap: ${t.spacing.md};
  transition: all ${t.transitions.base};

  body.dark-theme & {
    background: #1e1e1e;
    border-color: #333;
  }

  &:hover {
    border-color: ${t.colors.primaryLight};
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin-top: 2px;
    cursor: pointer;
    accent-color: ${t.colors.primarySolid};
  }

  label {
    font-size: 14px;
    line-height: 1.5;
    color: ${t.colors.gray700};
    cursor: pointer;

    body.dark-theme & {
      color: #ccc;
    }

    strong {
      color: ${t.colors.textPrimary};
      body.dark-theme & {
        color: #fff;
      }
    }
  }
`,ia=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${t.colors.gray500};
  margin-left: auto;

  body.dark-theme & {
    color: #a0a0a0;
  }

  &.saving {
    color: ${t.colors.warning};
  }

  &.saved {
    color: ${t.colors.success};
  }

  svg {
    animation: ${o=>o.$saving?"spin 1s linear infinite":"none"};
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;function ga(){const[o]=Re(),k=De(),h=o.get("edit"),{success:S,error:u}=Be(),{settings:$}=Te(),N=()=>{const r=new Date,n=r.getFullYear(),i=String(r.getMonth()+1).padStart(2,"0"),c=String(r.getDate()).padStart(2,"0");return`${n}-${i}-${c}`},[a,m]=g.useState({recordNumber:"",firstName:"",middleName:"",lastName:"",idPassportNo:"",gender:"",age:"",ageCategory:"",nationality:"",dateOfDeath:N(),nextOfKinName:"",nextOfKinContact:"",nextOfKinIdPassport:"",burialLocation:"",burialTime:"",primaryService:"Burial",amountPaidBurial:"",secondaryService:"None",amountPaidSecondary:0,tertiaryService:"None",amountPaidTertiary:0,mpesaRefNo:"",receiptNo:"",status:"Verification Pending",rejectionReason:"",dateOfBurial:N(),nextOfKinRelationship:"",burialPermitNumber:"",burialPermitDate:N(),burialPermitIssuedBy:"",burialPermitIssuedByContact:"",burialPermitIssuedTo:"",burialPermitIssuedToContact:""}),[C,R]=g.useState([]),[O,A]=g.useState(!1),[G,U]=g.useState(!1),[M,D]=g.useState(""),[I,he]=g.useState([]),[H,fe]=g.useState(null),[xe,be]=g.useState([]),[ye,Y]=g.useState(!1),[F,Q]=g.useState(""),[ee,J]=g.useState(!1),[ae,je]=g.useState([]),[te,re]=g.useState(16e3),[ie,ne]=g.useState(22e3),[b,L]=g.useState(null),oe=()=>{const r=a.ageCategory==="Stillborn"||a.ageCategory==="Infant",n=[a.ageCategory,a.dateOfDeath,a.dateOfBurial,a.nextOfKinName,a.nextOfKinRelationship,a.nextOfKinContact,a.burialPermitNumber,a.burialPermitDate,a.burialPermitIssuedBy,a.burialPermitIssuedByContact,a.burialPermitIssuedTo,a.burialPermitIssuedToContact,a.burialLocation,a.burialTime,a.receiptNo];n.push(a.gender,a.age,a.nationality),r||n.push(a.firstName,a.lastName),a.status==="Rejected"&&n.push(a.rejectionReason);const i=n.every(x=>x&&String(x).trim()!==""),c=C.length>0||I&&I.length>0;return i&&(h||c)&&G};g.useEffect(()=>{Ce(),E()},[]);const Ce=async()=>{try{const r=await j.getCurrentUser();fe(r.data)}catch(r){console.error("Error fetching user:",r)}},E=async()=>{try{const r=await j.getLocations();if(r.data&&Array.isArray(r.data)){je(r.data);const n=r.data.map(i=>typeof i=="string"?i:i.name);be(n)}}catch(r){console.error("Error fetching locations:",r)}},ve=async(r,n)=>{if(window.confirm(`Are you sure you want to delete "${n}"?`))try{await j.deleteLocation(r),S("Location deleted successfully"),E()}catch(i){console.error("Error deleting location:",i),u("Failed to delete location")}},Se=async()=>{var r,n,i,c;if(F.trim())try{await j.createLocation({name:F.trim(),daytimePrice:te,nighttimePrice:ie}),Q(""),re(16e3),ne(22e3),Y(!1),S("New location saved with pricing"),E()}catch(d){console.error("Error adding location:",d),u(((n=(r=d.response)==null?void 0:r.data)==null?void 0:n.message)||((c=(i=d.response)==null?void 0:i.data)==null?void 0:c.msg)||"Failed to save new location")}},Ne=async()=>{if(b)try{await j.updateLocation(b._id,{daytimePrice:b.daytimePrice,nighttimePrice:b.nighttimePrice}),L(null),S("Location prices updated"),E()}catch(r){console.error("Error updating location:",r),u("Failed to update location pricing")}};g.useEffect(()=>{if(h)Pe(h);else{if($.autoSave){const r=localStorage.getItem("recordDraft");if(r)try{const n=JSON.parse(r);n.dateOfDeath||(n.dateOfDeath=N()),m(n),S("Draft restored from previous session")}catch(n){console.error("Error loading draft:",n)}}q(),_()}},[h,$.autoSave]),g.useEffect(()=>{if(!h&&$.autoSave&&(a.firstName||a.lastName)){D("saving");const r=setTimeout(()=>{try{localStorage.setItem("recordDraft",JSON.stringify(a)),D("saved"),setTimeout(()=>D(""),2e3)}catch(n){console.error("Error saving draft:",n),D("")}},1500);return()=>clearTimeout(r)}},[a,h,$.autoSave]);const q=async()=>{try{console.log("🔄 Fetching latest record number from server...");const r=await j.getLatestRecordNumber();if(r.data&&r.data.recordNumber)console.log(`✅ Generated record number: ${r.data.recordNumber}`),m(n=>({...n,recordNumber:r.data.recordNumber}));else throw new Error("Invalid response from server")}catch(r){console.error("❌ Error generating record number:",r);const n=new Date().getFullYear(),i=Date.now().toString().slice(-5),c=`BR-${n}-${i}`;console.log(`⚠️ Using fallback record number: ${c}`),m(d=>({...d,recordNumber:c}))}},_=async()=>{try{console.log("🔄 Fetching latest receipt number from server...");const r=await j.getLatestReceiptNumber();if(r.data&&r.data.receiptNo)console.log(`✅ Generated receipt number: ${r.data.receiptNo}`),m(n=>({...n,receiptNo:r.data.receiptNo}));else throw new Error("Invalid response from server")}catch(r){console.error("❌ Error generating receipt number:",r);const n=new Date().getFullYear();m(i=>({...i,receiptNo:`RCP-${n}-0001`}))}},Pe=async r=>{try{const i=(await j.getRecord(r)).data;m({recordNumber:i.recordNumber||"",firstName:i.firstName||"",middleName:i.middleName||"",lastName:i.lastName||"",idPassportNo:i.idPassportNo||"",gender:i.gender||"Male",age:i.age||"",ageCategory:i.ageCategory||"",nationality:i.nationality||"",dateOfDeath:i.dateOfDeath?i.dateOfDeath.split("T")[0]:"",nextOfKinName:i.nextOfKinName||"",nextOfKinContact:i.nextOfKinContact||"",nextOfKinIdPassport:i.nextOfKinIdPassport||"",burialLocation:i.burialLocation||"Block A",burialTime:i.burialTime||"",primaryService:i.primaryService||"Burial",amountPaidBurial:i.amountPaidBurial||"",secondaryService:i.secondaryService||"None",amountPaidSecondary:i.amountPaidSecondary||0,tertiaryService:i.tertiaryService||"None",amountPaidTertiary:i.amountPaidTertiary||0,mpesaRefNo:i.mpesaRefNo||"",receiptNo:i.receiptNo||"",status:i.status==="Pending"?"Verification Pending":i.status||"Verification Pending",rejectionReason:i.rejectionReason||"",dateOfBurial:i.dateOfBurial?i.dateOfBurial.split("T")[0]:"",nextOfKinRelationship:i.nextOfKinRelationship||"",burialPermitNumber:i.burialPermitNumber||"",burialPermitDate:i.burialPermitDate?i.burialPermitDate.split("T")[0]:"",burialPermitIssuedBy:i.burialPermitIssuedBy||"",burialPermitIssuedByContact:i.burialPermitIssuedByContact||"",burialPermitIssuedTo:i.burialPermitIssuedTo||"",burialPermitIssuedToContact:i.burialPermitIssuedToContact||""}),i.attachments&&Array.isArray(i.attachments)&&(he(i.attachments),console.log("📎 Loaded existing attachments:",i.attachments))}catch(n){u("Error loading record data"),console.error(n)}},l=r=>{const{name:n,value:i}=r.target;if(n==="status"&&i!=="Rejected")m({...a,[n]:i,rejectionReason:""});else if(n==="ageCategory")m(i==="Infant"?{...a,[n]:i,age:"1"}:i==="Stillborn"?{...a,[n]:i,age:"0"}:{...a,[n]:i});else if(n==="burialLocation"||n==="burialTime"){const c=n==="burialLocation"?i:a.burialLocation,d=n==="burialTime"?i:a.burialTime;let x=a.amountPaidBurial;if(c&&d){const B=ae.find(p=>typeof p=="string"?p===c:p.name===c);B&&typeof B=="object"?x=d==="Daytime"?B.daytimePrice||0:B.nighttimePrice||0:x=0}m({...a,[n]:i,amountPaidBurial:x})}else m({...a,[n]:i})},$e=r=>{R(Array.from(r.target.files))},K=r=>/^[\d\s\-\+\(\)]{10}$/.test(r.replace(/\s/g,"")),se=r=>/^[A-Z0-9]{10}$/i.test(r),Ie=async r=>{var i,c;if(r.preventDefault(),a.dateOfDeath){const d=new Date(a.dateOfDeath),x=new Date;if(x.setHours(23,59,59,999),d>x){u("Date of Death cannot be in the future");return}}if(a.nextOfKinContact&&!K(a.nextOfKinContact)){u("Next of Kin Contact must be a valid mobile number (10 digits)");return}if(a.burialPermitIssuedToContact&&!K(a.burialPermitIssuedToContact)){u("Recipient Contact must be a valid mobile number (10 digits)");return}if(a.mpesaRefNo&&!se(a.mpesaRefNo)){u("M-Pesa Reference No must be exactly 10 alphanumeric characters");return}if(a.ageCategory&&a.age!==""){const d=parseInt(a.age,10);if(isNaN(d)||d<0){u("Age must be a valid positive number");return}switch(a.ageCategory){case"Stillborn":if(d>0){u("Stillborn age should be 0");return}break;case"Infant":if(d>1){u("Infant age must be between 0 and 1 year");return}break;case"Child":if(d<1||d>12){u("Child age must be between 1 and 12 years");return}break;case"Adult":if(d<=12){u("Adult age must be above 12 years");return}break}}if(a.status==="Rejected"&&!a.rejectionReason.trim()){u("Rejection reason is required when status is Rejected");return}const n=C.length+I.length;if(!h){if(a.ageCategory==="Stillborn"&&n<1){u("Medical Certificate of Stillbirth is required for Stillborn category. Please upload it.");return}if(a.ageCategory==="Infant"&&n<1){u("Birth Certificate is required for Infant category. Please upload it.");return}if(["Adult","Child"].includes(a.ageCategory)&&n<1){u("Attachments are required for this age category. Please upload at least one document.");return}}if(!G){u("Please accept the terms and conditions declaration before saving.");return}A(!0);try{let d=[];if(C.length>0)try{const p=await Oe(C,"records",null,a.recordNumber);console.log("✅ Files uploaded to S3:",p),d=C.map((T,ke)=>({filename:T.name,path:p[ke]})),console.log("📎 Formatted attachments:",d)}catch(p){console.error("❌ Error uploading files:",p),u("Failed to upload attachments. Please try again."),A(!1);return}const x={},B=["middleName","idPassportNo","nextOfKinIdPassport","amountPaidBurial","amountPaidSecondary","amountPaidTertiary","mpesaRefNo","secondaryService","tertiaryService","rejectionReason","nationality"];if(Object.keys(a).forEach(p=>{const T=a[p];(!B.includes(p)||T&&T!==""||p==="rejectionReason"&&a.status==="Rejected")&&(p==="status"&&T==="Verification Pending"?x[p]="Pending":x[p]=T)}),x.attachments=[...I,...d],h)await j.updateRecord(h,x),S("Burial record updated successfully!");else{const p=await j.createRecord(x);S(`Record ${p.data.recordNumber} created successfully!`),localStorage.removeItem("recordDraft"),m({recordNumber:"",firstName:"",middleName:"",lastName:"",idPassportNo:"",gender:"Male",age:"",ageCategory:"",dateOfDeath:N(),nextOfKinName:"",nextOfKinContact:"",nextOfKinIdPassport:"",burialLocation:"Block A",burialTime:"",primaryService:"Burial",amountPaidBurial:"",secondaryService:"None",amountPaidSecondary:"",tertiaryService:"None",amountPaidTertiary:"",mpesaRefNo:"",receiptNo:"",status:"Verification Pending",rejectionReason:""}),R([]),U(!1),D(""),q(),_()}}catch(d){u(((c=(i=d.response)==null?void 0:i.data)==null?void 0:c.msg)||"Error saving record")}finally{A(!1)}},we=()=>{localStorage.removeItem("recordDraft"),m({recordNumber:"",firstName:"",middleName:"",lastName:"",idPassportNo:"",gender:"Male",age:"",ageCategory:"",nationality:"",dateOfDeath:N(),nextOfKinName:"",nextOfKinContact:"",nextOfKinIdPassport:"",burialLocation:"Block A",burialTime:"",primaryService:"Burial",amountPaidBurial:"",secondaryService:"None",amountPaidSecondary:"",tertiaryService:"None",amountPaidTertiary:"",mpesaRefNo:"",receiptNo:"",status:"Verification Pending",rejectionReason:""}),R([]),U(!1),D(""),q()};return e.jsxs("div",{children:[e.jsxs(Ae,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"New Record"}),e.jsx("p",{children:"Create and register a new burial record"})]}),h&&e.jsxs(y,{$variant:"secondary",onClick:()=>k("/records"),children:[e.jsx(Le,{size:18})," Back to Records"]})]}),e.jsx(Me,{children:e.jsxs("form",{onSubmit:Ie,children:[e.jsxs(P,{$first:!0,children:[e.jsx("span",{className:"section-icon",children:e.jsx(le,{})}),"Burial Record No."]}),e.jsx(z,{children:e.jsxs(s,{children:[e.jsxs("label",{children:["Record Number *",e.jsx(X,{text:"Auto-generated based on the last record number in the system. Click refresh to regenerate."})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("input",{name:"recordNumber",value:a.recordNumber,readOnly:!0,placeholder:"Auto-generated",required:!0,style:{fontWeight:600,fontSize:"16px",color:"#667eea",flex:1}}),e.jsxs(y,{type:"button",onClick:q,style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"6px",whiteSpace:"nowrap"},title:"Regenerate record number",children:[e.jsx(Z,{size:18}),"Refresh"]})]})]})}),e.jsxs(P,{children:[e.jsx("span",{className:"section-icon",children:e.jsx(de,{})}),"Deceased Information"]}),e.jsxs(z,{children:[e.jsxs(s,{children:[e.jsx("label",{htmlFor:"ageCategory",children:"Age Category *"}),e.jsxs("select",{id:"ageCategory",name:"ageCategory",value:a.ageCategory,onChange:l,required:!0,"aria-required":"true",children:[e.jsx("option",{value:"",children:"Select Age Category"}),e.jsx("option",{value:"Stillborn",children:"Stillborn"}),e.jsx("option",{value:"Infant",children:"Infant (0–1 year)"}),e.jsx("option",{value:"Child",children:"Child (1–12 years)"}),e.jsx("option",{value:"Adult",children:"Adult (Above 12 years)"})]})]}),e.jsxs(s,{children:[e.jsxs("label",{htmlFor:"firstName",children:["First Name"," ",a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant"?"*":""]}),e.jsx("input",{id:"firstName",name:"firstName",value:a.firstName,onChange:l,placeholder:"Enter first name",required:a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant","aria-required":a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant"})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"middleName",children:"Middle Name"}),e.jsx("input",{id:"middleName",name:"middleName",value:a.middleName,onChange:l,placeholder:"Enter middle name"})]}),e.jsxs(s,{children:[e.jsxs("label",{htmlFor:"lastName",children:["Last Name"," ",a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant"?"*":""]}),e.jsx("input",{id:"lastName",name:"lastName",value:a.lastName,onChange:l,placeholder:"Enter last name",required:a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant","aria-required":a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant"})]}),e.jsxs(s,{children:[e.jsxs("label",{htmlFor:"idPassportNo",children:["ID / Passport No",a.ageCategory==="Child"||a.ageCategory==="Adult"?" *":""]}),e.jsx("input",{id:"idPassportNo",name:"idPassportNo",value:a.idPassportNo,onChange:l,placeholder:"Enter ID or Passport number",required:a.ageCategory==="Child"||a.ageCategory==="Adult","aria-required":a.ageCategory==="Child"||a.ageCategory==="Adult"})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"gender",children:"Gender *"}),e.jsxs("select",{id:"gender",name:"gender",value:a.gender,onChange:l,required:!0,"aria-required":"true",children:[e.jsx("option",{value:"",children:"Select Gender"}),e.jsx("option",{value:"Male",children:"Male"}),e.jsx("option",{value:"Female",children:"Female"})]})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"nationality",children:"Nationality *"}),e.jsxs("select",{id:"nationality",name:"nationality",value:a.nationality,onChange:l,required:!0,"aria-required":"true",children:[e.jsx("option",{value:"",children:"Select Nationality"}),_e.map(r=>e.jsx("option",{value:r,children:r},r))]})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"age",children:"Age *"}),e.jsx("input",{id:"age",type:"number",name:"age",value:a.age,onChange:l,placeholder:a.ageCategory==="Stillborn"?"Enter age (typically 0)":a.ageCategory==="Infant"?"Enter age (0-1 years)":a.ageCategory==="Child"?"Enter age (1-12 years)":a.ageCategory==="Adult"?"Enter age (12+ years)":"Enter age",min:"0",disabled:a.ageCategory==="Stillborn",style:a.ageCategory==="Stillborn"?{backgroundColor:"#f3f4f6",opacity:.6}:{},required:!0,"aria-required":"true"}),a.ageCategory&&e.jsxs(w,{children:[e.jsx(v,{size:14,style:{marginRight:"4px"}}),a.ageCategory==="Stillborn"&&"Age field is disabled for Stillborn cases",a.ageCategory==="Infant"&&"Age is automatically set to 1 year",a.ageCategory==="Child"&&"Age must be between 1 and 12 years",a.ageCategory==="Adult"&&"Age must be above 12 years"]})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"dateOfDeath",children:"Date of Death *"}),e.jsx(W,{id:"dateOfDeath",value:a.dateOfDeath,onChange:l,name:"dateOfDeath",placeholder:"Pick date of death",maxDate:new Date,required:!0,"aria-required":"true"}),e.jsxs(w,{children:[e.jsx(v,{size:14,style:{marginRight:"4px"}}),"Future dates cannot be selected"]})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"dateOfBurial",children:"Date of Burial *"}),e.jsx(W,{id:"dateOfBurial",value:a.dateOfBurial,onChange:l,name:"dateOfBurial",placeholder:"Pick date of burial",required:!0,"aria-required":"true"})]})]}),e.jsxs(P,{children:[e.jsx("span",{className:"section-icon",children:e.jsx(de,{})}),"Next of Kin Information",e.jsx(X,{content:"Closest relative to contact in emergency (spouse, parent, sibling, or adult child)",position:"right",multiline:!0,width:"400px",children:e.jsx(me,{children:e.jsx(v,{size:18})})})]}),e.jsxs(z,{children:[e.jsxs(s,{children:[e.jsx("label",{htmlFor:"nextOfKinName",children:"Name of Next of Kin *"}),e.jsx("input",{id:"nextOfKinName",name:"nextOfKinName",value:a.nextOfKinName,onChange:l,placeholder:"Enter next of kin name",required:!0,"aria-required":"true"})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"nextOfKinRelationship",children:"Relationship with Deceased *"}),e.jsxs("select",{id:"nextOfKinRelationship",name:"nextOfKinRelationship",value:a.nextOfKinRelationship,onChange:l,required:!0,"aria-required":"true",children:[e.jsx("option",{value:"",children:"Select Relationship"}),e.jsx("option",{value:"Spouse",children:"Spouse"}),e.jsx("option",{value:"Child",children:"Child"}),e.jsx("option",{value:"Parent",children:"Parent"}),e.jsx("option",{value:"Sibling",children:"Sibling"}),e.jsx("option",{value:"Other",children:"Other"})]})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"nextOfKinContact",children:"Next of Kin Contact *"}),e.jsx("input",{id:"nextOfKinContact",type:"tel",name:"nextOfKinContact",value:a.nextOfKinContact,onChange:l,placeholder:"e.g., 0712345678",required:!0,"aria-required":"true"}),a.nextOfKinContact&&e.jsxs(w,{children:[e.jsx(v,{size:14,style:{marginRight:"4px"}}),K(a.nextOfKinContact)?e.jsx("span",{style:{color:"#10b981"},children:"✓ Valid mobile number"}):e.jsx("span",{style:{color:"#ef4444"},children:"✗ Must be 10 digits"})]})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"nextOfKinIdPassport",children:"Next of Kin ID / Passport No *"}),e.jsx("input",{id:"nextOfKinIdPassport",name:"nextOfKinIdPassport",value:a.nextOfKinIdPassport,onChange:l,placeholder:"Enter ID or Passport number",required:!0,"aria-required":"true"})]})]}),e.jsxs(P,{children:[e.jsx("span",{className:"section-icon",children:e.jsx(le,{})}),"Burial Permit Details (Government Issued)"]}),(a.ageCategory==="Stillborn"||a.ageCategory==="Infant")&&e.jsxs(w,{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#fef3c7",borderRadius:"6px",color:"#92400e"},children:[e.jsx(v,{size:14,style:{marginRight:"4px",flexShrink:0}}),"Burial permit details are not required for Stillborn and Infant cases. These fields are disabled."]}),e.jsxs(z,{children:[e.jsxs(s,{children:[e.jsxs("label",{htmlFor:"burialPermitNumber",children:["Burial Permit Number",a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant"?" *":""]}),e.jsx("input",{id:"burialPermitNumber",name:"burialPermitNumber",value:a.burialPermitNumber,onChange:l,placeholder:"Enter permit number",disabled:a.ageCategory==="Stillborn"||a.ageCategory==="Infant",style:a.ageCategory==="Stillborn"||a.ageCategory==="Infant"?{backgroundColor:"#f3f4f6",opacity:.6}:{},required:a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant","aria-required":a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant"})]}),e.jsxs(s,{children:[e.jsxs("label",{htmlFor:"burialPermitDate",children:["Date of Burial Permit",a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant"?" *":""]}),e.jsx(W,{id:"burialPermitDate",value:a.burialPermitDate,onChange:l,name:"burialPermitDate",placeholder:"Pick permit date",disabled:a.ageCategory==="Stillborn"||a.ageCategory==="Infant",required:a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant","aria-required":a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant"})]}),e.jsxs(s,{children:[e.jsxs("label",{htmlFor:"burialPermitIssuedBy",children:["Permit Issued By",a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant"?" *":""]}),e.jsx("input",{id:"burialPermitIssuedBy",name:"burialPermitIssuedBy",value:a.burialPermitIssuedBy,onChange:l,placeholder:"Enter issuer name/authority",disabled:a.ageCategory==="Stillborn"||a.ageCategory==="Infant",style:a.ageCategory==="Stillborn"||a.ageCategory==="Infant"?{backgroundColor:"#f3f4f6",opacity:.6}:{},required:a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant","aria-required":a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant"})]}),e.jsxs(s,{children:[e.jsxs("label",{htmlFor:"burialPermitIssuedByContact",children:["Issuer Contact Address",a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant"?" *":""]}),e.jsx("input",{id:"burialPermitIssuedByContact",name:"burialPermitIssuedByContact",value:a.burialPermitIssuedByContact,onChange:l,placeholder:"Enter issuer contact details",disabled:a.ageCategory==="Stillborn"||a.ageCategory==="Infant",style:a.ageCategory==="Stillborn"||a.ageCategory==="Infant"?{backgroundColor:"#f3f4f6",opacity:.6}:{},required:a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant","aria-required":a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant"})]}),e.jsxs(s,{children:[e.jsxs("label",{htmlFor:"burialPermitIssuedTo",children:["Permit Issued To",a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant"?" *":""]}),e.jsx("input",{id:"burialPermitIssuedTo",name:"burialPermitIssuedTo",value:a.burialPermitIssuedTo,onChange:l,placeholder:"Enter recipient name",disabled:a.ageCategory==="Stillborn"||a.ageCategory==="Infant",style:a.ageCategory==="Stillborn"||a.ageCategory==="Infant"?{backgroundColor:"#f3f4f6",opacity:.6}:{},required:a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant","aria-required":a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant"})]}),e.jsxs(s,{children:[e.jsxs("label",{htmlFor:"burialPermitIssuedToContact",children:["Recipient Contact Number",a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant"?" *":""]}),e.jsx("input",{id:"burialPermitIssuedToContact",type:"tel",name:"burialPermitIssuedToContact",value:a.burialPermitIssuedToContact,onChange:l,placeholder:"Enter recipient contact",disabled:a.ageCategory==="Stillborn"||a.ageCategory==="Infant",style:a.ageCategory==="Stillborn"||a.ageCategory==="Infant"?{backgroundColor:"#f3f4f6",opacity:.6}:{},required:a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant","aria-required":a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant"}),a.burialPermitIssuedToContact&&a.ageCategory!=="Stillborn"&&a.ageCategory!=="Infant"&&e.jsxs(w,{children:[e.jsx(v,{size:14,style:{marginRight:"4px"}}),K(a.burialPermitIssuedToContact)?e.jsx("span",{style:{color:"#10b981"},children:"✓ Valid mobile number"}):e.jsx("span",{style:{color:"#ef4444"},children:"✗ Must be 10 digits"})]})]})]}),e.jsxs(P,{children:[e.jsx("span",{className:"section-icon",children:e.jsx(V,{})}),"Burial Location & Services"]}),e.jsxs(z,{children:[e.jsxs(s,{children:[e.jsx("label",{htmlFor:"burialLocation",children:"Location of Burial *"}),e.jsx("div",{style:{display:"flex",gap:"8px",flexDirection:"column"},children:ye?e.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column",background:t.colors.gray50,padding:"16px",borderRadius:t.borderRadius.md,border:`1px solid ${t.colors.gray200}`},children:[e.jsx("div",{style:{display:"flex",gap:"8px"},children:e.jsx("input",{type:"text",value:F,onChange:r=>Q(r.target.value),placeholder:"Enter new location name",style:{flex:1},autoFocus:!0})}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("label",{style:{fontSize:"12px",color:t.colors.gray600,display:"block",marginBottom:"4px"},children:"Daytime Price"}),e.jsx("input",{type:"number",value:te,onChange:r=>re(parseInt(r.target.value)||0),placeholder:"Daytime Price"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("label",{style:{fontSize:"12px",color:t.colors.gray600,display:"block",marginBottom:"4px"},children:"Nighttime Price"}),e.jsx("input",{type:"number",value:ie,onChange:r=>ne(parseInt(r.target.value)||0),placeholder:"Nighttime Price"})]})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[e.jsx(y,{type:"button",$variant:"secondary",onClick:()=>Y(!1),children:"Cancel"}),e.jsx(y,{type:"button",$variant:"primary",onClick:Se,disabled:!F.trim(),children:"Save Location"})]})]}):e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs("select",{id:"burialLocation",name:"burialLocation",value:a.burialLocation,onChange:l,required:!0,style:{flex:1},"aria-required":"true",children:[e.jsx("option",{value:"",children:"Select Location"}),xe.map(r=>e.jsx("option",{value:r,children:r},r))]}),(H==null?void 0:H.role)==="admin"&&e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(y,{type:"button",$variant:"secondary",onClick:()=>Y(!0),title:"Add New Location",style:{padding:"0 12px",minHeight:"44px"},children:e.jsx(Ee,{size:20})}),e.jsx(y,{type:"button",$variant:"secondary",onClick:()=>J(!0),title:"Manage Locations",style:{padding:"0 12px",minHeight:"44px"},children:e.jsx(ce,{size:20})})]})]})})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"burialTime",children:"Time of Burial *"}),e.jsxs("select",{id:"burialTime",name:"burialTime",value:a.burialTime,onChange:l,required:!0,"aria-required":"true",children:[e.jsx("option",{value:"",children:"Select Time"}),e.jsx("option",{value:"Daytime",children:"Daytime"}),e.jsx("option",{value:"Nighttime",children:"Nighttime"})]})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"primaryService",children:"Primary Service"}),e.jsx("input",{id:"primaryService",name:"primaryService",value:a.primaryService,onChange:l,placeholder:"Burial",readOnly:!0})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"amountPaidBurial",children:"Amount Payable for Burial"}),e.jsx("input",{id:"amountPaidBurial",type:"number",name:"amountPaidBurial",value:a.amountPaidBurial,onChange:l,placeholder:"Auto-calculated",min:"0",readOnly:!0,style:{backgroundColor:"#f3f4f6",color:t.colors.textPrimary,fontWeight:600}})]})]}),e.jsxs(P,{children:[e.jsx("span",{className:"section-icon",children:e.jsx(V,{})}),"Payment Information"]}),e.jsxs(z,{children:[e.jsxs(s,{children:[e.jsxs("label",{htmlFor:"mpesaRefNo",children:["Mpesa Ref No.",e.jsx(X,{content:"M-Pesa is a mobile money service used mainly in Kenya and Tanzania that allows people to send, receive, and pay using their phones without a bank account. Must be exactly 10 alphanumeric characters.",position:"right",multiline:!0,width:"450px",children:e.jsx(me,{children:e.jsx(v,{size:18})})})]}),e.jsx("input",{id:"mpesaRefNo",name:"mpesaRefNo",value:a.mpesaRefNo,onChange:l,placeholder:"Enter M-Pesa reference number (10 characters)",maxLength:"10"}),a.mpesaRefNo&&e.jsxs(w,{children:[e.jsx(v,{size:14,style:{marginRight:"4px"}}),se(a.mpesaRefNo)?e.jsx("span",{style:{color:"#10b981"},children:"✓ Valid M-Pesa reference"}):e.jsx("span",{style:{color:"#ef4444"},children:"✗ Must be exactly 10 alphanumeric characters"})]})]}),e.jsxs(s,{children:[e.jsx("label",{htmlFor:"receiptNo",children:"Receipt No. *"}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("input",{id:"receiptNo",name:"receiptNo",value:a.receiptNo,readOnly:!0,placeholder:"Auto-generated",required:!0,"aria-required":"true",style:{fontWeight:600,fontSize:"16px",color:"#667eea",flex:1}}),e.jsxs(y,{type:"button",onClick:_,style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"6px",whiteSpace:"nowrap"},title:"Regenerate receipt number",children:[e.jsx(Z,{size:18}),"Refresh"]})]})]})]}),e.jsxs(P,{children:[e.jsx("span",{className:"section-icon",children:e.jsx(V,{})}),"Attachments"]}),a.ageCategory==="Stillborn"||a.ageCategory==="Infant"?e.jsxs(pe,{children:[e.jsx("div",{className:"icon",children:e.jsx(ue,{size:20})}),e.jsxs("div",{className:"content",children:[e.jsx("h4",{children:"Required Documents *"}),e.jsx("p",{children:a.ageCategory==="Stillborn"?"Please upload the Medical Certificate of Stillbirth.":"Please upload the Birth Certificate."})]})]}):e.jsxs(pe,{children:[e.jsx("div",{className:"icon",children:e.jsx(ue,{size:20})}),e.jsxs("div",{className:"content",children:[e.jsx("h4",{children:"Required Documents *"}),e.jsx("p",{children:"Please upload the following mandatory documents:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Burial Record Copy"}),e.jsx("li",{children:"ID Proof of Deceased Person"})]})]})]}),h&&I.length>0&&e.jsxs(Qe,{children:[e.jsxs("h4",{children:[e.jsx(V,{size:18}),"Existing Attachments (",I.length,")"]}),e.jsx(ea,{children:I.map((r,n)=>{const i=r.uploadedAt?new Date(r.uploadedAt).toLocaleDateString():"Unknown date",c=r.filename.split(".").pop().toUpperCase();let d="📄";return c==="PDF"?d="📕":["JPG","JPEG","PNG"].includes(c)&&(d="🖼️"),e.jsxs(aa,{href:r.path,target:"_blank",rel:"noopener noreferrer",title:`Download ${r.filename}`,children:[e.jsx("div",{className:"file-icon",children:d}),e.jsxs("div",{className:"file-info",children:[e.jsx("p",{className:"file-name",children:r.filename}),e.jsxs("p",{className:"file-date",children:["Uploaded: ",i]})]}),e.jsx("div",{className:"download-icon",children:"⬇️"})]},n)})})]}),e.jsxs(s,{children:[e.jsxs(Ze,{onClick:()=>document.getElementById("fileInput").click(),children:[e.jsx("div",{className:"icon",children:e.jsx(qe,{size:48})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Click to upload"})," or drag and drop"]}),e.jsx("p",{children:"PDF, JPG, PNG (Max 10MB)"}),e.jsx("input",{id:"fileInput",type:"file",multiple:!0,accept:".pdf,.jpg,.jpeg,.png",onChange:$e})]}),C.length>0&&e.jsxs(Xe,{children:[C.length," file(s) selected"]})]}),e.jsxs(P,{children:[e.jsx("span",{className:"section-icon",children:e.jsx(Ke,{})}),"Status"]}),e.jsx(s,{children:e.jsxs(We,{children:[e.jsxs("label",{htmlFor:"statusPending",children:[e.jsx("input",{id:"statusPending",type:"radio",name:"status",value:"Verification Pending",checked:a.status==="Verification Pending",onChange:l}),e.jsx(Ve,{size:18})," Verification Pending"]}),e.jsxs("label",{htmlFor:"statusVerified",children:[e.jsx("input",{id:"statusVerified",type:"radio",name:"status",value:"Verified",checked:a.status==="Verified",onChange:l}),e.jsx(Ge,{size:18})," Verified"]}),e.jsxs("label",{htmlFor:"statusRejected",children:[e.jsx("input",{id:"statusRejected",type:"radio",name:"status",value:"Rejected",checked:a.status==="Rejected",onChange:l}),e.jsx(Ue,{size:18})," Rejected"]})]})}),a.status==="Rejected"&&e.jsxs(s,{children:[e.jsx("label",{htmlFor:"rejectionReason",children:"Rejection Reason *"}),e.jsx("textarea",{id:"rejectionReason",name:"rejectionReason",value:a.rejectionReason,onChange:l,placeholder:"Enter the reason for rejection...",required:!0,"aria-required":"true",rows:4,style:{width:"100%",padding:"12px",border:`2px solid ${t.colors.gray200}`,borderRadius:t.borderRadius.md,fontSize:"14px",fontFamily:"inherit",resize:"vertical",minHeight:"100px"}}),e.jsxs(w,{children:[e.jsx(v,{size:14,style:{marginRight:"4px"}}),"This field is required when status is set to Rejected"]})]}),e.jsxs(ra,{children:[e.jsx("input",{type:"checkbox",id:"termsAccepted",checked:G,onChange:r=>U(r.target.checked)}),e.jsxs("label",{htmlFor:"termsAccepted",children:[e.jsx("strong",{children:"Declaration:"})," I hereby declare that the information provided in this burial record application is true and accurate to the best of my knowledge. I understand that providing false information may lead to legal action and the cancellation of this record. I agree to the ",e.jsx("strong",{children:"Terms and Conditions"})," of the ",e.jsx("strong",{children:"Islamia School & Mosque Association"})," Burial Legacy Application."]})]}),e.jsxs(ta,{children:[e.jsx(y,{$variant:"primary",type:"submit",disabled:O||!oe(),title:oe()?"":"Please fill all mandatory fields and accept the declaration to enable saving",children:O?e.jsxs(e.Fragment,{children:[e.jsx(ze,{size:"16px",thickness:"2px"})," Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(ge,{size:18})," Save Record"]})}),e.jsxs(y,{$variant:"secondary",type:"button",onClick:we,children:[e.jsx(Z,{size:18})," Reset Form"]}),!h&&$.autoSave&&e.jsxs(ia,{className:M,$saving:M==="saving",children:[e.jsx(ge,{size:16}),M==="saving"&&"Saving draft...",M==="saved"&&"Draft saved",!M&&"Auto-save enabled"]})]})]})}),ee&&e.jsxs(Fe,{isOpen:ee,onClose:()=>J(!1),title:"Manage Burial Locations",icon:e.jsx(ce,{size:28}),children:[e.jsxs("div",{style:{maxHeight:"400px",overflowY:"auto"},children:[e.jsx("p",{style:{fontSize:"14px",color:t.colors.gray600,marginBottom:"16px"},children:"Only custom locations can be deleted. System locations are fetched from the live database."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:ae.map(r=>{var n,i;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",padding:"16px",background:t.colors.gray50,borderRadius:t.borderRadius.md,border:`1px solid ${t.colors.gray200}`},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontWeight:600,fontSize:"16px"},children:r.name}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[(b==null?void 0:b._id)===r._id?e.jsx(y,{$variant:"primary",$size:"small",onClick:Ne,children:"Save"}):e.jsx(y,{$variant:"secondary",$size:"small",onClick:()=>L({...r}),children:"Edit Prices"}),e.jsx(y,{$variant:"danger",$size:"small",onClick:()=>ve(r._id||r.id,r.name),style:{padding:"6px"},children:e.jsx(He,{size:18})})]})]}),(b==null?void 0:b._id)===r._id?e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("label",{style:{fontSize:"12px",color:t.colors.gray600},children:"Daytime Price"}),e.jsx("input",{type:"number",value:b.daytimePrice,onChange:c=>L({...b,daytimePrice:parseInt(c.target.value)||0})})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("label",{style:{fontSize:"12px",color:t.colors.gray600},children:"Nighttime Price"}),e.jsx("input",{type:"number",value:b.nighttimePrice,onChange:c=>L({...b,nighttimePrice:parseInt(c.target.value)||0})})]})]}):e.jsxs("div",{style:{display:"flex",gap:"24px",fontSize:"14px",color:t.colors.gray700},children:[e.jsxs("span",{children:[e.jsx("strong",{children:"Daytime:"})," KES ",(n=r.daytimePrice)==null?void 0:n.toLocaleString()]}),e.jsxs("span",{children:[e.jsx("strong",{children:"Nighttime:"})," KES ",(i=r.nighttimePrice)==null?void 0:i.toLocaleString()]})]})]},r._id||r.id)})})]}),e.jsx("div",{style:{marginTop:"24px",display:"flex",justifyContent:"flex-end"},children:e.jsx(y,{$variant:"secondary",onClick:()=>J(!1),children:"Close"})})]})]})}export{ga as default};
