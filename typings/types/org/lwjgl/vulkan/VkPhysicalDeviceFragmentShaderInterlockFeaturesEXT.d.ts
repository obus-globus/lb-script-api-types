import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT extends Struct<VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FRAGMENTSHADERPIXELINTERLOCK: number;
    static FRAGMENTSHADERSAMPLEINTERLOCK: number;
    static FRAGMENTSHADERSHADINGRATEINTERLOCK: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfragmentShaderPixelInterlock(paramarg0: number): number;
    static nfragmentShaderPixelInterlock(paramarg0: number, paramarg1: number): void;
    static nfragmentShaderSampleInterlock(paramarg0: number): number;
    static nfragmentShaderSampleInterlock(paramarg0: number, paramarg1: number): void;
    static nfragmentShaderShadingRateInterlock(paramarg0: number): number;
    static nfragmentShaderShadingRateInterlock(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT;
    fragmentShaderPixelInterlock(): boolean;
    fragmentShaderPixelInterlock(arg0: boolean): VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT;
    fragmentShaderSampleInterlock(): boolean;
    fragmentShaderSampleInterlock(arg0: boolean): VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT;
    fragmentShaderShadingRateInterlock(): boolean;
    fragmentShaderShadingRateInterlock(arg0: boolean): VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT;
    sType$Default(): VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT;
    set(arg0: VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT): VkPhysicalDeviceFragmentShaderInterlockFeaturesEXT;
    sizeof(): number;
}