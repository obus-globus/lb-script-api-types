import type { Breakpoint } from '../../../../../../com/oracle/truffle/tools/dap/types/Breakpoint.d.ts'
import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class SetDataBreakpointsResponse$ResponseBody extends JSONBase {
    static create(parambreakpoints: Breakpoint[]): SetDataBreakpointsResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBreakpoints(): Breakpoint[];
    hashCode(): number;
    setBreakpoints(breakpoints: Breakpoint[]): SetDataBreakpointsResponse$ResponseBody;
}