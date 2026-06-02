import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { TextDocumentContentChangeEvent } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentContentChangeEvent.d.ts'
import type { VersionedTextDocumentIdentifier } from '../../../../../../org/graalvm/tools/lsp/server/types/VersionedTextDocumentIdentifier.d.ts'
export class DidChangeTextDocumentParams extends JSONBase {
    static create(paramtextDocument: VersionedTextDocumentIdentifier, paramcontentChanges: TextDocumentContentChangeEvent[]): DidChangeTextDocumentParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getContentChanges(): TextDocumentContentChangeEvent[];
    getTextDocument(): VersionedTextDocumentIdentifier;
    hashCode(): number;
    setContentChanges(contentChanges: TextDocumentContentChangeEvent[]): DidChangeTextDocumentParams;
    setTextDocument(textDocument: VersionedTextDocumentIdentifier): DidChangeTextDocumentParams;
}