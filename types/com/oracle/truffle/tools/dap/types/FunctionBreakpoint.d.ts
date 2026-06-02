import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class FunctionBreakpoint extends JSONBase {
    static create(paramname: string): FunctionBreakpoint;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCondition(): string;
    getHitCondition(): string;
    getName(): string;
    hashCode(): number;
    setCondition(condition: string): FunctionBreakpoint;
    setHitCondition(hitCondition: string): FunctionBreakpoint;
    setName(name: string): FunctionBreakpoint;
}