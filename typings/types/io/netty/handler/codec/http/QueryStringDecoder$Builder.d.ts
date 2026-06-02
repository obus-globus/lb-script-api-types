import type { QueryStringDecoder } from '../../../../../io/netty/handler/codec/http/QueryStringDecoder.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class QueryStringDecoder$Builder extends Object {
    private constructor()
    // private charset: Charset;
    // private hasPath: boolean;
    // private htmlQueryDecoding: boolean;
    // private maxParams: number;
    // private semicolonIsNormalChar: boolean;
    build(arg0: URI): QueryStringDecoder;
    build(arg0: string): QueryStringDecoder;
    charset(arg0: Charset): QueryStringDecoder$Builder;
    hasPath(arg0: boolean): QueryStringDecoder$Builder;
    htmlQueryDecoding(arg0: boolean): QueryStringDecoder$Builder;
    maxParams(arg0: number): QueryStringDecoder$Builder;
    semicolonIsNormalChar(arg0: boolean): QueryStringDecoder$Builder;
}