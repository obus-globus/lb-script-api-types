import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineCoverageModulationStateCreateInfoNV } from '../../../org/lwjgl/vulkan/VkPipelineCoverageModulationStateCreateInfoNV.d.ts'
import type { VkPipelineCoverageReductionStateCreateInfoNV } from '../../../org/lwjgl/vulkan/VkPipelineCoverageReductionStateCreateInfoNV.d.ts'
import type { VkPipelineCoverageToColorStateCreateInfoNV } from '../../../org/lwjgl/vulkan/VkPipelineCoverageToColorStateCreateInfoNV.d.ts'
import type { VkPipelineSampleLocationsStateCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineSampleLocationsStateCreateInfoEXT.d.ts'
export class VkPipelineMultisampleStateCreateInfo extends Struct<VkPipelineMultisampleStateCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static ALPHATOCOVERAGEENABLE: number;
    static ALPHATOONEENABLE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static MINSAMPLESHADING: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSAMPLEMASK: number;
    static RASTERIZATIONSAMPLES: number;
    static SAMPLESHADINGENABLE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineMultisampleStateCreateInfo;
    static calloc(paramarg0: MemoryStack): VkPipelineMultisampleStateCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineMultisampleStateCreateInfo;
    static create(paramarg0: number): VkPipelineMultisampleStateCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineMultisampleStateCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineMultisampleStateCreateInfo;
    static malloc(paramarg0: MemoryStack): VkPipelineMultisampleStateCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nalphaToCoverageEnable(paramarg0: number): number;
    static nalphaToCoverageEnable(paramarg0: number, paramarg1: number): void;
    static nalphaToOneEnable(paramarg0: number): number;
    static nalphaToOneEnable(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nminSampleShading(paramarg0: number): number;
    static nminSampleShading(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSampleMask(paramarg0: number, paramarg1: number): IntBuffer;
    static npSampleMask(paramarg0: number, paramarg1: IntBuffer): void;
    static nrasterizationSamples(paramarg0: number): number;
    static nrasterizationSamples(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsampleShadingEnable(paramarg0: number): number;
    static nsampleShadingEnable(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    alphaToCoverageEnable(): boolean;
    alphaToCoverageEnable(arg0: boolean): VkPipelineMultisampleStateCreateInfo;
    alphaToOneEnable(): boolean;
    alphaToOneEnable(arg0: boolean): VkPipelineMultisampleStateCreateInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineMultisampleStateCreateInfo;
    flags(): number;
    flags(arg0: number): VkPipelineMultisampleStateCreateInfo;
    minSampleShading(): number;
    minSampleShading(arg0: number): VkPipelineMultisampleStateCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkPipelineMultisampleStateCreateInfo;
    pNext(arg0: VkPipelineCoverageModulationStateCreateInfoNV): VkPipelineMultisampleStateCreateInfo;
    pNext(arg0: VkPipelineCoverageReductionStateCreateInfoNV): VkPipelineMultisampleStateCreateInfo;
    pNext(arg0: VkPipelineCoverageToColorStateCreateInfoNV): VkPipelineMultisampleStateCreateInfo;
    pNext(arg0: VkPipelineSampleLocationsStateCreateInfoEXT): VkPipelineMultisampleStateCreateInfo;
    pSampleMask(arg0: IntBuffer): VkPipelineMultisampleStateCreateInfo;
    pSampleMask(arg0: number): IntBuffer;
    rasterizationSamples(): number;
    rasterizationSamples(arg0: number): VkPipelineMultisampleStateCreateInfo;
    sType(): number;
    sType(arg0: number): VkPipelineMultisampleStateCreateInfo;
    sType$Default(): VkPipelineMultisampleStateCreateInfo;
    sampleShadingEnable(): boolean;
    sampleShadingEnable(arg0: boolean): VkPipelineMultisampleStateCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: number, arg6: IntBuffer, arg7: boolean, arg8: boolean): VkPipelineMultisampleStateCreateInfo;
    set(arg0: VkPipelineMultisampleStateCreateInfo): VkPipelineMultisampleStateCreateInfo;
    sizeof(): number;
}