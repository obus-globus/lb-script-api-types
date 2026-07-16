import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExternalMemoryTensorCreateInfoARM } from '../../../org/lwjgl/vulkan/VkExternalMemoryTensorCreateInfoARM.d.ts'
import type { VkOpaqueCaptureDataCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkOpaqueCaptureDataCreateInfoEXT.d.ts'
import type { VkOpaqueCaptureDescriptorDataCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkOpaqueCaptureDescriptorDataCreateInfoEXT.d.ts'
import type { VkTensorDescriptionARM } from '../../../org/lwjgl/vulkan/VkTensorDescriptionARM.d.ts'
export class VkTensorCreateInfoARM extends Struct<VkTensorCreateInfoARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PDESCRIPTION: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PQUEUEFAMILYINDICES: number;
    static QUEUEFAMILYINDEXCOUNT: number;
    static SHARINGMODE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkTensorCreateInfoARM;
    static calloc(paramarg0: MemoryStack): VkTensorCreateInfoARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkTensorCreateInfoARM;
    static create(paramarg0: number): VkTensorCreateInfoARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkTensorCreateInfoARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkTensorCreateInfoARM;
    static malloc(paramarg0: MemoryStack): VkTensorCreateInfoARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npDescription(paramarg0: number): VkTensorDescriptionARM;
    static npDescription(paramarg0: number, paramarg1: VkTensorDescriptionARM): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npQueueFamilyIndices(paramarg0: number): IntBuffer;
    static npQueueFamilyIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static nqueueFamilyIndexCount(paramarg0: number): number;
    static nqueueFamilyIndexCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsharingMode(paramarg0: number): number;
    static nsharingMode(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkTensorCreateInfoARM;
    flags(): number;
    flags(arg0: number): VkTensorCreateInfoARM;
    pDescription(): VkTensorDescriptionARM;
    pDescription(arg0: VkTensorDescriptionARM): VkTensorCreateInfoARM;
    pNext(): number;
    pNext(arg0: number): VkTensorCreateInfoARM;
    pNext(arg0: VkExternalMemoryTensorCreateInfoARM): VkTensorCreateInfoARM;
    pNext(arg0: VkOpaqueCaptureDataCreateInfoEXT): VkTensorCreateInfoARM;
    pNext(arg0: VkOpaqueCaptureDescriptorDataCreateInfoEXT): VkTensorCreateInfoARM;
    pQueueFamilyIndices(): IntBuffer;
    pQueueFamilyIndices(arg0: IntBuffer): VkTensorCreateInfoARM;
    queueFamilyIndexCount(): number;
    queueFamilyIndexCount(arg0: number): VkTensorCreateInfoARM;
    sType(): number;
    sType(arg0: number): VkTensorCreateInfoARM;
    sType$Default(): VkTensorCreateInfoARM;
    set(arg0: number, arg1: number, arg2: number, arg3: VkTensorDescriptionARM, arg4: number, arg5: number, arg6: IntBuffer): VkTensorCreateInfoARM;
    set(arg0: VkTensorCreateInfoARM): VkTensorCreateInfoARM;
    sharingMode(): number;
    sharingMode(arg0: number): VkTensorCreateInfoARM;
    sizeof(): number;
}