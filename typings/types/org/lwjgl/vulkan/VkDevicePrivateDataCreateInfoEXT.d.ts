import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDevicePrivateDataCreateInfo } from '../../../org/lwjgl/vulkan/VkDevicePrivateDataCreateInfo.d.ts'
export class VkDevicePrivateDataCreateInfoEXT extends VkDevicePrivateDataCreateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRIVATEDATASLOTREQUESTCOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDevicePrivateDataCreateInfo;
    static calloc(paramarg0: MemoryStack): VkDevicePrivateDataCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkDevicePrivateDataCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkDevicePrivateDataCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDevicePrivateDataCreateInfo;
    static create(paramarg0: number): VkDevicePrivateDataCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkDevicePrivateDataCreateInfoEXT;
    static create(paramarg0: number): VkDevicePrivateDataCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDevicePrivateDataCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDevicePrivateDataCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDevicePrivateDataCreateInfo;
    static malloc(paramarg0: MemoryStack): VkDevicePrivateDataCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkDevicePrivateDataCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkDevicePrivateDataCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nprivateDataSlotRequestCount(paramarg0: number): number;
    static nprivateDataSlotRequestCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkDevicePrivateDataCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkDevicePrivateDataCreateInfoEXT;
    privateDataSlotRequestCount(): number;
    privateDataSlotRequestCount(arg0: number): VkDevicePrivateDataCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkDevicePrivateDataCreateInfoEXT;
    sType$Default(): VkDevicePrivateDataCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number): VkDevicePrivateDataCreateInfoEXT;
    set(arg0: VkDevicePrivateDataCreateInfo): VkDevicePrivateDataCreateInfo;
    set(arg0: VkDevicePrivateDataCreateInfoEXT): VkDevicePrivateDataCreateInfoEXT;
}