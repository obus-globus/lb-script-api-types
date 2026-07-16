import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkCommandBufferInheritanceInfo } from '../../../org/lwjgl/vulkan/VkCommandBufferInheritanceInfo.d.ts'
import type { VkDeviceGroupCommandBufferBeginInfo } from '../../../org/lwjgl/vulkan/VkDeviceGroupCommandBufferBeginInfo.d.ts'
import type { VkDeviceGroupCommandBufferBeginInfoKHR } from '../../../org/lwjgl/vulkan/VkDeviceGroupCommandBufferBeginInfoKHR.d.ts'
export class VkCommandBufferBeginInfo extends Struct<VkCommandBufferBeginInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PINHERITANCEINFO: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkCommandBufferBeginInfo;
    static calloc(paramarg0: MemoryStack): VkCommandBufferBeginInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCommandBufferBeginInfo;
    static create(paramarg0: number): VkCommandBufferBeginInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCommandBufferBeginInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCommandBufferBeginInfo;
    static malloc(paramarg0: MemoryStack): VkCommandBufferBeginInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npInheritanceInfo(paramarg0: number): VkCommandBufferInheritanceInfo;
    static npInheritanceInfo(paramarg0: number, paramarg1: VkCommandBufferInheritanceInfo): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCommandBufferBeginInfo;
    flags(): number;
    flags(arg0: number): VkCommandBufferBeginInfo;
    pInheritanceInfo(): VkCommandBufferInheritanceInfo;
    pInheritanceInfo(arg0: VkCommandBufferInheritanceInfo): VkCommandBufferBeginInfo;
    pNext(): number;
    pNext(arg0: number): VkCommandBufferBeginInfo;
    pNext(arg0: VkDeviceGroupCommandBufferBeginInfo): VkCommandBufferBeginInfo;
    pNext(arg0: VkDeviceGroupCommandBufferBeginInfoKHR): VkCommandBufferBeginInfo;
    sType(): number;
    sType(arg0: number): VkCommandBufferBeginInfo;
    sType$Default(): VkCommandBufferBeginInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: VkCommandBufferInheritanceInfo): VkCommandBufferBeginInfo;
    set(arg0: VkCommandBufferBeginInfo): VkCommandBufferBeginInfo;
    sizeof(): number;
}