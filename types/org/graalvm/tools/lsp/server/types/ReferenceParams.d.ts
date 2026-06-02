import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { Position } from '../../../../../../org/graalvm/tools/lsp/server/types/Position.d.ts'
import type { ReferenceContext } from '../../../../../../org/graalvm/tools/lsp/server/types/ReferenceContext.d.ts'
import type { TextDocumentIdentifier } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentIdentifier.d.ts'
import type { TextDocumentPositionParams } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentPositionParams.d.ts'
export class ReferenceParams extends TextDocumentPositionParams {
    static create(paramcontext: ReferenceContext, paramtextDocument: TextDocumentIdentifier, paramposition: Position): ReferenceParams;
    static create(paramtextDocument: TextDocumentIdentifier, paramposition: Position): TextDocumentPositionParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getContext(): ReferenceContext;
    getPartialResultToken(): Object;
    getWorkDoneToken(): Object;
    hashCode(): number;
    setContext(context: ReferenceContext): ReferenceParams;
    setPartialResultToken(partialResultToken: Object): ReferenceParams;
    setWorkDoneToken(workDoneToken: Object): ReferenceParams;
}