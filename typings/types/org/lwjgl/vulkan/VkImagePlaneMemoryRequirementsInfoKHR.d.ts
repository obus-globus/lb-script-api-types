import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkImagePlaneMemoryRequirementsInfo } from '../../../org/lwjgl/vulkan/VkImagePlaneMemoryRequirementsInfo.d.ts'
export class VkImagePlaneMemoryRequirementsInfoKHR extends VkImagePlaneMemoryRequirementsInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PLANEASPECT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkImagePlaneMemoryRequirementsInfo;
    static calloc(paramarg0: MemoryStack): VkImagePlaneMemoryRequirementsInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkImagePlaneMemoryRequirementsInfoKHR;
    static calloc(paramarg0: MemoryStack): VkImagePlaneMemoryRequirementsInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImagePlaneMemoryRequirementsInfo;
    static create(paramarg0: number): VkImagePlaneMemoryRequirementsInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkImagePlaneMemoryRequirementsInfoKHR;
    static create(paramarg0: number): VkImagePlaneMemoryRequirementsInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImagePlaneMemoryRequirementsInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImagePlaneMemoryRequirementsInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImagePlaneMemoryRequirementsInfo;
    static malloc(paramarg0: MemoryStack): VkImagePlaneMemoryRequirementsInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkImagePlaneMemoryRequirementsInfoKHR;
    static malloc(paramarg0: MemoryStack): VkImagePlaneMemoryRequirementsInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nplaneAspect(paramarg0: number): number;
    static nplaneAspect(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkImagePlaneMemoryRequirementsInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkImagePlaneMemoryRequirementsInfoKHR;
    planeAspect(): number;
    planeAspect(arg0: number): VkImagePlaneMemoryRequirementsInfoKHR;
    sType(): number;
    sType(arg0: number): VkImagePlaneMemoryRequirementsInfoKHR;
    sType$Default(): VkImagePlaneMemoryRequirementsInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkImagePlaneMemoryRequirementsInfoKHR;
    set(arg0: VkImagePlaneMemoryRequirementsInfo): VkImagePlaneMemoryRequirementsInfo;
    set(arg0: VkImagePlaneMemoryRequirementsInfoKHR): VkImagePlaneMemoryRequirementsInfoKHR;
}