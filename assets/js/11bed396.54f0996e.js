"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5731],{3905:(a,t,e)=>{e.d(t,{Zo:()=>m,kt:()=>k});var n=e(7294);function p(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function s(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function r(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){p(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function l(a,t){if(null==a)return{};var e,n,p=function(a,t){if(null==a)return{};var e,n,p={},s=Object.keys(a);for(n=0;n<s.length;n++)e=s[n],t.indexOf(e)>=0||(p[e]=a[e]);return p}(a,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)e=s[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(p[e]=a[e])}return p}var o=n.createContext({}),i=function(a){var t=n.useContext(o),e=t;return a&&(e="function"==typeof a?a(t):r(r({},t),a)),e},m=function(a){var t=i(a.components);return n.createElement(o.Provider,{value:t},a.children)},d={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(a,t){var e=a.components,p=a.mdxType,s=a.originalType,o=a.parentName,m=l(a,["components","mdxType","originalType","parentName"]),c=i(e),k=p,N=c["".concat(o,".").concat(k)]||c[k]||d[k]||s;return e?n.createElement(N,r(r({ref:t},m),{},{components:e})):n.createElement(N,r({ref:t},m))}));function k(a,t){var e=arguments,p=t&&t.mdxType;if("string"==typeof a||p){var s=e.length,r=new Array(s);r[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=a,l.mdxType="string"==typeof a?a:p,r[1]=l;for(var i=2;i<s;i++)r[i]=e[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},2815:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=e(7462),p=(e(7294),e(3905));const s={id:"path",title:"Text Path",sidebar_label:"Text Path",slug:"/text/path"},r=void 0,l={unversionedId:"text/path",id:"text/path",title:"Text Path",description:"Draws text along a path.",source:"@site/docs/text/path.md",sourceDirName:"text",slug:"/text/path",permalink:"/react-native-skia/docs/text/path",draft:!1,editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/text/path.md",tags:[],version:"current",frontMatter:{id:"path",title:"Text Path",sidebar_label:"Text Path",slug:"/text/path"},sidebar:"tutorialSidebar",previous:{title:"Glyphs",permalink:"/react-native-skia/docs/text/glyphs"},next:{title:"Text Blob",permalink:"/react-native-skia/docs/text/blob"}},o={},i=[{value:"Example",id:"example",level:2}],m={toc:i};function d(a){let{components:t,...s}=a;return(0,p.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Draws text along a path."),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},"path"),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"Path")," or ",(0,p.kt)("inlineCode",{parentName:"td"},"string")),(0,p.kt)("td",{parentName:"tr",align:"left"},"Path to draw. Can be a string using the ",(0,p.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#line_commands"},"SVG Path notation")," or an object created with ",(0,p.kt)("inlineCode",{parentName:"td"},"Skia.Path.Make()"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},"text"),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"string")),(0,p.kt)("td",{parentName:"tr",align:"left"},"Text to draw")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},"font"),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"SkFont")),(0,p.kt)("td",{parentName:"tr",align:"left"},"Font to use")))),(0,p.kt)("h2",{id:"example"},"Example"),(0,p.kt)("div",{className:"shiki-twoslash-fragment"},(0,p.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,p.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,p.kt)("div",{parentName:"pre",className:"code-container"},(0,p.kt)("code",{parentName:"div"},(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:'(alias) const TextPath: ({ initialOffset, ...props }: SkiaDefaultProps<TextPathProps, "initialOffset">) => JSX.Element\nimport TextPath'},"TextPath")),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Skia: SkSkiaApi\nimport Skia"},"Skia")),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useFont: (font: DataSourceParam, size?: number, onError?: ((err: Error) => void) | undefined) => SkFont | null\nimport useFont"},"useFont")),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const vec: (x?: number, y?: number) => SkPoint\nimport vec"},"vec")),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Fill: (props: SkiaProps<DrawingNodeProps>) => JSX.Element\nimport Fill"},"Fill"),"} "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const size: 128"},"size")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"128"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const path: SkPath"},"path")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Skia: SkSkiaApi\nimport Skia"},"Skia")),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"."),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) Skia.Path: PathFactory"},"Path")),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(method) PathFactory.Make(): SkPath"},"Make")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"();")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const path: SkPath"},"path")),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(method) SkPath.addCircle(x: number, y: number, r: number): SkPath"},"addCircle")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const size: 128"},"size")),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const size: 128"},"size")),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const size: 128"},"size")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"/"),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"2"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},");")),(0,p.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const HelloWorld: () => JSX.Element"},"HelloWorld")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) useFont(font: DataSourceParam, size?: number | undefined, onError?: ((err: Error) => void) | undefined): SkFont | null\nimport useFont"},"useFont")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any"},"require")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,p.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"./my-font.ttf"'),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")"),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"24"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},");")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," }}>")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Fill: (props: SkiaProps<DrawingNodeProps>) => JSX.Element\nimport Fill"},"Fill")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) color?: AnimatedProp<Color | undefined, any>"},"color")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"white"'),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," />")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) transform?: AnimatedProp<Transforms2d | undefined, any>"},"transform")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{[{ ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) rotate: number"},"rotate")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"var Math: Math"},"Math")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"."),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) Math.PI: number"},"PI")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," }]} "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) origin?: AnimatedProp<SkPoint | undefined, any>"},"origin")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) vec(x?: number, y?: number | undefined): SkPoint\nimport vec"},"vec")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const size: 128"},"size")),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const size: 128"},"size"),")}>")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        <"),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:'(alias) const TextPath: ({ initialOffset, ...props }: SkiaDefaultProps<TextPathProps, "initialOffset">) => JSX.Element\nimport TextPath'},"TextPath")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) font: AnimatedProp<SkFont | null, any>"},"font")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font"),"} "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) path: AnimatedProp<PathDef, any>"},"path")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,p.kt)("data-lsp",{parentName:"span",lsp:"const path: SkPath"},"path"),"} "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) text: AnimatedProp<string, any>"},"text")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"Hello World!"'),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," />")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      </"),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,p.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,p.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,p.kt)("div",{parentName:"pre",className:"code-container"},(0,p.kt)("code",{parentName:"div"},(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:'(alias) const TextPath: ({ initialOffset, ...props }: SkiaDefaultProps<TextPathProps, "initialOffset">) => JSX.Element\nimport TextPath'},"TextPath")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Skia: SkSkiaApi\nimport Skia"},"Skia")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useFont: (font: DataSourceParam, size?: number, onError?: ((err: Error) => void) | undefined) => SkFont | null\nimport useFont"},"useFont")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const vec: (x?: number, y?: number) => SkPoint\nimport vec"},"vec")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Fill: (props: SkiaProps<DrawingNodeProps>) => JSX.Element\nimport Fill"},"Fill")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const size: 128"},"size")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"128"),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const path: SkPath"},"path")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Skia: SkSkiaApi\nimport Skia"},"Skia")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) Skia.Path: PathFactory"},"Path")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,p.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(method) PathFactory.Make(): SkPath"},"Make")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"()"),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const path: SkPath"},"path")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,p.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(method) SkPath.addCircle(x: number, y: number, r: number): SkPath"},"addCircle")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const size: 128"},"size")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const size: 128"},"size")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const size: 128"},"size")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/"),(0,p.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"2"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"export"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const HelloWorld: () => JSX.Element"},"HelloWorld")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) useFont(font: DataSourceParam, size?: number | undefined, onError?: ((err: Error) => void) | undefined): SkFont | null\nimport useFont"},"useFont")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,p.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any"},"require")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"./my-font.ttf"),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"24"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Fill: (props: SkiaProps<DrawingNodeProps>) => JSX.Element\nimport Fill"},"Fill")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) color?: AnimatedProp<Color | undefined, any>"},"color")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"white"),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) transform?: AnimatedProp<Transforms2d | undefined, any>"},"transform")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"["),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) rotate: number"},"rotate")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"var Math: Math"},"Math")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) Math.PI: number"},"PI")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]"),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) origin?: AnimatedProp<SkPoint | undefined, any>"},"origin")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,p.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) vec(x?: number, y?: number | undefined): SkPoint\nimport vec"},"vec")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const size: 128"},"size")),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const size: 128"},"size")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:'(alias) const TextPath: ({ initialOffset, ...props }: SkiaDefaultProps<TextPathProps, "initialOffset">) => JSX.Element\nimport TextPath'},"TextPath")),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) font: AnimatedProp<SkFont | null, any>"},"font")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) path: AnimatedProp<PathDef, any>"},"path")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const path: SkPath"},"path")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) text: AnimatedProp<string, any>"},"text")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"Hello World!"),(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,p.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,p.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,p.kt)("img",{src:e(1426).Z,width:"256",height:"256"}))}d.isMDXComponent=!0},1426:(a,t,e)=>{e.d(t,{Z:()=>n});const n=e.p+"assets/images/text-path-0d14722670ac214830630554763cb7dd.png"}}]);