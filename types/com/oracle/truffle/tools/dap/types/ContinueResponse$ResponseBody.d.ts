import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ContinueResponse$ResponseBody extends JSONBase {
    static create(): ContinueResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAllThreadsContinued(): boolean;
    hashCode(): number;
    setAllThreadsContinued(allThreadsContinued: boolean): ContinueResponse$ResponseBody;
}