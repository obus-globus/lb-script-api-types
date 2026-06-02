import type { AbstractTextCodec } from '../../../io/jsonwebtoken/impl/AbstractTextCodec.d.ts'
import type { TextCodec } from '../../../io/jsonwebtoken/impl/TextCodec.d.ts'
export class Base64Codec extends AbstractTextCodec {
    static BASE64: TextCodec;
    static BASE64URL: TextCodec;
    constructor()
    decode(arg0: string): number[];
    encode(arg0: number[]): string;
}