import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkClearColorValue } from '../../../org/lwjgl/vulkan/VkClearColorValue.d.ts'
import type { VkClearDepthStencilValue } from '../../../org/lwjgl/vulkan/VkClearDepthStencilValue.d.ts'
export class VkClearValue extends Struct<VkClearValue> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLOR: number;
    static DEPTHSTENCIL: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkClearValue;
    static calloc(paramarg0: MemoryStack): VkClearValue;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkClearValue;
    static create(paramarg0: number): VkClearValue;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkClearValue;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkClearValue;
    static malloc(paramarg0: MemoryStack): VkClearValue;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncolor(paramarg0: number): VkClearColorValue;
    static ncolor(paramarg0: number, paramarg1: VkClearColorValue): void;
    static ndepthStencil(paramarg0: number): VkClearDepthStencilValue;
    static ndepthStencil(paramarg0: number, paramarg1: VkClearDepthStencilValue): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    color(): VkClearColorValue;
    color(arg0: (param0: VkClearColorValue) => void): VkClearValue;
    color(arg0: VkClearColorValue): VkClearValue;
    create(arg0: number, arg1: ByteBuffer): VkClearValue;
    depthStencil(): VkClearDepthStencilValue;
    depthStencil(arg0: (param0: VkClearDepthStencilValue) => void): VkClearValue;
    depthStencil(arg0: VkClearDepthStencilValue): VkClearValue;
    set(arg0: VkClearValue): VkClearValue;
    sizeof(): number;
}