import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkImageSubresource } from '../../../org/lwjgl/vulkan/VkImageSubresource.d.ts'
export class VkImageSubresource2 extends Struct<VkImageSubresource2> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGESUBRESOURCE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkImageSubresource2;
    static calloc(paramarg0: MemoryStack): VkImageSubresource2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageSubresource2;
    static create(paramarg0: number): VkImageSubresource2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageSubresource2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageSubresource2;
    static malloc(paramarg0: MemoryStack): VkImageSubresource2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nimageSubresource(paramarg0: number): VkImageSubresource;
    static nimageSubresource(paramarg0: number, paramarg1: VkImageSubresource): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImageSubresource2;
    imageSubresource(): VkImageSubresource;
    imageSubresource(arg0: (param0: VkImageSubresource) => void): VkImageSubresource2;
    imageSubresource(arg0: VkImageSubresource): VkImageSubresource2;
    pNext(): number;
    pNext(arg0: number): VkImageSubresource2;
    sType(): number;
    sType(arg0: number): VkImageSubresource2;
    sType$Default(): VkImageSubresource2;
    set(arg0: number, arg1: number, arg2: VkImageSubresource): VkImageSubresource2;
    set(arg0: VkImageSubresource2): VkImageSubresource2;
    sizeof(): number;
}