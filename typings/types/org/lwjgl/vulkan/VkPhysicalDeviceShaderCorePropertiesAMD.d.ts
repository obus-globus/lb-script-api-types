import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceShaderCorePropertiesAMD extends Struct<VkPhysicalDeviceShaderCorePropertiesAMD> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPUTEUNITSPERSHADERARRAY: number;
    static MAXSGPRALLOCATION: number;
    static MAXVGPRALLOCATION: number;
    static MINSGPRALLOCATION: number;
    static MINVGPRALLOCATION: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SGPRALLOCATIONGRANULARITY: number;
    static SGPRSPERSIMD: number;
    static SHADERARRAYSPERENGINECOUNT: number;
    static SHADERENGINECOUNT: number;
    static SIMDPERCOMPUTEUNIT: number;
    static SIZEOF: number;
    static STYPE: number;
    static VGPRALLOCATIONGRANULARITY: number;
    static VGPRSPERSIMD: number;
    static WAVEFRONTSIZE: number;
    static WAVEFRONTSPERSIMD: number;
    static calloc(): VkPhysicalDeviceShaderCorePropertiesAMD;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderCorePropertiesAMD;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceShaderCorePropertiesAMD;
    static create(paramarg0: number): VkPhysicalDeviceShaderCorePropertiesAMD;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderCorePropertiesAMD;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderCorePropertiesAMD;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderCorePropertiesAMD;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncomputeUnitsPerShaderArray(paramarg0: number): number;
    static nmaxSgprAllocation(paramarg0: number): number;
    static nmaxVgprAllocation(paramarg0: number): number;
    static nminSgprAllocation(paramarg0: number): number;
    static nminVgprAllocation(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsgprAllocationGranularity(paramarg0: number): number;
    static nsgprsPerSimd(paramarg0: number): number;
    static nshaderArraysPerEngineCount(paramarg0: number): number;
    static nshaderEngineCount(paramarg0: number): number;
    static nsimdPerComputeUnit(paramarg0: number): number;
    static nvgprAllocationGranularity(paramarg0: number): number;
    static nvgprsPerSimd(paramarg0: number): number;
    static nwavefrontSize(paramarg0: number): number;
    static nwavefrontsPerSimd(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    computeUnitsPerShaderArray(): number;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderCorePropertiesAMD;
    maxSgprAllocation(): number;
    maxVgprAllocation(): number;
    minSgprAllocation(): number;
    minVgprAllocation(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderCorePropertiesAMD;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderCorePropertiesAMD;
    sType$Default(): VkPhysicalDeviceShaderCorePropertiesAMD;
    set(arg0: number, arg1: number): VkPhysicalDeviceShaderCorePropertiesAMD;
    set(arg0: VkPhysicalDeviceShaderCorePropertiesAMD): VkPhysicalDeviceShaderCorePropertiesAMD;
    sgprAllocationGranularity(): number;
    sgprsPerSimd(): number;
    shaderArraysPerEngineCount(): number;
    shaderEngineCount(): number;
    simdPerComputeUnit(): number;
    sizeof(): number;
    vgprAllocationGranularity(): number;
    vgprsPerSimd(): number;
    wavefrontSize(): number;
    wavefrontsPerSimd(): number;
}