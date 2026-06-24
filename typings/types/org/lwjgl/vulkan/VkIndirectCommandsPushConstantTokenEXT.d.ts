import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPushConstantRange } from '../../../org/lwjgl/vulkan/VkPushConstantRange.d.ts'
export class VkIndirectCommandsPushConstantTokenEXT extends Struct<VkIndirectCommandsPushConstantTokenEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static UPDATERANGE: number;
    static calloc(): VkIndirectCommandsPushConstantTokenEXT;
    static calloc(paramarg0: MemoryStack): VkIndirectCommandsPushConstantTokenEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkIndirectCommandsPushConstantTokenEXT;
    static create(paramarg0: number): VkIndirectCommandsPushConstantTokenEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkIndirectCommandsPushConstantTokenEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkIndirectCommandsPushConstantTokenEXT;
    static malloc(paramarg0: MemoryStack): VkIndirectCommandsPushConstantTokenEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nupdateRange(paramarg0: number): VkPushConstantRange;
    static nupdateRange(paramarg0: number, paramarg1: VkPushConstantRange): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkIndirectCommandsPushConstantTokenEXT;
    set(arg0: VkIndirectCommandsPushConstantTokenEXT): VkIndirectCommandsPushConstantTokenEXT;
    sizeof(): number;
    updateRange(): VkPushConstantRange;
    updateRange(arg0: (param0: VkPushConstantRange) => void): VkIndirectCommandsPushConstantTokenEXT;
    updateRange(arg0: VkPushConstantRange): VkIndirectCommandsPushConstantTokenEXT;
}