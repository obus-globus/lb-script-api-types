import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class WorkDoneProgressParams extends JSONBase {
    static create(): WorkDoneProgressParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getWorkDoneToken(): Object;
    hashCode(): number;
    setWorkDoneToken(workDoneToken: Object): WorkDoneProgressParams;
}