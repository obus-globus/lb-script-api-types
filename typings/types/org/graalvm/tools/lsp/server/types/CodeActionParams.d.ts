import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { CodeActionContext } from '../../../../../../org/graalvm/tools/lsp/server/types/CodeActionContext.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
import type { TextDocumentIdentifier } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentIdentifier.d.ts'
import type { WorkDoneProgressParams } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressParams.d.ts'
export class CodeActionParams extends WorkDoneProgressParams {
    static create(paramtextDocument: TextDocumentIdentifier, paramrange: Range, paramcontext: CodeActionContext): CodeActionParams;
    static create(): WorkDoneProgressParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getContext(): CodeActionContext;
    getPartialResultToken(): Object;
    getRange(): Range;
    getTextDocument(): TextDocumentIdentifier;
    hashCode(): number;
    setContext(context: CodeActionContext): CodeActionParams;
    setPartialResultToken(partialResultToken: Object): CodeActionParams;
    setRange(range: Range): CodeActionParams;
    setTextDocument(textDocument: TextDocumentIdentifier): CodeActionParams;
}