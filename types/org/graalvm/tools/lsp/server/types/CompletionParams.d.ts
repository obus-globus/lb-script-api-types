import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { CompletionContext } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionContext.d.ts'
import type { Position } from '../../../../../../org/graalvm/tools/lsp/server/types/Position.d.ts'
import type { TextDocumentIdentifier } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentIdentifier.d.ts'
import type { TextDocumentPositionParams } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentPositionParams.d.ts'
export class CompletionParams extends TextDocumentPositionParams {
    static create(paramtextDocument: TextDocumentIdentifier, paramposition: Position): CompletionParams;
    static create(paramtextDocument: TextDocumentIdentifier, paramposition: Position): TextDocumentPositionParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getContext(): CompletionContext;
    getPartialResultToken(): Object;
    getWorkDoneToken(): Object;
    hashCode(): number;
    setContext(context: CompletionContext): CompletionParams;
    setPartialResultToken(partialResultToken: Object): CompletionParams;
    setWorkDoneToken(workDoneToken: Object): CompletionParams;
}