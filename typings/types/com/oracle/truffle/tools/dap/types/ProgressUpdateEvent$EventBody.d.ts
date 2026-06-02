import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ProgressUpdateEvent$EventBody extends JSONBase {
    static create(paramprogressId: string): ProgressUpdateEvent$EventBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getMessage(): string;
    getPercentage(): number;
    getProgressId(): string;
    hashCode(): number;
    setMessage(message: string): ProgressUpdateEvent$EventBody;
    setPercentage(percentage: number): ProgressUpdateEvent$EventBody;
    setProgressId(progressId: string): ProgressUpdateEvent$EventBody;
}