import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoEncodeH264SliceHeaderFlags extends Struct<StdVideoEncodeH264SliceHeaderFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoEncodeH264SliceHeaderFlags;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH264SliceHeaderFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH264SliceHeaderFlags;
    static create(paramarg0: number): StdVideoEncodeH264SliceHeaderFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH264SliceHeaderFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH264SliceHeaderFlags;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH264SliceHeaderFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static ndirect_spatial_mv_pred_flag(paramarg0: number): number;
    static ndirect_spatial_mv_pred_flag(paramarg0: number, paramarg1: number): void;
    static nnum_ref_idx_active_override_flag(paramarg0: number): number;
    static nnum_ref_idx_active_override_flag(paramarg0: number, paramarg1: number): void;
    static nreserved(paramarg0: number): number;
    static nreserved(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH264SliceHeaderFlags;
    direct_spatial_mv_pred_flag(): boolean;
    direct_spatial_mv_pred_flag(arg0: boolean): StdVideoEncodeH264SliceHeaderFlags;
    num_ref_idx_active_override_flag(): boolean;
    num_ref_idx_active_override_flag(arg0: boolean): StdVideoEncodeH264SliceHeaderFlags;
    set(arg0: boolean, arg1: boolean): StdVideoEncodeH264SliceHeaderFlags;
    set(arg0: StdVideoEncodeH264SliceHeaderFlags): StdVideoEncodeH264SliceHeaderFlags;
    sizeof(): number;
}