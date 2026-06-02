import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ValueFormat extends JSONBase {
    static create(): ValueFormat;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getHex(): boolean;
    hashCode(): number;
    setHex(hex: boolean): ValueFormat;
}