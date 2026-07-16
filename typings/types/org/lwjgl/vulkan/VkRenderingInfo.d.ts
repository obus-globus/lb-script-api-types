import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceGroupRenderPassBeginInfo } from '../../../org/lwjgl/vulkan/VkDeviceGroupRenderPassBeginInfo.d.ts'
import type { VkDeviceGroupRenderPassBeginInfoKHR } from '../../../org/lwjgl/vulkan/VkDeviceGroupRenderPassBeginInfoKHR.d.ts'
import type { VkMultisampledRenderToSingleSampledInfoEXT } from '../../../org/lwjgl/vulkan/VkMultisampledRenderToSingleSampledInfoEXT.d.ts'
import type { VkMultiviewPerViewAttributesInfoNVX } from '../../../org/lwjgl/vulkan/VkMultiviewPerViewAttributesInfoNVX.d.ts'
import type { VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM } from '../../../org/lwjgl/vulkan/VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM.d.ts'
import type { VkRect2D } from '../../../org/lwjgl/vulkan/VkRect2D.d.ts'
import type { VkRenderPassPerformanceCountersByRegionBeginInfoARM } from '../../../org/lwjgl/vulkan/VkRenderPassPerformanceCountersByRegionBeginInfoARM.d.ts'
import type { VkRenderPassStripeBeginInfoARM } from '../../../org/lwjgl/vulkan/VkRenderPassStripeBeginInfoARM.d.ts'
import type { VkRenderPassTileShadingCreateInfoQCOM } from '../../../org/lwjgl/vulkan/VkRenderPassTileShadingCreateInfoQCOM.d.ts'
import type { VkRenderingAttachmentInfo } from '../../../org/lwjgl/vulkan/VkRenderingAttachmentInfo.d.ts'
import type { VkRenderingFragmentDensityMapAttachmentInfoEXT } from '../../../org/lwjgl/vulkan/VkRenderingFragmentDensityMapAttachmentInfoEXT.d.ts'
import type { VkRenderingFragmentShadingRateAttachmentInfoKHR } from '../../../org/lwjgl/vulkan/VkRenderingFragmentShadingRateAttachmentInfoKHR.d.ts'
import type { VkTileMemorySizeInfoQCOM } from '../../../org/lwjgl/vulkan/VkTileMemorySizeInfoQCOM.d.ts'
export class VkRenderingInfo extends Struct<VkRenderingInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORATTACHMENTCOUNT: number;
    static FLAGS: number;
    static LAYERCOUNT: number;
    static PCOLORATTACHMENTS: number;
    static PDEPTHATTACHMENT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTENCILATTACHMENT: number;
    static RENDERAREA: number;
    static SIZEOF: number;
    static STYPE: number;
    static VIEWMASK: number;
    static calloc(): VkRenderingInfo;
    static calloc(paramarg0: MemoryStack): VkRenderingInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRenderingInfo;
    static create(paramarg0: number): VkRenderingInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderingInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRenderingInfo;
    static malloc(paramarg0: MemoryStack): VkRenderingInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncolorAttachmentCount(paramarg0: number): number;
    static ncolorAttachmentCount(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nlayerCount(paramarg0: number): number;
    static nlayerCount(paramarg0: number, paramarg1: number): void;
    static npColorAttachments(paramarg0: number): (Object | null)[];
    static npColorAttachments(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npDepthAttachment(paramarg0: number): VkRenderingAttachmentInfo;
    static npDepthAttachment(paramarg0: number, paramarg1: VkRenderingAttachmentInfo): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStencilAttachment(paramarg0: number): VkRenderingAttachmentInfo;
    static npStencilAttachment(paramarg0: number, paramarg1: VkRenderingAttachmentInfo): void;
    static nrenderArea(paramarg0: number): VkRect2D;
    static nrenderArea(paramarg0: number, paramarg1: VkRect2D): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nviewMask(paramarg0: number): number;
    static nviewMask(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    colorAttachmentCount(): number;
    create(arg0: number, arg1: ByteBuffer): VkRenderingInfo;
    flags(): number;
    flags(arg0: number): VkRenderingInfo;
    layerCount(): number;
    layerCount(arg0: number): VkRenderingInfo;
    pColorAttachments(): (Object | null)[];
    pColorAttachments(arg0: (Object | null)[]): VkRenderingInfo;
    pDepthAttachment(): VkRenderingAttachmentInfo;
    pDepthAttachment(arg0: VkRenderingAttachmentInfo): VkRenderingInfo;
    pNext(): number;
    pNext(arg0: number): VkRenderingInfo;
    pNext(arg0: VkDeviceGroupRenderPassBeginInfo): VkRenderingInfo;
    pNext(arg0: VkDeviceGroupRenderPassBeginInfoKHR): VkRenderingInfo;
    pNext(arg0: VkMultisampledRenderToSingleSampledInfoEXT): VkRenderingInfo;
    pNext(arg0: VkMultiviewPerViewAttributesInfoNVX): VkRenderingInfo;
    pNext(arg0: VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM): VkRenderingInfo;
    pNext(arg0: VkRenderPassPerformanceCountersByRegionBeginInfoARM): VkRenderingInfo;
    pNext(arg0: VkRenderPassStripeBeginInfoARM): VkRenderingInfo;
    pNext(arg0: VkRenderPassTileShadingCreateInfoQCOM): VkRenderingInfo;
    pNext(arg0: VkRenderingFragmentDensityMapAttachmentInfoEXT): VkRenderingInfo;
    pNext(arg0: VkRenderingFragmentShadingRateAttachmentInfoKHR): VkRenderingInfo;
    pNext(arg0: VkTileMemorySizeInfoQCOM): VkRenderingInfo;
    pStencilAttachment(): VkRenderingAttachmentInfo;
    pStencilAttachment(arg0: VkRenderingAttachmentInfo): VkRenderingInfo;
    renderArea(): VkRect2D;
    renderArea(arg0: (param0: VkRect2D) => void): VkRenderingInfo;
    renderArea(arg0: VkRect2D): VkRenderingInfo;
    sType(): number;
    sType(arg0: number): VkRenderingInfo;
    sType$Default(): VkRenderingInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: VkRect2D, arg4: number, arg5: number, arg6: (Object | null)[], arg7: VkRenderingAttachmentInfo, arg8: VkRenderingAttachmentInfo): VkRenderingInfo;
    set(arg0: VkRenderingInfo): VkRenderingInfo;
    sizeof(): number;
    viewMask(): number;
    viewMask(arg0: number): VkRenderingInfo;
}