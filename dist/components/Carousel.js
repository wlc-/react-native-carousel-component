Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/Carousel.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _ViewPager=require('./ViewPager');var _ViewPager2=_interopRequireDefault(_ViewPager);var _CarouselHeader=require('./CarouselHeader');var _CarouselHeader2=_interopRequireDefault(_CarouselHeader);var _PageControl=require('./PageControl');var _PageControl2=_interopRequireDefault(_PageControl);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var babelPluginFlowReactPropTypes_proptype_ReactElement=require('react').babelPluginFlowReactPropTypes_proptype_ReactElement||require('prop-types').any;var styles=_reactNative.StyleSheet.create({container:{flex:1},viewPager:{margin:10,overflow:'visible',backgroundColor:'black'},title:{color:'white',fontSize:12,textAlign:'center'}});var defaultProps={header:null,headerContentStyle:null,title:null,titleStyle:null,titleContentStyle:null,subTitle:null,subTitleStyle:null,leftItem:null,rightItem:null,style:null,viewPagerStyle:null,selectedIndex:0,onSelectedIndexChange:function onSelectedIndexChange(){},showPageControl:true,cards:[]};var CarouselComponent=function(_Component){_inherits(CarouselComponent,_Component);function CarouselComponent(props){_classCallCheck(this,CarouselComponent);var _this=_possibleConstructorReturn(this,(CarouselComponent.__proto__||Object.getPrototypeOf(CarouselComponent)).call(this,props));_this.state={selectedIndex:props.selectedIndex};_this.selectedIndexChange=_this.selectedIndexChange.bind(_this);return _this;}_createClass(CarouselComponent,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nexProps){if(this.props.selectedIndex!==nexProps.selectedIndex){this.setState({selectedIndex:nexProps.selectedIndex});}}},{key:'selectedIndexChange',value:function selectedIndexChange(index){var onSelectedIndexChange=this.props.onSelectedIndexChange;onSelectedIndexChange(index);this.setState({selectedIndex:index});}},{key:'renderHeader',value:function renderHeader(){if(this.props.header){return this.props.header;}var _props=this.props,leftItem=_props.leftItem,rightItem=_props.rightItem,title=_props.title,titleStyle=_props.titleStyle,subTitle=_props.subTitle,subTitleStyle=_props.subTitleStyle,headerContentStyle=_props.headerContentStyle,titleContentStyle=_props.titleContentStyle,showPageControl=_props.showPageControl,cards=_props.cards;var pageControl=showPageControl?_react2.default.createElement(_PageControl2.default,{count:cards.length,selectedIndex:this.state.selectedIndex,__source:{fileName:_jsxFileName,lineNumber:110}}):null;return _react2.default.createElement(_CarouselHeader2.default,{style:styles.header,leftItem:leftItem,rightItem:rightItem,__source:{fileName:_jsxFileName,lineNumber:117}},_react2.default.createElement(_reactNative.View,{style:[styles.headerContent,headerContentStyle],__source:{fileName:_jsxFileName,lineNumber:122}},_react2.default.createElement(_reactNative.Text,{style:[styles.title,titleContentStyle],__source:{fileName:_jsxFileName,lineNumber:123}},_react2.default.createElement(_reactNative.Text,{style:[styles.title,titleStyle],__source:{fileName:_jsxFileName,lineNumber:124}},title),'\n',_react2.default.createElement(_reactNative.Text,{style:[styles.subTitle,subTitleStyle],__source:{fileName:_jsxFileName,lineNumber:128}},subTitle)),pageControl));}},{key:'render',value:function render(){var _props2=this.props,cards=_props2.cards,style=_props2.style,viewPagerStyle=_props2.viewPagerStyle;return _react2.default.createElement(_reactNative.View,{style:[styles.container,style],__source:{fileName:_jsxFileName,lineNumber:146}},this.renderHeader(),_react2.default.createElement(_ViewPager2.default,{style:[styles.viewPager,viewPagerStyle],count:cards.length,selectedIndex:this.state.selectedIndex,onSelectedIndexChange:this.selectedIndexChange,bounces:true,__source:{fileName:_jsxFileName,lineNumber:149}},cards));}}]);return CarouselComponent;}(_react.Component);CarouselComponent.defaultProps=defaultProps;CarouselComponent.propTypes={style:require('prop-types').any,viewPagerStyle:require('prop-types').any,selectedIndex:require('prop-types').number,onSelectedIndexChange:require('prop-types').func,cards:require('prop-types').arrayOf(typeof babelPluginFlowReactPropTypes_proptype_ReactElement==='function'?babelPluginFlowReactPropTypes_proptype_ReactElement:require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_ReactElement)),header:typeof babelPluginFlowReactPropTypes_proptype_ReactElement==='function'?babelPluginFlowReactPropTypes_proptype_ReactElement:require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_ReactElement),headerContentStyle:require('prop-types').any,title:require('prop-types').string,titleStyle:require('prop-types').any,titleContentStyle:require('prop-types').any,subTitle:require('prop-types').string,subTitleStyle:require('prop-types').any,leftItem:require('prop-types').object,rightItem:require('prop-types').object,showPageControl:require('prop-types').bool.isRequired};exports.default=CarouselComponent;