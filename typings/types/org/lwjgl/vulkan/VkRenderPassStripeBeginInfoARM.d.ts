import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkRenderPassStripeBeginInfoARM extends Struct<VkRenderPassStripeBeginInfoARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTRIPEINFOS: number;
    static SIZEOF: number;
    static STRIPEINFOCOUNT: number;
    static STYPE: number;
    static calloc(): VkRenderPassStripeBeginInfoARM;
    static calloc(paramarg0: MemoryStack): VkRenderPassStripeBeginInfoARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRenderPassStripeBeginInfoARM;
    static create(paramarg0: number): VkRenderPassStripeBeginInfoARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderPassStripeBeginInfoARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRenderPassStripeBeginInfoARM;
    static malloc(paramarg0: MemoryStack): VkRenderPassStripeBeginInfoARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStripeInfos(paramarg0: number): (Object | null)[];
    static npStripeInfos(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstripeInfoCount(paramarg0: number): number;
    static nstripeInfoCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkRenderPassStripeBeginInfoARM;
    pNext(): number;
    pNext(arg0: number): VkRenderPassStripeBeginInfoARM;
    pStripeInfos(): (Object | null)[];
    pStripeInfos(arg0: (Object | null)[]): VkRenderPassStripeBeginInfoARM;
    sType(): number;
    sType(arg0: number): VkRenderPassStripeBeginInfoARM;
    sType$Default(): VkRenderPassStripeBeginInfoARM;
    set(arg0: number, arg1: number, arg2: (Object | null)[]): VkRenderPassStripeBeginInfoARM;
    set(arg0: VkRenderPassStripeBeginInfoARM): VkRenderPassStripeBeginInfoARM;
    sizeof(): number;
    stripeInfoCount(): number;
}