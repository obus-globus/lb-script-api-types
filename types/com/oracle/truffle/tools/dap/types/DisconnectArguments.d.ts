import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class DisconnectArguments extends JSONBase {
    static create(): DisconnectArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getRestart(): boolean;
    getTerminateDebuggee(): boolean;
    hashCode(): number;
    setRestart(restart: boolean): DisconnectArguments;
    setTerminateDebuggee(terminateDebuggee: boolean): DisconnectArguments;
}