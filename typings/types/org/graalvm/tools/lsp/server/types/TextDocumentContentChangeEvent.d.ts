import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
export class TextDocumentContentChangeEvent extends JSONBase {
    static create(paramtext: string): TextDocumentContentChangeEvent;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getRange(): Range;
    getRangeLength(): number;
    getText(): string;
    hashCode(): number;
    setRange(range: Range): TextDocumentContentChangeEvent;
    setRangeLength(rangeLength: number): TextDocumentContentChangeEvent;
    setText(text: string): TextDocumentContentChangeEvent;
}