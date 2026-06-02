import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Thread } from '../../../../../../com/oracle/truffle/tools/dap/types/Thread.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ThreadsResponse$ResponseBody extends JSONBase {
    static create(paramthreads: Thread[]): ThreadsResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getThreads(): Thread[];
    hashCode(): number;
    setThreads(threads: Thread[]): ThreadsResponse$ResponseBody;
}