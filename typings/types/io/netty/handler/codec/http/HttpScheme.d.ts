import type { AsciiString } from '../../../../../io/netty/util/AsciiString.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpScheme extends Object {
    static HTTP: HttpScheme;
    static HTTPS: HttpScheme;
    private constructor(arg0: number, arg1: string)
    // private name: AsciiString;
    // private port: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): AsciiString;
    port(): number;
    toString(): string;
}