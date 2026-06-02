import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class InitializedParams extends JSONBase {
    static create(): InitializedParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    hashCode(): number;
}