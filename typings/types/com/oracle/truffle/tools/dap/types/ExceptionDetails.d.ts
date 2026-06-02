import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ExceptionDetails extends JSONBase {
    static create(): ExceptionDetails;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getEvaluateName(): string;
    getFullTypeName(): string;
    getInnerException(): ExceptionDetails[];
    getMessage(): string;
    getStackTrace(): string;
    getTypeName(): string;
    hashCode(): number;
    setEvaluateName(evaluateName: string): ExceptionDetails;
    setFullTypeName(fullTypeName: string): ExceptionDetails;
    setInnerException(innerException: ExceptionDetails[]): ExceptionDetails;
    setMessage(message: string): ExceptionDetails;
    setStackTrace(stackTrace: string): ExceptionDetails;
    setTypeName(typeName: string): ExceptionDetails;
}