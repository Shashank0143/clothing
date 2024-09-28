"use strict";(self.webpackChunkfrotend=self.webpackChunkfrotend||[]).push([[28],{75944:(e,t,r)=>{r.d(t,{A:()=>c});r(65043);var n=r(81551),a=r(30105),i=r(89611),s=r(17339),o=r(62582),d=r(70579);const l=(0,n.A)((e=>({navbar:{display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:999,background:"#ffffff",width:"100%",padding:"1.5rem 1rem 1rem 1rem",boxShadow:"1px 1px 2px rgba(0, 0, 0, 0.1), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.3)",[e.breakpoints.between("999")]:{flexDirection:"row",alignItems:"center",padding:"1rem"}},menuIcon:{display:"none",[e.breakpoints.down("999")]:{display:"block",fontSize:"2rem","& svg":{fontSize:"2rem","&:hover":{color:"#ed1c24"}},"&:hover":{transform:"scale(1.1)"}}},dashboardHead:{fontSize:"2rem",fontWeight:900,color:"black",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.1)",[e.breakpoints.down("sm")]:{fontSize:"1.5rem",marginBottom:"0.5rem"},[e.breakpoints.down("999")]:{fontSize:"1.8rem",marginBottom:0},[e.breakpoints.down("xs")]:{marginRight:"1.5rem",fontSize:"1.8rem"}},contactButton:{padding:"10px 30px",borderRadius:"20px",boxShadow:"0px 2px 8px 0px #0000000a",cursor:"pointer",fontWeight:600,fontSize:"16px",color:"#fff",letterSpacing:"1px",background:"#414141",transition:"background-color 0.3s",marginRight:"2rem",[e.breakpoints.down("sm")]:{fontSize:"14px",padding:"8px 14px"},[e.breakpoints.between("sm","md")]:{fontSize:"14px",padding:"7px 15px"},[e.breakpoints.down("xs")]:{display:"none"},"&:hover":{background:"#ed1c24"}},headerBottom__logo_main:{height:"3.5rem",alignSelf:"center",paddingLeft:"25px","& img":{height:"100%",width:"auto"}}}))),c=e=>{let{toggleHandler:t}=e;const n=l();return(0,d.jsxs)("nav",{className:n.navbar,children:[(0,d.jsx)(s.A,{className:n.menuIcon,onClick:t,children:(0,d.jsx)(i.A,{fontSize:"2rem"})}),(0,d.jsx)("div",{className:n.dashboardHead,children:(0,d.jsx)(o.N_,{to:"/admin/dashboard",style:{textDecoration:"none",color:"none",width:"100%",height:"100%"},children:(0,d.jsx)("img",{src:r(46239),alt:"logo",className:n.headerBottom__logo_main})})}),(0,d.jsx)(o.N_,{to:"/contact",style:{textDecoration:"none",color:"none"},children:(0,d.jsx)(a.A,{className:n.contactButton,children:"Contact Us"})})]})}},97028:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(65043),a=(r(2150),r(44301)),i=r(62582),s=r(79456),o=r(42742),d=r(88881),l=r(91688),c=r(7530),m=r(81576),x=r(10559),h=r(77252),p=r(82110),u=r(75944),g=r(51222),f=r(70579);const b=function(){const e=(0,s.wA)(),t=(0,l.useHistory)(),r=(0,d.MW)(),{error:b,loading:j,orders:N}=(0,s.d4)((e=>e.allOrders)),{error:v,isDeleted:w}=(0,s.d4)((e=>e.deleteUpdateOrder)),[S,A]=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=()=>{window.innerWidth>999&&S&&A(!1)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[S]),(0,n.useEffect)((()=>{b&&(r.error(b),e((0,o.x8)())),v&&(r.error(v),e((0,o.x8)())),w&&(r.success("Order Deleted Successfully"),t.push("/admin/orders"),e({type:g.lY})),e((0,o.Vd)())}),[e,b,r,w,v]);const y=[{field:"id",headerName:"Order ID",minWidth:120,flex:.7,headerClassName:"column-header"},{field:"status",headerName:"Status",minWidth:100,flex:.8,headerClassName:"column-header hide-on-mobile",renderCell:e=>{const t="Delivered"===e.value?"green":"red";return(0,f.jsx)("div",{style:{color:t,fontWeight:600},children:e.value})}},{field:"itemsQty",headerName:"Items Qty",type:"number",minWidth:120,flex:.8,headerClassName:"column-header hide-on-mobile"},{field:"amount",headerName:"Amount",type:"number",minWidth:120,flex:.8,headerClassName:"column-header hide-on-mobile"},{field:"actions",headerName:"Actions",flex:1.5,sortable:!1,minWidth:150,headerClassName:"column-header1",renderCell:t=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.N_,{to:"/admin/order/".concat(t.getValue(t.id,"id")),children:(0,f.jsx)(x.A,{className:"icon-"})}),(0,f.jsx)(i.N_,{onClick:()=>{return r=t.getValue(t.id,"id"),void e((0,o.o8)(r));var r},children:(0,f.jsx)(h.A,{className:"iconbtn"})})]})}],k=[];return N&&N.forEach((e=>{k.push({id:e._id,itemsQty:e.orderItems.length,amount:e.totalPrice,status:e.orderStatus})})),(0,f.jsx)(f.Fragment,{children:j?(0,f.jsx)(m.A,{}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.A,{title:"ALL Orders - Admin"}),(0,f.jsxs)("div",{className:"product-list",style:{marginTop:0},children:[(0,f.jsx)("div",{className:S?"toggleBox":"listSidebar",children:(0,f.jsx)(p.A,{})}),(0,f.jsxs)("div",{className:"list-table",children:[(0,f.jsx)(u.A,{toggleHandler:()=>{A(!S)}}),(0,f.jsxs)("div",{className:"productListContainer",children:[(0,f.jsx)("h4",{id:"productListHeading",children:"ALL ORDERS"}),(0,f.jsx)(a.zhn,{rows:k,columns:y,pageSize:10,disableSelectionOnClick:!0,className:"productListTable",autoHeight:!0})]})]})]})]})})}},82110:(e,t,r)=>{r.d(t,{A:()=>N});r(65043);var n=r(91688),a=r(62582),i=r(60587),s=r(94496),o=r(72882),d=r(86447),l=r(58094),c=r(53827),m=r(22505),x=r(95065),h=r(48134),p=r(62647),u=r(33639),g=r(34233),f=r(79456),b=r(70579);const j=(0,d.A)((e=>({sidebar:{backgroundColor:"#fff",padding:"2rem 0",boxShadow:"2px 10px 6px rgba(0, 0, 0, 0.4)",borderRadius:"5px",margin:"0 auto",width:"100%"},avatar11:{width:"80px",height:"80px",border:"5px solid #414141",margin:"0 auto",marginBottom:"1rem",display:"flex",justifyContent:"center",alignItems:"center"},name:{fontWeight:"500",textAlign:"center",fontSize:"1rem"},email:{color:"#414141",marginBottom:"1.5rem",textAlign:"center",fontSize:"0.9rem"},divider:{height:"2px",width:"75%",backgroundColor:"#414141",margin:"2rem"},button:{marginLeft:"2rem !important",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",backgroundColor:"#292929 !important",color:"white   !important",width:"70%     !important",padding:"0.8rem 2rem   !important",borderRadius:"4px !important","&:hover":{backgroundColor:"#ed1c24 !important",color:"white !important"}},sideBarMenu:{listStyleType:"none",padding:0,margin:"3rem  10px",width:"100%"},sideBarMenuItem:{display:"flex",alignItems:"center",padding:"0.9rem 1rem",borderRadius:"2px",marginTop:"1.3rem",width:"75%",boxShadow:" 4px 4px 8px rgba(0, 0, 0, 0.3)","&:hover":{backgroundColor:"#ed1c24",boxShadow:"2px 2px 6px rgba(0, 0, 0, 0.4)","& svg":{color:"white"},"& span":{color:"white !important"}},"& svg":{color:"#414141",fontSize:"26px",margin:"0 20px  0 "},"& span":{color:"#414141",fontSize:"1rem",fontWeight:"500",marginLeft:"1rem",textDecoration:"none",textDecorationLine:"none",transition:"color 0.3s ease"}}})));const N=function(){const e=j(),{user:t,loading:r}=(0,f.d4)((e=>e.userData)),d=(0,n.useHistory)();return(0,b.jsx)(b.Fragment,{children:!r&&(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:e.sidebar,children:[(0,b.jsx)(i.A,{src:t&&t.avatar.url,alt:"User Avatar",className:e.avatar11}),(0,b.jsx)(s.A,{variant:"subtitle1",className:e.name,children:t&&t.name}),(0,b.jsx)(s.A,{variant:"subtitle2",className:e.email,children:t&&t.email}),(0,b.jsx)("div",{className:e.divider}),(0,b.jsxs)("ul",{className:e.sideBarMenu,children:[(0,b.jsx)(a.N_,{to:"/admin/dashboard",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(l.A,{fontSize:"large"}),(0,b.jsxs)("span",{className:e.sideBarMenuItem_text,children:[" ","Dashboard"]})]})}),(0,b.jsx)(a.N_,{to:"/",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(u.A,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Home"})]})}),(0,b.jsx)(a.N_,{to:"/admin/products",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(c.A,{fontSize:"large"}),(0,b.jsxs)("span",{className:e.sideBarMenuItem_text,children:[" ","Products"]})]})}),(0,b.jsx)(a.N_,{to:"/admin/new/product",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(m.A,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Add Product"})]})}),(0,b.jsx)(a.N_,{to:"/admin/orders",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(x.A,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Orders"})]})}),(0,b.jsx)(a.N_,{to:"/admin/reviews",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(h.A,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Reviews"})]})}),(0,b.jsx)(a.N_,{to:"/contact",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(g.A,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Contact"})]})})]}),(0,b.jsx)("div",{className:e.divider}),(0,b.jsxs)(o.A,{className:e.button,onClick:function(){d.push("/account")},variant:"contained",children:[(0,b.jsx)(p.A,{fontSize:"large",style:{marginRight:"10px"}}),"Account"]})]})})})}},2150:()=>{},46239:(e,t,r)=>{e.exports=r.p+"static/media/logo.02d461d14979c8ca454b.png"}}]);
//# sourceMappingURL=28.5b30afff.chunk.js.map