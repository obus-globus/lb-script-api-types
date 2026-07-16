import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBindBufferMemoryDeviceGroupInfo } from '../../../org/lwjgl/vulkan/VkBindBufferMemoryDeviceGroupInfo.d.ts'
export class VkBindBufferMemoryDeviceGroupInfoKHR extends VkBindBufferMemoryDeviceGroupInfo {
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
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkBindBufferMemoryDeviceGroupInfo;
    static calloc(paramarg0: MemoryStack): VkBindBufferMemoryDeviceGroupInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkBindBufferMemoryDeviceGroupInfoKHR;
    static calloc(paramarg0: MemoryStack): VkBindBufferMemoryDeviceGroupInfoKHR;
    static create(): VkBindBufferMemoryDeviceGroupInfo;
    static create(paramarg0: number): VkBindBufferMemoryDeviceGroupInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkBindBufferMemoryDeviceGroupInfoKHR;
    static create(paramarg0: number): VkBindBufferMemoryDeviceGroupInfoKHR;
    static createSafe(paramarg0: number): VkBindBufferMemoryDeviceGroupInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBindBufferMemoryDeviceGroupInfoKHR;
    static malloc(): VkBindBufferMemoryDeviceGroupInfo;
    static malloc(paramarg0: MemoryStack): VkBindBufferMemoryDeviceGroupInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkBindBufferMemoryDeviceGroupInfoKHR;
    static malloc(paramarg0: MemoryStack): VkBindBufferMemoryDeviceGroupInfoKHR;
    static ndeviceIndexCount(paramarg0: number): number;
    static ndeviceIndexCount(paramarg0: number, paramarg1: number): void;
    static npDeviceIndices(paramarg0: number): IntBuffer;
    static npDeviceIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkBindBufferMemoryDeviceGroupInfoKHR;
    pDeviceIndices(): IntBuffer;
    pDeviceIndices(arg0: IntBuffer): VkBindBufferMemoryDeviceGroupInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkBindBufferMemoryDeviceGroupInfoKHR;
    sType(): number;
    sType(arg0: number): VkBindBufferMemoryDeviceGroupInfoKHR;
    sType$Default(): VkBindBufferMemoryDeviceGroupInfoKHR;
    set(arg0: number, arg1: number, arg2: IntBuffer): VkBindBufferMemoryDeviceGroupInfoKHR;
    set(arg0: VkBindBufferMemoryDeviceGroupInfo): VkBindBufferMemoryDeviceGroupInfo;
    set(arg0: VkBindBufferMemoryDeviceGroupInfoKHR): VkBindBufferMemoryDeviceGroupInfoKHR;
}