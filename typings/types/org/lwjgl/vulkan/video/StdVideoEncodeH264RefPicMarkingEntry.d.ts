import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoEncodeH264RefPicMarkingEntry extends Struct<StdVideoEncodeH264RefPicMarkingEntry> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DIFFERENCE_OF_PIC_NUMS_MINUS1: number;
    static LONG_TERM_FRAME_IDX: number;
    static LONG_TERM_PIC_NUM: number;
    static MAX_LONG_TERM_FRAME_IDX_PLUS1: number;
    static MEMORY_MANAGEMENT_CONTROL_OPERATION: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoEncodeH264RefPicMarkingEntry;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH264RefPicMarkingEntry;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH264RefPicMarkingEntry;
    static create(paramarg0: number): StdVideoEncodeH264RefPicMarkingEntry;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH264RefPicMarkingEntry;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH264RefPicMarkingEntry;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH264RefPicMarkingEntry;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndifference_of_pic_nums_minus1(paramarg0: number): number;
    static ndifference_of_pic_nums_minus1(paramarg0: number, paramarg1: number): void;
    static nlong_term_frame_idx(paramarg0: number): number;
    static nlong_term_frame_idx(paramarg0: number, paramarg1: number): void;
    static nlong_term_pic_num(paramarg0: number): number;
    static nlong_term_pic_num(paramarg0: number, paramarg1: number): void;
    static nmax_long_term_frame_idx_plus1(paramarg0: number): number;
    static nmax_long_term_frame_idx_plus1(paramarg0: number, paramarg1: number): void;
    static nmemory_management_control_operation(paramarg0: number): number;
    static nmemory_management_control_operation(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH264RefPicMarkingEntry;
    difference_of_pic_nums_minus1(): number;
    difference_of_pic_nums_minus1(arg0: number): StdVideoEncodeH264RefPicMarkingEntry;
    long_term_frame_idx(): number;
    long_term_frame_idx(arg0: number): StdVideoEncodeH264RefPicMarkingEntry;
    long_term_pic_num(): number;
    long_term_pic_num(arg0: number): StdVideoEncodeH264RefPicMarkingEntry;
    max_long_term_frame_idx_plus1(): number;
    max_long_term_frame_idx_plus1(arg0: number): StdVideoEncodeH264RefPicMarkingEntry;
    memory_management_control_operation(): number;
    memory_management_control_operation(arg0: number): StdVideoEncodeH264RefPicMarkingEntry;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): StdVideoEncodeH264RefPicMarkingEntry;
    set(arg0: StdVideoEncodeH264RefPicMarkingEntry): StdVideoEncodeH264RefPicMarkingEntry;
    sizeof(): number;
}