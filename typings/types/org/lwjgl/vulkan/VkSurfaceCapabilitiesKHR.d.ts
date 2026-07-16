import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class VkSurfaceCapabilitiesKHR extends Struct<VkSurfaceCapabilitiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CURRENTEXTENT: number;
    static CURRENTTRANSFORM: number;
    static MAXIMAGEARRAYLAYERS: number;
    static MAXIMAGECOUNT: number;
    static MAXIMAGEEXTENT: number;
    static MINIMAGECOUNT: number;
    static MINIMAGEEXTENT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SUPPORTEDCOMPOSITEALPHA: number;
    static SUPPORTEDTRANSFORMS: number;
    static SUPPORTEDUSAGEFLAGS: number;
    static calloc(): VkSurfaceCapabilitiesKHR;
    static calloc(paramarg0: MemoryStack): VkSurfaceCapabilitiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSurfaceCapabilitiesKHR;
    static create(paramarg0: number): VkSurfaceCapabilitiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSurfaceCapabilitiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSurfaceCapabilitiesKHR;
    static malloc(paramarg0: MemoryStack): VkSurfaceCapabilitiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncurrentExtent(paramarg0: number): VkExtent2D;
    static ncurrentTransform(paramarg0: number): number;
    static nmaxImageArrayLayers(paramarg0: number): number;
    static nmaxImageCount(paramarg0: number): number;
    static nmaxImageExtent(paramarg0: number): VkExtent2D;
    static nminImageCount(paramarg0: number): number;
    static nminImageExtent(paramarg0: number): VkExtent2D;
    static nsupportedCompositeAlpha(paramarg0: number): number;
    static nsupportedTransforms(paramarg0: number): number;
    static nsupportedUsageFlags(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSurfaceCapabilitiesKHR;
    currentExtent(): VkExtent2D;
    currentTransform(): number;
    maxImageArrayLayers(): number;
    maxImageCount(): number;
    maxImageExtent(): VkExtent2D;
    minImageCount(): number;
    minImageExtent(): VkExtent2D;
    sizeof(): number;
    supportedCompositeAlpha(): number;
    supportedTransforms(): number;
    supportedUsageFlags(): number;
}