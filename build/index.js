(window.wpBootstrapBlocksJsonpFn=window.wpBootstrapBlocksJsonpFn||[]).push([[2],{29:function(t,e,o){}}]),function(t){function e(e){for(var n,l,a=e[0],s=e[1],i=e[2],p=0,u=[];p<a.length;p++)l=a[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&u.push(r[l][0]),r[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(b&&b(e);u.length;)u.shift()();return c.push.apply(c,i||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,a=1;a<o.length;a++){var s=o[a];0!==r[s]&&(n=!1)}n&&(c.splice(e--,1),t=l(l.s=o[0]))}return t}var n={},r={0:0},c=[];function l(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=n,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(o,n,function(e){return t[e]}.bind(null,n));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var a=window.wpBootstrapBlocksJsonpFn=window.wpBootstrapBlocksJsonpFn||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var i=0;i<a.length;i++)e(a[i]);var b=s;c.push([33,2]),o()}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e){!function(){t.exports=this.wp.hooks}()},function(t,e){!function(){t.exports=this.wp.blockEditor}()},function(t,e){!function(){t.exports=this.wp.editor}()},function(t,e){function o(e){return t.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(e)}t.exports=o},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function o(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},function(t,e,o){var n=o(19);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(t,e,o){var n=o(20),r=o(21);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?r(t):e}},function(t,e){!function(){t.exports=this.wp.data}()},function(t,e,o){var n=o(22),r=o(23),c=o(24),l=o(25);t.exports=function(t){return n(t)||r(t)||c(t)||l()}},function(t,e){!function(){t.exports=this.wp.compose}()},function(t,e){t.exports=function(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}},function(t,e){function o(){return t.exports=o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},o.apply(this,arguments)}t.exports=o},function(t,e,o){var n=o(27);t.exports=function(t,e){if(null==t)return{};var o,r,c=n(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)o=l[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(c[o]=t[o])}return c}},function(t,e){function o(e,n){return t.exports=o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(e,n)}t.exports=o},function(t,e){function o(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=o=function(t){return typeof t}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(e)}t.exports=o},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,o){var n=o(16);t.exports=function(t){if(Array.isArray(t))return n(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e,o){var n=o(16);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(t,e):void 0}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,o){},function(t,e){t.exports=function(t,e){if(null==t)return{};var o,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)o=c[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}},function(t,e,o){},,function(t,e,o){},,,function(t,e,o){"use strict";o.r(e);var n=o(3);Object(n.hasFilter)("wpBootstrapBlocks.container.customMarginOptions")&&console.warn("`wpBootstrapBlocks.container.customMarginOptions` filter was renamed to `wpBootstrapBlocks.container.marginAfterOptions`. Please change your filter definition."),Object(n.hasFilter)("wpBootstrapBlocks.container.useFluidContainerPerDefault")&&console.warn("`wpBootstrapBlocks.container.useFluidContainerPerDefault` filter has been removed. Please use `wp_bootstrap_blocks_container_default_attributes` filter (PHP) instead."),Object(n.hasFilter)("wpBootstrapBlocks.row.useOldObjectTemplateStructure")&&console.warn("`wpBootstrapBlocks.row.useOldObjectTemplateStructure` filter has no effect since the old template structure is not supported anymore. You can safely remove this filter.");var r=o(0),c=o(7),l=o(2);c.updateCategory&&Object(c.updateCategory)("wp-bootstrap-blocks",{icon:Object(r.createElement)(l.SVG,{viewBox:"0 0 120 120",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(l.Rect,{stroke:"#979797",fill:"#6EA644",x:"-110.5",y:"-123.5",width:"340",height:"367"}),Object(r.createElement)(l.Path,{d:"M105.362393,45.9570783 C103.695123,44.8177711 101.427637,45.2868976 100.293893,46.9623494 C93.6915059,56.9480422 79.6864416,57.4841867 78.952843,57.4841867 C78.8194614,57.4841867 78.7527707,57.4841867 78.6193891,57.4841867 C61.3464764,57.4841867 54.744089,72.2951807 54.4773258,72.8983434 C53.6770365,74.7748494 54.5440166,76.9194277 56.3446678,77.7236446 C56.8115032,77.9246988 57.3450295,78.0587349 57.811865,78.0587349 C59.2123714,78.0587349 60.5461871,77.2545181 61.1464041,75.8471386 C61.2130949,75.7131024 65.7480681,65.5263554 77.418955,64.8561747 L77.418955,83.8222892 C76.9521195,87.9103916 75.0180868,91.127259 71.6168569,93.5399096 C68.0822455,96.0195783 63.3471999,97.2929217 57.5451018,97.2929217 C50.6092605,97.2929217 44.940544,94.8802711 40.7390247,90.121988 C36.4708146,85.3637048 34.3367095,78.5948795 34.3367095,69.8825301 L34.4034003,48.9728916 C34.7368542,41.2658133 36.8042685,35.1671687 40.7390247,30.810994 C45.0072347,26.0527108 50.6092605,23.6400602 57.5451018,23.6400602 C63.3471999,23.6400602 68.0822455,24.9134036 71.6168569,27.3930723 C75.1514684,29.872741 77.1521919,33.2906627 77.4856458,37.7138554 C77.4856458,37.8478916 77.4856458,38.0489458 77.4856458,38.1829819 C77.4856458,40.7296687 79.5530601,42.8072289 82.0873098,42.8072289 C84.6215595,42.8072289 86.6889738,40.7296687 86.6889738,38.1829819 C86.6889738,38.0489458 86.6889738,37.8478916 86.6889738,37.7138554 C86.022066,31.0790663 83.0209807,25.8516566 77.6190274,21.8975904 C72.217074,17.9435241 65.481305,16 57.3450295,16 C47.674866,16 39.8720445,19.2168675 33.9365648,25.5835843 C28.3345391,31.5481928 25.4001447,39.3893072 25.0666908,49.0399096 C25.0666908,49.7100904 25,50.3802711 25,51.0504518 L25.0666908,69.8825301 L25,69.8825301 C25,80.5384036 28.0010852,89.0496988 33.9365648,95.4164157 C39.8720445,101.783133 47.674866,105 57.3450295,105 C65.481305,105 72.217074,103.056476 77.6190274,99.1024096 C82.5541453,95.4834337 85.4885397,90.7251506 86.4889014,84.8275602 L86.6889738,63.7838855 C92.757835,62.309488 101.027492,58.9585843 106.229373,51.0504518 C107.563189,49.375 107.096353,47.0963855 105.362393,45.9570783 Z",stroke:"#FFFFFF",fill:"#FFFFFF"}))});var a=o(1),s=o(4),i=o(5),b=o(8),p=o.n(b),u=o(9),m=o.n(u),f=o(10),d=o.n(f),h=o(11),w=o.n(h),O=o(6),j=o.n(O),v=o(13),k=o.n(v),g=o(12),_=o(14),y=function(){return"1"===wpBootstrapBlocks.isBootstrap5Active};function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=j()(t);if(e){var r=j()(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return w()(this,o)}}var E=s||i,B=E.InnerBlocks,x=E.InspectorControls,z=[{label:Object(a.__)("Small","wp-bootstrap-blocks"),value:"mb-2"},{label:Object(a.__)("Medium","wp-bootstrap-blocks"),value:"mb-3"},{label:Object(a.__)("Large","wp-bootstrap-blocks"),value:"mb-5"}];z=Object(n.applyFilters)("wpBootstrapBlocks.container.marginAfterOptions",z),z=[{label:Object(a.__)("None","wp-bootstrap-blocks"),value:"mb-0"}].concat(k()(z));var S=[{label:Object(a.__)("Xl","wp-bootstrap-blocks"),value:"xl"},{label:Object(a.__)("Lg","wp-bootstrap-blocks"),value:"lg"},{label:Object(a.__)("Md","wp-bootstrap-blocks"),value:"md"},{label:Object(a.__)("Sm","wp-bootstrap-blocks"),value:"sm"}];y()&&(S=[{label:Object(a.__)("Xxl","wp-bootstrap-blocks"),value:"xxl"}].concat(k()(S))),S=[{label:Object(a.__)("No breakpoint selected","wp-bootstrap-blocks"),value:""}].concat(k()(S));var P=function(t){d()(o,t);var e=C(o);function o(){return p()(this,o),e.apply(this,arguments)}return m()(o,[{key:"render",value:function(){var t=this.props,e=t.attributes,o=t.className,n=t.setAttributes,c=t.hasChildBlocks,s=e.isFluid,i=e.fluidBreakpoint,b=e.marginAfter;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(x,null,Object(r.createElement)(l.PanelBody,{title:Object(a.__)("Fluid","wp-bootstrap-blocks")},Object(r.createElement)(l.CheckboxControl,{label:Object(a.__)("Fluid","wp-bootstrap-blocks"),checked:s,onChange:function(t){n({isFluid:t})}}),Object(r.createElement)(l.SelectControl,{label:Object(a.__)("Fluid Breakpoint","wp-bootstrap-blocks"),disabled:!s,value:i,options:S,onChange:function(t){n({fluidBreakpoint:t})},help:Object(a.__)("Fluid breakpoints only work with Bootstrap v4.4+. The container will be 100% wide until the specified breakpoint is reached, after which max-widths for each of the higher breakpoints will be applied.","wp-bootstrap-blocks")})),Object(r.createElement)(l.PanelBody,{title:Object(a.__)("Margin","wp-bootstrap-blocks")},Object(r.createElement)(l.SelectControl,{label:Object(a.__)("Margin After","wp-bootstrap-blocks"),value:b,options:z,onChange:function(t){n({marginAfter:t})}}))),Object(r.createElement)("div",{className:o},Object(r.createElement)(B,{renderAppender:c?void 0:function(){return Object(r.createElement)(B.ButtonBlockAppender,null)}})))}}]),o}(r.Component),M=Object(_.compose)(Object(g.withSelect)((function(t,e){var o=e.clientId;return{hasChildBlocks:(0,(t("core/block-editor")||t("core/editor")).getBlockOrder)(o).length>0}})))(P),V=Object(r.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(l.Path,{d:"M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"})),H=Object(r.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(l.Path,{d:"M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"})),A=Object(r.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(l.Path,{d:"M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"})),F=Object(r.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(l.Path,{d:"M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z"})),R=Object(r.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(l.Path,{d:"M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z"})),L=Object(r.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(l.Path,{d:"M9 20h6V9H9v11zM4 4v1.5h16V4H4z"})),G=Object(r.createElement)(l.SVG,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(l.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M23.58 26.28c0-.600003.1499985-1.099998.45-1.5.3000015-.400002.7433304-.8399976 1.33-1.32.5600028-.4533356.9833319-.8699981 1.27-1.25s.43-.8433306.43-1.39c0-.5466694-.1733316-1.0566643-.52-1.53s-.986662-.71-1.92-.71c-1.1066722 0-1.8533314.2766639-2.24.83-.3866686.5533361-.58 1.1766632-.58 1.87 0 .1466674.0033333.2666662.01.36.0066667.0933338.01.1533332.01.18h-1.78c-.0133334-.0533336-.0266666-.146666-.04-.28-.0133334-.133334-.02-.2733326-.02-.42 0-.7733372.1766649-1.4666636.53-2.08.3533351-.6133364.8899964-1.0999982 1.61-1.46.7200036-.3600018 1.5999948-.54 2.64-.54 1.2133394 0 2.2033295.3233301 2.97.97s1.15 1.5099946 1.15 2.59c0 .7066702-.1033323 1.3033309-.31 1.79-.2066677.4866691-.4533319.8799985-.74 1.18-.2866681.3000015-.6566644.6233316-1.11.97-.4800024.3866686-.8333322.7166653-1.06.99-.2266678.2733347-.34.6233312-.34 1.05v.82h-1.74zm-.14 2.56h2V31h-2zM39 12c1.1046 0 2 .8954 2 2v20c0 1.1046-.8954 2-2 2H9c-1.10457 0-2-.8954-2-2V14c0-1.1046.89543-2 2-2h30zm0 22V14H9v20h30z"})),N=Object(r.createElement)(l.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(l.Path,{d:"M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 13h8v-1.5H8V13z"})),X=Object(r.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(l.Path,{d:"M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM6 17.5c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h3v10H6zm13.5-.5c0 .3-.2.5-.5.5h-3v-10h3c.3 0 .5.2.5.5v9z"})),q=Object(r.createElement)(l.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(l.Path,{d:"M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4.1 1.5v10H10v-10h4.9zM5.5 17V8c0-.3.2-.5.5-.5h2.5v10H6c-.3 0-.5-.2-.5-.5zm14 0c0 .3-.2.5-.5.5h-2.6v-10H19c.3 0 .5.2.5.5v9z"})),I=Object(r.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(l.Path,{d:"M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zm-13.5 0V4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1v11.8c0 .1-.1.1-.1.1H4.6l-.1-.1z"})),T=(o(26),(s||i).InnerBlocks);Object(c.registerBlockType)("wp-bootstrap-blocks/container",{title:Object(a.__)("Container","wp-bootstrap-blocks"),icon:I,category:"wp-bootstrap-blocks",keywords:[Object(a.__)("Container","wp-bootstrap-blocks"),Object(a.__)("Bootstrap Container","wp-bootstrap-blocks"),Object(a.__)("Bootstrap","wp-bootstrap-blocks")],supports:{align:!1},edit:M,save:function(){return Object(r.createElement)(T.Content,null)}});var D=o(17),W=o.n(D),Z=o(15),J=o.n(Z),U=o(18),Y=o.n(U);function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=j()(t);if(e){var r=j()(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return w()(this,o)}}var K=s||i,Q=K.InnerBlocks,tt=K.InspectorControls,et=function(t){var e=t.label,o=t.attributeName,n=t.value,c=t.setAttributes,a=Y()(t,["label","attributeName","value","setAttributes"]);return Object(r.createElement)(l.RangeControl,W()({label:e,value:n,onChange:function(t){c(J()({},o,t))},min:0,max:12},a))},ot=[{name:"primary",color:"#007bff"},{name:"secondary",color:"#6c757d"}];ot=Object(n.applyFilters)("wpBootstrapBlocks.column.bgColorOptions",ot);var nt=[{label:Object(a.__)("None","wp-bootstrap-blocks"),value:""},{label:Object(a.__)("Small","wp-bootstrap-blocks"),value:"p-2"},{label:Object(a.__)("Medium","wp-bootstrap-blocks"),value:"p-3"},{label:Object(a.__)("Large","wp-bootstrap-blocks"),value:"p-5"}];nt=Object(n.applyFilters)("wpBootstrapBlocks.column.paddingOptions",nt);var rt=function(t){d()(o,t);var e=$(o);function o(){return p()(this,o),e.apply(this,arguments)}return m()(o,[{key:"render",value:function(){var t=this.props,e=t.attributes,o=t.className,n=t.setAttributes,c=t.hasChildBlocks,s=e.sizeXxl,i=e.sizeXl,b=e.sizeLg,p=e.sizeMd,u=e.sizeSm,m=e.sizeXs,f=e.equalWidthXxl,d=e.equalWidthXl,h=e.equalWidthLg,w=e.equalWidthMd,O=e.equalWidthSm,j=e.equalWidthXs,v=e.bgColor,k=e.padding,g=e.centerContent;return!v&&g&&n({centerContent:!1}),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(tt,null,Object(r.createElement)(l.PanelBody,{title:Object(a.__)("Column size","wp-bootstrap-blocks"),initialOpen:!1},Object(r.createElement)(et,{label:Object(a.__)("Xs Column count","wp-bootstrap-blocks"),attributeName:"sizeXs",value:m,disabled:j,setAttributes:n}),Object(r.createElement)(l.CheckboxControl,{label:Object(a.__)("Xs equal-width","wp-bootstrap-blocks"),checked:j,onChange:function(t){return n({equalWidthXs:t})}}),Object(r.createElement)("hr",null),Object(r.createElement)(et,{label:Object(a.__)("Sm Column count","wp-bootstrap-blocks"),attributeName:"sizeSm",value:u,disabled:O,setAttributes:n}),Object(r.createElement)(l.CheckboxControl,{label:Object(a.__)("Sm equal-width","wp-bootstrap-blocks"),checked:O,onChange:function(t){return n({equalWidthSm:t})}}),Object(r.createElement)("hr",null),Object(r.createElement)(et,{label:Object(a.__)("Md Column count","wp-bootstrap-blocks"),attributeName:"sizeMd",value:p,disabled:w,setAttributes:n}),Object(r.createElement)(l.CheckboxControl,{label:Object(a.__)("Md equal-width","wp-bootstrap-blocks"),checked:w,onChange:function(t){return n({equalWidthMd:t})}}),Object(r.createElement)("hr",null),Object(r.createElement)(et,{label:Object(a.__)("Lg Column count","wp-bootstrap-blocks"),attributeName:"sizeLg",value:b,disabled:h,setAttributes:n}),Object(r.createElement)(l.CheckboxControl,{label:Object(a.__)("Lg equal-width","wp-bootstrap-blocks"),checked:h,onChange:function(t){return n({equalWidthLg:t})}}),Object(r.createElement)("hr",null),Object(r.createElement)(et,{label:Object(a.__)("Xl Column count","wp-bootstrap-blocks"),attributeName:"sizeXl",value:i,disabled:d,setAttributes:n}),Object(r.createElement)(l.CheckboxControl,{label:Object(a.__)("Xl equal-width","wp-bootstrap-blocks"),checked:d,onChange:function(t){return n({equalWidthXl:t})}}),y()&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)("hr",null),Object(r.createElement)(et,{label:Object(a.__)("Xxl Column count","wp-bootstrap-blocks"),attributeName:"sizeXxl",value:s,disabled:f,setAttributes:n}),Object(r.createElement)(l.CheckboxControl,{label:Object(a.__)("Xxl equal-width","wp-bootstrap-blocks"),checked:f,onChange:function(t){return n({equalWidthXxl:t})}}))),Object(r.createElement)(l.PanelBody,{title:Object(a.__)("Background color","wp-bootstrap-blocks"),initialOpen:!1},Object(r.createElement)(l.ColorPalette,{colors:ot,value:v,onChange:function(t){if(t){var e=ot.find((function(e){return e.color===t}));e&&n({bgColor:e.name})}else n({bgColor:"",centerContent:!1})},disableCustomColors:!0}),v?Object(r.createElement)(l.CheckboxControl,{label:Object(a.__)("Center content vertically in row","wp-bootstrap-blocks"),checked:g,onChange:function(t){return n({centerContent:t})},help:Object(a.__)("This setting only applies if there is no vertical alignment set on the parent row block.","wp-bootstrap-blocks")}):null),Object(r.createElement)(l.PanelBody,{title:Object(a.__)("Padding (inside column)","wp-bootstrap-blocks"),initialOpen:!1},Object(r.createElement)(l.SelectControl,{label:Object(a.__)("Size","wp-bootstrap-blocks"),value:k,options:nt,onChange:function(t){n({padding:t})}}))),Object(r.createElement)("div",{className:o},Object(r.createElement)(Q,{templateLock:!1,renderAppender:c?void 0:function(){return Object(r.createElement)(Q.ButtonBlockAppender,null)}})))}}]),o}(r.Component),ct=Object(_.compose)(Object(g.withSelect)((function(t,e){var o=e.clientId;return{hasChildBlocks:(0,(t("core/block-editor")||t("core/editor")).getBlockOrder)(o).length>0}})))(rt),lt=(s||i).InnerBlocks;function at(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=j()(t);if(e){var r=j()(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return w()(this,o)}}function st(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}Object(c.registerBlockType)("wp-bootstrap-blocks/column",{title:Object(a.__)("Column","wp-bootstrap-blocks"),icon:X,category:"wp-bootstrap-blocks",keywords:[Object(a.__)("Column","wp-bootstrap-blocks"),Object(a.__)("Bootstrap Column","wp-bootstrap-blocks"),Object(a.__)("Bootstrap","wp-bootstrap-blocks")],parent:["wp-bootstrap-blocks/row"],getEditWrapperProps:function(t){var e=t.sizeXxl,o=t.sizeXl,n=t.sizeLg,r=t.sizeMd,c=t.sizeSm,l=t.sizeXs,a=t.equalWidthXxl,s=t.equalWidthXl,i=t.equalWidthLg,b=t.equalWidthMd,p=t.equalWidthSm,u=t.equalWidthXs,m=t.bgColor,f=t.padding,d=t.centerContent,h={};if(m){var w=ot.find((function(t){return t.name===m}));w&&(h={backgroundColor:w.color})}return{"data-size-xs":a||s||i||b||p||u?0:l,"data-size-sm":a||s||i||b||p?0:c,"data-size-md":a||s||i||b?0:r,"data-size-lg":a||s||i?0:n,"data-size-xl":a||s?0:o,"data-size-xxl":a?0:e,"data-bg-color":m,"data-padding":f,"data-center-content":d,style:h}},edit:ct,save:function(){return Object(r.createElement)(lt.Content,null)}});var it=s||i,bt=it.InnerBlocks,pt=it.InspectorControls,ut=it.BlockControls,mt=it.AlignmentToolbar,ft=["wp-bootstrap-blocks/column"],dt=[{name:"1-1",title:Object(a.__)("2 Columns (1:1)","wp-bootstrap-blocks"),icon:Object(r.createElement)(l.SVG,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(l.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"})),templateLock:"all",template:[["wp-bootstrap-blocks/column",{sizeMd:6}],["wp-bootstrap-blocks/column",{sizeMd:6}]]},{name:"1-2",title:Object(a.__)("2 Columns (1:2)","wp-bootstrap-blocks"),icon:Object(r.createElement)(l.SVG,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(l.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z"})),templateLock:"all",template:[["wp-bootstrap-blocks/column",{sizeMd:4}],["wp-bootstrap-blocks/column",{sizeMd:8}]]},{name:"2-1",title:Object(a.__)("2 Columns (2:1)","wp-bootstrap-blocks"),icon:Object(r.createElement)(l.SVG,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(l.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z"})),templateLock:"all",template:[["wp-bootstrap-blocks/column",{sizeMd:8}],["wp-bootstrap-blocks/column",{sizeMd:4}]]},{name:"1-1-1",title:Object(a.__)("3 Columns (1:1:1)","wp-bootstrap-blocks"),icon:Object(r.createElement)(l.SVG,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(l.Path,{fillRule:"evenodd",d:"M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"})),templateLock:"all",template:[["wp-bootstrap-blocks/column",{sizeMd:4}],["wp-bootstrap-blocks/column",{sizeMd:4}],["wp-bootstrap-blocks/column",{sizeMd:4}]]}];dt=Object(n.applyFilters)("wpBootstrapBlocks.row.templates",dt),dt=dt.map((function(t){return function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?st(Object(o),!0).forEach((function(e){J()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):st(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({icon:G},t)})),Object(n.applyFilters)("wpBootstrapBlocks.row.enableCustomTemplate",!0)&&dt.push({name:"custom",title:Object(a.__)("Custom","wp-bootstrap-blocks"),icon:G,templateLock:!1,template:[["wp-bootstrap-blocks/column"]]});var ht=[{label:Object(a.__)("None","wp-bootstrap-blocks"),value:"gx-0"},{label:Object(a.__)("Small","wp-bootstrap-blocks"),value:"gx-3"},{label:Object(a.__)("Large","wp-bootstrap-blocks"),value:"gx-5"}];ht=Object(n.applyFilters)("wpBootstrapBlocks.row.horizontalGuttersOptions",ht),ht=[{label:Object(a.__)("Bootstrap Default","wp-bootstrap-blocks"),value:""}].concat(k()(ht));var wt=[{label:Object(a.__)("Small","wp-bootstrap-blocks"),value:"gy-3"},{label:Object(a.__)("Large","wp-bootstrap-blocks"),value:"gy-5"}];wt=Object(n.applyFilters)("wpBootstrapBlocks.row.verticalGuttersOptions",wt),wt=[{label:Object(a.__)("Bootstrap Default (None)","wp-bootstrap-blocks"),value:""}].concat(k()(wt));var Ot=function(t){var e=dt.find((function(e){return e.name===t}));return!!e&&e.templateLock},jt=function(t){d()(o,t);var e=at(o);function o(){return p()(this,o),e.apply(this,arguments)}return m()(o,[{key:"render",value:function(){var t,e,o=this.props,n=o.className,c=o.attributes,s=o.setAttributes,i=o.columns,b=o.updateBlockAttributes,p=c.template,u=c.noGutters,m=c.alignment,f=c.verticalAlignment,d=c.editorStackColumns,h=c.horizontalGutters,w=c.verticalGutters,O=[{icon:H,title:Object(a.__)("Align columns left","wp-bootstrap-blocks"),align:"left"},{icon:V,title:Object(a.__)("Align columns center","wp-bootstrap-blocks"),align:"center"},{icon:A,title:Object(a.__)("Align columns right","wp-bootstrap-blocks"),align:"right"}],j=[{icon:L,title:Object(a.__)("Align columns top","wp-bootstrap-blocks"),align:"top"},{icon:R,title:Object(a.__)("Align columns center","wp-bootstrap-blocks"),align:"center"},{icon:F,title:Object(a.__)("Align columns bottom","wp-bootstrap-blocks"),align:"bottom"}];return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(pt,null,Object(r.createElement)(l.PanelBody,null,Object(r.createElement)(l.CheckboxControl,{label:Object(a.__)("Editor: Display columns stacked","wp-bootstrap-blocks"),description:Object(a.__)("Displays stacked columns in editor to enhance readability of block content. This option is only used in the editor and won't affect the output of the row.","wp-bootstrap-blocks"),checked:d,onChange:function(t){return s({editorStackColumns:t})}})),Object(r.createElement)(l.PanelBody,{title:Object(a.__)("Change layout","wp-bootstrap-blocks")},Object(r.createElement)("ul",{className:"wp-bootstrap-blocks-template-selector-list"},dt.map((function(t,e){return Object(r.createElement)("li",{className:"wp-bootstrap-blocks-template-selector-button",key:e},Object(r.createElement)(l.IconButton,{label:t.title,icon:t.icon,onClick:function(){!function(t){var e=dt.find((function(e){return e.name===t}));e&&(i.forEach((function(t,o){if(e.template.length>o){var n=e.template[o][1];b(t.clientId,n)}})),s({template:t}))}(t.name)},className:p===t.name?"is-active":null},Object(r.createElement)("div",{className:"wp-bootstrap-blocks-template-selector-button-label"},t.title)))})))),Object(r.createElement)(l.PanelBody,{title:Object(a.__)("Row options","wp-bootstrap-blocks")},Object(r.createElement)(l.CheckboxControl,{label:Object(a.__)("No Gutters","wp-bootstrap-blocks"),checked:u,onChange:function(t){return s({noGutters:t})}}),y()&&!u&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)(l.SelectControl,{label:Object(a.__)("Horizontal Gutters","wp-bootstrap-blocks"),value:h,options:ht,onChange:function(t){s({horizontalGutters:t})}}),Object(r.createElement)(l.SelectControl,{label:Object(a.__)("Vertical Gutters","wp-bootstrap-blocks"),value:w,options:wt,onChange:function(t){s({verticalGutters:t})}})))),Object(r.createElement)(ut,null,Object(r.createElement)(mt,{value:m,label:Object(a.__)("Change horizontal alignment of columns","wp-bootstrap-blocks"),onChange:function(t){return s({alignment:t})},alignmentControls:O}),Object(r.createElement)(mt,{value:f,label:Object(a.__)("Change vertical alignment of columns","wp-bootstrap-blocks"),onChange:function(t){return s({verticalAlignment:t})},alignmentControls:j})),Object(r.createElement)("div",{className:n},Object(r.createElement)(bt,{allowedBlocks:ft,template:(t=p,e=dt.find((function(e){return e.name===t})),e?e.template:[]),templateLock:Ot(p)})))}}]),o}(r.Component),vt=Object(g.withSelect)((function(t,e){var o=e.clientId,n=(t("core/block-editor")||t("core/editor")).getBlocksByClientId;return{columns:n(o)[0]?n(o)[0].innerBlocks:[]}})),kt=Object(g.withDispatch)((function(t){return{updateBlockAttributes:(t("core/block-editor")||t("core/editor")).updateBlockAttributes}})),gt=Object(_.compose)(vt,kt)(jt),_t=(o(28),o(29),(s||i).InnerBlocks);function yt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=j()(t);if(e){var r=j()(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return w()(this,o)}}Object(c.registerBlockType)("wp-bootstrap-blocks/row",{title:Object(a.__)("Row","wp-bootstrap-blocks"),icon:q,category:"wp-bootstrap-blocks",keywords:[Object(a.__)("Row","wp-bootstrap-blocks"),Object(a.__)("Bootstrap Row","wp-bootstrap-blocks"),Object(a.__)("Bootstrap","wp-bootstrap-blocks")],supports:{align:["full"]},getEditWrapperProps:function(t){return{"data-alignment":t.alignment,"data-vertical-alignment":t.verticalAlignment,"data-editor-stack-columns":t.editorStackColumns}},edit:gt,save:function(){return Object(r.createElement)(_t.Content,null)}});var Ct=s||i,Et=Ct.RichText,Bt=Ct.URLInput,xt=Ct.InspectorControls,zt=Ct.BlockControls,St=Ct.AlignmentToolbar,Pt=function(t){d()(o,t);var e=yt(o);function o(){return p()(this,o),e.apply(this,arguments)}return m()(o,[{key:"render",value:function(){var t=this.props,e=t.attributes,o=t.className,c=t.setAttributes,s=t.isSelected,i=e.url,b=e.linkTarget,p=e.rel,u=e.text,m=e.style,f=e.alignment,d=[{label:Object(a.__)("Primary","wp-bootstrap-blocks"),value:"primary"},{label:Object(a.__)("Secondary","wp-bootstrap-blocks"),value:"secondary"}];d=Object(n.applyFilters)("wpBootstrapBlocks.button.styleOptions",d);return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:o,"data-alignment":f},Object(r.createElement)(Et,{placeholder:Object(a.__)("Add text...","wp-bootstrap-blocks"),value:u,onChange:function(t){return c({text:t})},formattingControls:[],keepPlaceholderOnFocus:!0}),Object(r.createElement)(xt,null,Object(r.createElement)(l.PanelBody,null,Object(r.createElement)(l.SelectControl,{label:Object(a.__)("Style","wp-bootstrap-blocks"),value:m,options:d,onChange:function(t){c({style:t})}})),Object(r.createElement)(l.PanelBody,{title:Object(a.__)("Link settings","wp-bootstrap-blocks")},Object(r.createElement)(l.ToggleControl,{label:Object(a.__)("Open in new tab","wp-bootstrap-blocks"),onChange:function(t){var e=t?"_blank":void 0,o=p;e&&!p?o="noreferrer noopener":e||"noreferrer noopener"!==p||(o=void 0),c({linkTarget:e,rel:o})},checked:"_blank"===b}),Object(r.createElement)(l.TextControl,{label:Object(a.__)("Link rel","wp-bootstrap-blocks"),value:p||"",onChange:function(t){c({rel:t})}}))),Object(r.createElement)(zt,null,Object(r.createElement)(St,{value:f,label:Object(a.__)("Change button alignment","wp-bootstrap-blocks"),onChange:function(t){return c({alignment:t})}}))),s&&Object(r.createElement)("form",{className:"wp-block-wp-bootstrap-blocks-button-link",onSubmit:function(t){return t.preventDefault()}},Object(r.createElement)(l.Dashicon,{icon:"admin-links"}),Object(r.createElement)(Bt,{value:i,onChange:function(t){return c({url:t})}}),Object(r.createElement)(l.IconButton,{icon:"editor-break",label:Object(a.__)("Apply","wp-bootstrap-blocks"),type:"submit"})))}}]),o}(r.Component);o(30);Object(c.registerBlockType)("wp-bootstrap-blocks/button",{title:Object(a.__)("Button","wp-bootstrap-blocks"),icon:N,category:"wp-bootstrap-blocks",keywords:[Object(a.__)("Button","wp-bootstrap-blocks"),Object(a.__)("Bootstrap Button","wp-bootstrap-blocks"),Object(a.__)("Bootstrap","wp-bootstrap-blocks")],example:{},getEditWrapperProps:function(t){return{"data-alignment":t.alignment}},edit:Pt,save:function(){return null}})}]);