import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDrawIndirectCountIndirectCommandEXT extends Struct<VkDrawIndirectCountIndirectCommandEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFERADDRESS: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMMANDCOUNT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STRIDE: number;
    static calloc(): VkDrawIndirectCountIndirectCommandEXT;
    static calloc(paramarg0: MemoryStack): VkDrawIndirectCountIndirectCommandEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDrawIndirectCountIndirectCommandEXT;
    static create(paramarg0: number): VkDrawIndirectCountIndirectCommandEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDrawIndirectCountIndirectCommandEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDrawIndirectCountIndirectCommandEXT;
    static malloc(paramarg0: MemoryStack): VkDrawIndirectCountIndirectCommandEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbufferAddress(paramarg0: number): number;
    static nbufferAddress(paramarg0: number, paramarg1: number): void;
    static ncommandCount(paramarg0: number): number;
    static ncommandCount(paramarg0: number, paramarg1: number): void;
    static nstride(paramarg0: number): number;
    static nstride(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bufferAddress(): number;
    bufferAddress(arg0: number): VkDrawIndirectCountIndirectCommandEXT;
    close(): void;
    commandCount(): number;
    commandCount(arg0: number): VkDrawIndirectCountIndirectCommandEXT;
    create(arg0: number, arg1: ByteBuffer): VkDrawIndirectCountIndirectCommandEXT;
    set(arg0: number, arg1: number, arg2: number): VkDrawIndirectCountIndirectCommandEXT;
    set(arg0: VkDrawIndirectCountIndirectCommandEXT): VkDrawIndirectCountIndirectCommandEXT;
    sizeof(): number;
    stride(): number;
    stride(arg0: number): VkDrawIndirectCountIndirectCommandEXT;
}