import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkStridedDeviceAddressRangeKHR } from '../../../org/lwjgl/vulkan/VkStridedDeviceAddressRangeKHR.d.ts'
export class VkCopyMemoryToImageIndirectInfoKHR extends Struct<VkCopyMemoryToImageIndirectInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COPYADDRESSRANGE: number;
    static COPYCOUNT: number;
    static DSTIMAGE: number;
    static DSTIMAGELAYOUT: number;
    static PIMAGESUBRESOURCES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCCOPYFLAGS: number;
    static STYPE: number;
    static calloc(): VkCopyMemoryToImageIndirectInfoKHR;
    static calloc(paramarg0: MemoryStack): VkCopyMemoryToImageIndirectInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCopyMemoryToImageIndirectInfoKHR;
    static create(paramarg0: number): VkCopyMemoryToImageIndirectInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyMemoryToImageIndirectInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCopyMemoryToImageIndirectInfoKHR;
    static malloc(paramarg0: MemoryStack): VkCopyMemoryToImageIndirectInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncopyAddressRange(paramarg0: number): VkStridedDeviceAddressRangeKHR;
    static ncopyAddressRange(paramarg0: number, paramarg1: VkStridedDeviceAddressRangeKHR): void;
    static ncopyCount(paramarg0: number): number;
    static ncopyCount(paramarg0: number, paramarg1: number): void;
    static ndstImage(paramarg0: number): number;
    static ndstImage(paramarg0: number, paramarg1: number): void;
    static ndstImageLayout(paramarg0: number): number;
    static ndstImageLayout(paramarg0: number, paramarg1: number): void;
    static npImageSubresources(paramarg0: number): (Object | null)[];
    static npImageSubresources(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcCopyFlags(paramarg0: number): number;
    static nsrcCopyFlags(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    copyAddressRange(): VkStridedDeviceAddressRangeKHR;
    copyAddressRange(arg0: (param0: VkStridedDeviceAddressRangeKHR) => void): VkCopyMemoryToImageIndirectInfoKHR;
    copyAddressRange(arg0: VkStridedDeviceAddressRangeKHR): VkCopyMemoryToImageIndirectInfoKHR;
    copyCount(): number;
    create(arg0: number, arg1: ByteBuffer): VkCopyMemoryToImageIndirectInfoKHR;
    dstImage(): number;
    dstImage(arg0: number): VkCopyMemoryToImageIndirectInfoKHR;
    dstImageLayout(): number;
    dstImageLayout(arg0: number): VkCopyMemoryToImageIndirectInfoKHR;
    pImageSubresources(): (Object | null)[];
    pImageSubresources(arg0: (Object | null)[]): VkCopyMemoryToImageIndirectInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkCopyMemoryToImageIndirectInfoKHR;
    sType(): number;
    sType(arg0: number): VkCopyMemoryToImageIndirectInfoKHR;
    sType$Default(): VkCopyMemoryToImageIndirectInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: VkStridedDeviceAddressRangeKHR, arg4: number, arg5: number, arg6: (Object | null)[]): VkCopyMemoryToImageIndirectInfoKHR;
    set(arg0: VkCopyMemoryToImageIndirectInfoKHR): VkCopyMemoryToImageIndirectInfoKHR;
    sizeof(): number;
    srcCopyFlags(): number;
    srcCopyFlags(arg0: number): VkCopyMemoryToImageIndirectInfoKHR;
}