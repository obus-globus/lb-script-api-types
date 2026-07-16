import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDepthBiasRepresentationInfoEXT } from '../../../org/lwjgl/vulkan/VkDepthBiasRepresentationInfoEXT.d.ts'
import type { VkPipelineRasterizationConservativeStateCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineRasterizationConservativeStateCreateInfoEXT.d.ts'
import type { VkPipelineRasterizationDepthClipStateCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineRasterizationDepthClipStateCreateInfoEXT.d.ts'
import type { VkPipelineRasterizationLineStateCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineRasterizationLineStateCreateInfo.d.ts'
import type { VkPipelineRasterizationLineStateCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineRasterizationLineStateCreateInfoEXT.d.ts'
import type { VkPipelineRasterizationLineStateCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineRasterizationLineStateCreateInfoKHR.d.ts'
import type { VkPipelineRasterizationProvokingVertexStateCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineRasterizationProvokingVertexStateCreateInfoEXT.d.ts'
import type { VkPipelineRasterizationStateRasterizationOrderAMD } from '../../../org/lwjgl/vulkan/VkPipelineRasterizationStateRasterizationOrderAMD.d.ts'
import type { VkPipelineRasterizationStateStreamCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineRasterizationStateStreamCreateInfoEXT.d.ts'
export class VkPipelineRasterizationStateCreateInfo extends Struct<VkPipelineRasterizationStateCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CULLMODE: number;
    static DEPTHBIASCLAMP: number;
    static DEPTHBIASCONSTANTFACTOR: number;
    static DEPTHBIASENABLE: number;
    static DEPTHBIASSLOPEFACTOR: number;
    static DEPTHCLAMPENABLE: number;
    static FLAGS: number;
    static FRONTFACE: number;
    static LINEWIDTH: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static POLYGONMODE: number;
    static RASTERIZERDISCARDENABLE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineRasterizationStateCreateInfo;
    static calloc(paramarg0: MemoryStack): VkPipelineRasterizationStateCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineRasterizationStateCreateInfo;
    static create(paramarg0: number): VkPipelineRasterizationStateCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineRasterizationStateCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineRasterizationStateCreateInfo;
    static malloc(paramarg0: MemoryStack): VkPipelineRasterizationStateCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncullMode(paramarg0: number): number;
    static ncullMode(paramarg0: number, paramarg1: number): void;
    static ndepthBiasClamp(paramarg0: number): number;
    static ndepthBiasClamp(paramarg0: number, paramarg1: number): void;
    static ndepthBiasConstantFactor(paramarg0: number): number;
    static ndepthBiasConstantFactor(paramarg0: number, paramarg1: number): void;
    static ndepthBiasEnable(paramarg0: number): number;
    static ndepthBiasEnable(paramarg0: number, paramarg1: number): void;
    static ndepthBiasSlopeFactor(paramarg0: number): number;
    static ndepthBiasSlopeFactor(paramarg0: number, paramarg1: number): void;
    static ndepthClampEnable(paramarg0: number): number;
    static ndepthClampEnable(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nfrontFace(paramarg0: number): number;
    static nfrontFace(paramarg0: number, paramarg1: number): void;
    static nlineWidth(paramarg0: number): number;
    static nlineWidth(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npolygonMode(paramarg0: number): number;
    static npolygonMode(paramarg0: number, paramarg1: number): void;
    static nrasterizerDiscardEnable(paramarg0: number): number;
    static nrasterizerDiscardEnable(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineRasterizationStateCreateInfo;
    cullMode(): number;
    cullMode(arg0: number): VkPipelineRasterizationStateCreateInfo;
    depthBiasClamp(): number;
    depthBiasClamp(arg0: number): VkPipelineRasterizationStateCreateInfo;
    depthBiasConstantFactor(): number;
    depthBiasConstantFactor(arg0: number): VkPipelineRasterizationStateCreateInfo;
    depthBiasEnable(): boolean;
    depthBiasEnable(arg0: boolean): VkPipelineRasterizationStateCreateInfo;
    depthBiasSlopeFactor(): number;
    depthBiasSlopeFactor(arg0: number): VkPipelineRasterizationStateCreateInfo;
    depthClampEnable(): boolean;
    depthClampEnable(arg0: boolean): VkPipelineRasterizationStateCreateInfo;
    flags(): number;
    flags(arg0: number): VkPipelineRasterizationStateCreateInfo;
    frontFace(): number;
    frontFace(arg0: number): VkPipelineRasterizationStateCreateInfo;
    lineWidth(): number;
    lineWidth(arg0: number): VkPipelineRasterizationStateCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkPipelineRasterizationStateCreateInfo;
    pNext(arg0: VkDepthBiasRepresentationInfoEXT): VkPipelineRasterizationStateCreateInfo;
    pNext(arg0: VkPipelineRasterizationConservativeStateCreateInfoEXT): VkPipelineRasterizationStateCreateInfo;
    pNext(arg0: VkPipelineRasterizationDepthClipStateCreateInfoEXT): VkPipelineRasterizationStateCreateInfo;
    pNext(arg0: VkPipelineRasterizationLineStateCreateInfo): VkPipelineRasterizationStateCreateInfo;
    pNext(arg0: VkPipelineRasterizationLineStateCreateInfoEXT): VkPipelineRasterizationStateCreateInfo;
    pNext(arg0: VkPipelineRasterizationLineStateCreateInfoKHR): VkPipelineRasterizationStateCreateInfo;
    pNext(arg0: VkPipelineRasterizationProvokingVertexStateCreateInfoEXT): VkPipelineRasterizationStateCreateInfo;
    pNext(arg0: VkPipelineRasterizationStateRasterizationOrderAMD): VkPipelineRasterizationStateCreateInfo;
    pNext(arg0: VkPipelineRasterizationStateStreamCreateInfoEXT): VkPipelineRasterizationStateCreateInfo;
    polygonMode(): number;
    polygonMode(arg0: number): VkPipelineRasterizationStateCreateInfo;
    rasterizerDiscardEnable(): boolean;
    rasterizerDiscardEnable(arg0: boolean): VkPipelineRasterizationStateCreateInfo;
    sType(): number;
    sType(arg0: number): VkPipelineRasterizationStateCreateInfo;
    sType$Default(): VkPipelineRasterizationStateCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number, arg10: number, arg11: number, arg12: number): VkPipelineRasterizationStateCreateInfo;
    set(arg0: VkPipelineRasterizationStateCreateInfo): VkPipelineRasterizationStateCreateInfo;
    sizeof(): number;
}