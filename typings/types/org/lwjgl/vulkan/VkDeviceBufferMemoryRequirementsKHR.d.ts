import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBufferCreateInfo } from '../../../org/lwjgl/vulkan/VkBufferCreateInfo.d.ts'
import type { VkDeviceBufferMemoryRequirements } from '../../../org/lwjgl/vulkan/VkDeviceBufferMemoryRequirements.d.ts'
export class VkDeviceBufferMemoryRequirementsKHR extends VkDeviceBufferMemoryRequirements {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PCREATEINFO: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDeviceBufferMemoryRequirements;
    static calloc(paramarg0: MemoryStack): VkDeviceBufferMemoryRequirements;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkDeviceBufferMemoryRequirementsKHR;
    static calloc(paramarg0: MemoryStack): VkDeviceBufferMemoryRequirementsKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceBufferMemoryRequirements;
    static create(paramarg0: number): VkDeviceBufferMemoryRequirements;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkDeviceBufferMemoryRequirementsKHR;
    static create(paramarg0: number): VkDeviceBufferMemoryRequirementsKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceBufferMemoryRequirements;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceBufferMemoryRequirementsKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceBufferMemoryRequirements;
    static malloc(paramarg0: MemoryStack): VkDeviceBufferMemoryRequirements;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkDeviceBufferMemoryRequirementsKHR;
    static malloc(paramarg0: MemoryStack): VkDeviceBufferMemoryRequirementsKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npCreateInfo(paramarg0: number): VkBufferCreateInfo;
    static npCreateInfo(paramarg0: number, paramarg1: VkBufferCreateInfo): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkDeviceBufferMemoryRequirementsKHR;
    pCreateInfo(): VkBufferCreateInfo;
    pCreateInfo(arg0: VkBufferCreateInfo): VkDeviceBufferMemoryRequirementsKHR;
    pNext(): number;
    pNext(arg0: number): VkDeviceBufferMemoryRequirementsKHR;
    sType(): number;
    sType(arg0: number): VkDeviceBufferMemoryRequirementsKHR;
    sType$Default(): VkDeviceBufferMemoryRequirementsKHR;
    set(arg0: number, arg1: number, arg2: VkBufferCreateInfo): VkDeviceBufferMemoryRequirementsKHR;
    set(arg0: VkDeviceBufferMemoryRequirements): VkDeviceBufferMemoryRequirements;
    set(arg0: VkDeviceBufferMemoryRequirementsKHR): VkDeviceBufferMemoryRequirementsKHR;
}