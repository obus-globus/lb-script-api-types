import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkTensorMemoryBarrierARM extends Struct<VkTensorMemoryBarrierARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTACCESSMASK: number;
    static DSTQUEUEFAMILYINDEX: number;
    static DSTSTAGEMASK: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCACCESSMASK: number;
    static SRCQUEUEFAMILYINDEX: number;
    static SRCSTAGEMASK: number;
    static STYPE: number;
    static TENSOR: number;
    static calloc(): VkTensorMemoryBarrierARM;
    static calloc(paramarg0: MemoryStack): VkTensorMemoryBarrierARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkTensorMemoryBarrierARM;
    static create(paramarg0: number): VkTensorMemoryBarrierARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkTensorMemoryBarrierARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkTensorMemoryBarrierARM;
    static malloc(paramarg0: MemoryStack): VkTensorMemoryBarrierARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstAccessMask(paramarg0: number): number;
    static ndstAccessMask(paramarg0: number, paramarg1: number): void;
    static ndstQueueFamilyIndex(paramarg0: number): number;
    static ndstQueueFamilyIndex(paramarg0: number, paramarg1: number): void;
    static ndstStageMask(paramarg0: number): number;
    static ndstStageMask(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcAccessMask(paramarg0: number): number;
    static nsrcAccessMask(paramarg0: number, paramarg1: number): void;
    static nsrcQueueFamilyIndex(paramarg0: number): number;
    static nsrcQueueFamilyIndex(paramarg0: number, paramarg1: number): void;
    static nsrcStageMask(paramarg0: number): number;
    static nsrcStageMask(paramarg0: number, paramarg1: number): void;
    static ntensor(paramarg0: number): number;
    static ntensor(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkTensorMemoryBarrierARM;
    dstAccessMask(): number;
    dstAccessMask(arg0: number): VkTensorMemoryBarrierARM;
    dstQueueFamilyIndex(): number;
    dstQueueFamilyIndex(arg0: number): VkTensorMemoryBarrierARM;
    dstStageMask(): number;
    dstStageMask(arg0: number): VkTensorMemoryBarrierARM;
    pNext(): number;
    pNext(arg0: number): VkTensorMemoryBarrierARM;
    sType(): number;
    sType(arg0: number): VkTensorMemoryBarrierARM;
    sType$Default(): VkTensorMemoryBarrierARM;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): VkTensorMemoryBarrierARM;
    set(arg0: VkTensorMemoryBarrierARM): VkTensorMemoryBarrierARM;
    sizeof(): number;
    srcAccessMask(): number;
    srcAccessMask(arg0: number): VkTensorMemoryBarrierARM;
    srcQueueFamilyIndex(): number;
    srcQueueFamilyIndex(arg0: number): VkTensorMemoryBarrierARM;
    srcStageMask(): number;
    srcStageMask(arg0: number): VkTensorMemoryBarrierARM;
    tensor(): number;
    tensor(arg0: number): VkTensorMemoryBarrierARM;
}