import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { DocumentHighlightKind } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentHighlightKind.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
export class DocumentHighlight extends JSONBase {
    static create(paramrange: Range, paramkind: DocumentHighlightKind): DocumentHighlight;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getKind(): DocumentHighlightKind;
    getRange(): Range;
    hashCode(): number;
    setKind(kind: DocumentHighlightKind): DocumentHighlight;
    setRange(range: Range): DocumentHighlight;
}