import type { Breakpoint } from '../../../../../../com/oracle/truffle/tools/dap/types/Breakpoint.d.ts'
import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class BreakpointEvent$EventBody extends JSONBase {
    static create(paramreason: string, parambreakpoint: Breakpoint): BreakpointEvent$EventBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBreakpoint(): Breakpoint;
    getReason(): string;
    hashCode(): number;
    setBreakpoint(breakpoint: Breakpoint): BreakpointEvent$EventBody;
    setReason(reason: string): BreakpointEvent$EventBody;
}