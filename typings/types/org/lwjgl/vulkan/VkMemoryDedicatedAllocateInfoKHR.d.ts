import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkMemoryDedicatedAllocateInfo } from '../../../org/lwjgl/vulkan/VkMemoryDedicatedAllocateInfo.d.ts'
export class VkMemoryDedicatedAllocateInfoKHR extends VkMemoryDedicatedAllocateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFER: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkMemoryDedicatedAllocateInfo;
    static calloc(paramarg0: MemoryStack): VkMemoryDedicatedAllocateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkMemoryDedicatedAllocateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkMemoryDedicatedAllocateInfoKHR;
    static create(): VkMemoryDedicatedAllocateInfo;
    static create(paramarg0: number): VkMemoryDedicatedAllocateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkMemoryDedicatedAllocateInfoKHR;
    static create(paramarg0: number): VkMemoryDedicatedAllocateInfoKHR;
    static createSafe(paramarg0: number): VkMemoryDedicatedAllocateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMemoryDedicatedAllocateInfoKHR;
    static malloc(): VkMemoryDedicatedAllocateInfo;
    static malloc(paramarg0: MemoryStack): VkMemoryDedicatedAllocateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkMemoryDedicatedAllocateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkMemoryDedicatedAllocateInfoKHR;
    static nbuffer(paramarg0: number): number;
    static nbuffer(paramarg0: number, paramarg1: number): void;
    static nimage(paramarg0: number): number;
    static nimage(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    buffer(): number;
    buffer(arg0: number): VkMemoryDedicatedAllocateInfoKHR;
    create(arg0: number, arg1: ByteBuffer): VkMemoryDedicatedAllocateInfoKHR;
    image(): number;
    image(arg0: number): VkMemoryDedicatedAllocateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkMemoryDedicatedAllocateInfoKHR;
    sType(): number;
    sType(arg0: number): VkMemoryDedicatedAllocateInfoKHR;
    sType$Default(): VkMemoryDedicatedAllocateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkMemoryDedicatedAllocateInfoKHR;
    set(arg0: VkMemoryDedicatedAllocateInfo): VkMemoryDedicatedAllocateInfo;
    set(arg0: VkMemoryDedicatedAllocateInfoKHR): VkMemoryDedicatedAllocateInfoKHR;
}