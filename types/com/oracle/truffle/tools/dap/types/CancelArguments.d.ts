import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class CancelArguments extends JSONBase {
    static create(): CancelArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getProgressId(): string;
    getRequestId(): number;
    hashCode(): number;
    setProgressId(progressId: string): CancelArguments;
    setRequestId(requestId: number): CancelArguments;
}