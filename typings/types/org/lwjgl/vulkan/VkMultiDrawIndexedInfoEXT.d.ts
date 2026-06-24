import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkMultiDrawIndexedInfoEXT extends Struct<VkMultiDrawIndexedInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FIRSTINDEX: number;
    static INDEXCOUNT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static VERTEXOFFSET: number;
    static calloc(): VkMultiDrawIndexedInfoEXT;
    static calloc(paramarg0: MemoryStack): VkMultiDrawIndexedInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkMultiDrawIndexedInfoEXT;
    static create(paramarg0: number): VkMultiDrawIndexedInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMultiDrawIndexedInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMultiDrawIndexedInfoEXT;
    static malloc(paramarg0: MemoryStack): VkMultiDrawIndexedInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfirstIndex(paramarg0: number): number;
    static nfirstIndex(paramarg0: number, paramarg1: number): void;
    static nindexCount(paramarg0: number): number;
    static nindexCount(paramarg0: number, paramarg1: number): void;
    static nvertexOffset(paramarg0: number): number;
    static nvertexOffset(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkMultiDrawIndexedInfoEXT;
    firstIndex(): number;
    firstIndex(arg0: number): VkMultiDrawIndexedInfoEXT;
    indexCount(): number;
    indexCount(arg0: number): VkMultiDrawIndexedInfoEXT;
    set(arg0: number, arg1: number, arg2: number): VkMultiDrawIndexedInfoEXT;
    set(arg0: VkMultiDrawIndexedInfoEXT): VkMultiDrawIndexedInfoEXT;
    sizeof(): number;
    vertexOffset(): number;
    vertexOffset(arg0: number): VkMultiDrawIndexedInfoEXT;
}