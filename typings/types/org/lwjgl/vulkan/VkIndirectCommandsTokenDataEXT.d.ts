import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkIndirectCommandsExecutionSetTokenEXT } from '../../../org/lwjgl/vulkan/VkIndirectCommandsExecutionSetTokenEXT.d.ts'
import type { VkIndirectCommandsIndexBufferTokenEXT } from '../../../org/lwjgl/vulkan/VkIndirectCommandsIndexBufferTokenEXT.d.ts'
import type { VkIndirectCommandsPushConstantTokenEXT } from '../../../org/lwjgl/vulkan/VkIndirectCommandsPushConstantTokenEXT.d.ts'
import type { VkIndirectCommandsVertexBufferTokenEXT } from '../../../org/lwjgl/vulkan/VkIndirectCommandsVertexBufferTokenEXT.d.ts'
export class VkIndirectCommandsTokenDataEXT extends Struct<VkIndirectCommandsTokenDataEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PEXECUTIONSET: number;
    static PINDEXBUFFER: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPUSHCONSTANT: number;
    static PVERTEXBUFFER: number;
    static SIZEOF: number;
    static calloc(): VkIndirectCommandsTokenDataEXT;
    static calloc(paramarg0: MemoryStack): VkIndirectCommandsTokenDataEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkIndirectCommandsTokenDataEXT;
    static create(paramarg0: number): VkIndirectCommandsTokenDataEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkIndirectCommandsTokenDataEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkIndirectCommandsTokenDataEXT;
    static malloc(paramarg0: MemoryStack): VkIndirectCommandsTokenDataEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npExecutionSet(paramarg0: number): VkIndirectCommandsExecutionSetTokenEXT;
    static npExecutionSet(paramarg0: number, paramarg1: VkIndirectCommandsExecutionSetTokenEXT): void;
    static npIndexBuffer(paramarg0: number): VkIndirectCommandsIndexBufferTokenEXT;
    static npIndexBuffer(paramarg0: number, paramarg1: VkIndirectCommandsIndexBufferTokenEXT): void;
    static npPushConstant(paramarg0: number): VkIndirectCommandsPushConstantTokenEXT;
    static npPushConstant(paramarg0: number, paramarg1: VkIndirectCommandsPushConstantTokenEXT): void;
    static npVertexBuffer(paramarg0: number): VkIndirectCommandsVertexBufferTokenEXT;
    static npVertexBuffer(paramarg0: number, paramarg1: VkIndirectCommandsVertexBufferTokenEXT): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkIndirectCommandsTokenDataEXT;
    pExecutionSet(): VkIndirectCommandsExecutionSetTokenEXT;
    pExecutionSet(arg0: VkIndirectCommandsExecutionSetTokenEXT): VkIndirectCommandsTokenDataEXT;
    pIndexBuffer(): VkIndirectCommandsIndexBufferTokenEXT;
    pIndexBuffer(arg0: VkIndirectCommandsIndexBufferTokenEXT): VkIndirectCommandsTokenDataEXT;
    pPushConstant(): VkIndirectCommandsPushConstantTokenEXT;
    pPushConstant(arg0: VkIndirectCommandsPushConstantTokenEXT): VkIndirectCommandsTokenDataEXT;
    pVertexBuffer(): VkIndirectCommandsVertexBufferTokenEXT;
    pVertexBuffer(arg0: VkIndirectCommandsVertexBufferTokenEXT): VkIndirectCommandsTokenDataEXT;
    set(arg0: VkIndirectCommandsTokenDataEXT): VkIndirectCommandsTokenDataEXT;
    sizeof(): number;
}