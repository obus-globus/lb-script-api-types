import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
export class Hover extends JSONBase {
    static create(paramcontents: Object): Hover;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getContents(): Object;
    getRange(): Range;
    hashCode(): number;
    setContents(contents: Object): Hover;
    setRange(range: Range): Hover;
}