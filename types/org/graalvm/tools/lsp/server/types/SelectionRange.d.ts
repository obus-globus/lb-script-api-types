import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
export class SelectionRange extends JSONBase {
    static create(paramrange: Range, paramparent: SelectionRange): SelectionRange;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getParent(): SelectionRange;
    getRange(): Range;
    hashCode(): number;
    setParent(parent: SelectionRange): SelectionRange;
    setRange(range: Range): SelectionRange;
}