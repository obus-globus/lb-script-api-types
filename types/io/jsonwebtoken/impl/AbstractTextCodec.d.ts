import type { TextCodec } from '../../../io/jsonwebtoken/impl/TextCodec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractTextCodec extends Object implements TextCodec {
    static BASE64: TextCodec;
    static BASE64URL: TextCodec;
    constructor()
    decodeToString(arg0: string): string;
    encode(arg0: string): string;
}