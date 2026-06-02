import type { FunctionBreakpoint } from '../../../../../../com/oracle/truffle/tools/dap/types/FunctionBreakpoint.d.ts'
import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class SetFunctionBreakpointsArguments extends JSONBase {
    static create(parambreakpoints: FunctionBreakpoint[]): SetFunctionBreakpointsArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBreakpoints(): FunctionBreakpoint[];
    hashCode(): number;
    setBreakpoints(breakpoints: FunctionBreakpoint[]): SetFunctionBreakpointsArguments;
}