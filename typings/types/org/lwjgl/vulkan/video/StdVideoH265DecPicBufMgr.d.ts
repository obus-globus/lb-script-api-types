import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoH265DecPicBufMgr extends Struct<StdVideoH265DecPicBufMgr> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAX_DEC_PIC_BUFFERING_MINUS1: number;
    static MAX_LATENCY_INCREASE_PLUS1: number;
    static MAX_NUM_REORDER_PICS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoH265DecPicBufMgr;
    static calloc(paramarg0: MemoryStack): StdVideoH265DecPicBufMgr;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH265DecPicBufMgr;
    static create(paramarg0: number): StdVideoH265DecPicBufMgr;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH265DecPicBufMgr;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH265DecPicBufMgr;
    static malloc(paramarg0: MemoryStack): StdVideoH265DecPicBufMgr;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmax_dec_pic_buffering_minus1(paramarg0: number, paramarg1: number): number;
    static nmax_dec_pic_buffering_minus1(paramarg0: number): ByteBuffer;
    static nmax_dec_pic_buffering_minus1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nmax_dec_pic_buffering_minus1(paramarg0: number, paramarg1: ByteBuffer): void;
    static nmax_latency_increase_plus1(paramarg0: number, paramarg1: number): number;
    static nmax_latency_increase_plus1(paramarg0: number): IntBuffer;
    static nmax_latency_increase_plus1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nmax_latency_increase_plus1(paramarg0: number, paramarg1: IntBuffer): void;
    static nmax_num_reorder_pics(paramarg0: number, paramarg1: number): number;
    static nmax_num_reorder_pics(paramarg0: number): ByteBuffer;
    static nmax_num_reorder_pics(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nmax_num_reorder_pics(paramarg0: number, paramarg1: ByteBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoH265DecPicBufMgr;
    max_dec_pic_buffering_minus1(): ByteBuffer;
    max_dec_pic_buffering_minus1(arg0: ByteBuffer): StdVideoH265DecPicBufMgr;
    max_dec_pic_buffering_minus1(arg0: number): number;
    max_dec_pic_buffering_minus1(arg0: number, arg1: number): StdVideoH265DecPicBufMgr;
    max_latency_increase_plus1(): IntBuffer;
    max_latency_increase_plus1(arg0: IntBuffer): StdVideoH265DecPicBufMgr;
    max_latency_increase_plus1(arg0: number): number;
    max_latency_increase_plus1(arg0: number, arg1: number): StdVideoH265DecPicBufMgr;
    max_num_reorder_pics(): ByteBuffer;
    max_num_reorder_pics(arg0: ByteBuffer): StdVideoH265DecPicBufMgr;
    max_num_reorder_pics(arg0: number): number;
    max_num_reorder_pics(arg0: number, arg1: number): StdVideoH265DecPicBufMgr;
    set(arg0: IntBuffer, arg1: ByteBuffer, arg2: ByteBuffer): StdVideoH265DecPicBufMgr;
    set(arg0: StdVideoH265DecPicBufMgr): StdVideoH265DecPicBufMgr;
    sizeof(): number;
}