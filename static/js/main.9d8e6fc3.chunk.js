(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{63:function(t,e,a){t.exports=a(79)},79:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(52),l=a.n(r),s=a(45),i=a(19),u=a(20),c=a(23),m=a(22),p=a(24),b=a(124),N=a(125),h=a(122),C=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).bindOffer=function(t){(0,a.props.setNumber)(t)},a}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(h.a,{variant:"contained",color:this.props.colorCode,size:"small",onClick:function(){return t.bindOffer(t.props.buttonDisplayName)}},this.props.buttonDisplayName)}}]),e}(n.Component),f=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).bindOffer=function(t){(0,a.props.setEquation)(t)},a}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(h.a,{style:{backgroundColor:this.props.colorCode},variant:"contained",size:"small",onClick:function(){return t.bindOffer(t.props.buttonDisplayName)}},this.props.buttonDisplayName)}}]),e}(n.Component),d=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).setCalculate=function(){(0,a.props.setCalculate)()},a}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(h.a,{variant:"contained",color:this.props.colorCode,size:"small",onClick:function(){return t.setCalculate()}},this.props.buttonDisplayName)}}]),e}(n.Component),E=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).setCalculate=function(){(0,a.props.setValueInitialization)()},a}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(h.a,{variant:"contained",color:this.props.colorCode,size:"small",onClick:function(){return t.setCalculate()}},this.props.buttonDisplayName)}}]),e}(n.Component),y=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).choiceEquation=void 0,a.setEquation=function(t){"RIGHT"===(0,a.props.setPresentCalculationEquation)(t)&&(a.choiceEquation=t)},a.resetEquationButtonColor=function(){a.choiceEquation=void 0},a.setNumber=function(t){(0,a.props.setPresentCalculationNumber)(t)},a.setCalculate=function(){(0,a.props.calculate)()&&a.resetEquationButtonColor()},a.setButtonColor=function(t){return a.choiceEquation===t?"#21b6ae":"#2e7d32"},a.setValueInitialization=function(){(0,a.props.valueInitialization)()},a}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement(b.a,{maxWidth:"sm"},o.a.createElement(N.a,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:2,margin:1}},o.a.createElement(E,{buttonDisplayName:"AC",colorCode:"success",setValueInitialization:this.setValueInitialization}),o.a.createElement(f,{buttonDisplayName:"%",colorCode:this.setButtonColor("%"),setEquation:this.setEquation}),o.a.createElement(f,{buttonDisplayName:"/",colorCode:this.setButtonColor("/"),setEquation:this.setEquation}),o.a.createElement(d,{buttonDisplayName:"Del",colorCode:"success"})),o.a.createElement(N.a,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:2,margin:1}},o.a.createElement(C,{buttonDisplayName:"7",colorCode:"success",setNumber:this.setNumber}),o.a.createElement(C,{buttonDisplayName:"8",colorCode:"success",setNumber:this.setNumber}),o.a.createElement(C,{buttonDisplayName:"9",colorCode:"success",setNumber:this.setNumber}),o.a.createElement(f,{buttonDisplayName:"*",colorCode:this.setButtonColor("*"),setEquation:this.setEquation})),o.a.createElement(N.a,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:2,margin:1}},o.a.createElement(C,{buttonDisplayName:"4",colorCode:"success",setNumber:this.setNumber}),o.a.createElement(C,{buttonDisplayName:"5",colorCode:"success",setNumber:this.setNumber}),o.a.createElement(C,{buttonDisplayName:"6",colorCode:"success",setNumber:this.setNumber}),o.a.createElement(f,{buttonDisplayName:"-",colorCode:this.setButtonColor("-"),setEquation:this.setEquation})),o.a.createElement(N.a,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:2,margin:1}},o.a.createElement(C,{buttonDisplayName:"1",colorCode:"success",setNumber:this.setNumber}),o.a.createElement(C,{buttonDisplayName:"2",colorCode:"success",setNumber:this.setNumber}),o.a.createElement(C,{buttonDisplayName:"3",colorCode:"success",setNumber:this.setNumber}),o.a.createElement(f,{buttonDisplayName:"+",colorCode:this.setButtonColor("+"),setEquation:this.setEquation})),o.a.createElement(N.a,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:2,margin:1}},o.a.createElement(d,{buttonDisplayName:"+/-",colorCode:"success"}),o.a.createElement(C,{buttonDisplayName:"0",colorCode:"success",setNumber:this.setNumber}),o.a.createElement(d,{buttonDisplayName:".",colorCode:"success"}),o.a.createElement(d,{buttonDisplayName:"=",colorCode:"success",setCalculate:this.setCalculate})))}}]),e}(n.Component),O=a(121),g=function(t){function e(){return Object(i.a)(this,e),Object(c.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement(b.a,{maxWidth:"sm"},o.a.createElement(O.a,{fullWidth:!0,color:"info",id:"calculatorText",value:this.props.displayNumber}))}}]),e}(n.Component),I=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(c.a)(this,Object(m.a)(e).call(this,t))).LEFT_INPUT_NUMBER_POSITION="LEFT",a.RIGHT_INPUT_NUMBER_POSITION="RIGHT",a.numberInputPositon="",a.setEquation=function(t){if(a.numberInputPositon===a.LEFT_INPUT_NUMBER_POSITION||null!==a.state.presentCalculationFormula.equation)return a.setState({presentCalculationFormula:Object(s.a)({},a.state.presentCalculationFormula,{equation:t})}),a.RIGHT_INPUT_NUMBER_POSITION},a.setNumber=function(t){null===a.state.presentCalculationFormula.equation?a.setState({presentCalculationFormula:Object(s.a)({},a.state.presentCalculationFormula,{leftNumber:a.state.presentCalculationFormula.leftNumber.concat(t)})},function(){this.setState({displayNumber:this.state.presentCalculationFormula.leftNumber.join("")}),this.numberInputPositon=this.LEFT_INPUT_NUMBER_POSITION}):a.setState({presentCalculationFormula:Object(s.a)({},a.state.presentCalculationFormula,{rightNumber:a.state.presentCalculationFormula.rightNumber.concat(t)}),displayNumber:a.state.presentCalculationFormula.rightNumber.join("")},function(){this.setState({displayNumber:this.state.presentCalculationFormula.rightNumber.join("")}),this.numberInputPositon=this.RIGHT_INPUT_NUMBER_POSITION})},a.calculate=function(){if(0!==a.state.presentCalculationFormula.leftNumber.length&&0!==a.state.presentCalculationFormula.rightNumber.length){var t=!1;return"/"===a.state.presentCalculationFormula.equation&&(t=!0,a.setState({displayNumber:Number(a.state.presentCalculationFormula.leftNumber.join(""))/Number(a.state.presentCalculationFormula.rightNumber.join(""))})),t&&a.processingAfterCalculation(),t}},a.processingAfterCalculation=function(){a.numberInputPositon=a.RIGHT_INPUT_NUMBER_POSITION,a.setState({presentCalculationFormula:Object(s.a)({},a.state.presentCalculationFormula,{leftNumber:a.state.displayNumber.replace(""),equation:null})},function(){console.log("this.state",this.state)})},a.valueInitialization=function(){a.numberInputPositon=a.RIGHT_INPUT_NUMBER_POSITION,a.setState({calculatorHistory:[],presentCalculationFormula:{equation:null,leftNumber:[],rightNumber:[],calculateResult:0},displayNumber:0})},a.state={calculatorHistory:[],presentCalculationFormula:{equation:null,leftNumber:[],rightNumber:[],calculateResult:0},displayNumber:0},a}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{displayNumber:this.state.displayNumber}),o.a.createElement(y,{setPresentCalculationEquation:this.setEquation,setPresentCalculationNumber:this.setNumber,calculate:this.calculate,valueInitialization:this.valueInitialization}))}}]),e}(n.Component);var j=function(){return o.a.createElement("div",null,o.a.createElement(I,null))},v=function(t){t&&t instanceof Function&&a.e(1).then(a.bind(null,120)).then(function(e){var a=e.getCLS,n=e.getFID,o=e.getFCP,r=e.getLCP,l=e.getTTFB;a(t),n(t),o(t),r(t),l(t)})};l.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null))),v(console.log)}},[[63,3,2]]]);
//# sourceMappingURL=main.9d8e6fc3.chunk.js.map