import type { AsciiString } from '../../../../../../io/netty/util/AsciiString.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class WebSocketVersion extends Enum<WebSocketVersion> {
    static UNKNOWN: WebSocketVersion;
    static V00: WebSocketVersion;
    static V07: WebSocketVersion;
    static V08: WebSocketVersion;
    static V13: WebSocketVersion;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): WebSocketVersion;
    static values(): WebSocketVersion[];
    private constructor(arg2: AsciiString)
    // private headerValue: AsciiString;
    toAsciiString(): AsciiString;
    toHttpHeaderValue(): string;
    name(): "UNKNOWN" | "V00" | "V07" | "V08" | "V13";
}