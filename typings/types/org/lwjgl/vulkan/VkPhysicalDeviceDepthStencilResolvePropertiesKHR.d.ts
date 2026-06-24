import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceDepthStencilResolveProperties } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceDepthStencilResolveProperties.d.ts'
export class VkPhysicalDeviceDepthStencilResolvePropertiesKHR extends VkPhysicalDeviceDepthStencilResolveProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INDEPENDENTRESOLVE: number;
    static INDEPENDENTRESOLVENONE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUPPORTEDDEPTHRESOLVEMODES: number;
    static SUPPORTEDSTENCILRESOLVEMODES: number;
    static calloc(): VkPhysicalDeviceDepthStencilResolveProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDepthStencilResolveProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceDepthStencilResolvePropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDepthStencilResolvePropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceDepthStencilResolveProperties;
    static create(paramarg0: number): VkPhysicalDeviceDepthStencilResolveProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceDepthStencilResolvePropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceDepthStencilResolvePropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceDepthStencilResolveProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceDepthStencilResolvePropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceDepthStencilResolveProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDepthStencilResolveProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceDepthStencilResolvePropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDepthStencilResolvePropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nindependentResolve(paramarg0: number): number;
    static nindependentResolveNone(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsupportedDepthResolveModes(paramarg0: number): number;
    static nsupportedStencilResolveModes(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceDepthStencilResolvePropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceDepthStencilResolvePropertiesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceDepthStencilResolvePropertiesKHR;
    sType$Default(): VkPhysicalDeviceDepthStencilResolvePropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDeviceDepthStencilResolvePropertiesKHR;
    set(arg0: VkPhysicalDeviceDepthStencilResolveProperties): VkPhysicalDeviceDepthStencilResolveProperties;
    set(arg0: VkPhysicalDeviceDepthStencilResolvePropertiesKHR): VkPhysicalDeviceDepthStencilResolvePropertiesKHR;
}