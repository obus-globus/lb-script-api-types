import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Base64$Encoder extends Object {
    private constructor(arg0: boolean, arg1: number[], arg2: number, arg3: boolean)
    // private doPadding: boolean;
    // private isURL: boolean;
    // private linemax: number;
    // private newline: number[];
    encode(arg0: ByteBuffer): ByteBuffer;
    encode(arg0: number[]): number[];
    encode(arg0: number[], arg1: number[]): number;
    // private encode0(arg0: number[], arg1: number, arg2: number, arg3: number[]): number;
    // private encodeBlock(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: boolean): void;
    encodeToString(arg0: number[]): string;
    // private encodedOutLength(arg0: number, arg1: boolean): number;
    withoutPadding(): Base64$Encoder;
    wrap(arg0: OutputStream): OutputStream;
}