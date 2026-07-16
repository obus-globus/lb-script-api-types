import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoAV1QuantizationFlags extends Struct<StdVideoAV1QuantizationFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITFIELD1: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoAV1QuantizationFlags;
    static calloc(paramarg0: MemoryStack): StdVideoAV1QuantizationFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoAV1QuantizationFlags;
    static create(paramarg0: number): StdVideoAV1QuantizationFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoAV1QuantizationFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoAV1QuantizationFlags;
    static malloc(paramarg0: MemoryStack): StdVideoAV1QuantizationFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nbitfield1(paramarg0: number): number;
    static nbitfield1(paramarg0: number, paramarg1: number): void;
    static ndiff_uv_delta(paramarg0: number): number;
    static ndiff_uv_delta(paramarg0: number, paramarg1: number): void;
    static nreserved(paramarg0: number): number;
    static nreserved(paramarg0: number, paramarg1: number): void;
    static nusing_qmatrix(paramarg0: number): number;
    static nusing_qmatrix(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoAV1QuantizationFlags;
    diff_uv_delta(): boolean;
    diff_uv_delta(arg0: boolean): StdVideoAV1QuantizationFlags;
    set(arg0: boolean, arg1: boolean): StdVideoAV1QuantizationFlags;
    set(arg0: StdVideoAV1QuantizationFlags): StdVideoAV1QuantizationFlags;
    sizeof(): number;
    using_qmatrix(): boolean;
    using_qmatrix(arg0: boolean): StdVideoAV1QuantizationFlags;
}