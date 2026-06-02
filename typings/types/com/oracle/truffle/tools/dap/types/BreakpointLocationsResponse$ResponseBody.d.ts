import type { BreakpointLocation } from '../../../../../../com/oracle/truffle/tools/dap/types/BreakpointLocation.d.ts'
import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class BreakpointLocationsResponse$ResponseBody extends JSONBase {
    static create(parambreakpoints: BreakpointLocation[]): BreakpointLocationsResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBreakpoints(): BreakpointLocation[];
    hashCode(): number;
    setBreakpoints(breakpoints: BreakpointLocation[]): BreakpointLocationsResponse$ResponseBody;
}