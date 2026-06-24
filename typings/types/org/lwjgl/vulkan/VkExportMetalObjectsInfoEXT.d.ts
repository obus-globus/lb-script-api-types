import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExportMetalBufferInfoEXT } from '../../../org/lwjgl/vulkan/VkExportMetalBufferInfoEXT.d.ts'
import type { VkExportMetalCommandQueueInfoEXT } from '../../../org/lwjgl/vulkan/VkExportMetalCommandQueueInfoEXT.d.ts'
import type { VkExportMetalDeviceInfoEXT } from '../../../org/lwjgl/vulkan/VkExportMetalDeviceInfoEXT.d.ts'
import type { VkExportMetalIOSurfaceInfoEXT } from '../../../org/lwjgl/vulkan/VkExportMetalIOSurfaceInfoEXT.d.ts'
import type { VkExportMetalSharedEventInfoEXT } from '../../../org/lwjgl/vulkan/VkExportMetalSharedEventInfoEXT.d.ts'
import type { VkExportMetalTextureInfoEXT } from '../../../org/lwjgl/vulkan/VkExportMetalTextureInfoEXT.d.ts'
export class VkExportMetalObjectsInfoEXT extends Struct<VkExportMetalObjectsInfoEXT> implements NativeResource {
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
    static calloc(): VkExportMetalObjectsInfoEXT;
    static calloc(paramarg0: MemoryStack): VkExportMetalObjectsInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkExportMetalObjectsInfoEXT;
    static create(paramarg0: number): VkExportMetalObjectsInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExportMetalObjectsInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkExportMetalObjectsInfoEXT;
    static malloc(paramarg0: MemoryStack): VkExportMetalObjectsInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkExportMetalObjectsInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkExportMetalObjectsInfoEXT;
    pNext(arg0: VkExportMetalBufferInfoEXT): VkExportMetalObjectsInfoEXT;
    pNext(arg0: VkExportMetalCommandQueueInfoEXT): VkExportMetalObjectsInfoEXT;
    pNext(arg0: VkExportMetalDeviceInfoEXT): VkExportMetalObjectsInfoEXT;
    pNext(arg0: VkExportMetalIOSurfaceInfoEXT): VkExportMetalObjectsInfoEXT;
    pNext(arg0: VkExportMetalSharedEventInfoEXT): VkExportMetalObjectsInfoEXT;
    pNext(arg0: VkExportMetalTextureInfoEXT): VkExportMetalObjectsInfoEXT;
    sType(): number;
    sType(arg0: number): VkExportMetalObjectsInfoEXT;
    sType$Default(): VkExportMetalObjectsInfoEXT;
    set(arg0: number, arg1: number): VkExportMetalObjectsInfoEXT;
    set(arg0: VkExportMetalObjectsInfoEXT): VkExportMetalObjectsInfoEXT;
    sizeof(): number;
}