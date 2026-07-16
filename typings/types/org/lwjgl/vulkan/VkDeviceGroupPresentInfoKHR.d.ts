import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDeviceGroupPresentInfoKHR extends Struct<VkDeviceGroupPresentInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MODE: number;
    static PDEVICEMASKS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SWAPCHAINCOUNT: number;
    static calloc(): VkDeviceGroupPresentInfoKHR;
    static calloc(paramarg0: MemoryStack): VkDeviceGroupPresentInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceGroupPresentInfoKHR;
    static create(paramarg0: number): VkDeviceGroupPresentInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceGroupPresentInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceGroupPresentInfoKHR;
    static malloc(paramarg0: MemoryStack): VkDeviceGroupPresentInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmode(paramarg0: number): number;
    static nmode(paramarg0: number, paramarg1: number): void;
    static npDeviceMasks(paramarg0: number): IntBuffer;
    static npDeviceMasks(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nswapchainCount(paramarg0: number): number;
    static nswapchainCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDeviceGroupPresentInfoKHR;
    mode(): number;
    mode(arg0: number): VkDeviceGroupPresentInfoKHR;
    pDeviceMasks(): IntBuffer;
    pDeviceMasks(arg0: IntBuffer): VkDeviceGroupPresentInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkDeviceGroupPresentInfoKHR;
    sType(): number;
    sType(arg0: number): VkDeviceGroupPresentInfoKHR;
    sType$Default(): VkDeviceGroupPresentInfoKHR;
    set(arg0: number, arg1: number, arg2: IntBuffer, arg3: number): VkDeviceGroupPresentInfoKHR;
    set(arg0: VkDeviceGroupPresentInfoKHR): VkDeviceGroupPresentInfoKHR;
    sizeof(): number;
    swapchainCount(): number;
}