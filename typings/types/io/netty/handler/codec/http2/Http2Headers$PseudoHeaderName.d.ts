import type { AsciiString } from '../../../../../io/netty/util/AsciiString.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Http2Headers$PseudoHeaderName extends Enum<Http2Headers$PseudoHeaderName> {
    static AUTHORITY: Http2Headers$PseudoHeaderName;
    static METHOD: Http2Headers$PseudoHeaderName;
    static PATH: Http2Headers$PseudoHeaderName;
    static PROTOCOL: Http2Headers$PseudoHeaderName;
    static SCHEME: Http2Headers$PseudoHeaderName;
    static STATUS: Http2Headers$PseudoHeaderName;
    static getPseudoHeader(paramarg0: AsciiString): Http2Headers$PseudoHeaderName;
    static getPseudoHeader(paramarg0: CharSequence): Http2Headers$PseudoHeaderName;
    static hasPseudoHeaderFormat(paramarg0: CharSequence): boolean;
    static isPseudoHeader(paramarg0: AsciiString): boolean;
    static isPseudoHeader(paramarg0: CharSequence): boolean;
    static isPseudoHeader(paramarg0: string): boolean;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Http2Headers$PseudoHeaderName;
    static values(): Http2Headers$PseudoHeaderName[];
    private constructor(arg2: string, arg3: boolean)
    readonly requestOnly: boolean;
    // private value: AsciiString;
    isRequestOnly(): boolean;
    value(): AsciiString;
    name(): "METHOD" | "SCHEME" | "AUTHORITY" | "PATH" | "STATUS" | "PROTOCOL";
}