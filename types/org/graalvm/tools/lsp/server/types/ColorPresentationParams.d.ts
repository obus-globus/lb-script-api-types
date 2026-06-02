import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { Color } from '../../../../../../org/graalvm/tools/lsp/server/types/Color.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
import type { TextDocumentIdentifier } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentIdentifier.d.ts'
import type { WorkDoneProgressParams } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressParams.d.ts'
export class ColorPresentationParams extends WorkDoneProgressParams {
    static create(paramtextDocument: TextDocumentIdentifier, paramcolor: Color, paramrange: Range): ColorPresentationParams;
    static create(): WorkDoneProgressParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getColor(): Color;
    getPartialResultToken(): Object;
    getRange(): Range;
    getTextDocument(): TextDocumentIdentifier;
    hashCode(): number;
    setColor(color: Color): ColorPresentationParams;
    setPartialResultToken(partialResultToken: Object): ColorPresentationParams;
    setRange(range: Range): ColorPresentationParams;
    setTextDocument(textDocument: TextDocumentIdentifier): ColorPresentationParams;
}