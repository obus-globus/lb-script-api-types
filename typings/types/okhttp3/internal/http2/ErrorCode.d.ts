import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { ErrorCode$Companion } from '../../../okhttp3/internal/http2/ErrorCode$Companion.d.ts'
export class ErrorCode extends Enum<ErrorCode> {
    static CANCEL: ErrorCode;
    static COMPRESSION_ERROR: ErrorCode;
    static CONNECT_ERROR: ErrorCode;
    static Companion: ErrorCode$Companion;
    static ENHANCE_YOUR_CALM: ErrorCode;
    static FLOW_CONTROL_ERROR: ErrorCode;
    static FRAME_SIZE_ERROR: ErrorCode;
    static HTTP_1_1_REQUIRED: ErrorCode;
    static INADEQUATE_SECURITY: ErrorCode;
    static INTERNAL_ERROR: ErrorCode;
    static NO_ERROR: ErrorCode;
    static PROTOCOL_ERROR: ErrorCode;
    static REFUSED_STREAM: ErrorCode;
    static SETTINGS_TIMEOUT: ErrorCode;
    static STREAM_CLOSED: ErrorCode;
    static getEntries(): ErrorCode[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ErrorCode;
    static values(): ErrorCode[];
    private constructor(httpCode: number)
    readonly httpCode: number;
    name(): "NO_ERROR" | "PROTOCOL_ERROR" | "INTERNAL_ERROR" | "FLOW_CONTROL_ERROR" | "SETTINGS_TIMEOUT" | "STREAM_CLOSED" | "FRAME_SIZE_ERROR" | "REFUSED_STREAM" | "CANCEL" | "COMPRESSION_ERROR" | "CONNECT_ERROR" | "ENHANCE_YOUR_CALM" | "INADEQUATE_SECURITY" | "HTTP_1_1_REQUIRED";
}