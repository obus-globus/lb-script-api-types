import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceOrHostAddressKHR } from '../../../org/lwjgl/vulkan/VkDeviceOrHostAddressKHR.d.ts'
export class VkCopyMicromapToMemoryInfoEXT extends Struct<VkCopyMicromapToMemoryInfoEXT> implements NativeResource {
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
    static calloc(): VkCopyMicromapToMemoryInfoEXT;
    static calloc(paramarg0: MemoryStack): VkCopyMicromapToMemoryInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCopyMicromapToMemoryInfoEXT;
    static create(paramarg0: number): VkCopyMicromapToMemoryInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyMicromapToMemoryInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCopyMicromapToMemoryInfoEXT;
    static malloc(paramarg0: MemoryStack): VkCopyMicromapToMemoryInfoEXT;
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
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCopyMicromapToMemoryInfoEXT;
    dst(): VkDeviceOrHostAddressKHR;
    dst(arg0: (param0: VkDeviceOrHostAddressKHR) => void): VkCopyMicromapToMemoryInfoEXT;
    dst(arg0: VkDeviceOrHostAddressKHR): VkCopyMicromapToMemoryInfoEXT;
    mode(): number;
    mode(arg0: number): VkCopyMicromapToMemoryInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkCopyMicromapToMemoryInfoEXT;
    sType(): number;
    sType(arg0: number): VkCopyMicromapToMemoryInfoEXT;
    sType$Default(): VkCopyMicromapToMemoryInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: VkDeviceOrHostAddressKHR, arg4: number): VkCopyMicromapToMemoryInfoEXT;
    set(arg0: VkCopyMicromapToMemoryInfoEXT): VkCopyMicromapToMemoryInfoEXT;
    sizeof(): number;
    src(): number;
    src(arg0: number): VkCopyMicromapToMemoryInfoEXT;
}