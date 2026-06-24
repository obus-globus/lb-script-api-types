import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkCoarseSampleLocationNV extends Struct<VkCoarseSampleLocationNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PIXELX: number;
    static PIXELY: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SAMPLE: number;
    static SIZEOF: number;
    static calloc(): VkCoarseSampleLocationNV;
    static calloc(paramarg0: MemoryStack): VkCoarseSampleLocationNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCoarseSampleLocationNV;
    static create(paramarg0: number): VkCoarseSampleLocationNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCoarseSampleLocationNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCoarseSampleLocationNV;
    static malloc(paramarg0: MemoryStack): VkCoarseSampleLocationNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npixelX(paramarg0: number): number;
    static npixelX(paramarg0: number, paramarg1: number): void;
    static npixelY(paramarg0: number): number;
    static npixelY(paramarg0: number, paramarg1: number): void;
    static nsample(paramarg0: number): number;
    static nsample(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCoarseSampleLocationNV;
    pixelX(): number;
    pixelX(arg0: number): VkCoarseSampleLocationNV;
    pixelY(): number;
    pixelY(arg0: number): VkCoarseSampleLocationNV;
    sample(): number;
    sample(arg0: number): VkCoarseSampleLocationNV;
    set(arg0: number, arg1: number, arg2: number): VkCoarseSampleLocationNV;
    set(arg0: VkCoarseSampleLocationNV): VkCoarseSampleLocationNV;
    sizeof(): number;
}