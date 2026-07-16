import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkStridedDeviceAddressRangeKHR } from '../../../org/lwjgl/vulkan/VkStridedDeviceAddressRangeKHR.d.ts'
export class VkCopyMemoryIndirectInfoKHR extends Struct<VkCopyMemoryIndirectInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COPYADDRESSRANGE: number;
    static COPYCOUNT: number;
    static DSTCOPYFLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCCOPYFLAGS: number;
    static STYPE: number;
    static calloc(): VkCopyMemoryIndirectInfoKHR;
    static calloc(paramarg0: MemoryStack): VkCopyMemoryIndirectInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCopyMemoryIndirectInfoKHR;
    static create(paramarg0: number): VkCopyMemoryIndirectInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyMemoryIndirectInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCopyMemoryIndirectInfoKHR;
    static malloc(paramarg0: MemoryStack): VkCopyMemoryIndirectInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncopyAddressRange(paramarg0: number): VkStridedDeviceAddressRangeKHR;
    static ncopyAddressRange(paramarg0: number, paramarg1: VkStridedDeviceAddressRangeKHR): void;
    static ncopyCount(paramarg0: number): number;
    static ncopyCount(paramarg0: number, paramarg1: number): void;
    static ndstCopyFlags(paramarg0: number): number;
    static ndstCopyFlags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcCopyFlags(paramarg0: number): number;
    static nsrcCopyFlags(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    copyAddressRange(): VkStridedDeviceAddressRangeKHR;
    copyAddressRange(arg0: (param0: VkStridedDeviceAddressRangeKHR) => void): VkCopyMemoryIndirectInfoKHR;
    copyAddressRange(arg0: VkStridedDeviceAddressRangeKHR): VkCopyMemoryIndirectInfoKHR;
    copyCount(): number;
    copyCount(arg0: number): VkCopyMemoryIndirectInfoKHR;
    create(arg0: number, arg1: ByteBuffer): VkCopyMemoryIndirectInfoKHR;
    dstCopyFlags(): number;
    dstCopyFlags(arg0: number): VkCopyMemoryIndirectInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkCopyMemoryIndirectInfoKHR;
    sType(): number;
    sType(arg0: number): VkCopyMemoryIndirectInfoKHR;
    sType$Default(): VkCopyMemoryIndirectInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: VkStridedDeviceAddressRangeKHR): VkCopyMemoryIndirectInfoKHR;
    set(arg0: VkCopyMemoryIndirectInfoKHR): VkCopyMemoryIndirectInfoKHR;
    sizeof(): number;
    srcCopyFlags(): number;
    srcCopyFlags(arg0: number): VkCopyMemoryIndirectInfoKHR;
}