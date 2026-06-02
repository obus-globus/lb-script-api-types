import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export class WebSocketCloseStatus extends Object implements Comparable<WebSocketCloseStatus> {
    static ABNORMAL_CLOSURE: WebSocketCloseStatus;
    static BAD_GATEWAY: WebSocketCloseStatus;
    static EMPTY: WebSocketCloseStatus;
    static ENDPOINT_UNAVAILABLE: WebSocketCloseStatus;
    static INTERNAL_SERVER_ERROR: WebSocketCloseStatus;
    static INVALID_MESSAGE_TYPE: WebSocketCloseStatus;
    static INVALID_PAYLOAD_DATA: WebSocketCloseStatus;
    static MANDATORY_EXTENSION: WebSocketCloseStatus;
    static MESSAGE_TOO_BIG: WebSocketCloseStatus;
    static NORMAL_CLOSURE: WebSocketCloseStatus;
    static POLICY_VIOLATION: WebSocketCloseStatus;
    static PROTOCOL_ERROR: WebSocketCloseStatus;
    static SERVICE_RESTART: WebSocketCloseStatus;
    static TLS_HANDSHAKE_FAILED: WebSocketCloseStatus;
    static TRY_AGAIN_LATER: WebSocketCloseStatus;
    static isValidStatusCode(paramarg0: number): boolean;
    static valueOf(paramarg0: number): WebSocketCloseStatus;
    constructor(arg0: number, arg1: string)
    constructor(arg0: number, arg1: string, arg2: boolean)
    // private reasonText: string;
    // private statusCode: number;
    // private text: string;
    code(): number;
    compareTo(arg0: WebSocketCloseStatus): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    reasonText(): string;
    toString(): string;
}