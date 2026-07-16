import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceConservativeRasterizationPropertiesEXT extends Struct<VkPhysicalDeviceConservativeRasterizationPropertiesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONSERVATIVEPOINTANDLINERASTERIZATION: number;
    static CONSERVATIVERASTERIZATIONPOSTDEPTHCOVERAGE: number;
    static DEGENERATELINESRASTERIZED: number;
    static DEGENERATETRIANGLESRASTERIZED: number;
    static EXTRAPRIMITIVEOVERESTIMATIONSIZEGRANULARITY: number;
    static FULLYCOVEREDFRAGMENTSHADERINPUTVARIABLE: number;
    static MAXEXTRAPRIMITIVEOVERESTIMATIONSIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRIMITIVEOVERESTIMATIONSIZE: number;
    static PRIMITIVEUNDERESTIMATION: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceConservativeRasterizationPropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceConservativeRasterizationPropertiesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceConservativeRasterizationPropertiesEXT;
    static create(paramarg0: number): VkPhysicalDeviceConservativeRasterizationPropertiesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceConservativeRasterizationPropertiesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceConservativeRasterizationPropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceConservativeRasterizationPropertiesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nconservativePointAndLineRasterization(paramarg0: number): number;
    static nconservativeRasterizationPostDepthCoverage(paramarg0: number): number;
    static ndegenerateLinesRasterized(paramarg0: number): number;
    static ndegenerateTrianglesRasterized(paramarg0: number): number;
    static nextraPrimitiveOverestimationSizeGranularity(paramarg0: number): number;
    static nfullyCoveredFragmentShaderInputVariable(paramarg0: number): number;
    static nmaxExtraPrimitiveOverestimationSize(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nprimitiveOverestimationSize(paramarg0: number): number;
    static nprimitiveUnderestimation(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    conservativePointAndLineRasterization(): boolean;
    conservativeRasterizationPostDepthCoverage(): boolean;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceConservativeRasterizationPropertiesEXT;
    degenerateLinesRasterized(): boolean;
    degenerateTrianglesRasterized(): boolean;
    extraPrimitiveOverestimationSizeGranularity(): number;
    fullyCoveredFragmentShaderInputVariable(): boolean;
    maxExtraPrimitiveOverestimationSize(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceConservativeRasterizationPropertiesEXT;
    primitiveOverestimationSize(): number;
    primitiveUnderestimation(): boolean;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceConservativeRasterizationPropertiesEXT;
    sType$Default(): VkPhysicalDeviceConservativeRasterizationPropertiesEXT;
    set(arg0: number, arg1: number): VkPhysicalDeviceConservativeRasterizationPropertiesEXT;
    set(arg0: VkPhysicalDeviceConservativeRasterizationPropertiesEXT): VkPhysicalDeviceConservativeRasterizationPropertiesEXT;
    sizeof(): number;
}