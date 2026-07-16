import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkImageCompressionPropertiesEXT } from '../../../org/lwjgl/vulkan/VkImageCompressionPropertiesEXT.d.ts'
import type { VkSurfaceFormatKHR } from '../../../org/lwjgl/vulkan/VkSurfaceFormatKHR.d.ts'
export class VkSurfaceFormat2KHR extends Struct<VkSurfaceFormat2KHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SURFACEFORMAT: number;
    static calloc(): VkSurfaceFormat2KHR;
    static calloc(paramarg0: MemoryStack): VkSurfaceFormat2KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSurfaceFormat2KHR;
    static create(paramarg0: number): VkSurfaceFormat2KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSurfaceFormat2KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSurfaceFormat2KHR;
    static malloc(paramarg0: MemoryStack): VkSurfaceFormat2KHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsurfaceFormat(paramarg0: number): VkSurfaceFormatKHR;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSurfaceFormat2KHR;
    pNext(): number;
    pNext(arg0: number): VkSurfaceFormat2KHR;
    pNext(arg0: VkImageCompressionPropertiesEXT): VkSurfaceFormat2KHR;
    sType(): number;
    sType(arg0: number): VkSurfaceFormat2KHR;
    sType$Default(): VkSurfaceFormat2KHR;
    set(arg0: number, arg1: number): VkSurfaceFormat2KHR;
    set(arg0: VkSurfaceFormat2KHR): VkSurfaceFormat2KHR;
    sizeof(): number;
    surfaceFormat(): VkSurfaceFormatKHR;
}