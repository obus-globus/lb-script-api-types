import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class TerminateArguments extends JSONBase {
    static create(): TerminateArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getRestart(): boolean;
    hashCode(): number;
    setRestart(restart: boolean): TerminateArguments;
}