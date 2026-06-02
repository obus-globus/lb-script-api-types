import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { VersionedTextDocumentIdentifier } from '../../../../../../org/graalvm/tools/lsp/server/types/VersionedTextDocumentIdentifier.d.ts'
export class DidSaveTextDocumentParams extends JSONBase {
    static create(paramtextDocument: VersionedTextDocumentIdentifier): DidSaveTextDocumentParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getText(): string;
    getTextDocument(): VersionedTextDocumentIdentifier;
    hashCode(): number;
    setText(text: string): DidSaveTextDocumentParams;
    setTextDocument(textDocument: VersionedTextDocumentIdentifier): DidSaveTextDocumentParams;
}