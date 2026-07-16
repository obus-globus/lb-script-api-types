import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDepthClampRangeEXT } from '../../../org/lwjgl/vulkan/VkDepthClampRangeEXT.d.ts'
export class VkPipelineViewportDepthClampControlCreateInfoEXT extends Struct<VkPipelineViewportDepthClampControlCreateInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEPTHCLAMPMODE: number;
    static PDEPTHCLAMPRANGE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineViewportDepthClampControlCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkPipelineViewportDepthClampControlCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineViewportDepthClampControlCreateInfoEXT;
    static create(paramarg0: number): VkPipelineViewportDepthClampControlCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineViewportDepthClampControlCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineViewportDepthClampControlCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkPipelineViewportDepthClampControlCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndepthClampMode(paramarg0: number): number;
    static ndepthClampMode(paramarg0: number, paramarg1: number): void;
    static npDepthClampRange(paramarg0: number): VkDepthClampRangeEXT;
    static npDepthClampRange(paramarg0: number, paramarg1: VkDepthClampRangeEXT): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineViewportDepthClampControlCreateInfoEXT;
    depthClampMode(): number;
    depthClampMode(arg0: number): VkPipelineViewportDepthClampControlCreateInfoEXT;
    pDepthClampRange(): VkDepthClampRangeEXT;
    pDepthClampRange(arg0: VkDepthClampRangeEXT): VkPipelineViewportDepthClampControlCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkPipelineViewportDepthClampControlCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkPipelineViewportDepthClampControlCreateInfoEXT;
    sType$Default(): VkPipelineViewportDepthClampControlCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: VkDepthClampRangeEXT): VkPipelineViewportDepthClampControlCreateInfoEXT;
    set(arg0: VkPipelineViewportDepthClampControlCreateInfoEXT): VkPipelineViewportDepthClampControlCreateInfoEXT;
    sizeof(): number;
}