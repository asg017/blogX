(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return k});var n=a(3),r=a.n(n),c=a(10),o=a.n(c),i=a(0),s=a.n(i),l=a(165),h=a(171),u=a(169),d=a(176),m=a(162),p=a.n(m),g=a(166),f=function(e){var t=e.posts;return s.a.createElement("div",{className:p.a.postList},t.map(function(e,t){var a,n,r=e.node,c=r.frontmatter.title||r.fields.slug;return s.a.createElement(s.a.Fragment,{key:r.fields.slug},s.a.createElement("div",null,s.a.createElement(l.a,{style:{boxShadow:"none"},to:r.fields.slug},c)),s.a.createElement("div",null,(a=r.frontmatter.date,n=new Date(a),Object(d.a)("%Y-%m-%d")(n))))}))},v=function(){return s.a.createElement("div",{style:o()({marginTop:"15px",marginBottom:"20px"},Object(g.b)(-1/8))},s.a.createElement("span",{role:"img","aria-label":"hand wave emoji"},"👋🏼")," ","I'm Alex, here's some posts I've written. Here's my"," ",s.a.createElement("a",{href:"https://iamprettydamn.cool",className:"special"},"site")," ","with more stuff about me")},y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMdx.edges;return s.a.createElement(h.a,{location:this.props.location,title:""},s.a.createElement(u.a,{title:"Blog",keywords:["alex garcia","blog","tech"]}),s.a.createElement(v,null),s.a.createElement(f,{posts:e}))},t}(s.a.Component);t.default=y;var k="1966486367"},165:function(e,t,a){"use strict";a.d(t,"b",function(){return h});var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=a(38),s=a.n(i);a.d(t,"a",function(){return s.a});a(167);var l=r.a.createContext({}),h=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},166:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return l});var n=a(172),r=a.n(n),c=a(173),o=a.n(c);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},body:{color:"var(--textNormal)"}}},delete o.a.googleFonts;var i=new r.a(o.a);var s=i.rhythm,l=i.scale},167:function(e,t,a){var n;e.exports=(n=a(168))&&n.default||n},168:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),c=a(0),o=a.n(c),i=a(5),s=a.n(i),l=a(58),h=a(2),u=function(e){var t=e.location,a=h.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,r()({location:t,pageResources:a},a.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},169:function(e,t,a){"use strict";var n=a(170),r=a(0),c=a.n(r),o=a(5),i=a.n(o),s=a(174),l=a.n(s),h=a(165);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,i=e.title;return c.a.createElement(h.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return c.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=u;var d="1025518380"},170:function(e){e.exports={data:{site:{siteMetadata:{title:"iamprettydamn.cool",description:"blog from Alex Garcia",author:"Alex Garcia"}}}}},171:function(e,t,a){"use strict";var n=a(3),r=a.n(n),c=a(0),o=a.n(c),i=a(165),s=(a(57),a(19)),l=a.n(s),h=a(39),u=a.n(h);a(158);function d(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}var m=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleClick=a.handleClick.bind(u()(a)),a.handleTouchStart=a.handleTouchStart.bind(u()(a)),a.handleTouchMove=a.handleTouchMove.bind(u()(a)),a.handleTouchEnd=a.handleTouchEnd.bind(u()(a)),a.handleTouchCancel=a.handleTouchCancel.bind(u()(a)),a.handleFocus=a.handleFocus.bind(u()(a)),a.handleBlur=a.handleBlur.bind(u()(a)),a.previouslyChecked=!(!t.checked&&!t.defaultChecked),a.state={checked:!(!t.checked&&!t.defaultChecked),hasFocus:!1},a}r()(t,e);var a=t.prototype;return a.componentWillReceiveProps=function(e){"checked"in e&&(this.setState({checked:!!e.checked}),this.previouslyChecked=!!e.checked)},a.handleClick=function(e){var t=this.input;if(this.previouslyChecked=t.checked,e.target!==t&&!this.moved)return e.preventDefault(),t.focus(),void t.click();this.setState({checked:t.checked})},a.handleTouchStart=function(e){this.startX=d(e).x,this.touchStarted=!0,this.hadFocusAtTouchStart=this.state.hasFocus,this.setState({hasFocus:!0})},a.handleTouchMove=function(e){if(this.touchStarted&&(this.touchMoved=!0,null!=this.startX)){var t=d(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t):!this.state.checked&&t-15>this.startX&&(this.setState({checked:!0}),this.startX=t)}},a.handleTouchEnd=function(e){if(this.touchMoved){var t=this.input;e.preventDefault(),null!=this.startX&&(this.previouslyChecked!==this.state.checked&&t.click(),this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})}},a.handleTouchCancel=function(e){null!=this.startX&&(this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})},a.handleFocus=function(e){var t=this.props.onFocus;t&&t(e),this.hadFocusAtTouchStart=!0,this.setState({hasFocus:!0})},a.handleBlur=function(e){var t=this.props.onBlur;t&&t(e),this.hadFocusAtTouchStart=!1,this.setState({hasFocus:!1})},a.getIcon=function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null},a.render=function(){var e=this,t=this.props,a=t.className,n=(t.icons,l()(t,["className","icons"])),r="react-toggle"+(this.state.checked?" react-toggle--checked":"")+(this.state.hasFocus?" react-toggle--focus":"")+(this.props.disabled?" react-toggle--disabled":"")+(a?" "+a:"");return o.a.createElement("div",{className:r,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,onTouchCancel:this.handleTouchCancel},o.a.createElement("div",{className:"react-toggle-track"},o.a.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.a.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.a.createElement("div",{className:"react-toggle-thumb"}),o.a.createElement("input",Object.assign({},n,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox","aria-label":"Switch between Dark and Light mode"})))},t}(c.PureComponent),p=a(166),g=function(){return o.a.createElement("div",{style:{fontSize:Object(p.a)(.45)}},"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),", Hosted on"," ",o.a.createElement("a",{href:"https://www.github.com/asg017/blogX"},"GitHub"))},f=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={theme:null},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.setState({theme:window.__theme}),window.__onThemeChange=function(){e.setState({theme:window.__theme})}},a.renderTopMenu=function(){return o.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"auto auto"}},o.a.createElement("div",null,o.a.createElement(i.a,{to:"/",className:"special"},"iamprettydamn.cool blog")),o.a.createElement("div",null,o.a.createElement(m,{icons:{checked:o.a.createElement("img",{src:"https://raw.githubusercontent.com/gaearon/overreacted.io/master/src/assets/moon.png",width:"16",height:"16",alt:"moon",style:{pointerEvents:"none"}}),unchecked:o.a.createElement("img",{src:"https://raw.githubusercontent.com/gaearon/overreacted.io/master/src/assets/sun.png",width:"16",height:"16",alt:"sun",style:{pointerEvents:"none"}})},checked:"dark"===this.state.theme,onChange:function(e){window.__setPreferredTheme(e.target.checked?"dark":"light")}})))},a.render=function(){var e=this.props.children;return o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(p.a)(24),padding:Object(p.a)(1.5)+" "+Object(p.a)(.75),minHeight:"100vh"}},this.renderTopMenu(),o.a.createElement("main",{style:{minHeight:"60vh"}},e),o.a.createElement("footer",null,o.a.createElement(g,null)))},t}(o.a.Component);t.a=f}}]);
//# sourceMappingURL=component---src-pages-index-js-822f45805cd7f6881804.js.map