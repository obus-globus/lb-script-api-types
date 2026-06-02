import type { AsciiString } from '../../../../../../io/netty/util/AsciiString.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WebSocketScheme extends Object {
    static WS: WebSocketScheme;
    static WSS: WebSocketScheme;
    private constructor(arg0: number, arg1: string)
    // private name: AsciiString;
    // private port: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): AsciiString;
    port(): number;
    toString(): string;
}