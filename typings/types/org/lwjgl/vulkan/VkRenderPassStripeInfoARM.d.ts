import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkRect2D } from '../../../org/lwjgl/vulkan/VkRect2D.d.ts'
export class VkRenderPassStripeInfoARM extends Struct<VkRenderPassStripeInfoARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STRIPEAREA: number;
    static STYPE: number;
    static calloc(): VkRenderPassStripeInfoARM;
    static calloc(paramarg0: MemoryStack): VkRenderPassStripeInfoARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRenderPassStripeInfoARM;
    static create(paramarg0: number): VkRenderPassStripeInfoARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderPassStripeInfoARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRenderPassStripeInfoARM;
    static malloc(paramarg0: MemoryStack): VkRenderPassStripeInfoARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstripeArea(paramarg0: number): VkRect2D;
    static nstripeArea(paramarg0: number, paramarg1: VkRect2D): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkRenderPassStripeInfoARM;
    pNext(): number;
    pNext(arg0: number): VkRenderPassStripeInfoARM;
    sType(): number;
    sType(arg0: number): VkRenderPassStripeInfoARM;
    sType$Default(): VkRenderPassStripeInfoARM;
    set(arg0: number, arg1: number, arg2: VkRect2D): VkRenderPassStripeInfoARM;
    set(arg0: VkRenderPassStripeInfoARM): VkRenderPassStripeInfoARM;
    sizeof(): number;
    stripeArea(): VkRect2D;
    stripeArea(arg0: (param0: VkRect2D) => void): VkRenderPassStripeInfoARM;
    stripeArea(arg0: VkRect2D): VkRenderPassStripeInfoARM;
}