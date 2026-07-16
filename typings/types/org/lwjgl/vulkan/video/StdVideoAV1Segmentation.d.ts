import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { ShortBuffer } from '../../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoAV1Segmentation extends Struct<StdVideoAV1Segmentation> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FEATUREDATA: number;
    static FEATUREENABLED: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoAV1Segmentation;
    static calloc(paramarg0: MemoryStack): StdVideoAV1Segmentation;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoAV1Segmentation;
    static create(paramarg0: number): StdVideoAV1Segmentation;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoAV1Segmentation;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoAV1Segmentation;
    static malloc(paramarg0: MemoryStack): StdVideoAV1Segmentation;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nFeatureData(paramarg0: number): ShortBuffer;
    static nFeatureData(paramarg0: number, paramarg1: number): number;
    static nFeatureData(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nFeatureData(paramarg0: number, paramarg1: ShortBuffer): void;
    static nFeatureEnabled(paramarg0: number, paramarg1: number): number;
    static nFeatureEnabled(paramarg0: number): ByteBuffer;
    static nFeatureEnabled(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nFeatureEnabled(paramarg0: number, paramarg1: ByteBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    FeatureData(): ShortBuffer;
    FeatureData(arg0: ShortBuffer): StdVideoAV1Segmentation;
    FeatureData(arg0: number): number;
    FeatureData(arg0: number, arg1: number): StdVideoAV1Segmentation;
    FeatureEnabled(): ByteBuffer;
    FeatureEnabled(arg0: ByteBuffer): StdVideoAV1Segmentation;
    FeatureEnabled(arg0: number): number;
    FeatureEnabled(arg0: number, arg1: number): StdVideoAV1Segmentation;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoAV1Segmentation;
    set(arg0: ByteBuffer, arg1: ShortBuffer): StdVideoAV1Segmentation;
    set(arg0: StdVideoAV1Segmentation): StdVideoAV1Segmentation;
    sizeof(): number;
}