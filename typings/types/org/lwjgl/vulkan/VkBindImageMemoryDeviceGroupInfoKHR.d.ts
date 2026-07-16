import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBindImageMemoryDeviceGroupInfo } from '../../../org/lwjgl/vulkan/VkBindImageMemoryDeviceGroupInfo.d.ts'
export class VkBindImageMemoryDeviceGroupInfoKHR extends VkBindImageMemoryDeviceGroupInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEINDEXCOUNT: number;
    static PDEVICEINDICES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSPLITINSTANCEBINDREGIONS: number;
    static SIZEOF: number;
    static SPLITINSTANCEBINDREGIONCOUNT: number;
    static STYPE: number;
    static calloc(): VkBindImageMemoryDeviceGroupInfo;
    static calloc(paramarg0: MemoryStack): VkBindImageMemoryDeviceGroupInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkBindImageMemoryDeviceGroupInfoKHR;
    static calloc(paramarg0: MemoryStack): VkBindImageMemoryDeviceGroupInfoKHR;
    static create(): VkBindImageMemoryDeviceGroupInfo;
    static create(paramarg0: number): VkBindImageMemoryDeviceGroupInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkBindImageMemoryDeviceGroupInfoKHR;
    static create(paramarg0: number): VkBindImageMemoryDeviceGroupInfoKHR;
    static createSafe(paramarg0: number): VkBindImageMemoryDeviceGroupInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBindImageMemoryDeviceGroupInfoKHR;
    static malloc(): VkBindImageMemoryDeviceGroupInfo;
    static malloc(paramarg0: MemoryStack): VkBindImageMemoryDeviceGroupInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkBindImageMemoryDeviceGroupInfoKHR;
    static malloc(paramarg0: MemoryStack): VkBindImageMemoryDeviceGroupInfoKHR;
    static ndeviceIndexCount(paramarg0: number): number;
    static ndeviceIndexCount(paramarg0: number, paramarg1: number): void;
    static npDeviceIndices(paramarg0: number): IntBuffer;
    static npDeviceIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSplitInstanceBindRegions(paramarg0: number): (Object | null)[];
    static npSplitInstanceBindRegions(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsplitInstanceBindRegionCount(paramarg0: number): number;
    static nsplitInstanceBindRegionCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkBindImageMemoryDeviceGroupInfoKHR;
    pDeviceIndices(): IntBuffer;
    pDeviceIndices(arg0: IntBuffer): VkBindImageMemoryDeviceGroupInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkBindImageMemoryDeviceGroupInfoKHR;
    pSplitInstanceBindRegions(): (Object | null)[];
    pSplitInstanceBindRegions(arg0: (Object | null)[]): VkBindImageMemoryDeviceGroupInfoKHR;
    sType(): number;
    sType(arg0: number): VkBindImageMemoryDeviceGroupInfoKHR;
    sType$Default(): VkBindImageMemoryDeviceGroupInfoKHR;
    set(arg0: number, arg1: number, arg2: IntBuffer, arg3: (Object | null)[]): VkBindImageMemoryDeviceGroupInfoKHR;
    set(arg0: VkBindImageMemoryDeviceGroupInfo): VkBindImageMemoryDeviceGroupInfo;
    set(arg0: VkBindImageMemoryDeviceGroupInfoKHR): VkBindImageMemoryDeviceGroupInfoKHR;
}