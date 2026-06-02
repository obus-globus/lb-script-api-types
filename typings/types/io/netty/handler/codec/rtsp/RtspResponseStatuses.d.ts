import type { HttpResponseStatus } from '../../../../../io/netty/handler/codec/http/HttpResponseStatus.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RtspResponseStatuses extends Object {
    static AGGREGATE_OPERATION_NOT_ALLOWED: HttpResponseStatus;
    static BAD_GATEWAY: HttpResponseStatus;
    static BAD_REQUEST: HttpResponseStatus;
    static CONFERENCE_NOT_FOUND: HttpResponseStatus;
    static CONTINUE: HttpResponseStatus;
    static CREATED: HttpResponseStatus;
    static DESTINATION_UNREACHABLE: HttpResponseStatus;
    static FORBIDDEN: HttpResponseStatus;
    static GATEWAY_TIMEOUT: HttpResponseStatus;
    static GONE: HttpResponseStatus;
    static HEADER_FIELD_NOT_VALID: HttpResponseStatus;
    static INTERNAL_SERVER_ERROR: HttpResponseStatus;
    static INVALID_RANGE: HttpResponseStatus;
    static KEY_MANAGEMENT_FAILURE: HttpResponseStatus;
    static LENGTH_REQUIRED: HttpResponseStatus;
    static LOW_STORAGE_SPACE: HttpResponseStatus;
    static METHOD_NOT_ALLOWED: HttpResponseStatus;
    static METHOD_NOT_VALID: HttpResponseStatus;
    static MOVED_PERMANENTLY: HttpResponseStatus;
    static MOVED_TEMPORARILY: HttpResponseStatus;
    static MULTIPLE_CHOICES: HttpResponseStatus;
    static NOT_ACCEPTABLE: HttpResponseStatus;
    static NOT_ENOUGH_BANDWIDTH: HttpResponseStatus;
    static NOT_FOUND: HttpResponseStatus;
    static NOT_IMPLEMENTED: HttpResponseStatus;
    static NOT_MODIFIED: HttpResponseStatus;
    static OK: HttpResponseStatus;
    static ONLY_AGGREGATE_OPERATION_ALLOWED: HttpResponseStatus;
    static OPTION_NOT_SUPPORTED: HttpResponseStatus;
    static PARAMETER_IS_READONLY: HttpResponseStatus;
    static PARAMETER_NOT_UNDERSTOOD: HttpResponseStatus;
    static PAYMENT_REQUIRED: HttpResponseStatus;
    static PRECONDITION_FAILED: HttpResponseStatus;
    static PROXY_AUTHENTICATION_REQUIRED: HttpResponseStatus;
    static REQUEST_ENTITY_TOO_LARGE: HttpResponseStatus;
    static REQUEST_TIMEOUT: HttpResponseStatus;
    static REQUEST_URI_TOO_LONG: HttpResponseStatus;
    static RTSP_VERSION_NOT_SUPPORTED: HttpResponseStatus;
    static SERVICE_UNAVAILABLE: HttpResponseStatus;
    static SESSION_NOT_FOUND: HttpResponseStatus;
    static UNAUTHORIZED: HttpResponseStatus;
    static UNSUPPORTED_MEDIA_TYPE: HttpResponseStatus;
    static UNSUPPORTED_TRANSPORT: HttpResponseStatus;
    static USE_PROXY: HttpResponseStatus;
    static valueOf(paramarg0: number): HttpResponseStatus;
    private constructor()
}