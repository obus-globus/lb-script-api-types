import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Http2Error extends Enum<Http2Error> {
    static CANCEL: Http2Error;
    static COMPRESSION_ERROR: Http2Error;
    static CONNECT_ERROR: Http2Error;
    static ENHANCE_YOUR_CALM: Http2Error;
    static FLOW_CONTROL_ERROR: Http2Error;
    static FRAME_SIZE_ERROR: Http2Error;
    static HTTP_1_1_REQUIRED: Http2Error;
    static INADEQUATE_SECURITY: Http2Error;
    static INTERNAL_ERROR: Http2Error;
    static NO_ERROR: Http2Error;
    static PROTOCOL_ERROR: Http2Error;
    static REFUSED_STREAM: Http2Error;
    static SETTINGS_TIMEOUT: Http2Error;
    static STREAM_CLOSED: Http2Error;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Http2Error;
    static valueOf(paramarg0: number): Http2Error;
    static values(): Http2Error[];
    private constructor(arg2: number)
    // private code: number;
    code(): number;
    name(): "NO_ERROR" | "PROTOCOL_ERROR" | "INTERNAL_ERROR" | "FLOW_CONTROL_ERROR" | "SETTINGS_TIMEOUT" | "STREAM_CLOSED" | "FRAME_SIZE_ERROR" | "REFUSED_STREAM" | "CANCEL" | "COMPRESSION_ERROR" | "CONNECT_ERROR" | "ENHANCE_YOUR_CALM" | "INADEQUATE_SECURITY" | "HTTP_1_1_REQUIRED";
}