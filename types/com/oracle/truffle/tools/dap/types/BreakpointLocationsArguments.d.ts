import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/tools/dap/types/Source.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class BreakpointLocationsArguments extends JSONBase {
    static create(paramsource: Source, paramline: number): BreakpointLocationsArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getColumn(): number;
    getEndColumn(): number;
    getEndLine(): number;
    getLine(): number;
    getSource(): Source;
    hashCode(): number;
    setColumn(column: number): BreakpointLocationsArguments;
    setEndColumn(endColumn: number): BreakpointLocationsArguments;
    setEndLine(endLine: number): BreakpointLocationsArguments;
    setLine(line: number): BreakpointLocationsArguments;
    setSource(source: Source): BreakpointLocationsArguments;
}