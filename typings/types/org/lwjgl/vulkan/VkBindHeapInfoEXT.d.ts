import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceAddressRangeEXT } from '../../../org/lwjgl/vulkan/VkDeviceAddressRangeEXT.d.ts'
export class VkBindHeapInfoEXT extends Struct<VkBindHeapInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HEAPRANGE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESERVEDRANGEOFFSET: number;
    static RESERVEDRANGESIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkBindHeapInfoEXT;
    static calloc(paramarg0: MemoryStack): VkBindHeapInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkBindHeapInfoEXT;
    static create(paramarg0: number): VkBindHeapInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBindHeapInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkBindHeapInfoEXT;
    static malloc(paramarg0: MemoryStack): VkBindHeapInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nheapRange(paramarg0: number): VkDeviceAddressRangeEXT;
    static nheapRange(paramarg0: number, paramarg1: VkDeviceAddressRangeEXT): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nreservedRangeOffset(paramarg0: number): number;
    static nreservedRangeOffset(paramarg0: number, paramarg1: number): void;
    static nreservedRangeSize(paramarg0: number): number;
    static nreservedRangeSize(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkBindHeapInfoEXT;
    heapRange(): VkDeviceAddressRangeEXT;
    heapRange(arg0: (param0: VkDeviceAddressRangeEXT) => void): VkBindHeapInfoEXT;
    heapRange(arg0: VkDeviceAddressRangeEXT): VkBindHeapInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkBindHeapInfoEXT;
    reservedRangeOffset(): number;
    reservedRangeOffset(arg0: number): VkBindHeapInfoEXT;
    reservedRangeSize(): number;
    reservedRangeSize(arg0: number): VkBindHeapInfoEXT;
    sType(): number;
    sType(arg0: number): VkBindHeapInfoEXT;
    sType$Default(): VkBindHeapInfoEXT;
    set(arg0: number, arg1: number, arg2: VkDeviceAddressRangeEXT, arg3: number, arg4: number): VkBindHeapInfoEXT;
    set(arg0: VkBindHeapInfoEXT): VkBindHeapInfoEXT;
    sizeof(): number;
}