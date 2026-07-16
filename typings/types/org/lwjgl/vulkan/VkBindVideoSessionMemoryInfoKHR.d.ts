import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkBindVideoSessionMemoryInfoKHR extends Struct<VkBindVideoSessionMemoryInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MEMORY: number;
    static MEMORYBINDINDEX: number;
    static MEMORYOFFSET: number;
    static MEMORYSIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkBindVideoSessionMemoryInfoKHR;
    static calloc(paramarg0: MemoryStack): VkBindVideoSessionMemoryInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkBindVideoSessionMemoryInfoKHR;
    static create(paramarg0: number): VkBindVideoSessionMemoryInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBindVideoSessionMemoryInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkBindVideoSessionMemoryInfoKHR;
    static malloc(paramarg0: MemoryStack): VkBindVideoSessionMemoryInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmemory(paramarg0: number): number;
    static nmemory(paramarg0: number, paramarg1: number): void;
    static nmemoryBindIndex(paramarg0: number): number;
    static nmemoryBindIndex(paramarg0: number, paramarg1: number): void;
    static nmemoryOffset(paramarg0: number): number;
    static nmemoryOffset(paramarg0: number, paramarg1: number): void;
    static nmemorySize(paramarg0: number): number;
    static nmemorySize(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkBindVideoSessionMemoryInfoKHR;
    memory(): number;
    memory(arg0: number): VkBindVideoSessionMemoryInfoKHR;
    memoryBindIndex(): number;
    memoryBindIndex(arg0: number): VkBindVideoSessionMemoryInfoKHR;
    memoryOffset(): number;
    memoryOffset(arg0: number): VkBindVideoSessionMemoryInfoKHR;
    memorySize(): number;
    memorySize(arg0: number): VkBindVideoSessionMemoryInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkBindVideoSessionMemoryInfoKHR;
    sType(): number;
    sType(arg0: number): VkBindVideoSessionMemoryInfoKHR;
    sType$Default(): VkBindVideoSessionMemoryInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkBindVideoSessionMemoryInfoKHR;
    set(arg0: VkBindVideoSessionMemoryInfoKHR): VkBindVideoSessionMemoryInfoKHR;
    sizeof(): number;
}