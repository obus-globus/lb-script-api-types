import type { QueryStringDecoder$Builder } from '../../../../../io/netty/handler/codec/http/QueryStringDecoder$Builder.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class QueryStringDecoder extends Object {
    static builder(): QueryStringDecoder$Builder;
    static decodeComponent(paramarg0: string): string;
    static decodeComponent(paramarg0: string, paramarg1: Charset): string;
    constructor(arg0: QueryStringDecoder$Builder, arg1: URI, arg2: any)
    constructor(arg0: QueryStringDecoder$Builder, arg1: string, arg2: any)
    constructor(arg0: URI)
    constructor(arg0: URI, arg1: Charset)
    constructor(arg0: URI, arg1: Charset, arg2: number)
    constructor(arg0: URI, arg1: Charset, arg2: number, arg3: boolean)
    constructor(arg0: string)
    constructor(arg0: string, arg1: Charset)
    constructor(arg0: string, arg1: Charset, arg2: boolean)
    constructor(arg0: string, arg1: Charset, arg2: boolean, arg3: number)
    constructor(arg0: string, arg1: Charset, arg2: boolean, arg3: number, arg4: boolean)
    constructor(arg0: string, arg1: boolean)
    // private charset: Charset;
    // private htmlQueryDecoding: boolean;
    // private maxParams: number;
    // private params: { [key: string]: string[] };
    // private path: string;
    // private pathEndIdx: number;
    // private semicolonIsNormalChar: boolean;
    // private uri: string;
    // private addParam(arg0: string, arg1: number, arg2: number, arg3: number, arg4: { [key: string]: string[] }, arg5: Charset): boolean;
    // private decodeParams(arg0: string, arg1: number, arg2: Charset, arg3: number): { [key: string]: string[] };
    parameters(): { [key: string]: string[] };
    path(): string;
    // private pathEndIdx(): number;
    rawPath(): string;
    rawQuery(): string;
    toString(): string;
    uri(): string;
}