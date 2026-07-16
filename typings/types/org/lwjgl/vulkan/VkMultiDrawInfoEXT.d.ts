import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkMultiDrawInfoEXT extends Struct<VkMultiDrawInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FIRSTVERTEX: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static VERTEXCOUNT: number;
    static calloc(): VkMultiDrawInfoEXT;
    static calloc(paramarg0: MemoryStack): VkMultiDrawInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkMultiDrawInfoEXT;
    static create(paramarg0: number): VkMultiDrawInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMultiDrawInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMultiDrawInfoEXT;
    static malloc(paramarg0: MemoryStack): VkMultiDrawInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfirstVertex(paramarg0: number): number;
    static nfirstVertex(paramarg0: number, paramarg1: number): void;
    static nvertexCount(paramarg0: number): number;
    static nvertexCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkMultiDrawInfoEXT;
    firstVertex(): number;
    firstVertex(arg0: number): VkMultiDrawInfoEXT;
    set(arg0: number, arg1: number): VkMultiDrawInfoEXT;
    set(arg0: VkMultiDrawInfoEXT): VkMultiDrawInfoEXT;
    sizeof(): number;
    vertexCount(): number;
    vertexCount(arg0: number): VkMultiDrawInfoEXT;
}