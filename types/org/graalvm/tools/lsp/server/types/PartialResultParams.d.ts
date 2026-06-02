import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class PartialResultParams extends JSONBase {
    static create(): PartialResultParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getPartialResultToken(): Object;
    hashCode(): number;
    setPartialResultToken(partialResultToken: Object): PartialResultParams;
}