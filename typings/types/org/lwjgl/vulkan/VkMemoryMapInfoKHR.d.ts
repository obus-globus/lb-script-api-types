import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkMemoryMapInfo } from '../../../org/lwjgl/vulkan/VkMemoryMapInfo.d.ts'
import type { VkMemoryMapPlacedInfoEXT } from '../../../org/lwjgl/vulkan/VkMemoryMapPlacedInfoEXT.d.ts'
export class VkMemoryMapInfoKHR extends VkMemoryMapInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static MEMORY: number;
    static OFFSET: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkMemoryMapInfo;
    static calloc(paramarg0: MemoryStack): VkMemoryMapInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkMemoryMapInfoKHR;
    static calloc(paramarg0: MemoryStack): VkMemoryMapInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkMemoryMapInfo;
    static create(paramarg0: number): VkMemoryMapInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkMemoryMapInfoKHR;
    static create(paramarg0: number): VkMemoryMapInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMemoryMapInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMemoryMapInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMemoryMapInfo;
    static malloc(paramarg0: MemoryStack): VkMemoryMapInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkMemoryMapInfoKHR;
    static malloc(paramarg0: MemoryStack): VkMemoryMapInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmemory(paramarg0: number): number;
    static nmemory(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): number;
    static noffset(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkMemoryMapInfoKHR;
    flags(): number;
    flags(arg0: number): VkMemoryMapInfoKHR;
    memory(): number;
    memory(arg0: number): VkMemoryMapInfoKHR;
    offset(): number;
    offset(arg0: number): VkMemoryMapInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkMemoryMapInfoKHR;
    pNext(arg0: VkMemoryMapPlacedInfoEXT): VkMemoryMapInfo;
    sType(): number;
    sType(arg0: number): VkMemoryMapInfoKHR;
    sType$Default(): VkMemoryMapInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkMemoryMapInfoKHR;
    set(arg0: VkMemoryMapInfo): VkMemoryMapInfo;
    set(arg0: VkMemoryMapInfoKHR): VkMemoryMapInfoKHR;
    size(): number;
    size(arg0: number): VkMemoryMapInfoKHR;
}