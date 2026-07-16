import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceFragmentDensityMapFeaturesEXT extends Struct<VkPhysicalDeviceFragmentDensityMapFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FRAGMENTDENSITYMAP: number;
    static FRAGMENTDENSITYMAPDYNAMIC: number;
    static FRAGMENTDENSITYMAPNONSUBSAMPLEDIMAGES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceFragmentDensityMapFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentDensityMapFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceFragmentDensityMapFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceFragmentDensityMapFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceFragmentDensityMapFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceFragmentDensityMapFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentDensityMapFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfragmentDensityMap(paramarg0: number): number;
    static nfragmentDensityMap(paramarg0: number, paramarg1: number): void;
    static nfragmentDensityMapDynamic(paramarg0: number): number;
    static nfragmentDensityMapDynamic(paramarg0: number, paramarg1: number): void;
    static nfragmentDensityMapNonSubsampledImages(paramarg0: number): number;
    static nfragmentDensityMapNonSubsampledImages(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceFragmentDensityMapFeaturesEXT;
    fragmentDensityMap(): boolean;
    fragmentDensityMap(arg0: boolean): VkPhysicalDeviceFragmentDensityMapFeaturesEXT;
    fragmentDensityMapDynamic(): boolean;
    fragmentDensityMapDynamic(arg0: boolean): VkPhysicalDeviceFragmentDensityMapFeaturesEXT;
    fragmentDensityMapNonSubsampledImages(): boolean;
    fragmentDensityMapNonSubsampledImages(arg0: boolean): VkPhysicalDeviceFragmentDensityMapFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceFragmentDensityMapFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceFragmentDensityMapFeaturesEXT;
    sType$Default(): VkPhysicalDeviceFragmentDensityMapFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceFragmentDensityMapFeaturesEXT;
    set(arg0: VkPhysicalDeviceFragmentDensityMapFeaturesEXT): VkPhysicalDeviceFragmentDensityMapFeaturesEXT;
    sizeof(): number;
}