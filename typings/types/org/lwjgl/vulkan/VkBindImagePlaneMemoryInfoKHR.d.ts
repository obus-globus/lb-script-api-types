import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBindImagePlaneMemoryInfo } from '../../../org/lwjgl/vulkan/VkBindImagePlaneMemoryInfo.d.ts'
export class VkBindImagePlaneMemoryInfoKHR extends VkBindImagePlaneMemoryInfo {
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
    static calloc(): VkBindImagePlaneMemoryInfo;
    static calloc(paramarg0: MemoryStack): VkBindImagePlaneMemoryInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkBindImagePlaneMemoryInfoKHR;
    static calloc(paramarg0: MemoryStack): VkBindImagePlaneMemoryInfoKHR;
    static create(): VkBindImagePlaneMemoryInfo;
    static create(paramarg0: number): VkBindImagePlaneMemoryInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkBindImagePlaneMemoryInfoKHR;
    static create(paramarg0: number): VkBindImagePlaneMemoryInfoKHR;
    static createSafe(paramarg0: number): VkBindImagePlaneMemoryInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBindImagePlaneMemoryInfoKHR;
    static malloc(): VkBindImagePlaneMemoryInfo;
    static malloc(paramarg0: MemoryStack): VkBindImagePlaneMemoryInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkBindImagePlaneMemoryInfoKHR;
    static malloc(paramarg0: MemoryStack): VkBindImagePlaneMemoryInfoKHR;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nplaneAspect(paramarg0: number): number;
    static nplaneAspect(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkBindImagePlaneMemoryInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkBindImagePlaneMemoryInfoKHR;
    planeAspect(): number;
    planeAspect(arg0: number): VkBindImagePlaneMemoryInfoKHR;
    sType(): number;
    sType(arg0: number): VkBindImagePlaneMemoryInfoKHR;
    sType$Default(): VkBindImagePlaneMemoryInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkBindImagePlaneMemoryInfoKHR;
    set(arg0: VkBindImagePlaneMemoryInfo): VkBindImagePlaneMemoryInfo;
    set(arg0: VkBindImagePlaneMemoryInfoKHR): VkBindImagePlaneMemoryInfoKHR;
}