import type { ExceptionDetails } from '../../../../../../com/oracle/truffle/tools/dap/types/ExceptionDetails.d.ts'
import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ExceptionInfoResponse$ResponseBody extends JSONBase {
    static create(paramexceptionId: string, parambreakMode: string): ExceptionInfoResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBreakMode(): string;
    getDescription(): string;
    getDetails(): ExceptionDetails;
    getExceptionId(): string;
    hashCode(): number;
    setBreakMode(breakMode: string): ExceptionInfoResponse$ResponseBody;
    setDescription(description: string): ExceptionInfoResponse$ResponseBody;
    setDetails(details: ExceptionDetails): ExceptionInfoResponse$ResponseBody;
    setExceptionId(exceptionId: string): ExceptionInfoResponse$ResponseBody;
}