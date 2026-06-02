import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class FoldingRangeClientCapabilities extends JSONBase {
    static create(): FoldingRangeClientCapabilities;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDynamicRegistration(): boolean;
    getLineFoldingOnly(): boolean;
    getRangeLimit(): number;
    hashCode(): number;
    setDynamicRegistration(dynamicRegistration: boolean): FoldingRangeClientCapabilities;
    setLineFoldingOnly(lineFoldingOnly: boolean): FoldingRangeClientCapabilities;
    setRangeLimit(rangeLimit: number): FoldingRangeClientCapabilities;
}