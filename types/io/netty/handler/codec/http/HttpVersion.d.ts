import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class HttpVersion extends Object implements Comparable<HttpVersion> {
    static HTTP_1_0: HttpVersion;
    static HTTP_1_1: HttpVersion;
    static valueOf(paramarg0: string): HttpVersion;
    constructor(arg0: string, arg1: boolean)
    constructor(arg0: string, arg1: boolean, arg2: boolean)
    constructor(arg0: string, arg1: number, arg2: number, arg3: boolean)
    private constructor(arg0: string, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    // private bytes: number[];
    readonly keepAliveDefault: boolean;
    // private majorVersion: number;
    // private minorVersion: number;
    // private protocolName: string;
    // private text: string;
    compareTo(arg0: HttpVersion): number;
    encode(arg0: ByteBuf): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isKeepAliveDefault(): boolean;
    majorVersion(): number;
    minorVersion(): number;
    protocolName(): string;
    text(): string;
    toString(): string;
}