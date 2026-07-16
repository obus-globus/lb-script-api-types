import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBindBufferMemoryDeviceGroupInfo } from '../../../org/lwjgl/vulkan/VkBindBufferMemoryDeviceGroupInfo.d.ts'
import type { VkBindBufferMemoryDeviceGroupInfoKHR } from '../../../org/lwjgl/vulkan/VkBindBufferMemoryDeviceGroupInfoKHR.d.ts'
import type { VkBindBufferMemoryInfo } from '../../../org/lwjgl/vulkan/VkBindBufferMemoryInfo.d.ts'
import type { VkBindMemoryStatus } from '../../../org/lwjgl/vulkan/VkBindMemoryStatus.d.ts'
import type { VkBindMemoryStatusKHR } from '../../../org/lwjgl/vulkan/VkBindMemoryStatusKHR.d.ts'
export class VkBindBufferMemoryInfoKHR extends VkBindBufferMemoryInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFER: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MEMORY: number;
    static MEMORYOFFSET: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkBindBufferMemoryInfo;
    static calloc(paramarg0: MemoryStack): VkBindBufferMemoryInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkBindBufferMemoryInfoKHR;
    static calloc(paramarg0: MemoryStack): VkBindBufferMemoryInfoKHR;
    static create(): VkBindBufferMemoryInfo;
    static create(paramarg0: number): VkBindBufferMemoryInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkBindBufferMemoryInfoKHR;
    static create(paramarg0: number): VkBindBufferMemoryInfoKHR;
    static createSafe(paramarg0: number): VkBindBufferMemoryInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBindBufferMemoryInfoKHR;
    static malloc(): VkBindBufferMemoryInfo;
    static malloc(paramarg0: MemoryStack): VkBindBufferMemoryInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkBindBufferMemoryInfoKHR;
    static malloc(paramarg0: MemoryStack): VkBindBufferMemoryInfoKHR;
    static nbuffer(paramarg0: number): number;
    static nbuffer(paramarg0: number, paramarg1: number): void;
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
    buffer(): number;
    buffer(arg0: number): VkBindBufferMemoryInfoKHR;
    create(arg0: number, arg1: ByteBuffer): VkBindBufferMemoryInfoKHR;
    memory(): number;
    memory(arg0: number): VkBindBufferMemoryInfoKHR;
    memoryOffset(): number;
    memoryOffset(arg0: number): VkBindBufferMemoryInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkBindBufferMemoryInfoKHR;
    pNext(arg0: VkBindBufferMemoryDeviceGroupInfo): VkBindBufferMemoryInfo;
    pNext(arg0: VkBindBufferMemoryDeviceGroupInfoKHR): VkBindBufferMemoryInfo;
    pNext(arg0: VkBindMemoryStatus): VkBindBufferMemoryInfo;
    pNext(arg0: VkBindMemoryStatusKHR): VkBindBufferMemoryInfo;
    sType(): number;
    sType(arg0: number): VkBindBufferMemoryInfoKHR;
    sType$Default(): VkBindBufferMemoryInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkBindBufferMemoryInfoKHR;
    set(arg0: VkBindBufferMemoryInfo): VkBindBufferMemoryInfo;
    set(arg0: VkBindBufferMemoryInfoKHR): VkBindBufferMemoryInfoKHR;
}