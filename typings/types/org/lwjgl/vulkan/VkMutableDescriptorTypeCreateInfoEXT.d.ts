import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkMutableDescriptorTypeCreateInfoEXT extends Struct<VkMutableDescriptorTypeCreateInfoEXT> implements NativeResource {
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
    static create(): VkMutableDescriptorTypeCreateInfoEXT;
    static create(paramarg0: number): VkMutableDescriptorTypeCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMutableDescriptorTypeCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMutableDescriptorTypeCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkMutableDescriptorTypeCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
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
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkMutableDescriptorTypeCreateInfoEXT;
    mutableDescriptorTypeListCount(): number;
    pMutableDescriptorTypeLists(): (Object | null)[];
    pMutableDescriptorTypeLists(arg0: (Object | null)[]): VkMutableDescriptorTypeCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkMutableDescriptorTypeCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkMutableDescriptorTypeCreateInfoEXT;
    sType$Default(): VkMutableDescriptorTypeCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: (Object | null)[]): VkMutableDescriptorTypeCreateInfoEXT;
    set(arg0: VkMutableDescriptorTypeCreateInfoEXT): VkMutableDescriptorTypeCreateInfoEXT;
    sizeof(): number;
}