import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkIndirectCommandsStreamNV extends Struct<VkIndirectCommandsStreamNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFER: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static OFFSET: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkIndirectCommandsStreamNV;
    static calloc(paramarg0: MemoryStack): VkIndirectCommandsStreamNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkIndirectCommandsStreamNV;
    static create(paramarg0: number): VkIndirectCommandsStreamNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkIndirectCommandsStreamNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkIndirectCommandsStreamNV;
    static malloc(paramarg0: MemoryStack): VkIndirectCommandsStreamNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbuffer(paramarg0: number): number;
    static nbuffer(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): number;
    static noffset(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    buffer(): number;
    buffer(arg0: number): VkIndirectCommandsStreamNV;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkIndirectCommandsStreamNV;
    offset(): number;
    offset(arg0: number): VkIndirectCommandsStreamNV;
    set(arg0: number, arg1: number): VkIndirectCommandsStreamNV;
    set(arg0: VkIndirectCommandsStreamNV): VkIndirectCommandsStreamNV;
    sizeof(): number;
}