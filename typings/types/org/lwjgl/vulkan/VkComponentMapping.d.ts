import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkComponentMapping extends Struct<VkComponentMapping> implements NativeResource {
    static A: number;
    static ALIGNOF: number;
    static B: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static G: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static R: number;
    static SIZEOF: number;
    static calloc(): VkComponentMapping;
    static calloc(paramarg0: MemoryStack): VkComponentMapping;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkComponentMapping;
    static create(paramarg0: number): VkComponentMapping;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkComponentMapping;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkComponentMapping;
    static malloc(paramarg0: MemoryStack): VkComponentMapping;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static na(paramarg0: number): number;
    static na(paramarg0: number, paramarg1: number): void;
    static nb(paramarg0: number): number;
    static nb(paramarg0: number, paramarg1: number): void;
    static ng(paramarg0: number): number;
    static ng(paramarg0: number, paramarg1: number): void;
    static nr(paramarg0: number): number;
    static nr(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    a(): number;
    a(arg0: number): VkComponentMapping;
    b(): number;
    b(arg0: number): VkComponentMapping;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkComponentMapping;
    g(): number;
    g(arg0: number): VkComponentMapping;
    r(): number;
    r(arg0: number): VkComponentMapping;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkComponentMapping;
    set(arg0: VkComponentMapping): VkComponentMapping;
    sizeof(): number;
}