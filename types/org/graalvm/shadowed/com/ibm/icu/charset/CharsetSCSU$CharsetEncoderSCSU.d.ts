import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetEncoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetEncoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
import type { CharsetSCSU$SCSUData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetSCSU$SCSUData.d.ts'
export class CharsetSCSU$CharsetEncoderSCSU extends CharsetEncoderICU {
    static getMaxBytesForString(paramlength: number, parammaxCharSize: number): number;
    constructor(null_: CharsetSCSU$CharsetEncoderSCSU, cs: CharsetICU)
    // private AfterGetTrail: boolean;
    // private AfterGetTrailUnicode: boolean;
    // private LabelLoop: boolean;
    // private c: number;
    // private code: number;
    // private cr: CoderResult;
    // private currentOffset: number;
    // private data: CharsetSCSU$SCSUData;
    // private delta: number;
    // private dynamicWindow: number;
    // private isSingleByteMode: boolean;
    // private lead: string;
    // private length: number;
    // private nextSourceIndex: number;
    // private offset: number;
    // private sourceIndex: number;
    // private targetCapacity: number;
    // private trail: string;
    // private window: number;
    encodeLoop(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    // private endLoop(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer): void;
    // private getDynamicOffset(): number;
    // private getNextDynamicWindow(): number;
    // private getTrail(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer): number;
    // private getTrailUnicode(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer): number;
    // private getWindow(offsets: number[]): number;
    implReset(): void;
    // private isInOffsetWindowOrDirect(offsetValue: number, a: number): boolean;
    // private loop(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer): number;
    // private outputBytes(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer): number;
    // private useDynamicWindow(windowValue: number): void;
}