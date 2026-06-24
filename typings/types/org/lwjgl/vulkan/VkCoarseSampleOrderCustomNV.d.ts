import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkCoarseSampleOrderCustomNV extends Struct<VkCoarseSampleOrderCustomNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSAMPLELOCATIONS: number;
    static SAMPLECOUNT: number;
    static SAMPLELOCATIONCOUNT: number;
    static SHADINGRATE: number;
    static SIZEOF: number;
    static calloc(): VkCoarseSampleOrderCustomNV;
    static calloc(paramarg0: MemoryStack): VkCoarseSampleOrderCustomNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCoarseSampleOrderCustomNV;
    static create(paramarg0: number): VkCoarseSampleOrderCustomNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCoarseSampleOrderCustomNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCoarseSampleOrderCustomNV;
    static malloc(paramarg0: MemoryStack): VkCoarseSampleOrderCustomNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npSampleLocations(paramarg0: number): (Object | null)[];
    static npSampleLocations(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nsampleCount(paramarg0: number): number;
    static nsampleCount(paramarg0: number, paramarg1: number): void;
    static nsampleLocationCount(paramarg0: number): number;
    static nsampleLocationCount(paramarg0: number, paramarg1: number): void;
    static nshadingRate(paramarg0: number): number;
    static nshadingRate(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCoarseSampleOrderCustomNV;
    pSampleLocations(): (Object | null)[];
    pSampleLocations(arg0: (Object | null)[]): VkCoarseSampleOrderCustomNV;
    sampleCount(): number;
    sampleCount(arg0: number): VkCoarseSampleOrderCustomNV;
    sampleLocationCount(): number;
    set(arg0: number, arg1: number, arg2: (Object | null)[]): VkCoarseSampleOrderCustomNV;
    set(arg0: VkCoarseSampleOrderCustomNV): VkCoarseSampleOrderCustomNV;
    shadingRate(): number;
    shadingRate(arg0: number): VkCoarseSampleOrderCustomNV;
    sizeof(): number;
}