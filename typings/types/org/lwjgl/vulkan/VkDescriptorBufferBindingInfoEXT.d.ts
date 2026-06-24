import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBufferUsageFlags2CreateInfo } from '../../../org/lwjgl/vulkan/VkBufferUsageFlags2CreateInfo.d.ts'
import type { VkBufferUsageFlags2CreateInfoKHR } from '../../../org/lwjgl/vulkan/VkBufferUsageFlags2CreateInfoKHR.d.ts'
import type { VkDescriptorBufferBindingPushDescriptorBufferHandleEXT } from '../../../org/lwjgl/vulkan/VkDescriptorBufferBindingPushDescriptorBufferHandleEXT.d.ts'
export class VkDescriptorBufferBindingInfoEXT extends Struct<VkDescriptorBufferBindingInfoEXT> implements NativeResource {
    static ADDRESS: number;
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
    static USAGE: number;
    static calloc(): VkDescriptorBufferBindingInfoEXT;
    static calloc(paramarg0: MemoryStack): VkDescriptorBufferBindingInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorBufferBindingInfoEXT;
    static create(paramarg0: number): VkDescriptorBufferBindingInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorBufferBindingInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorBufferBindingInfoEXT;
    static malloc(paramarg0: MemoryStack): VkDescriptorBufferBindingInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naddress$(paramarg0: number): number;
    static naddress$(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nusage(paramarg0: number): number;
    static nusage(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    address$(): number;
    address$(arg0: number): VkDescriptorBufferBindingInfoEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorBufferBindingInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkDescriptorBufferBindingInfoEXT;
    pNext(arg0: VkBufferUsageFlags2CreateInfo): VkDescriptorBufferBindingInfoEXT;
    pNext(arg0: VkBufferUsageFlags2CreateInfoKHR): VkDescriptorBufferBindingInfoEXT;
    pNext(arg0: VkDescriptorBufferBindingPushDescriptorBufferHandleEXT): VkDescriptorBufferBindingInfoEXT;
    sType(): number;
    sType(arg0: number): VkDescriptorBufferBindingInfoEXT;
    sType$Default(): VkDescriptorBufferBindingInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkDescriptorBufferBindingInfoEXT;
    set(arg0: VkDescriptorBufferBindingInfoEXT): VkDescriptorBufferBindingInfoEXT;
    sizeof(): number;
    usage(): number;
    usage(arg0: number): VkDescriptorBufferBindingInfoEXT;
}