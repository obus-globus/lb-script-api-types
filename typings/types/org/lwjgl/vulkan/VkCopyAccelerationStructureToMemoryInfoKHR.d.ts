import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceOrHostAddressKHR } from '../../../org/lwjgl/vulkan/VkDeviceOrHostAddressKHR.d.ts'
export class VkCopyAccelerationStructureToMemoryInfoKHR extends Struct<VkCopyAccelerationStructureToMemoryInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DST: number;
    static MODE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRC: number;
    static STYPE: number;
    static calloc(): VkCopyAccelerationStructureToMemoryInfoKHR;
    static calloc(paramarg0: MemoryStack): VkCopyAccelerationStructureToMemoryInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCopyAccelerationStructureToMemoryInfoKHR;
    static create(paramarg0: number): VkCopyAccelerationStructureToMemoryInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyAccelerationStructureToMemoryInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCopyAccelerationStructureToMemoryInfoKHR;
    static malloc(paramarg0: MemoryStack): VkCopyAccelerationStructureToMemoryInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndst(paramarg0: number): VkDeviceOrHostAddressKHR;
    static ndst(paramarg0: number, paramarg1: VkDeviceOrHostAddressKHR): void;
    static nmode(paramarg0: number): number;
    static nmode(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrc(paramarg0: number): number;
    static nsrc(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCopyAccelerationStructureToMemoryInfoKHR;
    dst(): VkDeviceOrHostAddressKHR;
    dst(arg0: (param0: VkDeviceOrHostAddressKHR) => void): VkCopyAccelerationStructureToMemoryInfoKHR;
    dst(arg0: VkDeviceOrHostAddressKHR): VkCopyAccelerationStructureToMemoryInfoKHR;
    mode(): number;
    mode(arg0: number): VkCopyAccelerationStructureToMemoryInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkCopyAccelerationStructureToMemoryInfoKHR;
    sType(): number;
    sType(arg0: number): VkCopyAccelerationStructureToMemoryInfoKHR;
    sType$Default(): VkCopyAccelerationStructureToMemoryInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: VkDeviceOrHostAddressKHR, arg4: number): VkCopyAccelerationStructureToMemoryInfoKHR;
    set(arg0: VkCopyAccelerationStructureToMemoryInfoKHR): VkCopyAccelerationStructureToMemoryInfoKHR;
    sizeof(): number;
    src(): number;
    src(arg0: number): VkCopyAccelerationStructureToMemoryInfoKHR;
}