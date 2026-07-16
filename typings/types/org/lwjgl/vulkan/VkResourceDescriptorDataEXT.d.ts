import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceAddressRangeEXT } from '../../../org/lwjgl/vulkan/VkDeviceAddressRangeEXT.d.ts'
import type { VkImageDescriptorInfoEXT } from '../../../org/lwjgl/vulkan/VkImageDescriptorInfoEXT.d.ts'
import type { VkTensorViewCreateInfoARM } from '../../../org/lwjgl/vulkan/VkTensorViewCreateInfoARM.d.ts'
import type { VkTexelBufferDescriptorInfoEXT } from '../../../org/lwjgl/vulkan/VkTexelBufferDescriptorInfoEXT.d.ts'
export class VkResourceDescriptorDataEXT extends Struct<VkResourceDescriptorDataEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PADDRESSRANGE: number;
    static PIMAGE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PTENSORARM: number;
    static PTEXELBUFFER: number;
    static SIZEOF: number;
    static calloc(): VkResourceDescriptorDataEXT;
    static calloc(paramarg0: MemoryStack): VkResourceDescriptorDataEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkResourceDescriptorDataEXT;
    static create(paramarg0: number): VkResourceDescriptorDataEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkResourceDescriptorDataEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkResourceDescriptorDataEXT;
    static malloc(paramarg0: MemoryStack): VkResourceDescriptorDataEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npAddressRange(paramarg0: number): VkDeviceAddressRangeEXT;
    static npAddressRange(paramarg0: number, paramarg1: VkDeviceAddressRangeEXT): void;
    static npImage(paramarg0: number): VkImageDescriptorInfoEXT;
    static npImage(paramarg0: number, paramarg1: VkImageDescriptorInfoEXT): void;
    static npTensorARM(paramarg0: number): VkTensorViewCreateInfoARM;
    static npTensorARM(paramarg0: number, paramarg1: VkTensorViewCreateInfoARM): void;
    static npTexelBuffer(paramarg0: number): VkTexelBufferDescriptorInfoEXT;
    static npTexelBuffer(paramarg0: number, paramarg1: VkTexelBufferDescriptorInfoEXT): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkResourceDescriptorDataEXT;
    pAddressRange(): VkDeviceAddressRangeEXT;
    pAddressRange(arg0: VkDeviceAddressRangeEXT): VkResourceDescriptorDataEXT;
    pImage(): VkImageDescriptorInfoEXT;
    pImage(arg0: VkImageDescriptorInfoEXT): VkResourceDescriptorDataEXT;
    pTensorARM(): VkTensorViewCreateInfoARM;
    pTensorARM(arg0: VkTensorViewCreateInfoARM): VkResourceDescriptorDataEXT;
    pTexelBuffer(): VkTexelBufferDescriptorInfoEXT;
    pTexelBuffer(arg0: VkTexelBufferDescriptorInfoEXT): VkResourceDescriptorDataEXT;
    set(arg0: VkResourceDescriptorDataEXT): VkResourceDescriptorDataEXT;
    sizeof(): number;
}