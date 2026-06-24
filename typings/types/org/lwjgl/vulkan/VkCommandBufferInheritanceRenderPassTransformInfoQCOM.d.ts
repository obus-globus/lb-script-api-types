import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkRect2D } from '../../../org/lwjgl/vulkan/VkRect2D.d.ts'
export class VkCommandBufferInheritanceRenderPassTransformInfoQCOM extends Struct<VkCommandBufferInheritanceRenderPassTransformInfoQCOM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RENDERAREA: number;
    static SIZEOF: number;
    static STYPE: number;
    static TRANSFORM: number;
    static calloc(): VkCommandBufferInheritanceRenderPassTransformInfoQCOM;
    static calloc(paramarg0: MemoryStack): VkCommandBufferInheritanceRenderPassTransformInfoQCOM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCommandBufferInheritanceRenderPassTransformInfoQCOM;
    static create(paramarg0: number): VkCommandBufferInheritanceRenderPassTransformInfoQCOM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCommandBufferInheritanceRenderPassTransformInfoQCOM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCommandBufferInheritanceRenderPassTransformInfoQCOM;
    static malloc(paramarg0: MemoryStack): VkCommandBufferInheritanceRenderPassTransformInfoQCOM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrenderArea(paramarg0: number): VkRect2D;
    static nrenderArea(paramarg0: number, paramarg1: VkRect2D): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntransform(paramarg0: number): number;
    static ntransform(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCommandBufferInheritanceRenderPassTransformInfoQCOM;
    pNext(): number;
    pNext(arg0: number): VkCommandBufferInheritanceRenderPassTransformInfoQCOM;
    renderArea(): VkRect2D;
    renderArea(arg0: (param0: VkRect2D) => void): VkCommandBufferInheritanceRenderPassTransformInfoQCOM;
    renderArea(arg0: VkRect2D): VkCommandBufferInheritanceRenderPassTransformInfoQCOM;
    sType(): number;
    sType(arg0: number): VkCommandBufferInheritanceRenderPassTransformInfoQCOM;
    sType$Default(): VkCommandBufferInheritanceRenderPassTransformInfoQCOM;
    set(arg0: number, arg1: number, arg2: number, arg3: VkRect2D): VkCommandBufferInheritanceRenderPassTransformInfoQCOM;
    set(arg0: VkCommandBufferInheritanceRenderPassTransformInfoQCOM): VkCommandBufferInheritanceRenderPassTransformInfoQCOM;
    sizeof(): number;
    transform(): number;
    transform(arg0: number): VkCommandBufferInheritanceRenderPassTransformInfoQCOM;
}