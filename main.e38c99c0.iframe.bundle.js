(self.webpackChunktreeus=self.webpackChunktreeus||[]).push([[179],{"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/Treeus/Treeus.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Treeus {\n  --list-item-hover: rgba(0, 0, 0, 0.05);\n  --list-item-focus: rgba(30, 167, 253, 0.07);\n  --list-item-icon-transition: transform 0.1s ease-out;\n  --list-item-icon-bg: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAaUlEQVRIie2NMQqAMAwAb+oP3BScfVY3v2zBt7hEkKKtNqlTDgKBhDtwHEuWnq4AbEA0kEdxhfwwymFVyndgfnrQRKpyTeS1vCXyWX6NpEqkWX4yFSJqeSliJr+LmMvzSJK9C4OM4/zIAbQLGvIwlUVyAAAAAElFTkSuQmCC\");\n\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  font-size: 14px;\n\n  box-sizing: border-box;\n}\n\n.Treeus__list {\n  padding-left: 15px;\n}\n\n.Treeus__listItem {\n  display: block;\n  list-style-type: none;\n  outline: none;\n}\n\n.Treeus__listItemLabel {\n  display: block;\n  padding: 6px 12px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.Treeus__listItemLabel:hover {\n  background: var(--list-item-hover);\n}\n\n.Treeus__listItemLabel:before {\n  display: inline-block;\n  margin-right: 5px;\n  background-image: var(--list-item-icon-bg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 8px;\n  height: 8px;\n  position: relative;\n}\n\n.Treeus__listItem[data-has-children='true'] > .Treeus__listItemLabel:before {\n  content: '';\n  transform: rotate(-90deg);\n  transition: var(--list-item-icon-transition);\n}\n\n.Treeus__listItem[data-open='true'] > .Treeus__listItemLabel:before {\n  transform: rotate(0deg);\n  transition: var(--list-item-icon-transition);\n}\n\n.Treeus__listItem[data-selected='true'] > .Treeus__listItemLabel {\n  background: var(--list-item-focus);\n}\n","",{version:3,sources:["webpack://./src/Treeus/Treeus.css"],names:[],mappings:"AAAA;EACE,sCAAsC;EACtC,2CAA2C;EAC3C,oDAAoD;EACpD,kSAAkS;;EAElS,SAAS;EACT,UAAU;EACV,qBAAqB;EACrB,eAAe;;EAEf,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,0CAA0C;EAC1C,4BAA4B;EAC5B,sBAAsB;EACtB,UAAU;EACV,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,4CAA4C;AAC9C;;AAEA;EACE,uBAAuB;EACvB,4CAA4C;AAC9C;;AAEA;EACE,kCAAkC;AACpC",sourcesContent:[".Treeus {\n  --list-item-hover: rgba(0, 0, 0, 0.05);\n  --list-item-focus: rgba(30, 167, 253, 0.07);\n  --list-item-icon-transition: transform 0.1s ease-out;\n  --list-item-icon-bg: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAaUlEQVRIie2NMQqAMAwAb+oP3BScfVY3v2zBt7hEkKKtNqlTDgKBhDtwHEuWnq4AbEA0kEdxhfwwymFVyndgfnrQRKpyTeS1vCXyWX6NpEqkWX4yFSJqeSliJr+LmMvzSJK9C4OM4/zIAbQLGvIwlUVyAAAAAElFTkSuQmCC\");\n\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  font-size: 14px;\n\n  box-sizing: border-box;\n}\n\n.Treeus__list {\n  padding-left: 15px;\n}\n\n.Treeus__listItem {\n  display: block;\n  list-style-type: none;\n  outline: none;\n}\n\n.Treeus__listItemLabel {\n  display: block;\n  padding: 6px 12px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.Treeus__listItemLabel:hover {\n  background: var(--list-item-hover);\n}\n\n.Treeus__listItemLabel:before {\n  display: inline-block;\n  margin-right: 5px;\n  background-image: var(--list-item-icon-bg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 8px;\n  height: 8px;\n  position: relative;\n}\n\n.Treeus__listItem[data-has-children='true'] > .Treeus__listItemLabel:before {\n  content: '';\n  transform: rotate(-90deg);\n  transition: var(--list-item-icon-transition);\n}\n\n.Treeus__listItem[data-open='true'] > .Treeus__listItemLabel:before {\n  transform: rotate(0deg);\n  transition: var(--list-item-icon-transition);\n}\n\n.Treeus__listItem[data-selected='true'] > .Treeus__listItemLabel {\n  background: var(--list-item-focus);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/Treeus/Treeus.stories.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/* Dark theme */\n.Treeus_dark {\n    color: white;\n\n    --list-item-focus: #393E46;\n    --list-item-hover: rgba(181, 84, 0, 0.2);\n    --list-item-icon-bg: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA20lEQVRoge3XOQ7CMBRF0WyCCPa/E6iYGlywnEuBXWChj5N4FO9KkVLE9j9ylWlSSimllFLqbwOOwA2YW88SB8zAHTilfHzhnesJ4xHOz3ZOWbADHn7BEzhUmHPpTPu1C5thViOMDapjNiOMjaphsiGMDYtjsiOMjYthiiGMA7JjiiOMg7JhqiGMAzdjqiOMg1djmiGMARZjmiOMQZIx3SCMgX5iukOElmC6RYRSMN0jQhZmGEToG2Y4RIjPvzkXvXfz15lUdAtj3UScv5mrf8a6CaWUUkoppbrtBWnjz9Xa11cNAAAAAElFTkSuQmCC\");\n}\n\n.Treeus_dark .Treeus__listItem[data-has-children='true'] > .Treeus__listItemLabel:before {\n    transform: rotate(-90deg);\n}\n\n.Treeus_dark .Treeus__listItem[data-open='true'] > .Treeus__listItemLabel:before {\n    transform: rotate(0deg);\n}\n\n/* Custom render */\n.Treeus_tennis .Treeus__listItemLabel:before {\n    width: 0;\n    background-image: none;\n}\n","",{version:3,sources:["webpack://./src/Treeus/Treeus.stories.css"],names:[],mappings:"AAAA,eAAe;AACf;IACI,YAAY;;IAEZ,0BAA0B;IAC1B,wCAAwC;IACxC,0bAA0b;AAC9b;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA,kBAAkB;AAClB;IACI,QAAQ;IACR,sBAAsB;AAC1B",sourcesContent:["/* Dark theme */\n.Treeus_dark {\n    color: white;\n\n    --list-item-focus: #393E46;\n    --list-item-hover: rgba(181, 84, 0, 0.2);\n    --list-item-icon-bg: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA20lEQVRoge3XOQ7CMBRF0WyCCPa/E6iYGlywnEuBXWChj5N4FO9KkVLE9j9ylWlSSimllFLqbwOOwA2YW88SB8zAHTilfHzhnesJ4xHOz3ZOWbADHn7BEzhUmHPpTPu1C5thViOMDapjNiOMjaphsiGMDYtjsiOMjYthiiGMA7JjiiOMg7JhqiGMAzdjqiOMg1djmiGMARZjmiOMQZIx3SCMgX5iukOElmC6RYRSMN0jQhZmGEToG2Y4RIjPvzkXvXfz15lUdAtj3UScv5mrf8a6CaWUUkoppbrtBWnjz9Xa11cNAAAAAElFTkSuQmCC\");\n}\n\n.Treeus_dark .Treeus__listItem[data-has-children='true'] > .Treeus__listItemLabel:before {\n    transform: rotate(-90deg);\n}\n\n.Treeus_dark .Treeus__listItem[data-open='true'] > .Treeus__listItemLabel:before {\n    transform: rotate(0deg);\n}\n\n/* Custom render */\n.Treeus_tennis .Treeus__listItemLabel:before {\n    width: 0;\n    background-image: none;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{parameters:()=>parameters});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)},"./src/Treeus/Treeus.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,CustomRender:()=>CustomRender,DarkTheme:()=>DarkTheme,DifferentNesting:()=>DifferentNesting,FiftyThousandElements:()=>FiftyThousandElements,ThousandElements:()=>ThousandElements,default:()=>src_Treeus_Treeus_stories});__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js");var react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function useKeys(items,setSelectedItemId,updateOpenItemsIds,checkOpenItemId){var _useState2=_slicedToArray((0,react.useState)(0),2),index=_useState2[0],setIndex=_useState2[1],list=(0,react.useMemo)((function(){return function getFlatList(items){var stack=_toConsumableArray(items.map(treeusItemToNavMapper(0))),res=[];for(;stack.length;){var next=stack.pop();if(null!=next&&next.children){var children=next.children.map(treeusItemToNavMapper(next.level+1));next.hasChildren=!0,delete next.children,stack.push.apply(stack,[next].concat(_toConsumableArray(children)))}else res.push(next)}return res.reverse().map((function(item,index){return item.index=index,item}))}(items)}),items),currentItem=list[index],nextIndex=0,goNext=function goNext(){if(currentItem.hasChildren)if(checkOpenItemId(currentItem.id))nextIndex=index+1;else{var nextParent=list.slice(index+1).find((function(item){return item.level<=currentItem.level}));null!=nextParent&&nextParent.index&&(nextIndex=nextParent.index)}else nextIndex=index+1;list[nextIndex]&&(setIndex(nextIndex),setSelectedItemId(list[nextIndex].id))},findOpenParent=function findOpenParent(prevItemIndex){if(0===list[prevItemIndex].level)return prevItemIndex;var prevItemParent=list.slice(0,prevItemIndex).reverse().find((function(item){return item.level<list[prevItemIndex].level}));return prevItemParent?checkOpenItemId(null==prevItemParent?void 0:prevItemParent.id)?prevItemIndex:findOpenParent(prevItemParent.index):void 0},goBack=function goBack(){var prevItem=list[index-1];prevItem&&(nextIndex=prevItem.level===currentItem.level&&!prevItem.hasChildren||prevItem.level<currentItem.level?index-1:findOpenParent(index-1),setIndex(nextIndex),setSelectedItemId(list[nextIndex].id))};return[function keyboardHandler(event){var _list$index;switch(event.code){case"Tab":setIndex(0),setSelectedItemId(list[0].id);break;case"ArrowDown":goNext();break;case"ArrowUp":goBack();break;case"Enter":updateOpenItemsIds(null===(_list$index=list[index])||void 0===_list$index?void 0:_list$index.id);break;case"ArrowRight":!checkOpenItemId(currentItem.id)&&currentItem.hasChildren?updateOpenItemsIds(currentItem.id):goNext();break;case"ArrowLeft":checkOpenItemId(currentItem.id)?updateOpenItemsIds(currentItem.id):goBack()}event.preventDefault(),event.stopPropagation()},list,setIndex]}function treeusItemToNavMapper(level){return function(_ref){var id=_ref.id,children=_ref.children;return{index:0,id,level,children}}}function useListOptimization_slicedToArray(arr,i){return function useListOptimization_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useListOptimization_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function useListOptimization_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return useListOptimization_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useListOptimization_arrayLikeToArray(o,minLen)}(arr,i)||function useListOptimization_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useListOptimization_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__("./node_modules/core-js/modules/es.array.filter.js");function useOpenItemsIds_toConsumableArray(arr){return function useOpenItemsIds_arrayWithoutHoles(arr){if(Array.isArray(arr))return useOpenItemsIds_arrayLikeToArray(arr)}(arr)||function useOpenItemsIds_iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||useOpenItemsIds_unsupportedIterableToArray(arr)||function useOpenItemsIds_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useOpenItemsIds_slicedToArray(arr,i){return function useOpenItemsIds_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useOpenItemsIds_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||useOpenItemsIds_unsupportedIterableToArray(arr,i)||function useOpenItemsIds_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useOpenItemsIds_unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return useOpenItemsIds_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?useOpenItemsIds_arrayLikeToArray(o,minLen):void 0}}function useOpenItemsIds_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Treeus=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/Treeus/Treeus.css"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(Treeus.Z,options);Treeus.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Treeus_slicedToArray(arr,i){return function Treeus_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Treeus_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function Treeus_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return Treeus_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Treeus_arrayLikeToArray(o,minLen)}(arr,i)||function Treeus_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Treeus_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var TreeusContext=react.createContext({selectedItemId:"",openItemsIds:[],onListItemClick:function onListItemClick(){return null}}),TreeusItem=(0,react.memo)((function(_ref){var id=_ref.id,label=_ref.label,children=_ref.children,_useContext=(0,react.useContext)(TreeusContext),selectedItemId=_useContext.selectedItemId,openItemsIds=_useContext.openItemsIds,onListItemClick=_useContext.onListItemClick,isOpen=openItemsIds.includes(id),hasChildren=children&&children.length>0;return(0,jsx_runtime.jsxs)("li",{id,className:"Treeus__listItem","data-selected":selectedItemId===id,"data-open":isOpen,"data-has-children":hasChildren,tabIndex:0,children:[(0,jsx_runtime.jsx)("label",{className:"Treeus__listItemLabel",onClick:function onClickEvent(event){return onListItemClick(event,{id,label,children})},children:label}),hasChildren&&isOpen&&(0,jsx_runtime.jsx)("ul",{className:"Treeus__list",children:children.map((function(ch){return(0,react.createElement)(TreeusItem,Object.assign({},ch,{key:ch.id}))}))})]})})),Treeus_Treeus_Treeus=(0,react.memo)((function(_ref2){var items=_ref2.items,onClick=_ref2.onClick,className=_ref2.className,renderItemsCount=_ref2.renderItemsCount;if((null==items?void 0:items.length)<1)return null;var rootClassNames="Treeus";className&&(rootClassNames+=" "+className);var containerRef=(0,react.useRef)(null),_useListOptimization=function useListOptimization(items,containerRef){var renderItemsCount=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30;if(items.length<100)return[items,{}];var _useState2=useListOptimization_slicedToArray((0,react.useState)(0),2),containerHeight=_useState2[0],setContainerHeight=_useState2[1],_useState4=useListOptimization_slicedToArray((0,react.useState)(0),2),itemHeight=_useState4[0],setItemHeight=_useState4[1],_useState6=useListOptimization_slicedToArray((0,react.useState)(0),2),containerTopPadding=_useState6[0],setContainerTopPadding=_useState6[1],_useState8=useListOptimization_slicedToArray((0,react.useState)(items.slice(0,renderItemsCount)),2),renderItems=_useState8[0],setRenderItems=_useState8[1];(0,react.useEffect)((function(){var _containerRef$current;if(null!==(_containerRef$current=containerRef.current)&&void 0!==_containerRef$current&&_containerRef$current.firstChild){var childHeight=containerRef.current.firstChild.offsetHeight;setItemHeight(childHeight),setContainerHeight(childHeight*items.length)}}),[containerRef,itemHeight,containerHeight]);var handleScroll=(0,react.useCallback)((function(){var pseudoStartIndex=Math.floor(window.scrollY/itemHeight);setContainerTopPadding(pseudoStartIndex*itemHeight),setRenderItems(items.slice(pseudoStartIndex,pseudoStartIndex+renderItemsCount))}),[containerTopPadding,renderItems]);return(0,react.useEffect)((function(){return window.addEventListener("scroll",handleScroll),function(){window.removeEventListener("scroll",handleScroll)}}),[handleScroll]),[renderItems,{height:containerHeight+"px",paddingTop:containerTopPadding+"px"}]}(items,containerRef,renderItemsCount),_useListOptimization2=Treeus_slicedToArray(_useListOptimization,2),renderItems=_useListOptimization2[0],style=_useListOptimization2[1],_useState2=Treeus_slicedToArray((0,react.useState)(""),2),selectedItemId=_useState2[0],setSelectedItemId=_useState2[1],_useOpenItemsIds=function useOpenItemsIds(openItemsList){var _useState2=useOpenItemsIds_slicedToArray((0,react.useState)(openItemsList),2),openItemsIds=_useState2[0],setOpenItemsIds=_useState2[1];return[openItemsIds,function(itemId){openItemsIds.includes(itemId)?setOpenItemsIds(openItemsIds.filter((function(id){return id!==itemId}))):setOpenItemsIds([].concat(useOpenItemsIds_toConsumableArray(openItemsIds),[itemId]))},function(itemId){return openItemsIds.includes(itemId)}]}([]),_useOpenItemsIds2=Treeus_slicedToArray(_useOpenItemsIds,3),openItemsIds=_useOpenItemsIds2[0],toggleOpenItemIds=_useOpenItemsIds2[1],checkOpenItemId=_useOpenItemsIds2[2],_useKeys2=Treeus_slicedToArray(useKeys(items,setSelectedItemId,toggleOpenItemIds,checkOpenItemId),3),handleKeyDown=_useKeys2[0],list=_useKeys2[1],setIndex=_useKeys2[2];return(0,jsx_runtime.jsx)(TreeusContext.Provider,{value:{selectedItemId,openItemsIds,onListItemClick:function onListItemClick(event,item){setSelectedItemId(item.id),toggleOpenItemIds(item.id),setIndex(list.findIndex((function(listItem){return listItem.id===item.id}))),onClick&&onClick(event,item)}},children:(0,jsx_runtime.jsx)("ul",{className:rootClassNames,ref:containerRef,style,onKeyDown:handleKeyDown,children:renderItems.map((function(item){return(0,react.createElement)(TreeusItem,Object.assign({},item,{key:item.id}))}))})})}));try{Treeus_Treeus_Treeus.displayName="Treeus",Treeus_Treeus_Treeus.__docgenInfo={description:"",displayName:"Treeus",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ITreeusItem[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"TOnClick"}},renderItemsCount:{defaultValue:null,description:"",name:"renderItemsCount",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Treeus/Treeus.tsx#Treeus"]={docgenInfo:Treeus_Treeus_Treeus.__docgenInfo,name:"Treeus",path:"src/Treeus/Treeus.tsx#Treeus"})}catch(__react_docgen_typescript_loader_error){}var index_browser=__webpack_require__("./node_modules/nanoid/index.browser.js"),dist=__webpack_require__("./node_modules/random-word-slugs/dist/index.js"),Treeus_stories=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/Treeus/Treeus.stories.css"),Treeus_stories_options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(Treeus_stories.Z,Treeus_stories_options);Treeus_stories.Z.locals;function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}const src_Treeus_Treeus_stories={title:"Treeus",component:Treeus_Treeus_Treeus,parameters:{backgrounds:{default:"default",values:[{name:"default",value:"white"},{name:"dark",value:"#222831"}]}},decorators:[function(Story){return(0,jsx_runtime.jsx)("div",{style:{width:"150px"},children:(0,jsx_runtime.jsx)(Story,{})})}]};var getListItem=function getListItem(){return{id:(0,index_browser.x0)(),label:(0,dist.generateSlug)(1),children:[{id:(0,index_browser.x0)(),label:(0,dist.generateSlug)(1),children:[{id:(0,index_browser.x0)(),label:(0,dist.generateSlug)(1)}]}]}},getListItems=function getListItems(count){for(var list=[];count;)count-=1,list.push(getListItem());return list},getListItemsAsync=function getListItemsAsync(count){return new Promise((function(resolve){resolve(getListItems(count))}))},Template=function Template(args){return(0,jsx_runtime.jsx)(Treeus_Treeus_Treeus,Object.assign({},args))};Template.displayName="Template";var Basic=Template.bind({});Basic.args={items:getListItems(5)};var DarkTheme=Template.bind({});DarkTheme.parameters={backgrounds:{default:"dark"}},DarkTheme.args={items:getListItems(5),className:"Treeus_dark"};var CustomRender=Template.bind({});CustomRender.args={items:function getCustomRenderItems(){var tennisPlayers=[{name:"Roger Federer",pic:"https://lh3.googleusercontent.com/1dkVCzMCO5HoMT2PTZYldIBjbHpus6_lpcWytufSZAxRe2v7gehw2aI222fdoVH3oAEYMcn-_1udzzGPfnxC0D6dPDeETKMeU2dvMyw=s0"},{name:"Rafael Nadal",pic:"https://lh3.googleusercontent.com/drzSzbmVdZq5ZHNBm_YWhwPyHlIkQD8GdGxxUiRVRZqLGM-tx1m0NrCTylM2BIpe6wT2htCZ3afiIAflUu7eEoddkogc6ikn4z_HA54=s0"}],items=getListItems(2);return items=items.map((function(item,index){return item.label=(0,jsx_runtime.jsxs)("span",{style:{color:"red"},children:[(0,jsx_runtime.jsx)("img",{width:"12px",src:tennisPlayers[index].pic}),(0,jsx_runtime.jsx)("span",{style:{display:"inline-block",marginLeft:"5px"},children:tennisPlayers[index].name})]}),item}))}(),className:"Treeus_tennis"};var ThousandElements=function ThousandElements(args,_ref){var items=_ref.loaded.items;return(0,jsx_runtime.jsx)(Treeus_Treeus_Treeus,Object.assign({},args,{items}))};ThousandElements.displayName="ThousandElements",ThousandElements.loaders=[_asyncToGenerator(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,getListItemsAsync(1e3);case 2:return _context.t0=_context.sent,_context.abrupt("return",{items:_context.t0});case 4:case"end":return _context.stop()}}),_callee)})))];var FiftyThousandElements=function FiftyThousandElements(args,_ref3){var items=_ref3.loaded.items;return(0,jsx_runtime.jsx)(Treeus_Treeus_Treeus,Object.assign({},args,{items}))};FiftyThousandElements.displayName="FiftyThousandElements",FiftyThousandElements.loaders=[_asyncToGenerator(regeneratorRuntime.mark((function _callee2(){return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,getListItemsAsync(5e4);case 2:return _context2.t0=_context2.sent,_context2.abrupt("return",{items:_context2.t0});case 4:case"end":return _context2.stop()}}),_callee2)})))];var DifferentNesting=Template.bind({});DifferentNesting.args={items:[{id:(0,index_browser.x0)(),label:(0,dist.generateSlug)(1),children:[{id:(0,index_browser.x0)(),label:(0,dist.generateSlug)(1),children:[{id:(0,index_browser.x0)(),label:(0,dist.generateSlug)(1)}]},{id:(0,index_browser.x0)(),label:(0,dist.generateSlug)(1)}]},{id:(0,index_browser.x0)(),label:(0,dist.generateSlug)(1)},{id:(0,index_browser.x0)(),label:(0,dist.generateSlug)(1),children:[{id:(0,index_browser.x0)(),label:(0,dist.generateSlug)(1),children:[{id:(0,index_browser.x0)(),label:(0,dist.generateSlug)(1)}]},{id:(0,index_browser.x0)(),label:(0,dist.generateSlug)(1),children:[{id:(0,index_browser.x0)(),label:(0,dist.generateSlug)(1)},{id:(0,index_browser.x0)(),label:(0,dist.generateSlug)(1)},{id:(0,index_browser.x0)(),label:(0,dist.generateSlug)(1)}]},{id:(0,index_browser.x0)(),label:(0,dist.generateSlug)(1)}]}]},Basic.parameters=Object.assign({storySource:{source:"(args) => <Treeus {...args} />"}},Basic.parameters),DarkTheme.parameters=Object.assign({storySource:{source:"(args) => <Treeus {...args} />"}},DarkTheme.parameters),CustomRender.parameters=Object.assign({storySource:{source:"(args) => <Treeus {...args} />"}},CustomRender.parameters),ThousandElements.parameters=Object.assign({storySource:{source:"(args: ITreeusProps, { loaded: { items } }: { loaded: { items: ITreeusItem[] } }) => (\n    <Treeus {...args} items={items} />\n)"}},ThousandElements.parameters),FiftyThousandElements.parameters=Object.assign({storySource:{source:"(\n    args: ITreeusProps,\n    { loaded: { items } }: { loaded: { items: ITreeusItem[] } },\n) => <Treeus {...args} items={items} />"}},FiftyThousandElements.parameters),DifferentNesting.parameters=Object.assign({storySource:{source:"(args) => <Treeus {...args} />"}},DifferentNesting.parameters)},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Treeus/Treeus.stories.tsx":"./src/Treeus/Treeus.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"?4f7e":()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[806],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js"))));__webpack_require__.O()}]);