import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoEncodeH264RefListModEntry extends Struct<StdVideoEncodeH264RefListModEntry> implements NativeResource {
    static ABS_DIFF_PIC_NUM_MINUS1: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LONG_TERM_PIC_NUM: number;
    static MODIFICATION_OF_PIC_NUMS_IDC: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoEncodeH264RefListModEntry;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH264RefListModEntry;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH264RefListModEntry;
    static create(paramarg0: number): StdVideoEncodeH264RefListModEntry;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH264RefListModEntry;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH264RefListModEntry;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH264RefListModEntry;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nabs_diff_pic_num_minus1(paramarg0: number): number;
    static nabs_diff_pic_num_minus1(paramarg0: number, paramarg1: number): void;
    static nlong_term_pic_num(paramarg0: number): number;
    static nlong_term_pic_num(paramarg0: number, paramarg1: number): void;
    static nmodification_of_pic_nums_idc(paramarg0: number): number;
    static nmodification_of_pic_nums_idc(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    abs_diff_pic_num_minus1(): number;
    abs_diff_pic_num_minus1(arg0: number): StdVideoEncodeH264RefListModEntry;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH264RefListModEntry;
    long_term_pic_num(): number;
    long_term_pic_num(arg0: number): StdVideoEncodeH264RefListModEntry;
    modification_of_pic_nums_idc(): number;
    modification_of_pic_nums_idc(arg0: number): StdVideoEncodeH264RefListModEntry;
    set(arg0: number, arg1: number, arg2: number): StdVideoEncodeH264RefListModEntry;
    set(arg0: StdVideoEncodeH264RefListModEntry): StdVideoEncodeH264RefListModEntry;
    sizeof(): number;
}