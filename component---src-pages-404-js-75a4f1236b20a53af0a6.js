(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{160:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return u});var n=a(3),r=a.n(n),c=a(0),o=a.n(c),i=a(171),s=a(169),h=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return o.a.createElement(i.a,{location:this.props.location,title:t},o.a.createElement(s.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(o.a.Component);e.default=h;var u="1097489062"},165:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=a(38),s=a.n(i);a.d(e,"a",function(){return s.a});a(167);var h=r.a.createContext({}),u=function(t){return r.a.createElement(h.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},166:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return h});var n=a(172),r=a.n(n),c=a(173),o=a.n(c);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},body:{color:"var(--textNormal)"}}},delete o.a.googleFonts;var i=new r.a(o.a);var s=i.rhythm,h=i.scale},167:function(t,e,a){var n;t.exports=(n=a(168))&&n.default||n},168:function(t,e,a){"use strict";a.r(e);var n=a(10),r=a.n(n),c=a(0),o=a.n(c),i=a(5),s=a.n(i),h=a(58),u=a(2),l=function(t){var e=t.location,a=u.default.getResourcesForPathnameSync(e.pathname);return o.a.createElement(h.a,r()({location:e,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},e.default=l},169:function(t,e,a){"use strict";var n=a(170),r=a(0),c=a.n(r),o=a(5),i=a.n(o),s=a(174),h=a.n(s),u=a(165);function l(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,i=t.title;return c.a.createElement(u.b,{query:d,render:function(t){var n=e||t.site.siteMetadata.description;return c.a.createElement(h.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},e.a=l;var d="1025518380"},170:function(t){t.exports={data:{site:{siteMetadata:{title:"iamprettydamn.cool",description:"blog from Alex Garcia",author:"Alex Garcia"}}}}},171:function(t,e,a){"use strict";var n=a(3),r=a.n(n),c=a(0),o=a.n(c),i=a(165),s=(a(57),a(19)),h=a.n(s),u=a(39),l=a.n(u);a(158);function d(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var a=e[0];return{x:a.clientX,y:a.clientY}}var n=t.pageX;if(void 0!==n)return{x:n,y:t.pageY}}return{x:0,y:0}}var p=function(t){function e(e){var a;return(a=t.call(this,e)||this).handleClick=a.handleClick.bind(l()(a)),a.handleTouchStart=a.handleTouchStart.bind(l()(a)),a.handleTouchMove=a.handleTouchMove.bind(l()(a)),a.handleTouchEnd=a.handleTouchEnd.bind(l()(a)),a.handleTouchCancel=a.handleTouchCancel.bind(l()(a)),a.handleFocus=a.handleFocus.bind(l()(a)),a.handleBlur=a.handleBlur.bind(l()(a)),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}r()(e,t);var a=e.prototype;return a.componentWillReceiveProps=function(t){"checked"in t&&(this.setState({checked:!!t.checked}),this.previouslyChecked=!!t.checked)},a.handleClick=function(t){var e=this.input;if(this.previouslyChecked=e.checked,t.target!==e&&!this.moved)return t.preventDefault(),e.focus(),void e.click();this.setState({checked:e.checked})},a.handleTouchStart=function(t){this.startX=d(t).x,this.touchStarted=!0,this.hadFocusAtTouchStart=this.state.hasFocus,this.setState({hasFocus:!0})},a.handleTouchMove=function(t){if(this.touchStarted&&(this.touchMoved=!0,null!=this.startX)){var e=d(t).x;this.state.checked&&e+15<this.startX?(this.setState({checked:!1}),this.startX=e):!this.state.checked&&e-15>this.startX&&(this.setState({checked:!0}),this.startX=e)}},a.handleTouchEnd=function(t){if(this.touchMoved){var e=this.input;t.preventDefault(),null!=this.startX&&(this.previouslyChecked!==this.state.checked&&e.click(),this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})}},a.handleTouchCancel=function(t){null!=this.startX&&(this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})},a.handleFocus=function(t){var e=this.props.onFocus;e&&e(t),this.hadFocusAtTouchStart=!0,this.setState({hasFocus:!0})},a.handleBlur=function(t){var e=this.props.onBlur;e&&e(t),this.hadFocusAtTouchStart=!1,this.setState({hasFocus:!1})},a.getIcon=function(t){var a=this.props.icons;return a?void 0===a[t]?e.defaultProps.icons[t]:a[t]:null},a.render=function(){var t=this,e=this.props,a=e.className,n=(e.icons,h()(e,["className","icons"])),r="react-toggle"+(this.state.checked?" react-toggle--checked":"")+(this.state.hasFocus?" react-toggle--focus":"")+(this.props.disabled?" react-toggle--disabled":"")+(a?" "+a:"");return o.a.createElement("div",{className:r,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,onTouchCancel:this.handleTouchCancel},o.a.createElement("div",{className:"react-toggle-track"},o.a.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.a.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.a.createElement("div",{className:"react-toggle-thumb"}),o.a.createElement("input",Object.assign({},n,{ref:function(e){t.input=e},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox","aria-label":"Switch between Dark and Light mode"})))},e}(c.PureComponent),m=a(166),g=function(){return o.a.createElement("div",{style:{fontSize:Object(m.a)(.45)}},"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),", Hosted on"," ",o.a.createElement("a",{href:"https://www.github.com/asg017/blogX"},"GitHub"))},f=function(t){function e(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).state={theme:null},e}r()(e,t);var a=e.prototype;return a.componentDidMount=function(){var t=this;this.setState({theme:window.__theme}),window.__onThemeChange=function(){t.setState({theme:window.__theme})}},a.renderTopMenu=function(){return o.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"auto auto"}},o.a.createElement("div",null,o.a.createElement(i.a,{to:"/",className:"special"},"iamprettydamn.cool blog")),o.a.createElement("div",null,o.a.createElement(p,{icons:{checked:o.a.createElement("img",{src:"https://raw.githubusercontent.com/gaearon/overreacted.io/master/src/assets/moon.png",width:"16",height:"16",alt:"moon",style:{pointerEvents:"none"}}),unchecked:o.a.createElement("img",{src:"https://raw.githubusercontent.com/gaearon/overreacted.io/master/src/assets/sun.png",width:"16",height:"16",alt:"sun",style:{pointerEvents:"none"}})},checked:"dark"===this.state.theme,onChange:function(t){window.__setPreferredTheme(t.target.checked?"dark":"light")}})))},a.render=function(){var t=this.props.children;return o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(m.a)(24),padding:Object(m.a)(1.5)+" "+Object(m.a)(.75),minHeight:"100vh"}},this.renderTopMenu(),o.a.createElement("main",{style:{minHeight:"60vh"}},t),o.a.createElement("footer",null,o.a.createElement(g,null)))},e}(o.a.Component);e.a=f}}]);
//# sourceMappingURL=component---src-pages-404-js-75a4f1236b20a53af0a6.js.map