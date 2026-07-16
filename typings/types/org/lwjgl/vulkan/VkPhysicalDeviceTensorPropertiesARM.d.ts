import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceTensorPropertiesARM extends Struct<VkPhysicalDeviceTensorPropertiesARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXDESCRIPTORSETSTORAGETENSORS: number;
    static MAXDESCRIPTORSETUPDATEAFTERBINDSTORAGETENSORS: number;
    static MAXPERDIMENSIONTENSORELEMENTS: number;
    static MAXPERSTAGEDESCRIPTORSETSTORAGETENSORS: number;
    static MAXPERSTAGEDESCRIPTORUPDATEAFTERBINDSTORAGETENSORS: number;
    static MAXTENSORDIMENSIONCOUNT: number;
    static MAXTENSORELEMENTS: number;
    static MAXTENSORSHADERACCESSARRAYLENGTH: number;
    static MAXTENSORSHADERACCESSSIZE: number;
    static MAXTENSORSIZE: number;
    static MAXTENSORSTRIDE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERSTORAGETENSORARRAYNONUNIFORMINDEXINGNATIVE: number;
    static SHADERTENSORSUPPORTEDSTAGES: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceTensorPropertiesARM;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceTensorPropertiesARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceTensorPropertiesARM;
    static create(paramarg0: number): VkPhysicalDeviceTensorPropertiesARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceTensorPropertiesARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceTensorPropertiesARM;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceTensorPropertiesARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxDescriptorSetStorageTensors(paramarg0: number): number;
    static nmaxDescriptorSetUpdateAfterBindStorageTensors(paramarg0: number): number;
    static nmaxPerDimensionTensorElements(paramarg0: number): number;
    static nmaxPerStageDescriptorSetStorageTensors(paramarg0: number): number;
    static nmaxPerStageDescriptorUpdateAfterBindStorageTensors(paramarg0: number): number;
    static nmaxTensorDimensionCount(paramarg0: number): number;
    static nmaxTensorElements(paramarg0: number): number;
    static nmaxTensorShaderAccessArrayLength(paramarg0: number): number;
    static nmaxTensorShaderAccessSize(paramarg0: number): number;
    static nmaxTensorSize(paramarg0: number): number;
    static nmaxTensorStride(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderStorageTensorArrayNonUniformIndexingNative(paramarg0: number): number;
    static nshaderTensorSupportedStages(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceTensorPropertiesARM;
    maxDescriptorSetStorageTensors(): number;
    maxDescriptorSetUpdateAfterBindStorageTensors(): number;
    maxPerDimensionTensorElements(): number;
    maxPerStageDescriptorSetStorageTensors(): number;
    maxPerStageDescriptorUpdateAfterBindStorageTensors(): number;
    maxTensorDimensionCount(): number;
    maxTensorElements(): number;
    maxTensorShaderAccessArrayLength(): number;
    maxTensorShaderAccessSize(): number;
    maxTensorSize(): number;
    maxTensorStride(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceTensorPropertiesARM;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceTensorPropertiesARM;
    sType$Default(): VkPhysicalDeviceTensorPropertiesARM;
    set(arg0: number, arg1: number): VkPhysicalDeviceTensorPropertiesARM;
    set(arg0: VkPhysicalDeviceTensorPropertiesARM): VkPhysicalDeviceTensorPropertiesARM;
    shaderStorageTensorArrayNonUniformIndexingNative(): boolean;
    shaderTensorSupportedStages(): number;
    sizeof(): number;
}