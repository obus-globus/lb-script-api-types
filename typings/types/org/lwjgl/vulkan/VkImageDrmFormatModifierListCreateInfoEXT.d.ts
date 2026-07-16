import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkImageDrmFormatModifierListCreateInfoEXT extends Struct<VkImageDrmFormatModifierListCreateInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DRMFORMATMODIFIERCOUNT: number;
    static PDRMFORMATMODIFIERS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkImageDrmFormatModifierListCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkImageDrmFormatModifierListCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageDrmFormatModifierListCreateInfoEXT;
    static create(paramarg0: number): VkImageDrmFormatModifierListCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageDrmFormatModifierListCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageDrmFormatModifierListCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkImageDrmFormatModifierListCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndrmFormatModifierCount(paramarg0: number): number;
    static ndrmFormatModifierCount(paramarg0: number, paramarg1: number): void;
    static npDrmFormatModifiers(paramarg0: number): LongBuffer;
    static npDrmFormatModifiers(paramarg0: number, paramarg1: LongBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImageDrmFormatModifierListCreateInfoEXT;
    drmFormatModifierCount(): number;
    pDrmFormatModifiers(): LongBuffer;
    pDrmFormatModifiers(arg0: LongBuffer): VkImageDrmFormatModifierListCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkImageDrmFormatModifierListCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkImageDrmFormatModifierListCreateInfoEXT;
    sType$Default(): VkImageDrmFormatModifierListCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: LongBuffer): VkImageDrmFormatModifierListCreateInfoEXT;
    set(arg0: VkImageDrmFormatModifierListCreateInfoEXT): VkImageDrmFormatModifierListCreateInfoEXT;
    sizeof(): number;
}