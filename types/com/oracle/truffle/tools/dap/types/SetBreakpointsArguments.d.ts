import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/tools/dap/types/Source.d.ts'
import type { SourceBreakpoint } from '../../../../../../com/oracle/truffle/tools/dap/types/SourceBreakpoint.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class SetBreakpointsArguments extends JSONBase {
    static create(paramsource: Source): SetBreakpointsArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBreakpoints(): SourceBreakpoint[];
    getLines(): number[];
    getSource(): Source;
    getSourceModified(): boolean;
    hashCode(): number;
    setBreakpoints(breakpoints: SourceBreakpoint[]): SetBreakpointsArguments;
    setLines(lines: number[]): SetBreakpointsArguments;
    setSource(source: Source): SetBreakpointsArguments;
    setSourceModified(sourceModified: boolean): SetBreakpointsArguments;
}