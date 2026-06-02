import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class RunInTerminalResponse$ResponseBody extends JSONBase {
    static create(): RunInTerminalResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getProcessId(): number;
    getShellProcessId(): number;
    hashCode(): number;
    setProcessId(processId: number): RunInTerminalResponse$ResponseBody;
    setShellProcessId(shellProcessId: number): RunInTerminalResponse$ResponseBody;
}