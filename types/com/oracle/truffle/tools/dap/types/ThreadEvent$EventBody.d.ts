import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ThreadEvent$EventBody extends JSONBase {
    static create(paramreason: string, paramthreadId: number): ThreadEvent$EventBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getReason(): string;
    getThreadId(): number;
    hashCode(): number;
    setReason(reason: string): ThreadEvent$EventBody;
    setThreadId(threadId: number): ThreadEvent$EventBody;
}