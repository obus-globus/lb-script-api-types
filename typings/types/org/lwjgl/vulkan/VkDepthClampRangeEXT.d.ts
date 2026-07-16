import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDepthClampRangeEXT extends Struct<VkDepthClampRangeEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXDEPTHCLAMP: number;
    static MINDEPTHCLAMP: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkDepthClampRangeEXT;
    static calloc(paramarg0: MemoryStack): VkDepthClampRangeEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDepthClampRangeEXT;
    static create(paramarg0: number): VkDepthClampRangeEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDepthClampRangeEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDepthClampRangeEXT;
    static malloc(paramarg0: MemoryStack): VkDepthClampRangeEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxDepthClamp(paramarg0: number): number;
    static nmaxDepthClamp(paramarg0: number, paramarg1: number): void;
    static nminDepthClamp(paramarg0: number): number;
    static nminDepthClamp(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDepthClampRangeEXT;
    maxDepthClamp(): number;
    maxDepthClamp(arg0: number): VkDepthClampRangeEXT;
    minDepthClamp(): number;
    minDepthClamp(arg0: number): VkDepthClampRangeEXT;
    set(arg0: number, arg1: number): VkDepthClampRangeEXT;
    set(arg0: VkDepthClampRangeEXT): VkDepthClampRangeEXT;
    sizeof(): number;
}