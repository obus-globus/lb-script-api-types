import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { TextDocumentItem } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentItem.d.ts'
export class DidOpenTextDocumentParams extends JSONBase {
    static create(paramtextDocument: TextDocumentItem): DidOpenTextDocumentParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getTextDocument(): TextDocumentItem;
    hashCode(): number;
    setTextDocument(textDocument: TextDocumentItem): DidOpenTextDocumentParams;
}