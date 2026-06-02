import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class BreakpointLocation extends JSONBase {
    static create(paramline: number): BreakpointLocation;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getColumn(): number;
    getEndColumn(): number;
    getEndLine(): number;
    getLine(): number;
    hashCode(): number;
    setColumn(column: number): BreakpointLocation;
    setEndColumn(endColumn: number): BreakpointLocation;
    setEndLine(endLine: number): BreakpointLocation;
    setLine(line: number): BreakpointLocation;
}