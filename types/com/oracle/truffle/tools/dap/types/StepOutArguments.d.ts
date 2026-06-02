import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class StepOutArguments extends JSONBase {
    static create(paramthreadId: number): StepOutArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getThreadId(): number;
    hashCode(): number;
    setThreadId(threadId: number): StepOutArguments;
}