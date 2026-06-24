import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkReleaseSwapchainImagesInfoKHR extends Struct<VkReleaseSwapchainImagesInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGEINDEXCOUNT: number;
    static PIMAGEINDICES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SWAPCHAIN: number;
    static calloc(): VkReleaseSwapchainImagesInfoKHR;
    static calloc(paramarg0: MemoryStack): VkReleaseSwapchainImagesInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkReleaseSwapchainImagesInfoKHR;
    static create(paramarg0: number): VkReleaseSwapchainImagesInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkReleaseSwapchainImagesInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkReleaseSwapchainImagesInfoKHR;
    static malloc(paramarg0: MemoryStack): VkReleaseSwapchainImagesInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nimageIndexCount(paramarg0: number): number;
    static nimageIndexCount(paramarg0: number, paramarg1: number): void;
    static npImageIndices(paramarg0: number): IntBuffer;
    static npImageIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nswapchain(paramarg0: number): number;
    static nswapchain(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkReleaseSwapchainImagesInfoKHR;
    imageIndexCount(): number;
    pImageIndices(): IntBuffer;
    pImageIndices(arg0: IntBuffer): VkReleaseSwapchainImagesInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkReleaseSwapchainImagesInfoKHR;
    sType(): number;
    sType(arg0: number): VkReleaseSwapchainImagesInfoKHR;
    sType$Default(): VkReleaseSwapchainImagesInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: IntBuffer): VkReleaseSwapchainImagesInfoKHR;
    set(arg0: VkReleaseSwapchainImagesInfoKHR): VkReleaseSwapchainImagesInfoKHR;
    sizeof(): number;
    swapchain(): number;
    swapchain(arg0: number): VkReleaseSwapchainImagesInfoKHR;
}