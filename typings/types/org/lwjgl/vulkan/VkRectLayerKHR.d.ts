import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
import type { VkOffset2D } from '../../../org/lwjgl/vulkan/VkOffset2D.d.ts'
export class VkRectLayerKHR extends Struct<VkRectLayerKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXTENT: number;
    static LAYER: number;
    static OFFSET: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkRectLayerKHR;
    static calloc(paramarg0: MemoryStack): VkRectLayerKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRectLayerKHR;
    static create(paramarg0: number): VkRectLayerKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRectLayerKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRectLayerKHR;
    static malloc(paramarg0: MemoryStack): VkRectLayerKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nextent(paramarg0: number): VkExtent2D;
    static nextent(paramarg0: number, paramarg1: VkExtent2D): void;
    static nlayer(paramarg0: number): number;
    static nlayer(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): VkOffset2D;
    static noffset(paramarg0: number, paramarg1: VkOffset2D): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkRectLayerKHR;
    extent(): VkExtent2D;
    extent(arg0: (param0: VkExtent2D) => void): VkRectLayerKHR;
    extent(arg0: VkExtent2D): VkRectLayerKHR;
    layer(): number;
    layer(arg0: number): VkRectLayerKHR;
    offset(): VkOffset2D;
    offset(arg0: (param0: VkOffset2D) => void): VkRectLayerKHR;
    offset(arg0: VkOffset2D): VkRectLayerKHR;
    set(arg0: VkOffset2D, arg1: VkExtent2D, arg2: number): VkRectLayerKHR;
    set(arg0: VkRectLayerKHR): VkRectLayerKHR;
    sizeof(): number;
}