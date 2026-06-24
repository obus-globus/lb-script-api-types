import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkShaderResourceUsageAMD } from '../../../org/lwjgl/vulkan/VkShaderResourceUsageAMD.d.ts'
export class VkShaderStatisticsInfoAMD extends Struct<VkShaderStatisticsInfoAMD> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPUTEWORKGROUPSIZE: number;
    static NUMAVAILABLESGPRS: number;
    static NUMAVAILABLEVGPRS: number;
    static NUMPHYSICALSGPRS: number;
    static NUMPHYSICALVGPRS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESOURCEUSAGE: number;
    static SHADERSTAGEMASK: number;
    static SIZEOF: number;
    static create(paramarg0: number): VkShaderStatisticsInfoAMD;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkShaderStatisticsInfoAMD;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static ncomputeWorkGroupSize(paramarg0: number, paramarg1: number): number;
    static ncomputeWorkGroupSize(paramarg0: number): IntBuffer;
    static nnumAvailableSgprs(paramarg0: number): number;
    static nnumAvailableVgprs(paramarg0: number): number;
    static nnumPhysicalSgprs(paramarg0: number): number;
    static nnumPhysicalVgprs(paramarg0: number): number;
    static nresourceUsage(paramarg0: number): VkShaderResourceUsageAMD;
    static nshaderStageMask(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    computeWorkGroupSize(): IntBuffer;
    computeWorkGroupSize(arg0: number): number;
    create(arg0: number, arg1: ByteBuffer): VkShaderStatisticsInfoAMD;
    numAvailableSgprs(): number;
    numAvailableVgprs(): number;
    numPhysicalSgprs(): number;
    numPhysicalVgprs(): number;
    resourceUsage(): VkShaderResourceUsageAMD;
    shaderStageMask(): number;
    sizeof(): number;
}