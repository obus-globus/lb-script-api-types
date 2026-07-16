import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
import type { VkOffset2D } from '../../../org/lwjgl/vulkan/VkOffset2D.d.ts'
export class VkRect2D extends Struct<VkRect2D> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXTENT: number;
    static OFFSET: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkRect2D;
    static calloc(paramarg0: MemoryStack): VkRect2D;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRect2D;
    static create(paramarg0: number): VkRect2D;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRect2D;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRect2D;
    static malloc(paramarg0: MemoryStack): VkRect2D;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nextent(paramarg0: number): VkExtent2D;
    static nextent(paramarg0: number, paramarg1: VkExtent2D): void;
    static noffset(paramarg0: number): VkOffset2D;
    static noffset(paramarg0: number, paramarg1: VkOffset2D): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkRect2D;
    extent(): VkExtent2D;
    extent(arg0: (param0: VkExtent2D) => void): VkRect2D;
    extent(arg0: VkExtent2D): VkRect2D;
    offset(): VkOffset2D;
    offset(arg0: (param0: VkOffset2D) => void): VkRect2D;
    offset(arg0: VkOffset2D): VkRect2D;
    set(arg0: VkOffset2D, arg1: VkExtent2D): VkRect2D;
    set(arg0: VkRect2D): VkRect2D;
    sizeof(): number;
}