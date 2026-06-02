import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
export class Coverage extends JSONBase {
    static create(paramcovered: Range[], paramuncovered: Range[]): Coverage;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCovered(): Range[];
    getUncovered(): Range[];
    hashCode(): number;
    setCovered(covered: Range[]): Coverage;
    setUnovered(uncovered: Range[]): Coverage;
}