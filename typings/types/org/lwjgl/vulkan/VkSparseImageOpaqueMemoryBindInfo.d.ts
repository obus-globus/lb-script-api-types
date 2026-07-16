import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkSparseImageOpaqueMemoryBindInfo extends Struct<VkSparseImageOpaqueMemoryBindInfo> implements NativeResource {
    static ALIGNOF: number;
    static BINDCOUNT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGE: number;
    static PBINDS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkSparseImageOpaqueMemoryBindInfo;
    static calloc(paramarg0: MemoryStack): VkSparseImageOpaqueMemoryBindInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSparseImageOpaqueMemoryBindInfo;
    static create(paramarg0: number): VkSparseImageOpaqueMemoryBindInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSparseImageOpaqueMemoryBindInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSparseImageOpaqueMemoryBindInfo;
    static malloc(paramarg0: MemoryStack): VkSparseImageOpaqueMemoryBindInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbindCount(paramarg0: number): number;
    static nbindCount(paramarg0: number, paramarg1: number): void;
    static nimage(paramarg0: number): number;
    static nimage(paramarg0: number, paramarg1: number): void;
    static npBinds(paramarg0: number): (Object | null)[];
    static npBinds(paramarg0: number, paramarg1: (Object | null)[]): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bindCount(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSparseImageOpaqueMemoryBindInfo;
    image(): number;
    image(arg0: number): VkSparseImageOpaqueMemoryBindInfo;
    pBinds(): (Object | null)[];
    pBinds(arg0: (Object | null)[]): VkSparseImageOpaqueMemoryBindInfo;
    set(arg0: number, arg1: (Object | null)[]): VkSparseImageOpaqueMemoryBindInfo;
    set(arg0: VkSparseImageOpaqueMemoryBindInfo): VkSparseImageOpaqueMemoryBindInfo;
    sizeof(): number;
}