import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDisplayNativeHdrSurfaceCapabilitiesAMD } from '../../../org/lwjgl/vulkan/VkDisplayNativeHdrSurfaceCapabilitiesAMD.d.ts'
import type { VkLatencySurfaceCapabilitiesNV } from '../../../org/lwjgl/vulkan/VkLatencySurfaceCapabilitiesNV.d.ts'
import type { VkPresentTimingSurfaceCapabilitiesEXT } from '../../../org/lwjgl/vulkan/VkPresentTimingSurfaceCapabilitiesEXT.d.ts'
import type { VkSharedPresentSurfaceCapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkSharedPresentSurfaceCapabilitiesKHR.d.ts'
import type { VkSurfaceCapabilitiesFullScreenExclusiveEXT } from '../../../org/lwjgl/vulkan/VkSurfaceCapabilitiesFullScreenExclusiveEXT.d.ts'
import type { VkSurfaceCapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkSurfaceCapabilitiesKHR.d.ts'
import type { VkSurfaceCapabilitiesPresentBarrierNV } from '../../../org/lwjgl/vulkan/VkSurfaceCapabilitiesPresentBarrierNV.d.ts'
import type { VkSurfaceCapabilitiesPresentId2KHR } from '../../../org/lwjgl/vulkan/VkSurfaceCapabilitiesPresentId2KHR.d.ts'
import type { VkSurfaceCapabilitiesPresentWait2KHR } from '../../../org/lwjgl/vulkan/VkSurfaceCapabilitiesPresentWait2KHR.d.ts'
import type { VkSurfacePresentModeCompatibilityEXT } from '../../../org/lwjgl/vulkan/VkSurfacePresentModeCompatibilityEXT.d.ts'
import type { VkSurfacePresentModeCompatibilityKHR } from '../../../org/lwjgl/vulkan/VkSurfacePresentModeCompatibilityKHR.d.ts'
import type { VkSurfacePresentScalingCapabilitiesEXT } from '../../../org/lwjgl/vulkan/VkSurfacePresentScalingCapabilitiesEXT.d.ts'
import type { VkSurfacePresentScalingCapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkSurfacePresentScalingCapabilitiesKHR.d.ts'
import type { VkSurfaceProtectedCapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkSurfaceProtectedCapabilitiesKHR.d.ts'
export class VkSurfaceCapabilities2KHR extends Struct<VkSurfaceCapabilities2KHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SURFACECAPABILITIES: number;
    static calloc(): VkSurfaceCapabilities2KHR;
    static calloc(paramarg0: MemoryStack): VkSurfaceCapabilities2KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSurfaceCapabilities2KHR;
    static create(paramarg0: number): VkSurfaceCapabilities2KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSurfaceCapabilities2KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSurfaceCapabilities2KHR;
    static malloc(paramarg0: MemoryStack): VkSurfaceCapabilities2KHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsurfaceCapabilities(paramarg0: number): VkSurfaceCapabilitiesKHR;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSurfaceCapabilities2KHR;
    pNext(): number;
    pNext(arg0: number): VkSurfaceCapabilities2KHR;
    pNext(arg0: VkDisplayNativeHdrSurfaceCapabilitiesAMD): VkSurfaceCapabilities2KHR;
    pNext(arg0: VkLatencySurfaceCapabilitiesNV): VkSurfaceCapabilities2KHR;
    pNext(arg0: VkPresentTimingSurfaceCapabilitiesEXT): VkSurfaceCapabilities2KHR;
    pNext(arg0: VkSharedPresentSurfaceCapabilitiesKHR): VkSurfaceCapabilities2KHR;
    pNext(arg0: VkSurfaceCapabilitiesFullScreenExclusiveEXT): VkSurfaceCapabilities2KHR;
    pNext(arg0: VkSurfaceCapabilitiesPresentBarrierNV): VkSurfaceCapabilities2KHR;
    pNext(arg0: VkSurfaceCapabilitiesPresentId2KHR): VkSurfaceCapabilities2KHR;
    pNext(arg0: VkSurfaceCapabilitiesPresentWait2KHR): VkSurfaceCapabilities2KHR;
    pNext(arg0: VkSurfacePresentModeCompatibilityEXT): VkSurfaceCapabilities2KHR;
    pNext(arg0: VkSurfacePresentModeCompatibilityKHR): VkSurfaceCapabilities2KHR;
    pNext(arg0: VkSurfacePresentScalingCapabilitiesEXT): VkSurfaceCapabilities2KHR;
    pNext(arg0: VkSurfacePresentScalingCapabilitiesKHR): VkSurfaceCapabilities2KHR;
    pNext(arg0: VkSurfaceProtectedCapabilitiesKHR): VkSurfaceCapabilities2KHR;
    sType(): number;
    sType(arg0: number): VkSurfaceCapabilities2KHR;
    sType$Default(): VkSurfaceCapabilities2KHR;
    set(arg0: number, arg1: number): VkSurfaceCapabilities2KHR;
    set(arg0: VkSurfaceCapabilities2KHR): VkSurfaceCapabilities2KHR;
    sizeof(): number;
    surfaceCapabilities(): VkSurfaceCapabilitiesKHR;
}