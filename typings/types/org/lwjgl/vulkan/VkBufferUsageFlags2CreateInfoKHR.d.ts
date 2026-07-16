import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBufferUsageFlags2CreateInfo } from '../../../org/lwjgl/vulkan/VkBufferUsageFlags2CreateInfo.d.ts'
export class VkBufferUsageFlags2CreateInfoKHR extends VkBufferUsageFlags2CreateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static USAGE: number;
    static calloc(): VkBufferUsageFlags2CreateInfo;
    static calloc(paramarg0: MemoryStack): VkBufferUsageFlags2CreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkBufferUsageFlags2CreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkBufferUsageFlags2CreateInfoKHR;
    static create(): VkBufferUsageFlags2CreateInfo;
    static create(paramarg0: number): VkBufferUsageFlags2CreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkBufferUsageFlags2CreateInfoKHR;
    static create(paramarg0: number): VkBufferUsageFlags2CreateInfoKHR;
    static createSafe(paramarg0: number): VkBufferUsageFlags2CreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBufferUsageFlags2CreateInfoKHR;
    static malloc(): VkBufferUsageFlags2CreateInfo;
    static malloc(paramarg0: MemoryStack): VkBufferUsageFlags2CreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkBufferUsageFlags2CreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkBufferUsageFlags2CreateInfoKHR;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nusage(paramarg0: number): number;
    static nusage(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkBufferUsageFlags2CreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkBufferUsageFlags2CreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkBufferUsageFlags2CreateInfoKHR;
    sType$Default(): VkBufferUsageFlags2CreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkBufferUsageFlags2CreateInfoKHR;
    set(arg0: VkBufferUsageFlags2CreateInfo): VkBufferUsageFlags2CreateInfo;
    set(arg0: VkBufferUsageFlags2CreateInfoKHR): VkBufferUsageFlags2CreateInfoKHR;
    usage(): number;
    usage(arg0: number): VkBufferUsageFlags2CreateInfoKHR;
}