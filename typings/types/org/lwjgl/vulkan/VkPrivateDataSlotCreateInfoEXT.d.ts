import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPrivateDataSlotCreateInfo } from '../../../org/lwjgl/vulkan/VkPrivateDataSlotCreateInfo.d.ts'
export class VkPrivateDataSlotCreateInfoEXT extends VkPrivateDataSlotCreateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPrivateDataSlotCreateInfo;
    static calloc(paramarg0: MemoryStack): VkPrivateDataSlotCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPrivateDataSlotCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkPrivateDataSlotCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPrivateDataSlotCreateInfo;
    static create(paramarg0: number): VkPrivateDataSlotCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPrivateDataSlotCreateInfoEXT;
    static create(paramarg0: number): VkPrivateDataSlotCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPrivateDataSlotCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPrivateDataSlotCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPrivateDataSlotCreateInfo;
    static malloc(paramarg0: MemoryStack): VkPrivateDataSlotCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPrivateDataSlotCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkPrivateDataSlotCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPrivateDataSlotCreateInfoEXT;
    flags(): number;
    flags(arg0: number): VkPrivateDataSlotCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkPrivateDataSlotCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkPrivateDataSlotCreateInfoEXT;
    sType$Default(): VkPrivateDataSlotCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number): VkPrivateDataSlotCreateInfoEXT;
    set(arg0: VkPrivateDataSlotCreateInfo): VkPrivateDataSlotCreateInfo;
    set(arg0: VkPrivateDataSlotCreateInfoEXT): VkPrivateDataSlotCreateInfoEXT;
}