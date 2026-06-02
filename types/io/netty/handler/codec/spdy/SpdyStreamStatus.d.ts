import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class SpdyStreamStatus extends Object implements Comparable<SpdyStreamStatus> {
    static CANCEL: SpdyStreamStatus;
    static FLOW_CONTROL_ERROR: SpdyStreamStatus;
    static FRAME_TOO_LARGE: SpdyStreamStatus;
    static INTERNAL_ERROR: SpdyStreamStatus;
    static INVALID_CREDENTIALS: SpdyStreamStatus;
    static INVALID_STREAM: SpdyStreamStatus;
    static PROTOCOL_ERROR: SpdyStreamStatus;
    static REFUSED_STREAM: SpdyStreamStatus;
    static STREAM_ALREADY_CLOSED: SpdyStreamStatus;
    static STREAM_IN_USE: SpdyStreamStatus;
    static UNSUPPORTED_VERSION: SpdyStreamStatus;
    static valueOf(paramarg0: number): SpdyStreamStatus;
    constructor(arg0: number, arg1: string)
    // private code: number;
    // private statusPhrase: string;
    code(): number;
    compareTo(arg0: SpdyStreamStatus): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    statusPhrase(): string;
    toString(): string;
}