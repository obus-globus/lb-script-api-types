import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkViewport } from '../../../org/lwjgl/vulkan/VkViewport.d.ts'
export class VkCommandBufferInheritanceViewportScissorInfoNV extends Struct<VkCommandBufferInheritanceViewportScissorInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PVIEWPORTDEPTHS: number;
    static SIZEOF: number;
    static STYPE: number;
    static VIEWPORTDEPTHCOUNT: number;
    static VIEWPORTSCISSOR2D: number;
    static calloc(): VkCommandBufferInheritanceViewportScissorInfoNV;
    static calloc(paramarg0: MemoryStack): VkCommandBufferInheritanceViewportScissorInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCommandBufferInheritanceViewportScissorInfoNV;
    static create(paramarg0: number): VkCommandBufferInheritanceViewportScissorInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCommandBufferInheritanceViewportScissorInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCommandBufferInheritanceViewportScissorInfoNV;
    static malloc(paramarg0: MemoryStack): VkCommandBufferInheritanceViewportScissorInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npViewportDepths(paramarg0: number): VkViewport;
    static npViewportDepths(paramarg0: number, paramarg1: VkViewport): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nviewportDepthCount(paramarg0: number): number;
    static nviewportDepthCount(paramarg0: number, paramarg1: number): void;
    static nviewportScissor2D(paramarg0: number): number;
    static nviewportScissor2D(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCommandBufferInheritanceViewportScissorInfoNV;
    pNext(): number;
    pNext(arg0: number): VkCommandBufferInheritanceViewportScissorInfoNV;
    pViewportDepths(): VkViewport;
    pViewportDepths(arg0: VkViewport): VkCommandBufferInheritanceViewportScissorInfoNV;
    sType(): number;
    sType(arg0: number): VkCommandBufferInheritanceViewportScissorInfoNV;
    sType$Default(): VkCommandBufferInheritanceViewportScissorInfoNV;
    set(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: VkViewport): VkCommandBufferInheritanceViewportScissorInfoNV;
    set(arg0: VkCommandBufferInheritanceViewportScissorInfoNV): VkCommandBufferInheritanceViewportScissorInfoNV;
    sizeof(): number;
    viewportDepthCount(): number;
    viewportDepthCount(arg0: number): VkCommandBufferInheritanceViewportScissorInfoNV;
    viewportScissor2D(): boolean;
    viewportScissor2D(arg0: boolean): VkCommandBufferInheritanceViewportScissorInfoNV;
}