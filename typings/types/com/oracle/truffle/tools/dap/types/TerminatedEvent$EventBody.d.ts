import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class TerminatedEvent$EventBody extends JSONBase {
    static create(): TerminatedEvent$EventBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getRestart(): Object;
    hashCode(): number;
    setRestart(restart: Object): TerminatedEvent$EventBody;
}