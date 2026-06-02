import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { StepInTarget } from '../../../../../../com/oracle/truffle/tools/dap/types/StepInTarget.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class StepInTargetsResponse$ResponseBody extends JSONBase {
    static create(paramtargets: StepInTarget[]): StepInTargetsResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getTargets(): StepInTarget[];
    hashCode(): number;
    setTargets(targets: StepInTarget[]): StepInTargetsResponse$ResponseBody;
}