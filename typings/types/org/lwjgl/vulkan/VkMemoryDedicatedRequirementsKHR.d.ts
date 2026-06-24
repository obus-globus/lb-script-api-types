import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkMemoryDedicatedRequirements } from '../../../org/lwjgl/vulkan/VkMemoryDedicatedRequirements.d.ts'
export class VkMemoryDedicatedRequirementsKHR extends VkMemoryDedicatedRequirements {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREFERSDEDICATEDALLOCATION: number;
    static REQUIRESDEDICATEDALLOCATION: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkMemoryDedicatedRequirements;
    static calloc(paramarg0: MemoryStack): VkMemoryDedicatedRequirements;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkMemoryDedicatedRequirementsKHR;
    static calloc(paramarg0: MemoryStack): VkMemoryDedicatedRequirementsKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkMemoryDedicatedRequirements;
    static create(paramarg0: number): VkMemoryDedicatedRequirements;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkMemoryDedicatedRequirementsKHR;
    static create(paramarg0: number): VkMemoryDedicatedRequirementsKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMemoryDedicatedRequirements;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMemoryDedicatedRequirementsKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMemoryDedicatedRequirements;
    static malloc(paramarg0: MemoryStack): VkMemoryDedicatedRequirements;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkMemoryDedicatedRequirementsKHR;
    static malloc(paramarg0: MemoryStack): VkMemoryDedicatedRequirementsKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nprefersDedicatedAllocation(paramarg0: number): number;
    static nrequiresDedicatedAllocation(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkMemoryDedicatedRequirementsKHR;
    pNext(): number;
    pNext(arg0: number): VkMemoryDedicatedRequirementsKHR;
    sType(): number;
    sType(arg0: number): VkMemoryDedicatedRequirementsKHR;
    sType$Default(): VkMemoryDedicatedRequirementsKHR;
    set(arg0: number, arg1: number): VkMemoryDedicatedRequirementsKHR;
    set(arg0: VkMemoryDedicatedRequirements): VkMemoryDedicatedRequirements;
    set(arg0: VkMemoryDedicatedRequirementsKHR): VkMemoryDedicatedRequirementsKHR;
}