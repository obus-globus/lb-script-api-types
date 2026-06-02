import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BinaryDecoder } from '../../../../../org/apache/commons/codec/BinaryDecoder.d.ts'
import type { BinaryEncoder } from '../../../../../org/apache/commons/codec/BinaryEncoder.d.ts'
export class PercentCodec extends Object implements BinaryDecoder, BinaryEncoder {
    constructor()
    constructor(arg0: number[], arg1: boolean)
    // private alwaysEncodeChars: BitSet;
    // private alwaysEncodeCharsMax: number;
    // private alwaysEncodeCharsMin: number;
    // private plusForSpace: boolean;
    // private canEncode(arg0: number): boolean;
    // private containsSpace(arg0: number[]): boolean;
    decode(arg0: Object): Object;
    decode(arg0: number[]): number[];
    // private doEncode(arg0: number[], arg1: number, arg2: boolean): number[];
    encode(arg0: Object): Object;
    encode(arg0: number[]): number[];
    // private expectedDecodingBytes(arg0: number[]): number;
    // private expectedEncodingBytes(arg0: number[]): number;
    // private inAlwaysEncodeCharsRange(arg0: number): boolean;
    // private insertAlwaysEncodeChar(arg0: number): void;
    // private insertAlwaysEncodeChars(arg0: number[]): void;
    // private isAsciiChar(arg0: number): boolean;
}