import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class SourceBreakpoint extends JSONBase {
    static create(paramline: number): SourceBreakpoint;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getColumn(): number;
    getCondition(): string;
    getHitCondition(): string;
    getLine(): number;
    getLogMessage(): string;
    hashCode(): number;
    setColumn(column: number): SourceBreakpoint;
    setCondition(condition: string): SourceBreakpoint;
    setHitCondition(hitCondition: string): SourceBreakpoint;
    setLine(line: number): SourceBreakpoint;
    setLogMessage(logMessage: string): SourceBreakpoint;
}