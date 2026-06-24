import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDeviceFaultCountsEXT extends Struct<VkDeviceFaultCountsEXT> implements NativeResource {
    static ADDRESSINFOCOUNT: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static VENDORBINARYSIZE: number;
    static VENDORINFOCOUNT: number;
    static calloc(): VkDeviceFaultCountsEXT;
    static calloc(paramarg0: MemoryStack): VkDeviceFaultCountsEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceFaultCountsEXT;
    static create(paramarg0: number): VkDeviceFaultCountsEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceFaultCountsEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceFaultCountsEXT;
    static malloc(paramarg0: MemoryStack): VkDeviceFaultCountsEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naddressInfoCount(paramarg0: number): number;
    static naddressInfoCount(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nvendorBinarySize(paramarg0: number): number;
    static nvendorBinarySize(paramarg0: number, paramarg1: number): void;
    static nvendorInfoCount(paramarg0: number): number;
    static nvendorInfoCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    addressInfoCount(): number;
    addressInfoCount(arg0: number): VkDeviceFaultCountsEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDeviceFaultCountsEXT;
    pNext(): number;
    pNext(arg0: number): VkDeviceFaultCountsEXT;
    sType(): number;
    sType(arg0: number): VkDeviceFaultCountsEXT;
    sType$Default(): VkDeviceFaultCountsEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkDeviceFaultCountsEXT;
    set(arg0: VkDeviceFaultCountsEXT): VkDeviceFaultCountsEXT;
    sizeof(): number;
    vendorBinarySize(): number;
    vendorBinarySize(arg0: number): VkDeviceFaultCountsEXT;
    vendorInfoCount(): number;
    vendorInfoCount(arg0: number): VkDeviceFaultCountsEXT;
}