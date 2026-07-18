import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2Flags extends Object {
    static ACK: number;
    static END_HEADERS: number;
    static END_STREAM: number;
    static PADDED: number;
    static PRIORITY: number;
    constructor()
    constructor(arg0: number)
    // private value: number;
    ack(): boolean;
    ack(arg0: boolean): Http2Flags;
    endOfHeaders(): boolean;
    endOfHeaders(arg0: boolean): Http2Flags;
    endOfStream(): boolean;
    endOfStream(arg0: boolean): Http2Flags;
    equals(arg0: Object | null): boolean;
    getNumPriorityBytes(): number;
    getPaddingPresenceFieldLength(): number;
    hashCode(): number;
    isFlagSet(arg0: number): boolean;
    paddingPresent(): boolean;
    paddingPresent(arg0: boolean): Http2Flags;
    priorityPresent(): boolean;
    priorityPresent(arg0: boolean): Http2Flags;
    setFlag(arg0: boolean, arg1: number): Http2Flags;
    toString(): string;
    value(): number;
}