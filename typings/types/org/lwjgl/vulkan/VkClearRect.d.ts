import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkRect2D } from '../../../org/lwjgl/vulkan/VkRect2D.d.ts'
export class VkClearRect extends Struct<VkClearRect> implements NativeResource {
    static ALIGNOF: number;
    static BASEARRAYLAYER: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LAYERCOUNT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RECT: number;
    static SIZEOF: number;
    static calloc(): VkClearRect;
    static calloc(paramarg0: MemoryStack): VkClearRect;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkClearRect;
    static create(paramarg0: number): VkClearRect;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkClearRect;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkClearRect;
    static malloc(paramarg0: MemoryStack): VkClearRect;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbaseArrayLayer(paramarg0: number): number;
    static nbaseArrayLayer(paramarg0: number, paramarg1: number): void;
    static nlayerCount(paramarg0: number): number;
    static nlayerCount(paramarg0: number, paramarg1: number): void;
    static nrect(paramarg0: number): VkRect2D;
    static nrect(paramarg0: number, paramarg1: VkRect2D): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    baseArrayLayer(): number;
    baseArrayLayer(arg0: number): VkClearRect;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkClearRect;
    layerCount(): number;
    layerCount(arg0: number): VkClearRect;
    rect(): VkRect2D;
    rect(arg0: (param0: VkRect2D) => void): VkClearRect;
    rect(arg0: VkRect2D): VkClearRect;
    set(arg0: VkClearRect): VkClearRect;
    set(arg0: VkRect2D, arg1: number, arg2: number): VkClearRect;
    sizeof(): number;
}