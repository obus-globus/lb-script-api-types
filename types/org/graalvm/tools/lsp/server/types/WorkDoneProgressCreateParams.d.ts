import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class WorkDoneProgressCreateParams extends JSONBase {
    static create(paramtoken: Object): WorkDoneProgressCreateParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getToken(): Object;
    hashCode(): number;
    setToken(token: Object): WorkDoneProgressCreateParams;
}