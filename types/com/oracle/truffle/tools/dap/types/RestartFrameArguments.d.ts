import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class RestartFrameArguments extends JSONBase {
    static create(paramframeId: number): RestartFrameArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getFrameId(): number;
    hashCode(): number;
    setFrameId(frameId: number): RestartFrameArguments;
}