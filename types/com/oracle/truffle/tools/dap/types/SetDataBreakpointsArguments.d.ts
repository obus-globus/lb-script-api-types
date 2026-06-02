import type { DataBreakpoint } from '../../../../../../com/oracle/truffle/tools/dap/types/DataBreakpoint.d.ts'
import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class SetDataBreakpointsArguments extends JSONBase {
    static create(parambreakpoints: DataBreakpoint[]): SetDataBreakpointsArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBreakpoints(): DataBreakpoint[];
    hashCode(): number;
    setBreakpoints(breakpoints: DataBreakpoint[]): SetDataBreakpointsArguments;
}