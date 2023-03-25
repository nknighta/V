"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("next/document");
function Document() {
    return (<document_1.Html lang="en">
      <document_1.Head>
		<div>
			<h1>VARIUS App</h1>
			<p>App mode : {process.env.NODE_ENV}</p>
		</div>
	  </document_1.Head>
      <body>
        <document_1.Main />
        <document_1.NextScript />
      </body>
    </document_1.Html>);
}
exports.default = Document;
