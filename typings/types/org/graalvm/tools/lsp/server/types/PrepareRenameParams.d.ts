import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { Position } from '../../../../../../org/graalvm/tools/lsp/server/types/Position.d.ts'
import type { TextDocumentIdentifier } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentIdentifier.d.ts'
import type { TextDocumentPositionParams } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentPositionParams.d.ts'
export class PrepareRenameParams extends TextDocumentPositionParams {
    static create(paramtextDocument: TextDocumentIdentifier, paramposition: Position): PrepareRenameParams;
    static create(paramtextDocument: TextDocumentIdentifier, paramposition: Position): TextDocumentPositionParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getWorkDoneToken(): Object;
    hashCode(): number;
    setWorkDoneToken(workDoneToken: Object): PrepareRenameParams;
}