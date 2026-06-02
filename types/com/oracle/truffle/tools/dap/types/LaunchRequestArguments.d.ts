import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class LaunchRequestArguments extends JSONBase {
    static create(): LaunchRequestArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    get(attrName: string): Object;
    getNoDebug(): boolean;
    getRestart(): Object;
    hashCode(): number;
    set(attrName: string, value: Object): LaunchRequestArguments;
    setNoDebug(noDebug: boolean): LaunchRequestArguments;
    setRestart(restart: Object): LaunchRequestArguments;
}