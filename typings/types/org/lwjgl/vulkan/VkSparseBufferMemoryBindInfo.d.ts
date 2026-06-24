import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkSparseBufferMemoryBindInfo extends Struct<VkSparseBufferMemoryBindInfo> implements NativeResource {
    static ALIGNOF: number;
    static BINDCOUNT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFER: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PBINDS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkSparseBufferMemoryBindInfo;
    static calloc(paramarg0: MemoryStack): VkSparseBufferMemoryBindInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSparseBufferMemoryBindInfo;
    static create(paramarg0: number): VkSparseBufferMemoryBindInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSparseBufferMemoryBindInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSparseBufferMemoryBindInfo;
    static malloc(paramarg0: MemoryStack): VkSparseBufferMemoryBindInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbindCount(paramarg0: number): number;
    static nbindCount(paramarg0: number, paramarg1: number): void;
    static nbuffer(paramarg0: number): number;
    static nbuffer(paramarg0: number, paramarg1: number): void;
    static npBinds(paramarg0: number): (Object | null)[];
    static npBinds(paramarg0: number, paramarg1: (Object | null)[]): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bindCount(): number;
    buffer(): number;
    buffer(arg0: number): VkSparseBufferMemoryBindInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSparseBufferMemoryBindInfo;
    pBinds(): (Object | null)[];
    pBinds(arg0: (Object | null)[]): VkSparseBufferMemoryBindInfo;
    set(arg0: number, arg1: (Object | null)[]): VkSparseBufferMemoryBindInfo;
    set(arg0: VkSparseBufferMemoryBindInfo): VkSparseBufferMemoryBindInfo;
    sizeof(): number;
}