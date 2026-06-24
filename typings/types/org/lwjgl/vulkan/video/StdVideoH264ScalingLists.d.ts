import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoH264ScalingLists extends Struct<StdVideoH264ScalingLists> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SCALINGLIST4X4: number;
    static SCALINGLIST8X8: number;
    static SCALING_LIST_PRESENT_MASK: number;
    static SIZEOF: number;
    static USE_DEFAULT_SCALING_MATRIX_MASK: number;
    static calloc(): StdVideoH264ScalingLists;
    static calloc(paramarg0: MemoryStack): StdVideoH264ScalingLists;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH264ScalingLists;
    static create(paramarg0: number): StdVideoH264ScalingLists;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH264ScalingLists;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH264ScalingLists;
    static malloc(paramarg0: MemoryStack): StdVideoH264ScalingLists;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nScalingList4x4(paramarg0: number, paramarg1: number): number;
    static nScalingList4x4(paramarg0: number): ByteBuffer;
    static nScalingList4x4(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nScalingList4x4(paramarg0: number, paramarg1: ByteBuffer): void;
    static nScalingList8x8(paramarg0: number, paramarg1: number): number;
    static nScalingList8x8(paramarg0: number): ByteBuffer;
    static nScalingList8x8(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nScalingList8x8(paramarg0: number, paramarg1: ByteBuffer): void;
    static nscaling_list_present_mask(paramarg0: number): number;
    static nscaling_list_present_mask(paramarg0: number, paramarg1: number): void;
    static nuse_default_scaling_matrix_mask(paramarg0: number): number;
    static nuse_default_scaling_matrix_mask(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    ScalingList4x4(): ByteBuffer;
    ScalingList4x4(arg0: ByteBuffer): StdVideoH264ScalingLists;
    ScalingList4x4(arg0: number): number;
    ScalingList4x4(arg0: number, arg1: number): StdVideoH264ScalingLists;
    ScalingList8x8(): ByteBuffer;
    ScalingList8x8(arg0: ByteBuffer): StdVideoH264ScalingLists;
    ScalingList8x8(arg0: number): number;
    ScalingList8x8(arg0: number, arg1: number): StdVideoH264ScalingLists;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoH264ScalingLists;
    scaling_list_present_mask(): number;
    scaling_list_present_mask(arg0: number): StdVideoH264ScalingLists;
    set(arg0: number, arg1: number, arg2: ByteBuffer, arg3: ByteBuffer): StdVideoH264ScalingLists;
    set(arg0: StdVideoH264ScalingLists): StdVideoH264ScalingLists;
    sizeof(): number;
    use_default_scaling_matrix_mask(): number;
    use_default_scaling_matrix_mask(arg0: number): StdVideoH264ScalingLists;
}