import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { TextDocumentIdentifier } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentIdentifier.d.ts'
import type { WorkDoneProgressParams } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressParams.d.ts'
export class CodeLensParams extends WorkDoneProgressParams {
    static create(paramtextDocument: TextDocumentIdentifier): CodeLensParams;
    static create(): WorkDoneProgressParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getPartialResultToken(): Object;
    getTextDocument(): TextDocumentIdentifier;
    hashCode(): number;
    setPartialResultToken(partialResultToken: Object): CodeLensParams;
    setTextDocument(textDocument: TextDocumentIdentifier): CodeLensParams;
}