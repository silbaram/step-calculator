(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{63:function(e,t,a){e.exports=a(79)},79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(52),o=a.n(r),u=a(29),i=a(14),s=a(15),c=a(19),m=a(16),p=a(20),b=a(124),N=a(125),h=a(122),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).bindOffer=function(e){(0,a.props.setNumber)(e)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(h.a,{variant:"contained",color:this.props.colorCode,size:"small",onClick:function(){return e.bindOffer(e.props.buttonDisplayName)}},this.props.buttonDisplayName)}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).bindOffer=function(e){(0,a.props.setEquation)(e)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(h.a,{style:{backgroundColor:this.props.colorCode},variant:"contained",size:"small",onClick:function(){return e.bindOffer(e.props.buttonDisplayName)}},this.props.buttonDisplayName)}}]),t}(n.Component),d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).setCalculate=function(){(0,a.props.setCalculate)()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(h.a,{variant:"contained",color:this.props.colorCode,size:"small",onClick:function(){return e.setCalculate()}},this.props.buttonDisplayName)}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).setCalculate=function(){(0,a.props.setValueInitialization)()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(h.a,{variant:"contained",color:this.props.colorCode,size:"small",onClick:function(){return e.setCalculate()}},this.props.buttonDisplayName)}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).setDeleteNumberValue=function(){(0,a.props.setDeleteNumberValue)()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(h.a,{variant:"contained",color:this.props.colorCode,size:"small",onClick:function(){return e.setDeleteNumberValue()}},this.props.buttonDisplayName)}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).setDecimalPointValue=function(){(0,a.props.setDecimalPointValue)()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(h.a,{variant:"contained",color:this.props.colorCode,size:"small",onClick:function(){return e.setDecimalPointValue()}},this.props.buttonDisplayName)}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).choiceEquation=void 0,a.setEquation=function(e){"RIGHT"===(0,a.props.setPresentCalculationEquation)(e)&&(a.choiceEquation=e)},a.resetEquationButtonColor=function(){a.choiceEquation=void 0},a.setNumber=function(e){(0,a.props.setPresentCalculationNumber)(e)},a.setCalculate=function(){(0,a.props.calculate)()&&a.resetEquationButtonColor()},a.setButtonColor=function(e){return a.choiceEquation===e?"#21b6ae":"#2e7d32"},a.setValueInitialization=function(){(0,a.props.valueInitialization)()},a.setDeleteNumberValue=function(){(0,a.props.deleteNumberValue)()},a.setDecimalPointValue=function(){(0,a.props.setDecimalPointValue)()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(b.a,{maxWidth:"sm"},l.a.createElement(N.a,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:2,margin:1}},l.a.createElement(O,{buttonDisplayName:"AC",colorCode:"success",setValueInitialization:this.setValueInitialization}),l.a.createElement(f,{buttonDisplayName:"%",colorCode:this.setButtonColor("%"),setEquation:this.setEquation}),l.a.createElement(f,{buttonDisplayName:"/",colorCode:this.setButtonColor("/"),setEquation:this.setEquation}),l.a.createElement(E,{buttonDisplayName:"Del",colorCode:"success",setDeleteNumberValue:this.setDeleteNumberValue})),l.a.createElement(N.a,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:2,margin:1}},l.a.createElement(C,{buttonDisplayName:"7",colorCode:"success",setNumber:this.setNumber}),l.a.createElement(C,{buttonDisplayName:"8",colorCode:"success",setNumber:this.setNumber}),l.a.createElement(C,{buttonDisplayName:"9",colorCode:"success",setNumber:this.setNumber}),l.a.createElement(f,{buttonDisplayName:"*",colorCode:this.setButtonColor("*"),setEquation:this.setEquation})),l.a.createElement(N.a,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:2,margin:1}},l.a.createElement(C,{buttonDisplayName:"4",colorCode:"success",setNumber:this.setNumber}),l.a.createElement(C,{buttonDisplayName:"5",colorCode:"success",setNumber:this.setNumber}),l.a.createElement(C,{buttonDisplayName:"6",colorCode:"success",setNumber:this.setNumber}),l.a.createElement(f,{buttonDisplayName:"-",colorCode:this.setButtonColor("-"),setEquation:this.setEquation})),l.a.createElement(N.a,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:2,margin:1}},l.a.createElement(C,{buttonDisplayName:"1",colorCode:"success",setNumber:this.setNumber}),l.a.createElement(C,{buttonDisplayName:"2",colorCode:"success",setNumber:this.setNumber}),l.a.createElement(C,{buttonDisplayName:"3",colorCode:"success",setNumber:this.setNumber}),l.a.createElement(f,{buttonDisplayName:"+",colorCode:this.setButtonColor("+"),setEquation:this.setEquation})),l.a.createElement(N.a,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:2,margin:1}},l.a.createElement(d,{buttonDisplayName:"+/-",colorCode:"success"}),l.a.createElement(C,{buttonDisplayName:"0",colorCode:"success",setNumber:this.setNumber}),l.a.createElement(I,{buttonDisplayName:".",colorCode:"success",setDecimalPointValue:this.setDecimalPointValue}),l.a.createElement(d,{buttonDisplayName:"=",colorCode:"success",setCalculate:this.setCalculate})))}}]),t}(n.Component),g=a(121),j=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(b.a,{maxWidth:"sm"},l.a.createElement(g.a,{fullWidth:!0,color:"info",id:"calculatorText",value:this.props.displayNumber}))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).LEFT_INPUT_NUMBER_POSITION="LEFT",a.RIGHT_INPUT_NUMBER_POSITION="RIGHT",a.numberInputPositon="",a.isLeftDeleteNumber=!1,a.isRightDeleteNumber=!1,a.isCalculating=!1,a.setEquation=function(e){return a.numberInputPositon===a.LEFT_INPUT_NUMBER_POSITION||null!==a.state.presentCalculationFormula.equation?(a.setState({presentCalculationFormula:Object(u.a)({},a.state.presentCalculationFormula,{equation:e})}),a.RIGHT_INPUT_NUMBER_POSITION):a.isCalculating?(a.setState({presentCalculationFormula:Object(u.a)({},a.state.presentCalculationFormula,{equation:e})}),console.log("equation",e),console.info("this.state.presentCalculationFormula",a.state.presentCalculationFormula),a.RIGHT_INPUT_NUMBER_POSITION):void 0},a.setNumber=function(e){null===a.state.presentCalculationFormula.equation&&0==a.isCalculating?a.setState({presentCalculationFormula:Object(u.a)({},a.state.presentCalculationFormula,{leftNumber:a.state.presentCalculationFormula.leftNumber.concat(e)})},function(){this.setState({displayNumber:this.state.presentCalculationFormula.leftNumber.join("")}),this.numberInputPositon=this.LEFT_INPUT_NUMBER_POSITION}):a.setState({presentCalculationFormula:Object(u.a)({},a.state.presentCalculationFormula,{rightNumber:a.state.presentCalculationFormula.rightNumber.concat(e)}),displayNumber:a.state.presentCalculationFormula.rightNumber.join("")},function(){this.setState({displayNumber:this.state.presentCalculationFormula.rightNumber.join("")}),this.numberInputPositon=this.RIGHT_INPUT_NUMBER_POSITION})},a.calculate=function(){if(0!==a.state.presentCalculationFormula.leftNumber.length&&0!==a.state.presentCalculationFormula.rightNumber.length){a.isCalculating=!0;var e,t=0,n=Number(a.state.presentCalculationFormula.leftNumber.join("")),l=Number(a.state.presentCalculationFormula.rightNumber.join(""));return"%"===a.state.presentCalculationFormula.equation?t=n%l:"/"===a.state.presentCalculationFormula.equation?t=n/l:"*"===a.state.presentCalculationFormula.equation?t=n*l:"-"===a.state.presentCalculationFormula.equation?t=n-l:"+"===a.state.presentCalculationFormula.equation&&(t=n+l),(e=a.setCalcuateReultValue(t))&&a.processingAfterCalculation(t),e}},a.setCalcuateReultValue=function(e){return a.setState({displayNumber:e}),!0},a.processingAfterCalculation=function(e){a.numberInputPositon=a.RIGHT_INPUT_NUMBER_POSITION,a.setState({presentCalculationFormula:Object(u.a)({},a.state.presentCalculationFormula,{leftNumber:Array.from(String(e)),rightNumber:[],equation:null})},function(){console.log("processingAfterCalculation this.state",this.state)})},a.valueInitialization=function(){a.numberInputPositon=a.RIGHT_INPUT_NUMBER_POSITION,a.setState({calculatorHistory:[],presentCalculationFormula:{equation:null,leftNumber:[],rightNumber:[],calculateResult:0},displayNumber:0})},a.deleteNumberValue=function(){a.isLeftNumberValue()?a.setDeleteValue(a.LEFT_INPUT_NUMBER_POSITION,a.state.presentCalculationFormula.leftNumber):a.isRightNumberValue()&&a.setDeleteValue(a.RIGHT_INPUT_NUMBER_POSITION,a.state.presentCalculationFormula.rightNumber)},a.setDeleteValue=function(e,t){t.pop(),a.LEFT_INPUT_NUMBER_POSITION===e?a.setState({presentCalculationFormula:Object(u.a)({},a.state.presentCalculationFormula,{leftNumber:t}),displayNumber:0===t.length?0:t.join("")}):(a.RIGHT_INPUT_NUMBER_POSITION=e)&&a.setState({presentCalculationFormula:Object(u.a)({},a.state.presentCalculationFormula,{rightNumber:t}),displayNumber:0===t.lengthLength?0:t.join("")})},a.setDecimalPointValue=function(){if(a.isInitState()||a.isLeftNumberValue()&&!a.isLeftDeleteNumber){if(a.isInitState())var e="0.";else e=".";a.setState({presentCalculationFormula:Object(u.a)({},a.state.presentCalculationFormula,{leftNumber:a.state.presentCalculationFormula.leftNumber.concat(e)})},function(){this.setState({displayNumber:this.state.presentCalculationFormula.leftNumber.join("")}),this.isLeftDeleteNumber=!0})}else a.isRightNumberValue()&&!a.isRightDeleteNumber&&a.setState({presentCalculationFormula:Object(u.a)({},a.state.presentCalculationFormula,{rightNumber:a.state.presentCalculationFormula.leftNumber.concat(".")})},function(){this.setState({displayNumber:this.state.presentCalculationFormula.rightNumber.join("")}),this.isLeftDeleteNumber=!0})},a.isInitState=function(){return 0==a.state.presentCalculationFormula.leftNumber.length&&(""===a.numberInputPositon||a.numberInputPositon===a.LEFT_INPUT_NUMBER_POSITION)},a.isLeftNumberValue=function(){return a.state.presentCalculationFormula.leftNumber.length>0&&a.numberInputPositon===a.LEFT_INPUT_NUMBER_POSITION},a.isRightNumberValue=function(){return a.state.presentCalculationFormula.rightNumber.length>0&&a.numberInputPositon===a.RIGHT_INPUT_NUMBER_POSITION},a.state={calculatorHistory:[],presentCalculationFormula:{equation:null,leftNumber:[],rightNumber:[],calculateResult:0},displayNumber:0},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,{displayNumber:this.state.displayNumber}),l.a.createElement(y,{setPresentCalculationEquation:this.setEquation,setPresentCalculationNumber:this.setNumber,calculate:this.calculate,valueInitialization:this.valueInitialization,deleteNumberValue:this.deleteNumberValue,setDecimalPointValue:this.setDecimalPointValue}))}}]),t}(n.Component);var T=function(){return l.a.createElement("div",null,l.a.createElement(F,null))},P=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,120)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null))),P(console.log)}},[[63,3,2]]]);
//# sourceMappingURL=main.e1ac49df.chunk.js.map