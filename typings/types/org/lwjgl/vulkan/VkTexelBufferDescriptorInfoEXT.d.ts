import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceAddressRangeEXT } from '../../../org/lwjgl/vulkan/VkDeviceAddressRangeEXT.d.ts'
export class VkTexelBufferDescriptorInfoEXT extends Struct<VkTexelBufferDescriptorInfoEXT> implements NativeResource {
    static ADDRESSRANGE: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FORMAT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkTexelBufferDescriptorInfoEXT;
    static calloc(paramarg0: MemoryStack): VkTexelBufferDescriptorInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkTexelBufferDescriptorInfoEXT;
    static create(paramarg0: number): VkTexelBufferDescriptorInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkTexelBufferDescriptorInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkTexelBufferDescriptorInfoEXT;
    static malloc(paramarg0: MemoryStack): VkTexelBufferDescriptorInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naddressRange(paramarg0: number): VkDeviceAddressRangeEXT;
    static naddressRange(paramarg0: number, paramarg1: VkDeviceAddressRangeEXT): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    addressRange(): VkDeviceAddressRangeEXT;
    addressRange(arg0: (param0: VkDeviceAddressRangeEXT) => void): VkTexelBufferDescriptorInfoEXT;
    addressRange(arg0: VkDeviceAddressRangeEXT): VkTexelBufferDescriptorInfoEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkTexelBufferDescriptorInfoEXT;
    format(): number;
    format(arg0: number): VkTexelBufferDescriptorInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkTexelBufferDescriptorInfoEXT;
    sType(): number;
    sType(arg0: number): VkTexelBufferDescriptorInfoEXT;
    sType$Default(): VkTexelBufferDescriptorInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: VkDeviceAddressRangeEXT): VkTexelBufferDescriptorInfoEXT;
    set(arg0: VkTexelBufferDescriptorInfoEXT): VkTexelBufferDescriptorInfoEXT;
    sizeof(): number;
}