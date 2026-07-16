import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkMutableDescriptorTypeCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkMutableDescriptorTypeCreateInfoEXT.d.ts'
export class VkMutableDescriptorTypeCreateInfoVALVE extends VkMutableDescriptorTypeCreateInfoEXT {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MUTABLEDESCRIPTORTYPELISTCOUNT: number;
    static PMUTABLEDESCRIPTORTYPELISTS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkMutableDescriptorTypeCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkMutableDescriptorTypeCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkMutableDescriptorTypeCreateInfoVALVE;
    static calloc(paramarg0: MemoryStack): VkMutableDescriptorTypeCreateInfoVALVE;
    static create(): VkMutableDescriptorTypeCreateInfoEXT;
    static create(paramarg0: number): VkMutableDescriptorTypeCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkMutableDescriptorTypeCreateInfoVALVE;
    static create(paramarg0: number): VkMutableDescriptorTypeCreateInfoVALVE;
    static createSafe(paramarg0: number): VkMutableDescriptorTypeCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMutableDescriptorTypeCreateInfoVALVE;
    static malloc(): VkMutableDescriptorTypeCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkMutableDescriptorTypeCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkMutableDescriptorTypeCreateInfoVALVE;
    static malloc(paramarg0: MemoryStack): VkMutableDescriptorTypeCreateInfoVALVE;
    static nmutableDescriptorTypeListCount(paramarg0: number): number;
    static nmutableDescriptorTypeListCount(paramarg0: number, paramarg1: number): void;
    static npMutableDescriptorTypeLists(paramarg0: number): (Object | null)[];
    static npMutableDescriptorTypeLists(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkMutableDescriptorTypeCreateInfoVALVE;
    pMutableDescriptorTypeLists(): (Object | null)[];
    pMutableDescriptorTypeLists(arg0: (Object | null)[]): VkMutableDescriptorTypeCreateInfoVALVE;
    pNext(): number;
    pNext(arg0: number): VkMutableDescriptorTypeCreateInfoVALVE;
    sType(): number;
    sType(arg0: number): VkMutableDescriptorTypeCreateInfoVALVE;
    sType$Default(): VkMutableDescriptorTypeCreateInfoVALVE;
    set(arg0: number, arg1: number, arg2: (Object | null)[]): VkMutableDescriptorTypeCreateInfoVALVE;
    set(arg0: VkMutableDescriptorTypeCreateInfoEXT): VkMutableDescriptorTypeCreateInfoEXT;
    set(arg0: VkMutableDescriptorTypeCreateInfoVALVE): VkMutableDescriptorTypeCreateInfoVALVE;
}