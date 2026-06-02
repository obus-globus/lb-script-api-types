import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class TerminateThreadsArguments extends JSONBase {
    static create(): TerminateThreadsArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getThreadIds(): number[];
    hashCode(): number;
    setThreadIds(threadIds: number[]): TerminateThreadsArguments;
}