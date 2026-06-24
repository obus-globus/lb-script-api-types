import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoH265ScalingLists extends Struct<StdVideoH265ScalingLists> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SCALINGLIST16X16: number;
    static SCALINGLIST32X32: number;
    static SCALINGLIST4X4: number;
    static SCALINGLIST8X8: number;
    static SCALINGLISTDCCOEF16X16: number;
    static SCALINGLISTDCCOEF32X32: number;
    static SIZEOF: number;
    static calloc(): StdVideoH265ScalingLists;
    static calloc(paramarg0: MemoryStack): StdVideoH265ScalingLists;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH265ScalingLists;
    static create(paramarg0: number): StdVideoH265ScalingLists;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH265ScalingLists;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH265ScalingLists;
    static malloc(paramarg0: MemoryStack): StdVideoH265ScalingLists;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nScalingList16x16(paramarg0: number, paramarg1: number): number;
    static nScalingList16x16(paramarg0: number): ByteBuffer;
    static nScalingList16x16(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nScalingList16x16(paramarg0: number, paramarg1: ByteBuffer): void;
    static nScalingList32x32(paramarg0: number, paramarg1: number): number;
    static nScalingList32x32(paramarg0: number): ByteBuffer;
    static nScalingList32x32(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nScalingList32x32(paramarg0: number, paramarg1: ByteBuffer): void;
    static nScalingList4x4(paramarg0: number, paramarg1: number): number;
    static nScalingList4x4(paramarg0: number): ByteBuffer;
    static nScalingList4x4(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nScalingList4x4(paramarg0: number, paramarg1: ByteBuffer): void;
    static nScalingList8x8(paramarg0: number, paramarg1: number): number;
    static nScalingList8x8(paramarg0: number): ByteBuffer;
    static nScalingList8x8(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nScalingList8x8(paramarg0: number, paramarg1: ByteBuffer): void;
    static nScalingListDCCoef16x16(paramarg0: number, paramarg1: number): number;
    static nScalingListDCCoef16x16(paramarg0: number): ByteBuffer;
    static nScalingListDCCoef16x16(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nScalingListDCCoef16x16(paramarg0: number, paramarg1: ByteBuffer): void;
    static nScalingListDCCoef32x32(paramarg0: number, paramarg1: number): number;
    static nScalingListDCCoef32x32(paramarg0: number): ByteBuffer;
    static nScalingListDCCoef32x32(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nScalingListDCCoef32x32(paramarg0: number, paramarg1: ByteBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    ScalingList16x16(): ByteBuffer;
    ScalingList16x16(arg0: ByteBuffer): StdVideoH265ScalingLists;
    ScalingList16x16(arg0: number): number;
    ScalingList16x16(arg0: number, arg1: number): StdVideoH265ScalingLists;
    ScalingList32x32(): ByteBuffer;
    ScalingList32x32(arg0: ByteBuffer): StdVideoH265ScalingLists;
    ScalingList32x32(arg0: number): number;
    ScalingList32x32(arg0: number, arg1: number): StdVideoH265ScalingLists;
    ScalingList4x4(): ByteBuffer;
    ScalingList4x4(arg0: ByteBuffer): StdVideoH265ScalingLists;
    ScalingList4x4(arg0: number): number;
    ScalingList4x4(arg0: number, arg1: number): StdVideoH265ScalingLists;
    ScalingList8x8(): ByteBuffer;
    ScalingList8x8(arg0: ByteBuffer): StdVideoH265ScalingLists;
    ScalingList8x8(arg0: number): number;
    ScalingList8x8(arg0: number, arg1: number): StdVideoH265ScalingLists;
    ScalingListDCCoef16x16(): ByteBuffer;
    ScalingListDCCoef16x16(arg0: ByteBuffer): StdVideoH265ScalingLists;
    ScalingListDCCoef16x16(arg0: number): number;
    ScalingListDCCoef16x16(arg0: number, arg1: number): StdVideoH265ScalingLists;
    ScalingListDCCoef32x32(): ByteBuffer;
    ScalingListDCCoef32x32(arg0: ByteBuffer): StdVideoH265ScalingLists;
    ScalingListDCCoef32x32(arg0: number): number;
    ScalingListDCCoef32x32(arg0: number, arg1: number): StdVideoH265ScalingLists;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoH265ScalingLists;
    set(arg0: ByteBuffer, arg1: ByteBuffer, arg2: ByteBuffer, arg3: ByteBuffer, arg4: ByteBuffer, arg5: ByteBuffer): StdVideoH265ScalingLists;
    set(arg0: StdVideoH265ScalingLists): StdVideoH265ScalingLists;
    sizeof(): number;
}