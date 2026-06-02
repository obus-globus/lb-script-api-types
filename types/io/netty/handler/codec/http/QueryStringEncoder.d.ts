import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class QueryStringEncoder extends Object {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Charset)
    // private charset: Charset;
    // private hasParams: boolean;
    // private uriBuilder: StringBuilder;
    addParam(arg0: string, arg1: string): void;
    // private appendEncoded(arg0: number): void;
    // private encodeComponent(arg0: CharSequence): void;
    // private encodeNonUtf8Component(arg0: CharSequence): void;
    // private encodeUtf8Component(arg0: CharSequence): void;
    // private encodeUtf8Component(arg0: CharSequence, arg1: number, arg2: number): void;
    // private encodeUtf8ComponentSlow(arg0: CharSequence, arg1: number, arg2: number): void;
    toString(): string;
    toUri(): URI;
    // private writeUtf8Surrogate(arg0: string, arg1: string): void;
}