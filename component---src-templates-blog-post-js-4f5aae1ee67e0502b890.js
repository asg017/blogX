(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{164:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a.n(n),i=a(3),o=a.n(i),s=a(10),c=a.n(s),l=a(0),d=a.n(l),u=a(165),h=(a(177),a(179)),f=a(180),p=a.n(f),A=a(166);var m="4007731267",g=function(){return d.a.createElement(u.b,{query:m,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return d.a.createElement("div",{style:{display:"flex",marginBottom:Object(A.a)(2.5)}},d.a.createElement(p.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(A.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),d.a.createElement("p",{style:{margin:"auto 0"}},d.a.createElement("strong",null,a)," ",d.a.createElement("a",{href:"https://twitter.com/"+n.twitter,className:"special"},"twitter")))},data:h})},E=a(171),y=a(169),v=a(190),b=a.n(v),w=a(6),S=a(176);a.d(t,"pageQuery",function(){return x});var k=function(e){var t,a,n=e.post;return d.a.createElement(d.a.Fragment,null,d.a.createElement(u.a,{to:n.fields.slug,rel:"next"},n.frontmatter.title)," ","-"," ",d.a.createElement("span",{style:c()({},Object(A.b)(-.2))},(t=n.frontmatter.date,a=new Date(t),console.log(a,t),Object(S.a)("%b. %e %Y")(a))))},j=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e,t,a=this.props.data.mdx,n=this.props.data.site.siteMetadata.author,i=this.props.pageContext,o=i.previous,s=i.next;return console.log(this.props),d.a.createElement(E.a,{location:this.props.location,title:""},d.a.createElement(y.a,{title:a.frontmatter.title,description:a.frontmatter.description||a.excerpt}),d.a.createElement("h1",{style:{marginTop:Object(A.a)(1)}},a.frontmatter.title),d.a.createElement("a",{href:"https://iamprettydamn.cool"},n),d.a.createElement("div",{style:c()({},Object(A.b)(-.2),{marginBottom:Object(A.a)(1)})},d.a.createElement("p",null,(e=a.frontmatter.date,t=new Date(e),Object(S.a)("%A, %B %e, %Y")(t)))),d.a.createElement(w.MDXProvider,{components:{h1:function(e){var t=e.children,a=r()(e,["children"]);return d.a.createElement("h1",a,t)},wrapper:"article"}},d.a.createElement("div",null,this.props.children),d.a.createElement(b.a,this.props,this.props.data.mdx.code.body)),d.a.createElement("hr",{style:{marginTop:Object(A.a)(1.5),marginBottom:Object(A.a)(1)}}),d.a.createElement(g,null),d.a.createElement("ul",{style:{listStyle:"none"}},o&&o.frontmatter&&o.frontmatter.title&&d.a.createElement("li",null,"Previous: ",d.a.createElement(k,{post:o})),s&&s.frontmatter&&s.frontmatter.title&&d.a.createElement("li",null,"Next: ",d.a.createElement(k,{post:s}))))},t}(d.a.Component),x=(t.default=j,"3283532936")},165:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(5),o=a.n(i),s=a(38),c=a.n(s);a.d(t,"a",function(){return c.a});a(167);var l=r.a.createContext({}),d=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},166:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return l});var n=a(172),r=a.n(n),i=a(173),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},body:{color:"var(--textNormal)"}}},delete o.a.googleFonts;var s=new r.a(o.a);var c=s.rhythm,l=s.scale},167:function(e,t,a){var n;e.exports=(n=a(168))&&n.default||n},168:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),i=a(0),o=a.n(i),s=a(5),c=a.n(s),l=a(58),d=a(2),u=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,r()({location:t,pageResources:a},a.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},169:function(e,t,a){"use strict";var n=a(170),r=a(0),i=a.n(r),o=a(5),s=a.n(o),c=a(174),l=a.n(c),d=a(165);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(d.b,{query:h,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var h="1025518380"},170:function(e){e.exports={data:{site:{siteMetadata:{title:"iamprettydamn.cool",description:"blog from Alex Garcia",author:"Alex Garcia"}}}}},171:function(e,t,a){"use strict";var n=a(3),r=a.n(n),i=a(0),o=a.n(i),s=a(165),c=(a(57),a(19)),l=a.n(c),d=a(39),u=a.n(d);a(158);function h(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}var f=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleClick=a.handleClick.bind(u()(a)),a.handleTouchStart=a.handleTouchStart.bind(u()(a)),a.handleTouchMove=a.handleTouchMove.bind(u()(a)),a.handleTouchEnd=a.handleTouchEnd.bind(u()(a)),a.handleTouchCancel=a.handleTouchCancel.bind(u()(a)),a.handleFocus=a.handleFocus.bind(u()(a)),a.handleBlur=a.handleBlur.bind(u()(a)),a.previouslyChecked=!(!t.checked&&!t.defaultChecked),a.state={checked:!(!t.checked&&!t.defaultChecked),hasFocus:!1},a}r()(t,e);var a=t.prototype;return a.componentWillReceiveProps=function(e){"checked"in e&&(this.setState({checked:!!e.checked}),this.previouslyChecked=!!e.checked)},a.handleClick=function(e){var t=this.input;if(this.previouslyChecked=t.checked,e.target!==t&&!this.moved)return e.preventDefault(),t.focus(),void t.click();this.setState({checked:t.checked})},a.handleTouchStart=function(e){this.startX=h(e).x,this.touchStarted=!0,this.hadFocusAtTouchStart=this.state.hasFocus,this.setState({hasFocus:!0})},a.handleTouchMove=function(e){if(this.touchStarted&&(this.touchMoved=!0,null!=this.startX)){var t=h(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t):!this.state.checked&&t-15>this.startX&&(this.setState({checked:!0}),this.startX=t)}},a.handleTouchEnd=function(e){if(this.touchMoved){var t=this.input;e.preventDefault(),null!=this.startX&&(this.previouslyChecked!==this.state.checked&&t.click(),this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})}},a.handleTouchCancel=function(e){null!=this.startX&&(this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})},a.handleFocus=function(e){var t=this.props.onFocus;t&&t(e),this.hadFocusAtTouchStart=!0,this.setState({hasFocus:!0})},a.handleBlur=function(e){var t=this.props.onBlur;t&&t(e),this.hadFocusAtTouchStart=!1,this.setState({hasFocus:!1})},a.getIcon=function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null},a.render=function(){var e=this,t=this.props,a=t.className,n=(t.icons,l()(t,["className","icons"])),r="react-toggle"+(this.state.checked?" react-toggle--checked":"")+(this.state.hasFocus?" react-toggle--focus":"")+(this.props.disabled?" react-toggle--disabled":"")+(a?" "+a:"");return o.a.createElement("div",{className:r,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,onTouchCancel:this.handleTouchCancel},o.a.createElement("div",{className:"react-toggle-track"},o.a.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.a.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.a.createElement("div",{className:"react-toggle-thumb"}),o.a.createElement("input",Object.assign({},n,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox","aria-label":"Switch between Dark and Light mode"})))},t}(i.PureComponent),p=a(166),A=function(){return o.a.createElement("div",{style:{fontSize:Object(p.a)(.45)}},"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),", Hosted on"," ",o.a.createElement("a",{href:"https://www.github.com/asg017/blogX"},"GitHub"))},m=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={theme:null},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.setState({theme:window.__theme}),window.__onThemeChange=function(){e.setState({theme:window.__theme})}},a.renderTopMenu=function(){return o.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"auto auto"}},o.a.createElement("div",null,o.a.createElement(s.a,{to:"/",className:"special"},"iamprettydamn.cool blog")),o.a.createElement("div",null,o.a.createElement(f,{icons:{checked:o.a.createElement("img",{src:"https://raw.githubusercontent.com/gaearon/overreacted.io/master/src/assets/moon.png",width:"16",height:"16",alt:"moon",style:{pointerEvents:"none"}}),unchecked:o.a.createElement("img",{src:"https://raw.githubusercontent.com/gaearon/overreacted.io/master/src/assets/sun.png",width:"16",height:"16",alt:"sun",style:{pointerEvents:"none"}})},checked:"dark"===this.state.theme,onChange:function(e){window.__setPreferredTheme(e.target.checked?"dark":"light")}})))},a.render=function(){var e=this.props.children;return o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(p.a)(24),padding:Object(p.a)(1.5)+" "+Object(p.a)(.75),minHeight:"100vh"}},this.renderTopMenu(),o.a.createElement("main",{style:{minHeight:"60vh"}},e),o.a.createElement("footer",null,o.a.createElement(A,null)))},t}(o.a.Component);t.a=m},177:function(e,t,a){"use strict";a(178)("fixed",function(e){return function(){return e(this,"tt","","")}})},178:function(e,t,a){var n=a(11),r=a(20),i=a(22),o=/"/g,s=function(e,t,a,n){var r=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},179:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIDBP/aAAwDAQACEAMQAAABnCMiuuwKDNpM+jEKy//EABsQAAMAAwEBAAAAAAAAAAAAAAECAxESIQQy/9oACAEBAAEFAjTWUWIdM60bgphR6CBQ9VFw31//xAAaEQACAgMAAAAAAAAAAAAAAAAAAgEDEBNC/9oACAEDAQE/AWrWDWdY/8QAGREBAAIDAAAAAAAAAAAAAAAAAQACEBIy/9oACAECAQE/AS6zePOP/8QAHBAAAwABBQAAAAAAAAAAAAAAAAERECEiMUFh/9oACAEBAAY/AotYKzcIh6d44Gf/xAAcEAEBAQACAwEAAAAAAAAAAAABEQAhQTFRkaH/2gAIAQEAAT8hYwZTRyjgTrdE/Mx6HMEYfGAHCZOOnMrB36N//9oADAMBAAIAAwAAABAcDzz/xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAx/9oACAEDAQE/EFEWuUtppVc93//EABgRAQEBAQEAAAAAAAAAAAAAAAEAESEx/9oACAECAQE/ECBzkAM7NBkeX//EABsQAQEAAgMBAAAAAAAAAAAAAAERACExQVGR/9oACAEBAAE/EJpEp5X1PDJnBs17F+YRv6Xl3nT2nWPDJsAjgxREAiGMKdBcq6DLXeRrALAODef/2Q==",width:50,height:50,src:"/blogX/static/fb0d682252270d0e9703f9c0843fef80/c3bbc/profile-pic.jpg",srcSet:"/blogX/static/fb0d682252270d0e9703f9c0843fef80/c3bbc/profile-pic.jpg 1x,\n/blogX/static/fb0d682252270d0e9703f9c0843fef80/ac385/profile-pic.jpg 1.5x,\n/blogX/static/fb0d682252270d0e9703f9c0843fef80/587d5/profile-pic.jpg 2x,\n/blogX/static/fb0d682252270d0e9703f9c0843fef80/20b3c/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Alex Garcia",social:{twitter:"agarcia_me"}}}}}},180:function(e,t,a){"use strict";var n=a(9);t.__esModule=!0,t.default=void 0;var r,i=n(a(3)),o=n(a(39)),s=n(a(19)),c=n(a(83)),l=n(a(0)),d=n(a(5)),u=function(e){var t=(0,c.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},h={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return h[a]||!1},p=[];var A=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),p.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1";return"<picture>"+n+"<img "+s+c+a+r+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=l.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,o=e.onLoad,d=e.onError,u=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return l.default.createElement("img",(0,c.default)({sizes:a,srcSet:n,src:r},u,{onLoad:o,onError:d,ref:t,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});g.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,s=f(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:c,seenBefore:s},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&A(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,h[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,h=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,A=e.fixed,E=e.backgroundColor,y=e.Tag,v=e.itemProp,b="boolean"==typeof E?"lightgray":E,w=(0,c.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,h),S=(0,c.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),k={title:t,alt:this.state.isVisible?"":a,style:w,className:f};if(p){var j=p;return l.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&l.default.createElement(g,(0,c.default)({src:j.base64},k)),j.tracedSVG&&l.default.createElement(g,(0,c.default)({src:j.tracedSVG},k)),b&&l.default.createElement(y,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&l.default.createElement("picture",null,j.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),l.default.createElement(g,{alt:a,title:t,sizes:j.sizes,src:j.src,srcSet:j.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,c.default)({alt:a,title:t},j))}}))}if(A){var x=A,C=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},i);return"inherit"===i.display&&delete C.display,l.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},x.base64&&l.default.createElement(g,(0,c.default)({src:x.base64},k)),x.tracedSVG&&l.default.createElement(g,(0,c.default)({src:x.tracedSVG},k)),b&&l.default.createElement(y,{title:t,style:{backgroundColor:b,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&l.default.createElement("picture",null,x.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),l.default.createElement(g,{alt:a,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,srcSet:x.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,c.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(l.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});E.propTypes={resolutions:y,sizes:v,fixed:y,fluid:v,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var b=E;t.default=b},190:function(e,t,a){var n=a(191);a(59),a(40),a(193);var r=a(10),i=a(19),o=a(0),s=a(6).MDXTag,c=a(61).withMDXComponents,l=a(73).withMDXScope;e.exports=l(c(function(e){var t=e.scope,a=void 0===t?{}:t,c=e.components,l=void 0===c?{}:c,d=e.children,u=i(e,["scope","components","children"]);if(!d)return null;var h=r({React:o,MDXTag:s},a),f=Object.keys(h),p=f.map(function(e){return h[e]}),A=n(Function,["_fn"].concat(f,[""+d])).apply(void 0,[{}].concat(p));return o.createElement(A,r({components:l},u))}))},191:function(e,t,a){var n=a(192);function r(t,a,i){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=r=function(e,t,a){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return a&&n(i,a.prototype),i}:e.exports=r=Reflect.construct,r.apply(null,arguments)}e.exports=r},192:function(e,t){function a(t,n){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,n)}e.exports=a},193:function(e,t,a){var n=a(29),r=a(28);a(194)("keys",function(){return function(e){return r(n(e))}})},194:function(e,t,a){var n=a(11),r=a(21),i=a(20);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],o={};o[e]=t(a),n(n.S+n.F*i(function(){a(1)}),"Object",o)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-4f5aae1ee67e0502b890.js.map