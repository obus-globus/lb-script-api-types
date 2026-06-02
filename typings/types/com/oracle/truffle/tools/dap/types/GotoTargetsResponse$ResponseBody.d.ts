import type { GotoTarget } from '../../../../../../com/oracle/truffle/tools/dap/types/GotoTarget.d.ts'
import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class GotoTargetsResponse$ResponseBody extends JSONBase {
    static create(paramtargets: GotoTarget[]): GotoTargetsResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getTargets(): GotoTarget[];
    hashCode(): number;
    setTargets(targets: GotoTarget[]): GotoTargetsResponse$ResponseBody;
}