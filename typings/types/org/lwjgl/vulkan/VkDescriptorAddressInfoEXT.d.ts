import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDescriptorAddressInfoEXT extends Struct<VkDescriptorAddressInfoEXT> implements NativeResource {
    static ADDRESS: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FORMAT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RANGE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDescriptorAddressInfoEXT;
    static calloc(paramarg0: MemoryStack): VkDescriptorAddressInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorAddressInfoEXT;
    static create(paramarg0: number): VkDescriptorAddressInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorAddressInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorAddressInfoEXT;
    static malloc(paramarg0: MemoryStack): VkDescriptorAddressInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naddress$(paramarg0: number): number;
    static naddress$(paramarg0: number, paramarg1: number): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrange(paramarg0: number): number;
    static nrange(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    address$(): number;
    address$(arg0: number): VkDescriptorAddressInfoEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorAddressInfoEXT;
    format(): number;
    format(arg0: number): VkDescriptorAddressInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkDescriptorAddressInfoEXT;
    range(): number;
    range(arg0: number): VkDescriptorAddressInfoEXT;
    sType(): number;
    sType(arg0: number): VkDescriptorAddressInfoEXT;
    sType$Default(): VkDescriptorAddressInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkDescriptorAddressInfoEXT;
    set(arg0: VkDescriptorAddressInfoEXT): VkDescriptorAddressInfoEXT;
    sizeof(): number;
}