import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSurfaceFullScreenExclusiveInfoEXT } from '../../../org/lwjgl/vulkan/VkSurfaceFullScreenExclusiveInfoEXT.d.ts'
import type { VkSurfaceFullScreenExclusiveWin32InfoEXT } from '../../../org/lwjgl/vulkan/VkSurfaceFullScreenExclusiveWin32InfoEXT.d.ts'
import type { VkSurfacePresentModeEXT } from '../../../org/lwjgl/vulkan/VkSurfacePresentModeEXT.d.ts'
import type { VkSurfacePresentModeKHR } from '../../../org/lwjgl/vulkan/VkSurfacePresentModeKHR.d.ts'
export class VkPhysicalDeviceSurfaceInfo2KHR extends Struct<VkPhysicalDeviceSurfaceInfo2KHR> implements NativeResource {
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
    static SURFACE: number;
    static calloc(): VkPhysicalDeviceSurfaceInfo2KHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceSurfaceInfo2KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceSurfaceInfo2KHR;
    static create(paramarg0: number): VkPhysicalDeviceSurfaceInfo2KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceSurfaceInfo2KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceSurfaceInfo2KHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceSurfaceInfo2KHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsurface(paramarg0: number): number;
    static nsurface(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceSurfaceInfo2KHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceSurfaceInfo2KHR;
    pNext(arg0: VkSurfaceFullScreenExclusiveInfoEXT): VkPhysicalDeviceSurfaceInfo2KHR;
    pNext(arg0: VkSurfaceFullScreenExclusiveWin32InfoEXT): VkPhysicalDeviceSurfaceInfo2KHR;
    pNext(arg0: VkSurfacePresentModeEXT): VkPhysicalDeviceSurfaceInfo2KHR;
    pNext(arg0: VkSurfacePresentModeKHR): VkPhysicalDeviceSurfaceInfo2KHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceSurfaceInfo2KHR;
    sType$Default(): VkPhysicalDeviceSurfaceInfo2KHR;
    set(arg0: number, arg1: number, arg2: number): VkPhysicalDeviceSurfaceInfo2KHR;
    set(arg0: VkPhysicalDeviceSurfaceInfo2KHR): VkPhysicalDeviceSurfaceInfo2KHR;
    sizeof(): number;
    surface(): number;
    surface(arg0: number): VkPhysicalDeviceSurfaceInfo2KHR;
}