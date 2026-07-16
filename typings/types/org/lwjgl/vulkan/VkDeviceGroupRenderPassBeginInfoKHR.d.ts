import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceGroupRenderPassBeginInfo } from '../../../org/lwjgl/vulkan/VkDeviceGroupRenderPassBeginInfo.d.ts'
export class VkDeviceGroupRenderPassBeginInfoKHR extends VkDeviceGroupRenderPassBeginInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEMASK: number;
    static DEVICERENDERAREACOUNT: number;
    static PDEVICERENDERAREAS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDeviceGroupRenderPassBeginInfo;
    static calloc(paramarg0: MemoryStack): VkDeviceGroupRenderPassBeginInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkDeviceGroupRenderPassBeginInfoKHR;
    static calloc(paramarg0: MemoryStack): VkDeviceGroupRenderPassBeginInfoKHR;
    static create(): VkDeviceGroupRenderPassBeginInfo;
    static create(paramarg0: number): VkDeviceGroupRenderPassBeginInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkDeviceGroupRenderPassBeginInfoKHR;
    static create(paramarg0: number): VkDeviceGroupRenderPassBeginInfoKHR;
    static createSafe(paramarg0: number): VkDeviceGroupRenderPassBeginInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceGroupRenderPassBeginInfoKHR;
    static malloc(): VkDeviceGroupRenderPassBeginInfo;
    static malloc(paramarg0: MemoryStack): VkDeviceGroupRenderPassBeginInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkDeviceGroupRenderPassBeginInfoKHR;
    static malloc(paramarg0: MemoryStack): VkDeviceGroupRenderPassBeginInfoKHR;
    static ndeviceMask(paramarg0: number): number;
    static ndeviceMask(paramarg0: number, paramarg1: number): void;
    static ndeviceRenderAreaCount(paramarg0: number): number;
    static ndeviceRenderAreaCount(paramarg0: number, paramarg1: number): void;
    static npDeviceRenderAreas(paramarg0: number): (Object | null)[];
    static npDeviceRenderAreas(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkDeviceGroupRenderPassBeginInfoKHR;
    deviceMask(): number;
    deviceMask(arg0: number): VkDeviceGroupRenderPassBeginInfoKHR;
    pDeviceRenderAreas(): (Object | null)[];
    pDeviceRenderAreas(arg0: (Object | null)[]): VkDeviceGroupRenderPassBeginInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkDeviceGroupRenderPassBeginInfoKHR;
    sType(): number;
    sType(arg0: number): VkDeviceGroupRenderPassBeginInfoKHR;
    sType$Default(): VkDeviceGroupRenderPassBeginInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: (Object | null)[]): VkDeviceGroupRenderPassBeginInfoKHR;
    set(arg0: VkDeviceGroupRenderPassBeginInfo): VkDeviceGroupRenderPassBeginInfo;
    set(arg0: VkDeviceGroupRenderPassBeginInfoKHR): VkDeviceGroupRenderPassBeginInfoKHR;
}