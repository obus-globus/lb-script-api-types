import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class StepInArguments extends JSONBase {
    static create(paramthreadId: number): StepInArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getTargetId(): number;
    getThreadId(): number;
    hashCode(): number;
    setTargetId(targetId: number): StepInArguments;
    setThreadId(threadId: number): StepInArguments;
}