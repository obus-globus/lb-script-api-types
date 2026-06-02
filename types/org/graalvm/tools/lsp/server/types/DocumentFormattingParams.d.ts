import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { FormattingOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/FormattingOptions.d.ts'
import type { TextDocumentIdentifier } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentIdentifier.d.ts'
import type { WorkDoneProgressParams } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressParams.d.ts'
export class DocumentFormattingParams extends WorkDoneProgressParams {
    static create(paramtextDocument: TextDocumentIdentifier, paramoptions: FormattingOptions): DocumentFormattingParams;
    static create(): WorkDoneProgressParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getOptions(): FormattingOptions;
    getTextDocument(): TextDocumentIdentifier;
    hashCode(): number;
    setOptions(options: FormattingOptions): DocumentFormattingParams;
    setTextDocument(textDocument: TextDocumentIdentifier): DocumentFormattingParams;
}