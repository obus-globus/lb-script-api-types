import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceOrHostAddressConstKHR } from '../../../org/lwjgl/vulkan/VkDeviceOrHostAddressConstKHR.d.ts'
export class VkCopyMemoryToAccelerationStructureInfoKHR extends Struct<VkCopyMemoryToAccelerationStructureInfoKHR> implements NativeResource {
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
    static calloc(): VkCopyMemoryToAccelerationStructureInfoKHR;
    static calloc(paramarg0: MemoryStack): VkCopyMemoryToAccelerationStructureInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCopyMemoryToAccelerationStructureInfoKHR;
    static create(paramarg0: number): VkCopyMemoryToAccelerationStructureInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyMemoryToAccelerationStructureInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCopyMemoryToAccelerationStructureInfoKHR;
    static malloc(paramarg0: MemoryStack): VkCopyMemoryToAccelerationStructureInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndst(paramarg0: number): number;
    static ndst(paramarg0: number, paramarg1: number): void;
    static nmode(paramarg0: number): number;
    static nmode(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrc(paramarg0: number): VkDeviceOrHostAddressConstKHR;
    static nsrc(paramarg0: number, paramarg1: VkDeviceOrHostAddressConstKHR): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCopyMemoryToAccelerationStructureInfoKHR;
    dst(): number;
    dst(arg0: number): VkCopyMemoryToAccelerationStructureInfoKHR;
    mode(): number;
    mode(arg0: number): VkCopyMemoryToAccelerationStructureInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkCopyMemoryToAccelerationStructureInfoKHR;
    sType(): number;
    sType(arg0: number): VkCopyMemoryToAccelerationStructureInfoKHR;
    sType$Default(): VkCopyMemoryToAccelerationStructureInfoKHR;
    set(arg0: number, arg1: number, arg2: VkDeviceOrHostAddressConstKHR, arg3: number, arg4: number): VkCopyMemoryToAccelerationStructureInfoKHR;
    set(arg0: VkCopyMemoryToAccelerationStructureInfoKHR): VkCopyMemoryToAccelerationStructureInfoKHR;
    sizeof(): number;
    src(): VkDeviceOrHostAddressConstKHR;
    src(arg0: (param0: VkDeviceOrHostAddressConstKHR) => void): VkCopyMemoryToAccelerationStructureInfoKHR;
    src(arg0: VkDeviceOrHostAddressConstKHR): VkCopyMemoryToAccelerationStructureInfoKHR;
}