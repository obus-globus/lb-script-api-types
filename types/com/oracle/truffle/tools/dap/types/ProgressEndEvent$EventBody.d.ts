import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ProgressEndEvent$EventBody extends JSONBase {
    static create(paramprogressId: string): ProgressEndEvent$EventBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getMessage(): string;
    getProgressId(): string;
    hashCode(): number;
    setMessage(message: string): ProgressEndEvent$EventBody;
    setProgressId(progressId: string): ProgressEndEvent$EventBody;
}