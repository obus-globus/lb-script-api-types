import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ErrorCodes extends Enum<ErrorCodes> {
    static ContentModified: ErrorCodes;
    static InternalError: ErrorCodes;
    static InvalidParams: ErrorCodes;
    static InvalidRequest: ErrorCodes;
    static MessageReadError: ErrorCodes;
    static MessageWriteError: ErrorCodes;
    static MethodNotFound: ErrorCodes;
    static ParseError: ErrorCodes;
    static RequestCancelled: ErrorCodes;
    static ServerNotInitialized: ErrorCodes;
    static UnknownErrorCode: ErrorCodes;
    static serverErrorEnd: ErrorCodes;
    static serverErrorStart: ErrorCodes;
    static get(paramintValue: number): ErrorCodes;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ErrorCodes;
    static values(): ErrorCodes[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "ParseError" | "InvalidRequest" | "MethodNotFound" | "InvalidParams" | "InternalError" | "serverErrorStart" | "serverErrorEnd" | "ServerNotInitialized" | "UnknownErrorCode" | "RequestCancelled" | "ContentModified" | "MessageWriteError" | "MessageReadError";
}