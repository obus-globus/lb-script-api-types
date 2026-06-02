import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class AttachRequestArguments extends JSONBase {
    static create(): AttachRequestArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    get(attrName: string): Object;
    getRestart(): Object;
    hashCode(): number;
    set(attrName: string, value: Object): AttachRequestArguments;
    setRestart(restart: Object): AttachRequestArguments;
}