import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDrawIndirectCommand extends Struct<VkDrawIndirectCommand> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FIRSTINSTANCE: number;
    static FIRSTVERTEX: number;
    static INSTANCECOUNT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static VERTEXCOUNT: number;
    static calloc(): VkDrawIndirectCommand;
    static calloc(paramarg0: MemoryStack): VkDrawIndirectCommand;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDrawIndirectCommand;
    static create(paramarg0: number): VkDrawIndirectCommand;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDrawIndirectCommand;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDrawIndirectCommand;
    static malloc(paramarg0: MemoryStack): VkDrawIndirectCommand;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfirstInstance(paramarg0: number): number;
    static nfirstInstance(paramarg0: number, paramarg1: number): void;
    static nfirstVertex(paramarg0: number): number;
    static nfirstVertex(paramarg0: number, paramarg1: number): void;
    static ninstanceCount(paramarg0: number): number;
    static ninstanceCount(paramarg0: number, paramarg1: number): void;
    static nvertexCount(paramarg0: number): number;
    static nvertexCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDrawIndirectCommand;
    firstInstance(): number;
    firstInstance(arg0: number): VkDrawIndirectCommand;
    firstVertex(): number;
    firstVertex(arg0: number): VkDrawIndirectCommand;
    instanceCount(): number;
    instanceCount(arg0: number): VkDrawIndirectCommand;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkDrawIndirectCommand;
    set(arg0: VkDrawIndirectCommand): VkDrawIndirectCommand;
    sizeof(): number;
    vertexCount(): number;
    vertexCount(arg0: number): VkDrawIndirectCommand;
}