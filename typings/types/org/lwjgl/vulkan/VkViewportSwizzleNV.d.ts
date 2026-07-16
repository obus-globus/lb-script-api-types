import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkViewportSwizzleNV extends Struct<VkViewportSwizzleNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static W: number;
    static X: number;
    static Y: number;
    static Z: number;
    static calloc(): VkViewportSwizzleNV;
    static calloc(paramarg0: MemoryStack): VkViewportSwizzleNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkViewportSwizzleNV;
    static create(paramarg0: number): VkViewportSwizzleNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkViewportSwizzleNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkViewportSwizzleNV;
    static malloc(paramarg0: MemoryStack): VkViewportSwizzleNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nw(paramarg0: number): number;
    static nw(paramarg0: number, paramarg1: number): void;
    static nx(paramarg0: number): number;
    static nx(paramarg0: number, paramarg1: number): void;
    static ny(paramarg0: number): number;
    static ny(paramarg0: number, paramarg1: number): void;
    static nz(paramarg0: number): number;
    static nz(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkViewportSwizzleNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkViewportSwizzleNV;
    set(arg0: VkViewportSwizzleNV): VkViewportSwizzleNV;
    sizeof(): number;
    w(): number;
    w(arg0: number): VkViewportSwizzleNV;
    x(): number;
    x(arg0: number): VkViewportSwizzleNV;
    y(): number;
    y(arg0: number): VkViewportSwizzleNV;
    z(): number;
    z(arg0: number): VkViewportSwizzleNV;
}