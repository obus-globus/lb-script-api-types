import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceGroupSwapchainCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkDeviceGroupSwapchainCreateInfoKHR.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
import type { VkImageCompressionControlEXT } from '../../../org/lwjgl/vulkan/VkImageCompressionControlEXT.d.ts'
import type { VkImageFormatListCreateInfo } from '../../../org/lwjgl/vulkan/VkImageFormatListCreateInfo.d.ts'
import type { VkImageFormatListCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkImageFormatListCreateInfoKHR.d.ts'
import type { VkSurfaceFullScreenExclusiveInfoEXT } from '../../../org/lwjgl/vulkan/VkSurfaceFullScreenExclusiveInfoEXT.d.ts'
import type { VkSurfaceFullScreenExclusiveWin32InfoEXT } from '../../../org/lwjgl/vulkan/VkSurfaceFullScreenExclusiveWin32InfoEXT.d.ts'
import type { VkSwapchainCounterCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkSwapchainCounterCreateInfoEXT.d.ts'
import type { VkSwapchainDisplayNativeHdrCreateInfoAMD } from '../../../org/lwjgl/vulkan/VkSwapchainDisplayNativeHdrCreateInfoAMD.d.ts'
import type { VkSwapchainLatencyCreateInfoNV } from '../../../org/lwjgl/vulkan/VkSwapchainLatencyCreateInfoNV.d.ts'
import type { VkSwapchainPresentBarrierCreateInfoNV } from '../../../org/lwjgl/vulkan/VkSwapchainPresentBarrierCreateInfoNV.d.ts'
import type { VkSwapchainPresentModesCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkSwapchainPresentModesCreateInfoEXT.d.ts'
import type { VkSwapchainPresentModesCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkSwapchainPresentModesCreateInfoKHR.d.ts'
import type { VkSwapchainPresentScalingCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkSwapchainPresentScalingCreateInfoEXT.d.ts'
import type { VkSwapchainPresentScalingCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkSwapchainPresentScalingCreateInfoKHR.d.ts'
export class VkSwapchainCreateInfoKHR extends Struct<VkSwapchainCreateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLIPPED: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPOSITEALPHA: number;
    static FLAGS: number;
    static IMAGEARRAYLAYERS: number;
    static IMAGECOLORSPACE: number;
    static IMAGEEXTENT: number;
    static IMAGEFORMAT: number;
    static IMAGESHARINGMODE: number;
    static IMAGEUSAGE: number;
    static MINIMAGECOUNT: number;
    static OLDSWAPCHAIN: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PQUEUEFAMILYINDICES: number;
    static PRESENTMODE: number;
    static PRETRANSFORM: number;
    static QUEUEFAMILYINDEXCOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static SURFACE: number;
    static calloc(): VkSwapchainCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkSwapchainCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSwapchainCreateInfoKHR;
    static create(paramarg0: number): VkSwapchainCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSwapchainCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSwapchainCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkSwapchainCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nclipped(paramarg0: number): number;
    static nclipped(paramarg0: number, paramarg1: number): void;
    static ncompositeAlpha(paramarg0: number): number;
    static ncompositeAlpha(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nimageArrayLayers(paramarg0: number): number;
    static nimageArrayLayers(paramarg0: number, paramarg1: number): void;
    static nimageColorSpace(paramarg0: number): number;
    static nimageColorSpace(paramarg0: number, paramarg1: number): void;
    static nimageExtent(paramarg0: number): VkExtent2D;
    static nimageExtent(paramarg0: number, paramarg1: VkExtent2D): void;
    static nimageFormat(paramarg0: number): number;
    static nimageFormat(paramarg0: number, paramarg1: number): void;
    static nimageSharingMode(paramarg0: number): number;
    static nimageSharingMode(paramarg0: number, paramarg1: number): void;
    static nimageUsage(paramarg0: number): number;
    static nimageUsage(paramarg0: number, paramarg1: number): void;
    static nminImageCount(paramarg0: number): number;
    static nminImageCount(paramarg0: number, paramarg1: number): void;
    static noldSwapchain(paramarg0: number): number;
    static noldSwapchain(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npQueueFamilyIndices(paramarg0: number): IntBuffer;
    static npQueueFamilyIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static npreTransform(paramarg0: number): number;
    static npreTransform(paramarg0: number, paramarg1: number): void;
    static npresentMode(paramarg0: number): number;
    static npresentMode(paramarg0: number, paramarg1: number): void;
    static nqueueFamilyIndexCount(paramarg0: number): number;
    static nqueueFamilyIndexCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsurface(paramarg0: number): number;
    static nsurface(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    clipped(): boolean;
    clipped(arg0: boolean): VkSwapchainCreateInfoKHR;
    close(): void;
    compositeAlpha(): number;
    compositeAlpha(arg0: number): VkSwapchainCreateInfoKHR;
    create(arg0: number, arg1: ByteBuffer): VkSwapchainCreateInfoKHR;
    flags(): number;
    flags(arg0: number): VkSwapchainCreateInfoKHR;
    imageArrayLayers(): number;
    imageArrayLayers(arg0: number): VkSwapchainCreateInfoKHR;
    imageColorSpace(): number;
    imageColorSpace(arg0: number): VkSwapchainCreateInfoKHR;
    imageExtent(): VkExtent2D;
    imageExtent(arg0: (param0: VkExtent2D) => void): VkSwapchainCreateInfoKHR;
    imageExtent(arg0: VkExtent2D): VkSwapchainCreateInfoKHR;
    imageFormat(): number;
    imageFormat(arg0: number): VkSwapchainCreateInfoKHR;
    imageSharingMode(): number;
    imageSharingMode(arg0: number): VkSwapchainCreateInfoKHR;
    imageUsage(): number;
    imageUsage(arg0: number): VkSwapchainCreateInfoKHR;
    minImageCount(): number;
    minImageCount(arg0: number): VkSwapchainCreateInfoKHR;
    oldSwapchain(): number;
    oldSwapchain(arg0: number): VkSwapchainCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkSwapchainCreateInfoKHR;
    pNext(arg0: VkDeviceGroupSwapchainCreateInfoKHR): VkSwapchainCreateInfoKHR;
    pNext(arg0: VkImageCompressionControlEXT): VkSwapchainCreateInfoKHR;
    pNext(arg0: VkImageFormatListCreateInfo): VkSwapchainCreateInfoKHR;
    pNext(arg0: VkImageFormatListCreateInfoKHR): VkSwapchainCreateInfoKHR;
    pNext(arg0: VkSurfaceFullScreenExclusiveInfoEXT): VkSwapchainCreateInfoKHR;
    pNext(arg0: VkSurfaceFullScreenExclusiveWin32InfoEXT): VkSwapchainCreateInfoKHR;
    pNext(arg0: VkSwapchainCounterCreateInfoEXT): VkSwapchainCreateInfoKHR;
    pNext(arg0: VkSwapchainDisplayNativeHdrCreateInfoAMD): VkSwapchainCreateInfoKHR;
    pNext(arg0: VkSwapchainLatencyCreateInfoNV): VkSwapchainCreateInfoKHR;
    pNext(arg0: VkSwapchainPresentBarrierCreateInfoNV): VkSwapchainCreateInfoKHR;
    pNext(arg0: VkSwapchainPresentModesCreateInfoEXT): VkSwapchainCreateInfoKHR;
    pNext(arg0: VkSwapchainPresentModesCreateInfoKHR): VkSwapchainCreateInfoKHR;
    pNext(arg0: VkSwapchainPresentScalingCreateInfoEXT): VkSwapchainCreateInfoKHR;
    pNext(arg0: VkSwapchainPresentScalingCreateInfoKHR): VkSwapchainCreateInfoKHR;
    pQueueFamilyIndices(): IntBuffer;
    pQueueFamilyIndices(arg0: IntBuffer): VkSwapchainCreateInfoKHR;
    preTransform(): number;
    preTransform(arg0: number): VkSwapchainCreateInfoKHR;
    presentMode(): number;
    presentMode(arg0: number): VkSwapchainCreateInfoKHR;
    queueFamilyIndexCount(): number;
    queueFamilyIndexCount(arg0: number): VkSwapchainCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkSwapchainCreateInfoKHR;
    sType$Default(): VkSwapchainCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: VkExtent2D, arg8: number, arg9: number, arg10: number, arg11: number, arg12: IntBuffer, arg13: number, arg14: number, arg15: number, arg16: boolean, arg17: number): VkSwapchainCreateInfoKHR;
    set(arg0: VkSwapchainCreateInfoKHR): VkSwapchainCreateInfoKHR;
    sizeof(): number;
    surface(): number;
    surface(arg0: number): VkSwapchainCreateInfoKHR;
}