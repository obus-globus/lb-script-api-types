import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BinaryDecoder } from '../../../../../org/apache/commons/codec/BinaryDecoder.d.ts'
import type { BinaryEncoder } from '../../../../../org/apache/commons/codec/BinaryEncoder.d.ts'
export class BinaryCodec extends Object implements BinaryDecoder, BinaryEncoder {
    static fromAscii(paramarg0: number[]): number[];
    static fromAscii(paramarg0: string[]): number[];
    static toAsciiBytes(paramarg0: number[]): number[];
    static toAsciiChars(paramarg0: number[]): string[];
    static toAsciiString(paramarg0: number[]): string;
    constructor()
    decode(arg0: Object): Object;
    decode(arg0: number[]): number[];
    encode(arg0: Object): Object;
    encode(arg0: number[]): number[];
    toByteArray(arg0: string): number[];
}