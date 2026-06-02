import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ProgressStartEvent$EventBody extends JSONBase {
    static create(paramprogressId: string, paramtitle: string): ProgressStartEvent$EventBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCancellable(): boolean;
    getMessage(): string;
    getPercentage(): number;
    getProgressId(): string;
    getRequestId(): number;
    getTitle(): string;
    hashCode(): number;
    setCancellable(cancellable: boolean): ProgressStartEvent$EventBody;
    setMessage(message: string): ProgressStartEvent$EventBody;
    setPercentage(percentage: number): ProgressStartEvent$EventBody;
    setProgressId(progressId: string): ProgressStartEvent$EventBody;
    setRequestId(requestId: number): ProgressStartEvent$EventBody;
    setTitle(title: string): ProgressStartEvent$EventBody;
}