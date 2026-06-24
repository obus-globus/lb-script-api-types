import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkViewport extends Struct<VkViewport> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HEIGHT: number;
    static MAXDEPTH: number;
    static MINDEPTH: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static WIDTH: number;
    static X: number;
    static Y: number;
    static calloc(): VkViewport;
    static calloc(paramarg0: MemoryStack): VkViewport;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkViewport;
    static create(paramarg0: number): VkViewport;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkViewport;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkViewport;
    static malloc(paramarg0: MemoryStack): VkViewport;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nheight(paramarg0: number): number;
    static nheight(paramarg0: number, paramarg1: number): void;
    static nmaxDepth(paramarg0: number): number;
    static nmaxDepth(paramarg0: number, paramarg1: number): void;
    static nminDepth(paramarg0: number): number;
    static nminDepth(paramarg0: number, paramarg1: number): void;
    static nwidth(paramarg0: number): number;
    static nwidth(paramarg0: number, paramarg1: number): void;
    static nx(paramarg0: number): number;
    static nx(paramarg0: number, paramarg1: number): void;
    static ny(paramarg0: number): number;
    static ny(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkViewport;
    height(): number;
    height(arg0: number): VkViewport;
    maxDepth(): number;
    maxDepth(arg0: number): VkViewport;
    minDepth(): number;
    minDepth(arg0: number): VkViewport;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkViewport;
    set(arg0: VkViewport): VkViewport;
    sizeof(): number;
    width(): number;
    width(arg0: number): VkViewport;
    x(): number;
    x(arg0: number): VkViewport;
    y(): number;
    y(arg0: number): VkViewport;
}