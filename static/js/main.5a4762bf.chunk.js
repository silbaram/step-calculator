(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{63:function(e,t,a){e.exports=a(79)},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(52),s=a.n(o),l=a(45),u=a(20),c=a(21),i=a(24),m=a(23),p=a(25),b=a(124),N=a(125),h=a(122),C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).bindOffer=function(e){(0,a.props.setNumber)(e)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{variant:"contained",color:this.props.colorCode,size:"small",onClick:function(){return e.bindOffer(e.props.buttonDisplayName)}},this.props.buttonDisplayName)}}]),t}(n.Component),d=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).bindOffer=function(e){(0,a.props.setEquation)(e)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{style:{backgroundColor:this.props.colorCode},variant:"contained",size:"small",onClick:function(){return e.bindOffer(e.props.buttonDisplayName)}},this.props.buttonDisplayName)}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).setCalculate=function(){(0,a.props.setCalculate)()},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{variant:"contained",color:this.props.colorCode,size:"small",onClick:function(){return e.setCalculate()}},this.props.buttonDisplayName)}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).choiceEquation=void 0,a.setEquation=function(e){"RIGHT"===(0,a.props.setPresentCalculationEquation)(e)&&(a.choiceEquation=e)},a.setNumber=function(e){(0,a.props.setPresentCalculationNumber)(e)},a.setCalculate=function(){(0,a.props.calculate)()},a.buttonColor=function(e){return a.choiceEquation===e?"#21b6ae":"#2e7d32"},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{maxWidth:"sm"},r.a.createElement(N.a,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:2,margin:1}},r.a.createElement(E,{buttonDisplayName:"AC",colorCode:"success"}),r.a.createElement(d,{buttonDisplayName:"%",colorCode:this.buttonColor("%"),setEquation:this.setEquation}),r.a.createElement(d,{buttonDisplayName:"/",colorCode:this.buttonColor("/"),setEquation:this.setEquation}),r.a.createElement(E,{buttonDisplayName:"Del",colorCode:"success"})),r.a.createElement(N.a,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:2,margin:1}},r.a.createElement(C,{buttonDisplayName:"7",colorCode:"success",setNumber:this.setNumber}),r.a.createElement(C,{buttonDisplayName:"8",colorCode:"success",setNumber:this.setNumber}),r.a.createElement(C,{buttonDisplayName:"9",colorCode:"success",setNumber:this.setNumber}),r.a.createElement(d,{buttonDisplayName:"*",colorCode:this.buttonColor("*"),setEquation:this.setEquation})),r.a.createElement(N.a,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:2,margin:1}},r.a.createElement(C,{buttonDisplayName:"4",colorCode:"success",setNumber:this.setNumber}),r.a.createElement(C,{buttonDisplayName:"5",colorCode:"success",setNumber:this.setNumber}),r.a.createElement(C,{buttonDisplayName:"6",colorCode:"success",setNumber:this.setNumber}),r.a.createElement(d,{buttonDisplayName:"-",colorCode:this.buttonColor("-"),setEquation:this.setEquation})),r.a.createElement(N.a,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:2,margin:1}},r.a.createElement(C,{buttonDisplayName:"1",colorCode:"success",setNumber:this.setNumber}),r.a.createElement(C,{buttonDisplayName:"2",colorCode:"success",setNumber:this.setNumber}),r.a.createElement(C,{buttonDisplayName:"3",colorCode:"success",setNumber:this.setNumber}),r.a.createElement(d,{buttonDisplayName:"+",colorCode:this.buttonColor("+"),setEquation:this.setEquation})),r.a.createElement(N.a,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:2,margin:1}},r.a.createElement(E,{buttonDisplayName:"+/-",colorCode:"success"}),r.a.createElement(C,{buttonDisplayName:"0",colorCode:"success",setNumber:this.setNumber}),r.a.createElement(E,{buttonDisplayName:".",colorCode:"success"}),r.a.createElement(E,{buttonDisplayName:"=",colorCode:"success",setCalculate:this.setCalculate})))}}]),t}(n.Component),y=a(121),O=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{maxWidth:"sm"},r.a.createElement(y.a,{fullWidth:!0,color:"info",id:"calculatorText",value:this.props.displayNumber}))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).LEFT_INPUT_NUMBER_POSITION="LEFT",a.RIGHT_INPUT_NUMBER_POSITION="RIGHT",a.numberInputPositon="",a.setEquation=function(e){if(a.numberInputPositon===a.LEFT_INPUT_NUMBER_POSITION||null!==a.state.presentCalculationFormula.equation)return a.setState({presentCalculationFormula:Object(l.a)({},a.state.presentCalculationFormula,{equation:e})}),a.RIGHT_INPUT_NUMBER_POSITION},a.setNumber=function(e){null===a.state.presentCalculationFormula.equation?a.setState({presentCalculationFormula:Object(l.a)({},a.state.presentCalculationFormula,{leftNumber:a.state.presentCalculationFormula.leftNumber.concat(e)})},function(){this.setState({displayNumber:this.state.presentCalculationFormula.leftNumber.join("")}),this.numberInputPositon=this.LEFT_INPUT_NUMBER_POSITION}):a.setState({presentCalculationFormula:Object(l.a)({},a.state.presentCalculationFormula,{rightNumber:a.state.presentCalculationFormula.rightNumber.concat(e)}),displayNumber:a.state.presentCalculationFormula.rightNumber.join("")},function(){this.setState({displayNumber:this.state.presentCalculationFormula.rightNumber.join("")}),this.numberInputPositon=this.RIGHT_INPUT_NUMBER_POSITION})},a.calculate=function(){"/"===a.state.presentCalculationFormula.equation&&a.setState({displayNumber:a.state.presentCalculationFormula.leftNumber/a.state.presentCalculationFormula.rightNumber})},a.state={calculatorHistory:[],presentCalculationFormula:{equation:null,leftNumber:[],rightNumber:[],calculateResult:0},displayNumber:0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{displayNumber:this.state.displayNumber}),r.a.createElement(f,{setPresentCalculationEquation:this.setEquation,setPresentCalculationNumber:this.setNumber,calculate:this.calculate}))}}]),t}(n.Component);var j=function(){return r.a.createElement("div",null,r.a.createElement(g,null))},I=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,120)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),o(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null))),I(console.log)}},[[63,3,2]]]);
//# sourceMappingURL=main.5a4762bf.chunk.js.map