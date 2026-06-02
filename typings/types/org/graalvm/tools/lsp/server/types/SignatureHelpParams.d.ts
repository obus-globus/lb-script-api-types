import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { Position } from '../../../../../../org/graalvm/tools/lsp/server/types/Position.d.ts'
import type { SignatureHelpContext } from '../../../../../../org/graalvm/tools/lsp/server/types/SignatureHelpContext.d.ts'
import type { TextDocumentIdentifier } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentIdentifier.d.ts'
import type { TextDocumentPositionParams } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentPositionParams.d.ts'
export class SignatureHelpParams extends TextDocumentPositionParams {
    static create(paramtextDocument: TextDocumentIdentifier, paramposition: Position): SignatureHelpParams;
    static create(paramtextDocument: TextDocumentIdentifier, paramposition: Position): TextDocumentPositionParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getContext(): SignatureHelpContext;
    getWorkDoneToken(): Object;
    hashCode(): number;
    setContext(context: SignatureHelpContext): SignatureHelpParams;
    setWorkDoneToken(workDoneToken: Object): SignatureHelpParams;
}