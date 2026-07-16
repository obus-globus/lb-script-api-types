import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoH265LongTermRefPicsSps extends Struct<StdVideoH265LongTermRefPicsSps> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LT_REF_PIC_POC_LSB_SPS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static USED_BY_CURR_PIC_LT_SPS_FLAG: number;
    static calloc(): StdVideoH265LongTermRefPicsSps;
    static calloc(paramarg0: MemoryStack): StdVideoH265LongTermRefPicsSps;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH265LongTermRefPicsSps;
    static create(paramarg0: number): StdVideoH265LongTermRefPicsSps;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH265LongTermRefPicsSps;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH265LongTermRefPicsSps;
    static malloc(paramarg0: MemoryStack): StdVideoH265LongTermRefPicsSps;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nlt_ref_pic_poc_lsb_sps(paramarg0: number, paramarg1: number): number;
    static nlt_ref_pic_poc_lsb_sps(paramarg0: number): IntBuffer;
    static nlt_ref_pic_poc_lsb_sps(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nlt_ref_pic_poc_lsb_sps(paramarg0: number, paramarg1: IntBuffer): void;
    static nused_by_curr_pic_lt_sps_flag(paramarg0: number): number;
    static nused_by_curr_pic_lt_sps_flag(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoH265LongTermRefPicsSps;
    lt_ref_pic_poc_lsb_sps(): IntBuffer;
    lt_ref_pic_poc_lsb_sps(arg0: IntBuffer): StdVideoH265LongTermRefPicsSps;
    lt_ref_pic_poc_lsb_sps(arg0: number): number;
    lt_ref_pic_poc_lsb_sps(arg0: number, arg1: number): StdVideoH265LongTermRefPicsSps;
    set(arg0: number, arg1: IntBuffer): StdVideoH265LongTermRefPicsSps;
    set(arg0: StdVideoH265LongTermRefPicsSps): StdVideoH265LongTermRefPicsSps;
    sizeof(): number;
    used_by_curr_pic_lt_sps_flag(): number;
    used_by_curr_pic_lt_sps_flag(arg0: number): StdVideoH265LongTermRefPicsSps;
}