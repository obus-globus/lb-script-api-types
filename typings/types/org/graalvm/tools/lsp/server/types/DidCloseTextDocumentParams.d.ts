import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { TextDocumentIdentifier } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentIdentifier.d.ts'
export class DidCloseTextDocumentParams extends JSONBase {
    static create(paramtextDocument: TextDocumentIdentifier): DidCloseTextDocumentParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getTextDocument(): TextDocumentIdentifier;
    hashCode(): number;
    setTextDocument(textDocument: TextDocumentIdentifier): DidCloseTextDocumentParams;
}