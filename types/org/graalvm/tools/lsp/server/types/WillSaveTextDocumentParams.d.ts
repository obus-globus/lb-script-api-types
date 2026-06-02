import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { TextDocumentIdentifier } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentIdentifier.d.ts'
import type { TextDocumentSaveReason } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentSaveReason.d.ts'
export class WillSaveTextDocumentParams extends JSONBase {
    static create(paramtextDocument: TextDocumentIdentifier, paramreason: TextDocumentSaveReason): WillSaveTextDocumentParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getReason(): TextDocumentSaveReason;
    getTextDocument(): TextDocumentIdentifier;
    hashCode(): number;
    setReason(reason: TextDocumentSaveReason): WillSaveTextDocumentParams;
    setTextDocument(textDocument: TextDocumentIdentifier): WillSaveTextDocumentParams;
}