import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkRenderPassStripeSubmitInfoARM extends Struct<VkRenderPassStripeSubmitInfoARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTRIPESEMAPHOREINFOS: number;
    static SIZEOF: number;
    static STRIPESEMAPHOREINFOCOUNT: number;
    static STYPE: number;
    static calloc(): VkRenderPassStripeSubmitInfoARM;
    static calloc(paramarg0: MemoryStack): VkRenderPassStripeSubmitInfoARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRenderPassStripeSubmitInfoARM;
    static create(paramarg0: number): VkRenderPassStripeSubmitInfoARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderPassStripeSubmitInfoARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRenderPassStripeSubmitInfoARM;
    static malloc(paramarg0: MemoryStack): VkRenderPassStripeSubmitInfoARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStripeSemaphoreInfos(paramarg0: number): (Object | null)[];
    static npStripeSemaphoreInfos(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstripeSemaphoreInfoCount(paramarg0: number): number;
    static nstripeSemaphoreInfoCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkRenderPassStripeSubmitInfoARM;
    pNext(): number;
    pNext(arg0: number): VkRenderPassStripeSubmitInfoARM;
    pStripeSemaphoreInfos(): (Object | null)[];
    pStripeSemaphoreInfos(arg0: (Object | null)[]): VkRenderPassStripeSubmitInfoARM;
    sType(): number;
    sType(arg0: number): VkRenderPassStripeSubmitInfoARM;
    sType$Default(): VkRenderPassStripeSubmitInfoARM;
    set(arg0: number, arg1: number, arg2: (Object | null)[]): VkRenderPassStripeSubmitInfoARM;
    set(arg0: VkRenderPassStripeSubmitInfoARM): VkRenderPassStripeSubmitInfoARM;
    sizeof(): number;
    stripeSemaphoreInfoCount(): number;
}