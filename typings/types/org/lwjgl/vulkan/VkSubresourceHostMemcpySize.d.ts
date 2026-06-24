import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkSubresourceHostMemcpySize extends Struct<VkSubresourceHostMemcpySize> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSubresourceHostMemcpySize;
    static calloc(paramarg0: MemoryStack): VkSubresourceHostMemcpySize;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSubresourceHostMemcpySize;
    static create(paramarg0: number): VkSubresourceHostMemcpySize;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSubresourceHostMemcpySize;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSubresourceHostMemcpySize;
    static malloc(paramarg0: MemoryStack): VkSubresourceHostMemcpySize;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSubresourceHostMemcpySize;
    pNext(): number;
    pNext(arg0: number): VkSubresourceHostMemcpySize;
    sType(): number;
    sType(arg0: number): VkSubresourceHostMemcpySize;
    sType$Default(): VkSubresourceHostMemcpySize;
    set(arg0: number, arg1: number): VkSubresourceHostMemcpySize;
    set(arg0: VkSubresourceHostMemcpySize): VkSubresourceHostMemcpySize;
    size(): number;
    sizeof(): number;
}