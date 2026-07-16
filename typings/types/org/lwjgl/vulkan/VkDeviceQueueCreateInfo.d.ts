import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceQueueGlobalPriorityCreateInfo } from '../../../org/lwjgl/vulkan/VkDeviceQueueGlobalPriorityCreateInfo.d.ts'
import type { VkDeviceQueueGlobalPriorityCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkDeviceQueueGlobalPriorityCreateInfoEXT.d.ts'
import type { VkDeviceQueueGlobalPriorityCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkDeviceQueueGlobalPriorityCreateInfoKHR.d.ts'
import type { VkDeviceQueueShaderCoreControlCreateInfoARM } from '../../../org/lwjgl/vulkan/VkDeviceQueueShaderCoreControlCreateInfoARM.d.ts'
export class VkDeviceQueueCreateInfo extends Struct<VkDeviceQueueCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PQUEUEPRIORITIES: number;
    static QUEUECOUNT: number;
    static QUEUEFAMILYINDEX: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDeviceQueueCreateInfo;
    static calloc(paramarg0: MemoryStack): VkDeviceQueueCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceQueueCreateInfo;
    static create(paramarg0: number): VkDeviceQueueCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceQueueCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceQueueCreateInfo;
    static malloc(paramarg0: MemoryStack): VkDeviceQueueCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npQueuePriorities(paramarg0: number): FloatBuffer;
    static npQueuePriorities(paramarg0: number, paramarg1: FloatBuffer): void;
    static nqueueCount(paramarg0: number): number;
    static nqueueCount(paramarg0: number, paramarg1: number): void;
    static nqueueFamilyIndex(paramarg0: number): number;
    static nqueueFamilyIndex(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDeviceQueueCreateInfo;
    flags(): number;
    flags(arg0: number): VkDeviceQueueCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkDeviceQueueCreateInfo;
    pNext(arg0: VkDeviceQueueGlobalPriorityCreateInfo): VkDeviceQueueCreateInfo;
    pNext(arg0: VkDeviceQueueGlobalPriorityCreateInfoEXT): VkDeviceQueueCreateInfo;
    pNext(arg0: VkDeviceQueueGlobalPriorityCreateInfoKHR): VkDeviceQueueCreateInfo;
    pNext(arg0: VkDeviceQueueShaderCoreControlCreateInfoARM): VkDeviceQueueCreateInfo;
    pQueuePriorities(): FloatBuffer;
    pQueuePriorities(arg0: FloatBuffer): VkDeviceQueueCreateInfo;
    queueCount(): number;
    queueFamilyIndex(): number;
    queueFamilyIndex(arg0: number): VkDeviceQueueCreateInfo;
    sType(): number;
    sType(arg0: number): VkDeviceQueueCreateInfo;
    sType$Default(): VkDeviceQueueCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: FloatBuffer): VkDeviceQueueCreateInfo;
    set(arg0: VkDeviceQueueCreateInfo): VkDeviceQueueCreateInfo;
    sizeof(): number;
}