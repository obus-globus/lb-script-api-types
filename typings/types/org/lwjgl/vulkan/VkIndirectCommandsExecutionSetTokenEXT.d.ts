import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkIndirectCommandsExecutionSetTokenEXT extends Struct<VkIndirectCommandsExecutionSetTokenEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERSTAGES: number;
    static SIZEOF: number;
    static TYPE: number;
    static calloc(): VkIndirectCommandsExecutionSetTokenEXT;
    static calloc(paramarg0: MemoryStack): VkIndirectCommandsExecutionSetTokenEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkIndirectCommandsExecutionSetTokenEXT;
    static create(paramarg0: number): VkIndirectCommandsExecutionSetTokenEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkIndirectCommandsExecutionSetTokenEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkIndirectCommandsExecutionSetTokenEXT;
    static malloc(paramarg0: MemoryStack): VkIndirectCommandsExecutionSetTokenEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nshaderStages(paramarg0: number): number;
    static nshaderStages(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkIndirectCommandsExecutionSetTokenEXT;
    set(arg0: number, arg1: number): VkIndirectCommandsExecutionSetTokenEXT;
    set(arg0: VkIndirectCommandsExecutionSetTokenEXT): VkIndirectCommandsExecutionSetTokenEXT;
    shaderStages(): number;
    shaderStages(arg0: number): VkIndirectCommandsExecutionSetTokenEXT;
    sizeof(): number;
    type(): number;
    type(arg0: number): VkIndirectCommandsExecutionSetTokenEXT;
}