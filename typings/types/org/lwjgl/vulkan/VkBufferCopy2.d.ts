import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkBufferCopy2 extends Struct<VkBufferCopy2> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTOFFSET: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static SRCOFFSET: number;
    static STYPE: number;
    static calloc(): VkBufferCopy2;
    static calloc(paramarg0: MemoryStack): VkBufferCopy2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkBufferCopy2;
    static create(paramarg0: number): VkBufferCopy2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBufferCopy2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkBufferCopy2;
    static malloc(paramarg0: MemoryStack): VkBufferCopy2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstOffset(paramarg0: number): number;
    static ndstOffset(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static nsrcOffset(paramarg0: number): number;
    static nsrcOffset(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkBufferCopy2;
    dstOffset(): number;
    dstOffset(arg0: number): VkBufferCopy2;
    pNext(): number;
    pNext(arg0: number): VkBufferCopy2;
    sType(): number;
    sType(arg0: number): VkBufferCopy2;
    sType$Default(): VkBufferCopy2;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkBufferCopy2;
    set(arg0: VkBufferCopy2): VkBufferCopy2;
    size(): number;
    size(arg0: number): VkBufferCopy2;
    sizeof(): number;
    srcOffset(): number;
    srcOffset(arg0: number): VkBufferCopy2;
}