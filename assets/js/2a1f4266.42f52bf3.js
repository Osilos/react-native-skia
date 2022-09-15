"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9400],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return k}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),i=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=i(t),k=r,N=c["".concat(o,".").concat(k)]||c[k]||d[k]||s;return t?n.createElement(N,l(l({ref:a},m),{},{components:t})):n.createElement(N,l({ref:a},m))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=c;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var i=2;i<s;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4231:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return d}});var n=t(3117),r=t(102),s=(t(7294),t(3905)),l=["components"],p={id:"blur",title:"Blur",sidebar_label:"Blur",slug:"/image-filters/blur"},o=void 0,i={unversionedId:"image-filters/blur",id:"image-filters/blur",title:"Blur",description:"Creates an image filter that blurs its input by the separate X and Y sigmas.",source:"@site/docs/image-filters/blur.md",sourceDirName:"image-filters",slug:"/image-filters/blur",permalink:"/react-native-skia/docs/image-filters/blur",draft:!1,editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/image-filters/blur.md",tags:[],version:"current",frontMatter:{id:"blur",title:"Blur",sidebar_label:"Blur",slug:"/image-filters/blur"},sidebar:"tutorialSidebar",previous:{title:"Shadows",permalink:"/react-native-skia/docs/image-filters/shadows"},next:{title:"Displacement Map",permalink:"/react-native-skia/docs/image-filters/displacement-map"}},m={},d=[{value:"Simple Blur",id:"simple-blur",level:2},{value:"With mode=&quot;clamp&quot;",id:"with-modeclamp",level:2}],c={toc:d};function k(e){var a=e.components,p=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},c,p,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Creates an image filter that blurs its input by the separate X and Y sigmas.\nThe provided tile mode is used when the blur kernel goes outside the input image."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"blur"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number")," or ",(0,s.kt)("inlineCode",{parentName:"td"},"Vector")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The Gaussian sigma blur value")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"mode?"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"TileMode")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"mirror"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"repeat"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"clamp"),", or ",(0,s.kt)("inlineCode",{parentName:"td"},"decal")," (default is ",(0,s.kt)("inlineCode",{parentName:"td"},"decal"),").")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"children?"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"ImageFilter")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Optional image filter to be applied first.")))),(0,s.kt)("h2",{id:"simple-blur"},"Simple Blur"),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," { ",(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "style" | "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 45 more ... | "onTouch"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Blur: {\n    (props: SkiaProps<BlurImageFilterProps>): JSX.Element;\n    defaultProps: {\n        mode: string;\n    };\n}\nimport Blur"},"Blur")),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Image: {\n    (props: SkiaProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image")),(0,s.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const useImage: (source: DataSourceParam, onError?: ((err: Error) => void) | undefined) => import("../types").SkImage | null\nimport useImage'},"useImage")," } "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const BlurImageFilter: () => JSX.Element | null"},"BlurImageFilter")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | null"},"image")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) useImage(source: DataSourceParam, onError?: ((err: Error) => void) | undefined): SkImage | null\nimport useImage"},"useImage")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any"},"require")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"./assets/oslo.jpg"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"));")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"if"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ("),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"!"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | null"},"image"),") {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "style" | "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 45 more ... | "onTouch"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: StyleProp<ViewStyle>"},"style")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," }}>")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Image: {\n    (props: SkiaProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image"))),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) x: number"},"x")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) y: number"},"y")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: AnimatedProp<number, any>"},"width")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"256"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: AnimatedProp<number, any>"},"height")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"256"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) image: SkImage"},"image")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,s.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage"},"image"),"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(JSX attribute) fit: "cover"'},"fit")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"cover"')),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      >")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        <"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Blur: {\n    (props: SkiaProps<BlurImageFilterProps>): JSX.Element;\n    defaultProps: {\n        mode: string;\n    };\n}\nimport Blur"},"Blur")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) blur: AnimatedProp<Radius, any>"},"blur")),(0,s.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"4"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} />")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      </"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Image: {\n    (props: SkiaProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,s.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "style" | "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 45 more ... | "onTouch"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "style" | "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 45 more ... | "onTouch"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Blur: {\n    (props: SkiaProps<BlurImageFilterProps>): JSX.Element;\n    defaultProps: {\n        mode: string;\n    };\n}\nimport Blur"},"Blur")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Image: {\n    (props: SkiaProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const useImage: (source: DataSourceParam, onError?: ((err: Error) => void) | undefined) => import("../types").SkImage | null\nimport useImage'},"useImage")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const BlurImageFilter: () => JSX.Element | null"},"BlurImageFilter")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | null"},"image")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) useImage(source: DataSourceParam, onError?: ((err: Error) => void) | undefined): SkImage | null\nimport useImage"},"useImage")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any"},"require")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"./assets/oslo.jpg"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"))"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"if"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ("),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"!"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | null"},"image")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},") "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"null;")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "style" | "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 45 more ... | "onTouch"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: StyleProp<ViewStyle>"},"style")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Image: {\n    (props: SkiaProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image"))),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) x: number"},"x")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"0"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) y: number"},"y")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"0"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: AnimatedProp<number, any>"},"width")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"256"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: AnimatedProp<number, any>"},"height")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"256"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) image: SkImage"},"image")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage"},"image")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(JSX attribute) fit: "cover"'},"fit")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"cover"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Blur: {\n    (props: SkiaProps<BlurImageFilterProps>): JSX.Element;\n    defaultProps: {\n        mode: string;\n    };\n}\nimport Blur"},"Blur")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) blur: AnimatedProp<Radius, any>"},"blur")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"4"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Image: {\n    (props: SkiaProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "style" | "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 45 more ... | "onTouch"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Simple Blur",src:t(4172).Z,width:"256",height:"256"})),(0,s.kt)("h2",{id:"with-modeclamp"},'With mode="clamp"'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Clamp Blur",src:t(480).Z,width:"256",height:"256"})))}k.isMDXComponent=!0},480:function(e,a,t){a.Z=t.p+"assets/images/clamp-blur-18f7444e3a2959883c0e9094a385682b.png"},4172:function(e,a,t){a.Z=t.p+"assets/images/decal-blur-d7056a2c4db04baab17a77b723d2f8f8.png"}}]);