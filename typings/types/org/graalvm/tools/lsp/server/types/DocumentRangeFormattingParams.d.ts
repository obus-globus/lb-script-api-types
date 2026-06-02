import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { FormattingOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/FormattingOptions.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
import type { TextDocumentIdentifier } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentIdentifier.d.ts'
import type { WorkDoneProgressParams } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressParams.d.ts'
export class DocumentRangeFormattingParams extends WorkDoneProgressParams {
    static create(paramtextDocument: TextDocumentIdentifier, paramrange: Range, paramoptions: FormattingOptions): DocumentRangeFormattingParams;
    static create(): WorkDoneProgressParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getOptions(): FormattingOptions;
    getRange(): Range;
    getTextDocument(): TextDocumentIdentifier;
    hashCode(): number;
    setOptions(options: FormattingOptions): DocumentRangeFormattingParams;
    setRange(range: Range): DocumentRangeFormattingParams;
    setTextDocument(textDocument: TextDocumentIdentifier): DocumentRangeFormattingParams;
}