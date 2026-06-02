import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Decoder } from '../../../../io/jsonwebtoken/io/Decoder.d.ts'
import type { Encoder } from '../../../../io/jsonwebtoken/io/Encoder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Codec extends Object implements Converter<number[], CharSequence> {
    static BASE64: Codec;
    static BASE64URL: Codec;
    constructor(arg0: Encoder<number[], string>, arg1: Decoder<CharSequence, number[]>)
    // private decoder: Decoder<CharSequence, number[]>;
    // private encoder: Encoder<number[], string>;
    applyFrom(arg0: CharSequence): number[];
    applyTo(arg0: number[]): string;
}