exports.ids = ["react-syntax-highlighter_languages_highlight_thrift"];
exports.modules = {

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/thrift.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/thrift.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Thrift
Author: Oleg Efimov <efimovov@gmail.com>
Description: Thrift message definition format
Website: https://thrift.apache.org
Category: protocols
*/

function thrift(hljs) {
  const BUILT_IN_TYPES = 'bool byte i16 i32 i64 double string binary';
  return {
    name: 'Thrift',
    keywords: {
      keyword:
        'namespace const typedef struct enum service exception void oneway set list map required optional',
      built_in:
        BUILT_IN_TYPES,
      literal:
        'true false'
    },
    contains: [
      hljs.QUOTE_STRING_MODE,
      hljs.NUMBER_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'class',
        beginKeywords: 'struct enum service exception',
        end: /\{/,
        illegal: /\n/,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            // hack: eating everything after the first title
            starts: {
              endsWithParent: true,
              excludeEnd: true
            }
          })
        ]
      },
      {
        begin: '\\b(set|list|map)\\s*<',
        end: '>',
        keywords: BUILT_IN_TYPES,
        contains: [ 'self' ]
      }
    ]
  };
}

module.exports = thrift;


/***/ })

};;
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_thrift.render-page.js.map