import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBindImageMemoryDeviceGroupInfo } from '../../../org/lwjgl/vulkan/VkBindImageMemoryDeviceGroupInfo.d.ts'
import type { VkBindImageMemoryDeviceGroupInfoKHR } from '../../../org/lwjgl/vulkan/VkBindImageMemoryDeviceGroupInfoKHR.d.ts'
import type { VkBindImageMemorySwapchainInfoKHR } from '../../../org/lwjgl/vulkan/VkBindImageMemorySwapchainInfoKHR.d.ts'
import type { VkBindImagePlaneMemoryInfo } from '../../../org/lwjgl/vulkan/VkBindImagePlaneMemoryInfo.d.ts'
import type { VkBindImagePlaneMemoryInfoKHR } from '../../../org/lwjgl/vulkan/VkBindImagePlaneMemoryInfoKHR.d.ts'
import type { VkBindMemoryStatus } from '../../../org/lwjgl/vulkan/VkBindMemoryStatus.d.ts'
import type { VkBindMemoryStatusKHR } from '../../../org/lwjgl/vulkan/VkBindMemoryStatusKHR.d.ts'
export class VkBindImageMemoryInfo extends Struct<VkBindImageMemoryInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGE: number;
    static MEMORY: number;
    static MEMORYOFFSET: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkBindImageMemoryInfo;
    static calloc(paramarg0: MemoryStack): VkBindImageMemoryInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkBindImageMemoryInfo;
    static create(paramarg0: number): VkBindImageMemoryInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBindImageMemoryInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkBindImageMemoryInfo;
    static malloc(paramarg0: MemoryStack): VkBindImageMemoryInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nimage(paramarg0: number): number;
    static nimage(paramarg0: number, paramarg1: number): void;
    static nmemory(paramarg0: number): number;
    static nmemory(paramarg0: number, paramarg1: number): void;
    static nmemoryOffset(paramarg0: number): number;
    static nmemoryOffset(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkBindImageMemoryInfo;
    image(): number;
    image(arg0: number): VkBindImageMemoryInfo;
    memory(): number;
    memory(arg0: number): VkBindImageMemoryInfo;
    memoryOffset(): number;
    memoryOffset(arg0: number): VkBindImageMemoryInfo;
    pNext(): number;
    pNext(arg0: number): VkBindImageMemoryInfo;
    pNext(arg0: VkBindImageMemoryDeviceGroupInfo): VkBindImageMemoryInfo;
    pNext(arg0: VkBindImageMemoryDeviceGroupInfoKHR): VkBindImageMemoryInfo;
    pNext(arg0: VkBindImageMemorySwapchainInfoKHR): VkBindImageMemoryInfo;
    pNext(arg0: VkBindImagePlaneMemoryInfo): VkBindImageMemoryInfo;
    pNext(arg0: VkBindImagePlaneMemoryInfoKHR): VkBindImageMemoryInfo;
    pNext(arg0: VkBindMemoryStatus): VkBindImageMemoryInfo;
    pNext(arg0: VkBindMemoryStatusKHR): VkBindImageMemoryInfo;
    sType(): number;
    sType(arg0: number): VkBindImageMemoryInfo;
    sType$Default(): VkBindImageMemoryInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkBindImageMemoryInfo;
    set(arg0: VkBindImageMemoryInfo): VkBindImageMemoryInfo;
    sizeof(): number;
}