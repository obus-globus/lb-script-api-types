import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkCommandBufferAllocateInfo extends Struct<VkCommandBufferAllocateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMMANDBUFFERCOUNT: number;
    static COMMANDPOOL: number;
    static LEVEL: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkCommandBufferAllocateInfo;
    static calloc(paramarg0: MemoryStack): VkCommandBufferAllocateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCommandBufferAllocateInfo;
    static create(paramarg0: number): VkCommandBufferAllocateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCommandBufferAllocateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCommandBufferAllocateInfo;
    static malloc(paramarg0: MemoryStack): VkCommandBufferAllocateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncommandBufferCount(paramarg0: number): number;
    static ncommandBufferCount(paramarg0: number, paramarg1: number): void;
    static ncommandPool(paramarg0: number): number;
    static ncommandPool(paramarg0: number, paramarg1: number): void;
    static nlevel(paramarg0: number): number;
    static nlevel(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    commandBufferCount(): number;
    commandBufferCount(arg0: number): VkCommandBufferAllocateInfo;
    commandPool(): number;
    commandPool(arg0: number): VkCommandBufferAllocateInfo;
    create(arg0: number, arg1: ByteBuffer): VkCommandBufferAllocateInfo;
    level(): number;
    level(arg0: number): VkCommandBufferAllocateInfo;
    pNext(): number;
    pNext(arg0: number): VkCommandBufferAllocateInfo;
    sType(): number;
    sType(arg0: number): VkCommandBufferAllocateInfo;
    sType$Default(): VkCommandBufferAllocateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkCommandBufferAllocateInfo;
    set(arg0: VkCommandBufferAllocateInfo): VkCommandBufferAllocateInfo;
    sizeof(): number;
}