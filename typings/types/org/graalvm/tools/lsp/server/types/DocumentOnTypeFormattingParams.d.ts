import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { FormattingOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/FormattingOptions.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Position } from '../../../../../../org/graalvm/tools/lsp/server/types/Position.d.ts'
import type { TextDocumentIdentifier } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentIdentifier.d.ts'
export class DocumentOnTypeFormattingParams extends JSONBase {
    static create(paramtextDocument: TextDocumentIdentifier, paramposition: Position, paramch: string, paramoptions: FormattingOptions): DocumentOnTypeFormattingParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCh(): string;
    getOptions(): FormattingOptions;
    getPosition(): Position;
    getTextDocument(): TextDocumentIdentifier;
    hashCode(): number;
    setCh(ch: string): DocumentOnTypeFormattingParams;
    setOptions(options: FormattingOptions): DocumentOnTypeFormattingParams;
    setPosition(position: Position): DocumentOnTypeFormattingParams;
    setTextDocument(textDocument: TextDocumentIdentifier): DocumentOnTypeFormattingParams;
}