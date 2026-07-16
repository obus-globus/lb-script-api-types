import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkIndirectCommandsIndexBufferTokenEXT extends Struct<VkIndirectCommandsIndexBufferTokenEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MODE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkIndirectCommandsIndexBufferTokenEXT;
    static calloc(paramarg0: MemoryStack): VkIndirectCommandsIndexBufferTokenEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkIndirectCommandsIndexBufferTokenEXT;
    static create(paramarg0: number): VkIndirectCommandsIndexBufferTokenEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkIndirectCommandsIndexBufferTokenEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkIndirectCommandsIndexBufferTokenEXT;
    static malloc(paramarg0: MemoryStack): VkIndirectCommandsIndexBufferTokenEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmode(paramarg0: number): number;
    static nmode(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkIndirectCommandsIndexBufferTokenEXT;
    mode(): number;
    mode(arg0: number): VkIndirectCommandsIndexBufferTokenEXT;
    set(arg0: VkIndirectCommandsIndexBufferTokenEXT): VkIndirectCommandsIndexBufferTokenEXT;
    sizeof(): number;
}