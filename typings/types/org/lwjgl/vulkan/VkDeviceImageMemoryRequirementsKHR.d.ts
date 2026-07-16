import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceImageMemoryRequirements } from '../../../org/lwjgl/vulkan/VkDeviceImageMemoryRequirements.d.ts'
import type { VkImageCreateInfo } from '../../../org/lwjgl/vulkan/VkImageCreateInfo.d.ts'
export class VkDeviceImageMemoryRequirementsKHR extends VkDeviceImageMemoryRequirements {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PCREATEINFO: number;
    static PLANEASPECT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDeviceImageMemoryRequirements;
    static calloc(paramarg0: MemoryStack): VkDeviceImageMemoryRequirements;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkDeviceImageMemoryRequirementsKHR;
    static calloc(paramarg0: MemoryStack): VkDeviceImageMemoryRequirementsKHR;
    static create(): VkDeviceImageMemoryRequirements;
    static create(paramarg0: number): VkDeviceImageMemoryRequirements;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkDeviceImageMemoryRequirementsKHR;
    static create(paramarg0: number): VkDeviceImageMemoryRequirementsKHR;
    static createSafe(paramarg0: number): VkDeviceImageMemoryRequirements;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceImageMemoryRequirementsKHR;
    static malloc(): VkDeviceImageMemoryRequirements;
    static malloc(paramarg0: MemoryStack): VkDeviceImageMemoryRequirements;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkDeviceImageMemoryRequirementsKHR;
    static malloc(paramarg0: MemoryStack): VkDeviceImageMemoryRequirementsKHR;
    static npCreateInfo(paramarg0: number): VkImageCreateInfo;
    static npCreateInfo(paramarg0: number, paramarg1: VkImageCreateInfo): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nplaneAspect(paramarg0: number): number;
    static nplaneAspect(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkDeviceImageMemoryRequirementsKHR;
    pCreateInfo(): VkImageCreateInfo;
    pCreateInfo(arg0: VkImageCreateInfo): VkDeviceImageMemoryRequirementsKHR;
    pNext(): number;
    pNext(arg0: number): VkDeviceImageMemoryRequirementsKHR;
    planeAspect(): number;
    planeAspect(arg0: number): VkDeviceImageMemoryRequirementsKHR;
    sType(): number;
    sType(arg0: number): VkDeviceImageMemoryRequirementsKHR;
    sType$Default(): VkDeviceImageMemoryRequirementsKHR;
    set(arg0: number, arg1: number, arg2: VkImageCreateInfo, arg3: number): VkDeviceImageMemoryRequirementsKHR;
    set(arg0: VkDeviceImageMemoryRequirements): VkDeviceImageMemoryRequirements;
    set(arg0: VkDeviceImageMemoryRequirementsKHR): VkDeviceImageMemoryRequirementsKHR;
}