import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { Position } from '../../../../../../org/graalvm/tools/lsp/server/types/Position.d.ts'
import type { TextDocumentIdentifier } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentIdentifier.d.ts'
import type { WorkDoneProgressParams } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressParams.d.ts'
export class SelectionRangeParams extends WorkDoneProgressParams {
    static create(paramtextDocument: TextDocumentIdentifier, parampositions: Position[]): SelectionRangeParams;
    static create(): WorkDoneProgressParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getPartialResultToken(): Object;
    getPositions(): Position[];
    getTextDocument(): TextDocumentIdentifier;
    hashCode(): number;
    setPartialResultToken(partialResultToken: Object): SelectionRangeParams;
    setPositions(positions: Position[]): SelectionRangeParams;
    setTextDocument(textDocument: TextDocumentIdentifier): SelectionRangeParams;
}