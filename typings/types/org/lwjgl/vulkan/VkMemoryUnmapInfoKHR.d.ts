import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkMemoryUnmapInfo } from '../../../org/lwjgl/vulkan/VkMemoryUnmapInfo.d.ts'
export class VkMemoryUnmapInfoKHR extends VkMemoryUnmapInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static MEMORY: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkMemoryUnmapInfo;
    static calloc(paramarg0: MemoryStack): VkMemoryUnmapInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkMemoryUnmapInfoKHR;
    static calloc(paramarg0: MemoryStack): VkMemoryUnmapInfoKHR;
    static create(): VkMemoryUnmapInfo;
    static create(paramarg0: number): VkMemoryUnmapInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkMemoryUnmapInfoKHR;
    static create(paramarg0: number): VkMemoryUnmapInfoKHR;
    static createSafe(paramarg0: number): VkMemoryUnmapInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMemoryUnmapInfoKHR;
    static malloc(): VkMemoryUnmapInfo;
    static malloc(paramarg0: MemoryStack): VkMemoryUnmapInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkMemoryUnmapInfoKHR;
    static malloc(paramarg0: MemoryStack): VkMemoryUnmapInfoKHR;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmemory(paramarg0: number): number;
    static nmemory(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkMemoryUnmapInfoKHR;
    flags(): number;
    flags(arg0: number): VkMemoryUnmapInfoKHR;
    memory(): number;
    memory(arg0: number): VkMemoryUnmapInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkMemoryUnmapInfoKHR;
    sType(): number;
    sType(arg0: number): VkMemoryUnmapInfoKHR;
    sType$Default(): VkMemoryUnmapInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkMemoryUnmapInfoKHR;
    set(arg0: VkMemoryUnmapInfo): VkMemoryUnmapInfo;
    set(arg0: VkMemoryUnmapInfoKHR): VkMemoryUnmapInfoKHR;
}