import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBindHeapInfoEXT } from '../../../org/lwjgl/vulkan/VkBindHeapInfoEXT.d.ts'
export class VkCommandBufferInheritanceDescriptorHeapInfoEXT extends Struct<VkCommandBufferInheritanceDescriptorHeapInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESOURCEHEAPBINDINFO: number;
    static PSAMPLERHEAPBINDINFO: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkCommandBufferInheritanceDescriptorHeapInfoEXT;
    static calloc(paramarg0: MemoryStack): VkCommandBufferInheritanceDescriptorHeapInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCommandBufferInheritanceDescriptorHeapInfoEXT;
    static create(paramarg0: number): VkCommandBufferInheritanceDescriptorHeapInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCommandBufferInheritanceDescriptorHeapInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCommandBufferInheritanceDescriptorHeapInfoEXT;
    static malloc(paramarg0: MemoryStack): VkCommandBufferInheritanceDescriptorHeapInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npResourceHeapBindInfo(paramarg0: number): VkBindHeapInfoEXT;
    static npResourceHeapBindInfo(paramarg0: number, paramarg1: VkBindHeapInfoEXT): void;
    static npSamplerHeapBindInfo(paramarg0: number): VkBindHeapInfoEXT;
    static npSamplerHeapBindInfo(paramarg0: number, paramarg1: VkBindHeapInfoEXT): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCommandBufferInheritanceDescriptorHeapInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkCommandBufferInheritanceDescriptorHeapInfoEXT;
    pResourceHeapBindInfo(): VkBindHeapInfoEXT;
    pResourceHeapBindInfo(arg0: VkBindHeapInfoEXT): VkCommandBufferInheritanceDescriptorHeapInfoEXT;
    pSamplerHeapBindInfo(): VkBindHeapInfoEXT;
    pSamplerHeapBindInfo(arg0: VkBindHeapInfoEXT): VkCommandBufferInheritanceDescriptorHeapInfoEXT;
    sType(): number;
    sType(arg0: number): VkCommandBufferInheritanceDescriptorHeapInfoEXT;
    sType$Default(): VkCommandBufferInheritanceDescriptorHeapInfoEXT;
    set(arg0: number, arg1: number, arg2: VkBindHeapInfoEXT, arg3: VkBindHeapInfoEXT): VkCommandBufferInheritanceDescriptorHeapInfoEXT;
    set(arg0: VkCommandBufferInheritanceDescriptorHeapInfoEXT): VkCommandBufferInheritanceDescriptorHeapInfoEXT;
    sizeof(): number;
}