import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class DataBreakpoint extends JSONBase {
    static create(paramdataId: string): DataBreakpoint;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAccessType(): string;
    getCondition(): string;
    getDataId(): string;
    getHitCondition(): string;
    hashCode(): number;
    setAccessType(accessType: string): DataBreakpoint;
    setCondition(condition: string): DataBreakpoint;
    setDataId(dataId: string): DataBreakpoint;
    setHitCondition(hitCondition: string): DataBreakpoint;
}