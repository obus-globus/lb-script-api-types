import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkCopyDescriptorSet extends Struct<VkCopyDescriptorSet> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTORCOUNT: number;
    static DSTARRAYELEMENT: number;
    static DSTBINDING: number;
    static DSTSET: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCARRAYELEMENT: number;
    static SRCBINDING: number;
    static SRCSET: number;
    static STYPE: number;
    static calloc(): VkCopyDescriptorSet;
    static calloc(paramarg0: MemoryStack): VkCopyDescriptorSet;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCopyDescriptorSet;
    static create(paramarg0: number): VkCopyDescriptorSet;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyDescriptorSet;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCopyDescriptorSet;
    static malloc(paramarg0: MemoryStack): VkCopyDescriptorSet;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndescriptorCount(paramarg0: number): number;
    static ndescriptorCount(paramarg0: number, paramarg1: number): void;
    static ndstArrayElement(paramarg0: number): number;
    static ndstArrayElement(paramarg0: number, paramarg1: number): void;
    static ndstBinding(paramarg0: number): number;
    static ndstBinding(paramarg0: number, paramarg1: number): void;
    static ndstSet(paramarg0: number): number;
    static ndstSet(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcArrayElement(paramarg0: number): number;
    static nsrcArrayElement(paramarg0: number, paramarg1: number): void;
    static nsrcBinding(paramarg0: number): number;
    static nsrcBinding(paramarg0: number, paramarg1: number): void;
    static nsrcSet(paramarg0: number): number;
    static nsrcSet(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCopyDescriptorSet;
    descriptorCount(): number;
    descriptorCount(arg0: number): VkCopyDescriptorSet;
    dstArrayElement(): number;
    dstArrayElement(arg0: number): VkCopyDescriptorSet;
    dstBinding(): number;
    dstBinding(arg0: number): VkCopyDescriptorSet;
    dstSet(): number;
    dstSet(arg0: number): VkCopyDescriptorSet;
    pNext(): number;
    pNext(arg0: number): VkCopyDescriptorSet;
    sType(): number;
    sType(arg0: number): VkCopyDescriptorSet;
    sType$Default(): VkCopyDescriptorSet;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): VkCopyDescriptorSet;
    set(arg0: VkCopyDescriptorSet): VkCopyDescriptorSet;
    sizeof(): number;
    srcArrayElement(): number;
    srcArrayElement(arg0: number): VkCopyDescriptorSet;
    srcBinding(): number;
    srcBinding(arg0: number): VkCopyDescriptorSet;
    srcSet(): number;
    srcSet(arg0: number): VkCopyDescriptorSet;
}