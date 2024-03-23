function t(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new r(s,t,i)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:h,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,m=f.trustedTypes,g=m?m.emptyScript:"",_=f.reactiveElementPolyfillSupport,y=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>!h(t,e),x={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const r=i?.call(this);n.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:$).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=i,this[i]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??v)(i?n:this[t],e))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[y("elementProperties")]=new Map,b[y("finalized")]=new Map,_?.({ReactiveElement:b}),(f.reactiveElementVersions??=[]).push("2.0.2");const A=globalThis,w=A.trustedTypes,C=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,k="?"+S,P=`<${k}>`,M=document,T=()=>M.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,H="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,N=/>/g,B=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,I=/"/g,j=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),V=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,F=M.createTreeWalker(M,129);function Y(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Z=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",o=O;for(let e=0;e<s;e++){const s=t[e];let a,h,l=-1,c=0;for(;c<s.length&&(o.lastIndex=c,h=o.exec(s),null!==h);)c=o.lastIndex,o===O?"!--"===h[1]?o=z:void 0!==h[1]?o=N:void 0!==h[2]?(j.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=B):void 0!==h[3]&&(o=B):o===B?">"===h[0]?(o=n??O,l=-1):void 0===h[1]?l=-2:(l=o.lastIndex-h[2].length,a=h[1],o=void 0===h[3]?B:'"'===h[3]?I:L):o===I||o===L?o=B:o===z||o===N?o=O:(o=B,n=void 0);const d=o===B&&t[e+1].startsWith("/>")?" ":"";r+=o===O?s+P:l>=0?(i.push(a),s.slice(0,l)+E+s.slice(l)+S+d):s+S+(-2===l?e:d)}return[Y(t,r+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class G{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[h,l]=Z(t,e);if(this.el=G.createElement(h,s),F.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=F.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=l[r++],s=i.getAttribute(t).split(S),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:s,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?st:X}),i.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:n}),i.removeAttribute(t));if(j.test(i.tagName)){const t=i.textContent.split(S),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),F.nextNode(),a.push({type:2,index:++n});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===k)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(S,t+1));)a.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const s=M.createElement("template");return s.innerHTML=t,s}}function J(t,e,s=t,i){if(e===V)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=U(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=J(t,n._$AS(t,e.values),n,i)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??M).importNode(e,!0);F.currentNode=i;let n=F.nextNode(),r=0,o=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Q(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new it(n,this,t)),this._$AV.push(e),a=s[++o]}r!==a?.index&&(n=F.nextNode(),r++)}return F.currentNode=M,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),U(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==W&&U(this._$AH)?this._$AA.nextSibling.data=t:this.$(M.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=G.createElement(Y(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new K(i,this),s=t.u(this.options);t.p(e),this.$(s),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new G(t)),e}T(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new Q(this.k(T()),this.k(T()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=J(this,t,e,0),r=!U(t)||t!==this._$AH&&t!==V,r&&(this._$AH=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=J(this,i[s+o],e,o),a===V&&(a=this._$AH[o]),r||=!U(a)||a!==this._$AH[o],a===W?t=W:t!==W&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.O(t)}O(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===W?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class st extends X{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??W)===V)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const nt=A.litHtmlPolyfillSupport;nt?.(G,Q),(A.litHtmlVersions??=[]).push("3.1.0");class rt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new Q(e.insertBefore(T(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const ot=globalThis.litElementPolyfillSupport;ot?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.0.2");const at=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},ht={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:v},lt=(t=ht,e,s)=>{const{kind:i,metadata:n}=s;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const n=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,n,t)},init(e){return void 0!==e&&this.C(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];e.call(this,s),this.requestUpdate(i,n,t)}}throw Error("Unsupported decorator location: "+i)};function ct(t){return(e,s)=>"object"==typeof s?lt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function dt(t){return ct({...t,state:!0,attribute:!1})}var pt,ut;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(pt||(pt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ut||(ut={}));const ft=(t,e,s,i,n,r)=>{const o=[];(null==n?void 0:n.length)&&o.push((t=>n.includes(function(t){return t.substr(0,t.indexOf("."))}(t)))),r&&o.push((e=>t.states[e]&&r(t.states[e])));const a=((t,e,s)=>{(!s||s>t.length)&&(s=t.length);const i=[];for(let n=0;n<t.length&&i.length<s;n++){let s=!0;for(const i of e)if(!i(t[n])){s=!1;break}s&&i.push(t[n])}return i})(s,o,e);if(a.length<e&&i.length){const s=ft(t,e-a.length,i,[],n,r);a.push(...s)}return a},mt=/^(\w+)\.(\w+)$/;let gt=class extends rt{static getConfigElement(){return document.createElement("erhv-card-editor")}static getStubConfig(t,e,s){return{climate_entity:ft(t,1,e,s,["climate"])[0]||""}}setConfig(t){if(!t.entity)throw new Error("Entity must be specified");if(t.entity&&(e=t.entity,!mt.test(e)))throw new Error("Invalid entity");var e;this._config=t,this._config.footer}render(){if(!this.hass||!this._config)return D`Custom card not found!`;if(!this.hass.states[this._config.climate_entity])return D`
                <ha-card>Unknown entity: ${this._config.climate_entity}</ha-card> `;const t=this._config.name||"NoName";return D`
            <ha-card>
                    <!--<p class="title">${t}</p>-->
                <div class="container">
                    <div id="bg">
                        <svg viewBox="0 0 850 360" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <linearGradient id="redblue">
                                    <stop stop-color="#acc0e5" offset="0"/>
                                    <stop stop-color="#fd7c7a" offset="1"/>
                                </linearGradient>
                                <path id="arrow"
                                      d="m20 39.051h38.019v7.0848l14.228-14.228-14.228-14.228v7.0848h-38.019z"/>
                                <!-- to work around safari issues -->
                                <path id="fan" class="primary-path" d="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 
                0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 
                14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 
                14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,
                17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,
                11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,
                2 12.5,2Z">
                                </path>
                                <path id="speedometer" class="primary-path" d="M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 
                13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,
                18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,
                1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,
                18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z">
                                </path>
                            </defs>
                            <g transform="translate(5,15)">
                                <g class="bg">
                                    <g transform="translate(-.0029998 -30.999)">
                                        <path
                                                d="m2.348 64.937h167.97l509.83 202.06 156.51 0.34732-0.29513 59.47-167.59 0.2448-510.45-202.92h-155.97z"
                                                fill="url(#redblue)" stroke="#000" stroke-linejoin="round"
                                                stroke-width="2"/>
                                        <path
                                                d="m2.348 327.06h167.97l509.83-202.06 156.51-0.34732-0.29513-59.47-167.59-0.2448-510.45 202.92h-155.97z"
                                                fill="url(#redblue)" stroke="#000" stroke-linejoin="round"
                                                stroke-width="2"/>
                                        <g transform="translate(0,62)" fill="#fff">
                                            <use xlink:href='#arrow'/>
                                            <use transform="translate(840,0) scale(-1,1)" xlink:href='#arrow'/>
                                            <use transform="translate(750,203)" xlink:href='#arrow'/>
                                            <use transform="translate(91,203) scale(-1,1)" xlink:href='#arrow'/>
                                        </g>
                                    </g>
                                </g>
                        </svg>
                    </div>

                    <div id="left">
                        <!-- start intake -->
                        <div id="intake">
                            <svg viewBox="0 0 212.5 180">
                                <text font-size="24px" x="10" y="35">
                                    ${this.hass.states[this._config.intake_temperature].state}°C
                                </text>
                                <text font-size="24px" x="54" y="135">
                                    ${this.hass.states[this._config.intake_fan_speed_rpm].state} rpm
                                </text>
                                <g transform="translate(10, 110) scale(0.2, 0.2)">
                                    <svg preserveAspectRatio="xMidYMid meet" focusable="false" role="img"
                                         aria-hidden="true" viewBox="0 0 24 24" class="icon">
                                        <g>
                                            <use xlink:href='#speedometer'/>
                                        </g>
                                    </svg>
                                </g>
                            </svg>
                        </div>
                        <!-- end intake -->

                        <!-- start exhaust -->
                        <div id="exhaust">
                            <svg viewBox="0 0 212.5 180">
                                <text font-size="24px" x="10" y="58">
                                    ${this.hass.states[this._config.exhaust_temperature].state}°C
                                </text>
                                <text font-size="24px" x="54" y="158">
                                    ${Math.trunc(Number(this.hass.states[this._config.exhaust_fan_speed_rpm].state))} rpm
                                </text>
                                <g transform="translate(10, 133) scale(0.2, 0.2)">
                                    <svg preserveAspectRatio="xMidYMid meet" focusable="false" role="img"
                                         aria-hidden="true" viewBox="0 0 24 24" class="icon">
                                        <g>
                                            <use xlink:href='#speedometer'/>
                                        </g>
                                    </svg>
                                </g>
                            </svg>
                        </div>
                        <!-- end exhaust -->
                    </div>
                    <!-- end left column -->

                    <!-- start center column -->
                    <div id="center">
                        <div id="target_temperature">
                            <svg viewBox="0 0 80 40">
                                <text x="50%" dx="1" y="25%" text-anchor="middle" style="font-size:13px">
                                    ${this.hass.states[this._config.climate_entity].attributes.temperature}
                                    <tspan dx="-3" dy="-6.5" style="font-size:4px">°C</tspan>
                                </text>
                            </svg>
                        </div>
                    </div>
                    <!-- end center column -->

                    <!-- start right column -->
                    <div id="right" class="right">
                        <!-- start return -->
                        <div id="return">
                            <svg viewBox="0 0 212.5 180">
                                <text font-size="24px" x="204.5" y="35" text-anchor="end">
                                    ${this.hass.states[this._config.return_temperature].state}°C
                                </text>
                                <text font-size="24px" x="160" y="135" text-anchor="end">
                                    ${Math.trunc(Number(this.hass.states[this._config.exhaust_fan_speed_percentage].state))}%
                                </text>
                                <g transform="translate(160, 110) scale(0.2, 0.2)">
                                    <svg preserveAspectRatio="xMidYMid meet" focusable="false" role="img"
                                         aria-hidden="true" viewBox="0 0 24 24" class="icon">
                                        <g>
                                            <use xlink:href='#fan'/>
                                        </g>
                                    </svg>
                                </g>
                            </svg>
                        </div>
                        <!-- end return -->

                        <!-- start supply -->
                        <div id="supply">
                            <svg viewBox="0 0 212.5 180">
                                <text font-size="24px" x="204.5" y="58" text-anchor="end">
                                    ${this.hass.states[this._config.supply_temperature].state}°C
                                </text>
                                <text font-size="24px" x="160" y="158" text-anchor="end">
                                    ${Math.trunc(Number(this.hass.states[this._config.intake_fan_speed_percentage].state))}%
                                </text>
                                <g transform="translate(160, 133) scale(0.2, 0.2)">
                                    <svg preserveAspectRatio="xMidYMid meet" focusable="false" role="img"
                                         aria-hidden="true" viewBox="0 0 24 24" class="icon">
                                        <g>
                                            <use xlink:href='#fan'/>
                                        </g>
                                    </svg>
                                </g>
                            </svg>
                        </div>
                        <!-- end supply -->
                    </div>
                    <!-- end right column -->
                </div>
                <!-- end container -->

                <div id="info">
                    <div id="modes">
                        ${this.getAirFilterTmpl()}
                        ${this.getPreHeatTmpl()}
                        ${this.getSummerModeTmpl()}
                        ${this.getBypassTmpl()}
                    </div>
                </div>
            </ha-card>
        `}getAirFilterTmpl(){return this.hass&&this._config&&this._config.filter_warning?"on"!=this.hass.states[this._config.filter_warning].state?D`
                <ha-icon class="inactive" icon="mdi:air-filter"></ha-icon>`:D`
                <ha-icon class="warning" icon="mdi:air-filter"></ha-icon>`:D``}getBypassTmpl(){return this.hass&&this._config&&this._config.bypass_state?"on"==this.hass.states[this._config.bypass_state].state?D`
                <ha-icon icon="mdi:electric-switch"></ha-icon>`:D`
                <ha-icon class="inactive" icon="mdi:electric-switch"></ha-icon>`:D``}getPreHeatTmpl(){return this.hass&&this._config&&this._config.preheater_state?"on"==this.hass.states[this._config.preheater_state].state?D`
                <ha-icon icon="mdi:radiator"></ha-icon>`:D`
                <ha-icon icon="mdi:radiator-off"></ha-icon>`:D``}getSummerModeTmpl(){var t;return this.hass&&this._config&&this._config.summer_mode?"off"==this.hass.states[null===(t=this._config)||void 0===t?void 0:t.summer_mode].state?D`
                <ha-icon icon="mdi:snowflake" style="color: cyan;"></ha-icon>`:D`
                <ha-icon class="s   ummer" icon="mdi:weather-sunny"></ha-icon>`:D``}getCardSize(){return 7}static get styles(){return o`
          text {
            fill: var(--primary-text-color);
          }

          .container {
          }

          #winter_icon {
            color: var(--cyan-color);
          }
          
          #left {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 25%;
            height: 100%;
          }

          #center {
            position: absolute;
            width: 50%;
            height: calc(100% - 40px);
            box-sizing: border-box;
            border-radius: 100%;
            left: 25%;
            top: 20px;
            text-align: center;
            overflow-wrap: break-word;
            pointer-events: none;
            min-width: 150px;
          }

          #right {
            position: absolute;
            top: 0px;
            right: 0px;
            width: 25%;
            height: 100%;
          }

          #info {
            justify-content: center;
            text-align: center;
            padding: 16px;
            margin-top: -60px;
            font-size: var(--name-font-size);
          }

          #modes .selected-icon {
            color: var(--mode-color);
          }

          #modes {
            color: var(--disabled-text-color);
            cursor: pointer;
            display: inline-block;
          }

          #intake {
            height: 50%;
          }

          #return {
            height: 50%
          }

          #intake_fan_speed {
          }

          #outside_temperature {
          }

          #exhaust {
            height: 50%;
          }

          #supply {
            height: 50%
          }

          .fan-speed {
            margin-top: 35px;
          }

          .right {
            text-align: right;
          }

          .bg {
            background-size: contain;
            background-repeat: no-repeat;
            background-position-y: center;
          }

          .not-found {
            background-color: yellow;
            font-family: sans-serif;
            font-size: 14px;
          }

          .col-center {
            font-size: xxx-large;
            font-weight: bold;
            max-width: 100%;
            margin: auto;
            width: 100px;
          }

          .col-out {
            text-anchor: start;
            font-size: xx-large;
          }

          .col-in {
            text-anchor: end;
            font-size: xx-large;
          }

          .fan-state {
            padding-top: 15px;
          }

          .icon-right {
            margin-left: 20px
          }

          .info-row {
            background: rgba(0, 0, 0, 0.2);
            margin-top: 10px;
            padding: 5px;
            border-top: rgba(0, 0, 0, 0.4);
            -webkit-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
            -moz-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
            box-shadow: 0px -2.5px 3px rgba(0, 0, 0, 0.4);
            display: flex;
            justify-content: space-around;
          }

          .inactive {
            opacity: 0.7;
          }

          .warning {
            color: var(--state-binary_sensor-problem-on-color);
          }

          .icon {
            fill: currentColor;
          }

          .medium_icon {
          }

          .large_icon {
          }

          .label {
          }

          .large_label {
          }

          .sensor {
            vertical-align: middle;
            text-align: center;
            width: 200px;
            height: 50px;
          }

          .entity {
            width: 270px;
            height: 80px;
            vertical-align: bottom;
            position: relative;
            margin: auto;
            padding-left: 25px;
            padding-right: 25px;
          }

          .spin_supply {
            transform-box: fill-box;
            transform-origin: 50% 50%;
            animation: spin 1s linear infinite;
            fill: white;
            stroke: white;
          }

          .spin_extract {
            transform-box: fill-box;
            transform-origin: 50% 50%;
            animation: spin 1s linear infinite;
            fill: white;
            stroke: white;
          }

          @keyframes spin {
            100% {
              transform: rotate(360deg);
            }
          }`}};t([ct({attribute:!1})],gt.prototype,"hass",void 0),t([dt()],gt.prototype,"_config",void 0),gt=t([at("erhv-card")],gt);const _t=[{name:"title",selector:{text:{}}},{name:"climate_entity",label:"Climate entity",required:!0,selector:{entity:{domain:["climate"]}}},{type:"grid",label:"Intake",schema:[{name:"intake_temperature",selector:{entity:{domain:["sensor"]}},label:"Intake (outside) temperature"},{name:"intake_fan_speed_rpm",selector:{entity:{domain:["sensor"]}},label:"Intake fan speed rpm"},{name:"intake_fan_speed_percentage",selector:{entity:{domain:["sensor"]}},label:"Intake fan speed %"}]},{type:"grid",label:"Exhaust",schema:[{name:"exhaust_temperature",selector:{entity:{domain:["sensor"]}},label:"Exhaust temperature sensor"},{name:"exhaust_fan_speed_rpm",selector:{entity:{domain:["sensor"]}},label:"Exhaust fan speed rpm"},{name:"exhaust_fan_speed_percentage",selector:{entity:{domain:["sensor"]}},label:"Exhaust fan speed %"}]},{type:"grid",label:"Supply & Return",schema:[{name:"supply_temperature",selector:{entity:{domain:["sensor"]}},label:"Supply temperature"},{name:"return_temperature",selector:{entity:{domain:["sensor"]}},label:"Return temperature"}]},{type:"grid",label:"Filter",schema:[{name:"filter_elapsed_time",selector:{entity:{domain:["sensor"]}},label:"Filter elapsed time"},{name:"filter_expiry_limit",selector:{entity:{domain:["sensor"]}},label:"Filter expiry limit"},{name:"filter_warning",selector:{entity:{domain:["binary_sensor"]}},label:"Filter warning"}]},{type:"grid",label:"Other",schema:[{name:"bypass_state",selector:{entity:{domain:["binary_sensor"]}},label:"By-pass state"},{name:"preheater_state",selector:{entity:{domain:["binary_sensor"]}},label:"Preheater state"},{name:"summer_mode",selector:{entity:{domain:["binary_sensor"]}},label:"Summer mode"}]}];let yt=class extends rt{setConfig(t){this._config=t}entityChanged(t){if(!this._config)return;const e=t.detail.value;this._config={...this._config,...e};const s=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(s)}render(){var t;if(!this.hass||!this._config)return D``;const e={...this._config};return e.show_empty=null===(t=e.show_empty)||void 0===t||t,D`
            <div class="card-config">
                <ha-form 
                        .hass=${this.hass}
                        .schema=${_t}
                        .computeLabel=${t=>{var e;return null!==(e=t.label)&&void 0!==e?e:t.name}}
                        .data=${e}
                        @value-changed=${this.entityChanged}
                </ha-form>
            </div>

        `}};t([dt()],yt.prototype,"_config",void 0),t([ct({attribute:!1})],yt.prototype,"hass",void 0),yt=t([at("erhv-card-editor")],yt),window.customCards=window.customCards||[],window.customCards.push({type:"erhv-card",name:"Energy Reclaiming Home Ventilation Card",description:"Card for energy reclaiming home ventilation aggregates."});
