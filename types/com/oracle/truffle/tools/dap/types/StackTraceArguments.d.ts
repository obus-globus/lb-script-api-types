import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { StackFrameFormat } from '../../../../../../com/oracle/truffle/tools/dap/types/StackFrameFormat.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class StackTraceArguments extends JSONBase {
    static create(paramthreadId: number): StackTraceArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getFormat(): StackFrameFormat;
    getLevels(): number;
    getStartFrame(): number;
    getThreadId(): number;
    hashCode(): number;
    setFormat(format: StackFrameFormat): StackTraceArguments;
    setLevels(levels: number): StackTraceArguments;
    setStartFrame(startFrame: number): StackTraceArguments;
    setThreadId(threadId: number): StackTraceArguments;
}