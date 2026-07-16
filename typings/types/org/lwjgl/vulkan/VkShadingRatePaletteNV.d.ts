import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkShadingRatePaletteNV extends Struct<VkShadingRatePaletteNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSHADINGRATEPALETTEENTRIES: number;
    static SHADINGRATEPALETTEENTRYCOUNT: number;
    static SIZEOF: number;
    static calloc(): VkShadingRatePaletteNV;
    static calloc(paramarg0: MemoryStack): VkShadingRatePaletteNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkShadingRatePaletteNV;
    static create(paramarg0: number): VkShadingRatePaletteNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkShadingRatePaletteNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkShadingRatePaletteNV;
    static malloc(paramarg0: MemoryStack): VkShadingRatePaletteNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npShadingRatePaletteEntries(paramarg0: number): IntBuffer;
    static npShadingRatePaletteEntries(paramarg0: number, paramarg1: IntBuffer): void;
    static nshadingRatePaletteEntryCount(paramarg0: number): number;
    static nshadingRatePaletteEntryCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkShadingRatePaletteNV;
    pShadingRatePaletteEntries(): IntBuffer;
    pShadingRatePaletteEntries(arg0: IntBuffer): VkShadingRatePaletteNV;
    set(arg0: VkShadingRatePaletteNV): VkShadingRatePaletteNV;
    shadingRatePaletteEntryCount(): number;
    sizeof(): number;
}