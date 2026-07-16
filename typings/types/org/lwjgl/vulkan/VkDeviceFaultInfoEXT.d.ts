import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceFaultAddressInfoEXT } from '../../../org/lwjgl/vulkan/VkDeviceFaultAddressInfoEXT.d.ts'
import type { VkDeviceFaultVendorInfoEXT } from '../../../org/lwjgl/vulkan/VkDeviceFaultVendorInfoEXT.d.ts'
export class VkDeviceFaultInfoEXT extends Struct<VkDeviceFaultInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTION: number;
    static PADDRESSINFOS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PVENDORBINARYDATA: number;
    static PVENDORINFOS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDeviceFaultInfoEXT;
    static calloc(paramarg0: MemoryStack): VkDeviceFaultInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceFaultInfoEXT;
    static create(paramarg0: number): VkDeviceFaultInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceFaultInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceFaultInfoEXT;
    static malloc(paramarg0: MemoryStack): VkDeviceFaultInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndescription(paramarg0: number): ByteBuffer;
    static ndescriptionString(paramarg0: number): string;
    static npAddressInfos(paramarg0: number): VkDeviceFaultAddressInfoEXT;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npVendorBinaryData(paramarg0: number): number;
    static npVendorInfos(paramarg0: number): VkDeviceFaultVendorInfoEXT;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDeviceFaultInfoEXT;
    description(): ByteBuffer;
    descriptionString(): string;
    pAddressInfos(): VkDeviceFaultAddressInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkDeviceFaultInfoEXT;
    pVendorBinaryData(): number;
    pVendorInfos(): VkDeviceFaultVendorInfoEXT;
    sType(): number;
    sType(arg0: number): VkDeviceFaultInfoEXT;
    sType$Default(): VkDeviceFaultInfoEXT;
    set(arg0: number, arg1: number): VkDeviceFaultInfoEXT;
    set(arg0: VkDeviceFaultInfoEXT): VkDeviceFaultInfoEXT;
    sizeof(): number;
}