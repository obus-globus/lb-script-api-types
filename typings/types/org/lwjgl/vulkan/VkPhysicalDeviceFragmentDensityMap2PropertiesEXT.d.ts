import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceFragmentDensityMap2PropertiesEXT extends Struct<VkPhysicalDeviceFragmentDensityMap2PropertiesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXDESCRIPTORSETSUBSAMPLEDSAMPLERS: number;
    static MAXSUBSAMPLEDARRAYLAYERS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUBSAMPLEDCOARSERECONSTRUCTIONEARLYACCESS: number;
    static SUBSAMPLEDLOADS: number;
    static calloc(): VkPhysicalDeviceFragmentDensityMap2PropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentDensityMap2PropertiesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceFragmentDensityMap2PropertiesEXT;
    static create(paramarg0: number): VkPhysicalDeviceFragmentDensityMap2PropertiesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceFragmentDensityMap2PropertiesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceFragmentDensityMap2PropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentDensityMap2PropertiesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxDescriptorSetSubsampledSamplers(paramarg0: number): number;
    static nmaxSubsampledArrayLayers(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsubsampledCoarseReconstructionEarlyAccess(paramarg0: number): number;
    static nsubsampledLoads(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceFragmentDensityMap2PropertiesEXT;
    maxDescriptorSetSubsampledSamplers(): number;
    maxSubsampledArrayLayers(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceFragmentDensityMap2PropertiesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceFragmentDensityMap2PropertiesEXT;
    sType$Default(): VkPhysicalDeviceFragmentDensityMap2PropertiesEXT;
    set(arg0: number, arg1: number): VkPhysicalDeviceFragmentDensityMap2PropertiesEXT;
    set(arg0: VkPhysicalDeviceFragmentDensityMap2PropertiesEXT): VkPhysicalDeviceFragmentDensityMap2PropertiesEXT;
    sizeof(): number;
    subsampledCoarseReconstructionEarlyAccess(): boolean;
    subsampledLoads(): boolean;
}