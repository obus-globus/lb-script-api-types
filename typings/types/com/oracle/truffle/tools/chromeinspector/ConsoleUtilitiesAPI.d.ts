import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { BreakpointsHandler } from '../../../../../com/oracle/truffle/tools/chromeinspector/BreakpointsHandler.d.ts'
import type { ConsoleUtilitiesAPI$Method } from '../../../../../com/oracle/truffle/tools/chromeinspector/ConsoleUtilitiesAPI$Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ConsoleUtilitiesAPI extends Object {
    static parse(paramexpression: string): ConsoleUtilitiesAPI;
    private constructor(method: ConsoleUtilitiesAPI$Method, expression: string)
    readonly expression: string;
    // private method: ConsoleUtilitiesAPI$Method;
    getExpression(): string;
    process(value: DebugValue, breakpointsHandler: BreakpointsHandler): DebugValue;
}