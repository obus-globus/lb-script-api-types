import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDrawIndexedIndirectCommand extends Struct<VkDrawIndexedIndirectCommand> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FIRSTINDEX: number;
    static FIRSTINSTANCE: number;
    static INDEXCOUNT: number;
    static INSTANCECOUNT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static VERTEXOFFSET: number;
    static calloc(): VkDrawIndexedIndirectCommand;
    static calloc(paramarg0: MemoryStack): VkDrawIndexedIndirectCommand;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDrawIndexedIndirectCommand;
    static create(paramarg0: number): VkDrawIndexedIndirectCommand;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDrawIndexedIndirectCommand;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDrawIndexedIndirectCommand;
    static malloc(paramarg0: MemoryStack): VkDrawIndexedIndirectCommand;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfirstIndex(paramarg0: number): number;
    static nfirstIndex(paramarg0: number, paramarg1: number): void;
    static nfirstInstance(paramarg0: number): number;
    static nfirstInstance(paramarg0: number, paramarg1: number): void;
    static nindexCount(paramarg0: number): number;
    static nindexCount(paramarg0: number, paramarg1: number): void;
    static ninstanceCount(paramarg0: number): number;
    static ninstanceCount(paramarg0: number, paramarg1: number): void;
    static nvertexOffset(paramarg0: number): number;
    static nvertexOffset(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDrawIndexedIndirectCommand;
    firstIndex(): number;
    firstIndex(arg0: number): VkDrawIndexedIndirectCommand;
    firstInstance(): number;
    firstInstance(arg0: number): VkDrawIndexedIndirectCommand;
    indexCount(): number;
    indexCount(arg0: number): VkDrawIndexedIndirectCommand;
    instanceCount(): number;
    instanceCount(arg0: number): VkDrawIndexedIndirectCommand;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkDrawIndexedIndirectCommand;
    set(arg0: VkDrawIndexedIndirectCommand): VkDrawIndexedIndirectCommand;
    sizeof(): number;
    vertexOffset(): number;
    vertexOffset(arg0: number): VkDrawIndexedIndirectCommand;
}