import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class NextArguments extends JSONBase {
    static create(paramthreadId: number): NextArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getThreadId(): number;
    hashCode(): number;
    setThreadId(threadId: number): NextArguments;
}