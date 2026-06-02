import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { StackFrame } from '../../../../../../com/oracle/truffle/tools/dap/types/StackFrame.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class StackTraceResponse$ResponseBody extends JSONBase {
    static create(paramstackFrames: StackFrame[]): StackTraceResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getStackFrames(): StackFrame[];
    getTotalFrames(): number;
    hashCode(): number;
    setStackFrames(stackFrames: StackFrame[]): StackTraceResponse$ResponseBody;
    setTotalFrames(totalFrames: number): StackTraceResponse$ResponseBody;
}