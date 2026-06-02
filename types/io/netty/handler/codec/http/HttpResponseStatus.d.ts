import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HttpStatusClass } from '../../../../../io/netty/handler/codec/http/HttpStatusClass.d.ts'
import type { AsciiString } from '../../../../../io/netty/util/AsciiString.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class HttpResponseStatus extends Object implements Comparable<HttpResponseStatus> {
    static ACCEPTED: HttpResponseStatus;
    static BAD_GATEWAY: HttpResponseStatus;
    static BAD_REQUEST: HttpResponseStatus;
    static CONFLICT: HttpResponseStatus;
    static CONTINUE: HttpResponseStatus;
    static CREATED: HttpResponseStatus;
    static EARLY_HINTS: HttpResponseStatus;
    static EXPECTATION_FAILED: HttpResponseStatus;
    static FAILED_DEPENDENCY: HttpResponseStatus;
    static FORBIDDEN: HttpResponseStatus;
    static FOUND: HttpResponseStatus;
    static GATEWAY_TIMEOUT: HttpResponseStatus;
    static GONE: HttpResponseStatus;
    static HTTP_VERSION_NOT_SUPPORTED: HttpResponseStatus;
    static INSUFFICIENT_STORAGE: HttpResponseStatus;
    static INTERNAL_SERVER_ERROR: HttpResponseStatus;
    static LENGTH_REQUIRED: HttpResponseStatus;
    static LOCKED: HttpResponseStatus;
    static METHOD_NOT_ALLOWED: HttpResponseStatus;
    static MISDIRECTED_REQUEST: HttpResponseStatus;
    static MOVED_PERMANENTLY: HttpResponseStatus;
    static MULTIPLE_CHOICES: HttpResponseStatus;
    static MULTI_STATUS: HttpResponseStatus;
    static NETWORK_AUTHENTICATION_REQUIRED: HttpResponseStatus;
    static NON_AUTHORITATIVE_INFORMATION: HttpResponseStatus;
    static NOT_ACCEPTABLE: HttpResponseStatus;
    static NOT_EXTENDED: HttpResponseStatus;
    static NOT_FOUND: HttpResponseStatus;
    static NOT_IMPLEMENTED: HttpResponseStatus;
    static NOT_MODIFIED: HttpResponseStatus;
    static NO_CONTENT: HttpResponseStatus;
    static OK: HttpResponseStatus;
    static PARTIAL_CONTENT: HttpResponseStatus;
    static PAYMENT_REQUIRED: HttpResponseStatus;
    static PERMANENT_REDIRECT: HttpResponseStatus;
    static PRECONDITION_FAILED: HttpResponseStatus;
    static PRECONDITION_REQUIRED: HttpResponseStatus;
    static PROCESSING: HttpResponseStatus;
    static PROXY_AUTHENTICATION_REQUIRED: HttpResponseStatus;
    static REQUESTED_RANGE_NOT_SATISFIABLE: HttpResponseStatus;
    static REQUEST_ENTITY_TOO_LARGE: HttpResponseStatus;
    static REQUEST_HEADER_FIELDS_TOO_LARGE: HttpResponseStatus;
    static REQUEST_TIMEOUT: HttpResponseStatus;
    static REQUEST_URI_TOO_LONG: HttpResponseStatus;
    static RESET_CONTENT: HttpResponseStatus;
    static SEE_OTHER: HttpResponseStatus;
    static SERVICE_UNAVAILABLE: HttpResponseStatus;
    static SWITCHING_PROTOCOLS: HttpResponseStatus;
    static TEMPORARY_REDIRECT: HttpResponseStatus;
    static TOO_MANY_REQUESTS: HttpResponseStatus;
    static UNAUTHORIZED: HttpResponseStatus;
    static UNORDERED_COLLECTION: HttpResponseStatus;
    static UNPROCESSABLE_ENTITY: HttpResponseStatus;
    static UNSUPPORTED_MEDIA_TYPE: HttpResponseStatus;
    static UPGRADE_REQUIRED: HttpResponseStatus;
    static USE_PROXY: HttpResponseStatus;
    static VARIANT_ALSO_NEGOTIATES: HttpResponseStatus;
    static parseLine(paramarg0: AsciiString): HttpResponseStatus;
    static parseLine(paramarg0: CharSequence): HttpResponseStatus;
    static parseLine(paramarg0: string): HttpResponseStatus;
    static valueOf(paramarg0: number): HttpResponseStatus;
    static valueOf(paramarg0: number, paramarg1: string): HttpResponseStatus;
    private constructor(arg0: number)
    constructor(arg0: number, arg1: string)
    private constructor(arg0: number, arg1: string, arg2: boolean)
    // private bytes: number[];
    // private code: number;
    // private codeAsText: AsciiString;
    // private codeClass: HttpStatusClass;
    // private reasonPhrase: string;
    code(): number;
    codeAsText(): AsciiString;
    codeClass(): HttpStatusClass;
    compareTo(arg0: HttpResponseStatus): number;
    encode(arg0: ByteBuf): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    reasonPhrase(): string;
    toString(): string;
}