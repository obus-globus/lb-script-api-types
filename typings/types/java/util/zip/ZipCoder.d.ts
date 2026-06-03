import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { CharsetDecoder } from '../../../java/nio/charset/CharsetDecoder.d.ts'
import type { CharsetEncoder } from '../../../java/nio/charset/CharsetEncoder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ZipCoder extends Object {
    static get(paramarg0: Charset): ZipCoder;
    private constructor(arg0: Charset)
    // private cs: Charset;
    // private dec: CharsetDecoder;
    // private enc: CharsetEncoder;
    charset(): Charset;
    checkedHash(arg0: number[], arg1: number, arg2: number): number;
    compare(arg0: string, arg1: number[], arg2: number, arg3: number, arg4: boolean): number;
    decoder(): CharsetDecoder;
    // private encoder(): CharsetEncoder;
    getBytes(arg0: string): number[];
    isUTF8(): boolean;
    toString(): string;
    toString(arg0: number[]): string;
    toString(arg0: number[], arg1: number): string;
    toString(arg0: number[], arg1: number, arg2: number): string;
}