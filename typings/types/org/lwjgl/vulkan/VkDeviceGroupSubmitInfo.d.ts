import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDeviceGroupSubmitInfo extends Struct<VkDeviceGroupSubmitInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMMANDBUFFERCOUNT: number;
    static PCOMMANDBUFFERDEVICEMASKS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSIGNALSEMAPHOREDEVICEINDICES: number;
    static PWAITSEMAPHOREDEVICEINDICES: number;
    static SIGNALSEMAPHORECOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static WAITSEMAPHORECOUNT: number;
    static calloc(): VkDeviceGroupSubmitInfo;
    static calloc(paramarg0: MemoryStack): VkDeviceGroupSubmitInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceGroupSubmitInfo;
    static create(paramarg0: number): VkDeviceGroupSubmitInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceGroupSubmitInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceGroupSubmitInfo;
    static malloc(paramarg0: MemoryStack): VkDeviceGroupSubmitInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncommandBufferCount(paramarg0: number): number;
    static ncommandBufferCount(paramarg0: number, paramarg1: number): void;
    static npCommandBufferDeviceMasks(paramarg0: number): IntBuffer;
    static npCommandBufferDeviceMasks(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSignalSemaphoreDeviceIndices(paramarg0: number): IntBuffer;
    static npSignalSemaphoreDeviceIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static npWaitSemaphoreDeviceIndices(paramarg0: number): IntBuffer;
    static npWaitSemaphoreDeviceIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsignalSemaphoreCount(paramarg0: number): number;
    static nsignalSemaphoreCount(paramarg0: number, paramarg1: number): void;
    static nwaitSemaphoreCount(paramarg0: number): number;
    static nwaitSemaphoreCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    commandBufferCount(): number;
    create(arg0: number, arg1: ByteBuffer): VkDeviceGroupSubmitInfo;
    pCommandBufferDeviceMasks(): IntBuffer;
    pCommandBufferDeviceMasks(arg0: IntBuffer): VkDeviceGroupSubmitInfo;
    pNext(): number;
    pNext(arg0: number): VkDeviceGroupSubmitInfo;
    pSignalSemaphoreDeviceIndices(): IntBuffer;
    pSignalSemaphoreDeviceIndices(arg0: IntBuffer): VkDeviceGroupSubmitInfo;
    pWaitSemaphoreDeviceIndices(): IntBuffer;
    pWaitSemaphoreDeviceIndices(arg0: IntBuffer): VkDeviceGroupSubmitInfo;
    sType(): number;
    sType(arg0: number): VkDeviceGroupSubmitInfo;
    sType$Default(): VkDeviceGroupSubmitInfo;
    set(arg0: number, arg1: number, arg2: IntBuffer, arg3: IntBuffer, arg4: IntBuffer): VkDeviceGroupSubmitInfo;
    set(arg0: VkDeviceGroupSubmitInfo): VkDeviceGroupSubmitInfo;
    signalSemaphoreCount(): number;
    sizeof(): number;
    waitSemaphoreCount(): number;
}