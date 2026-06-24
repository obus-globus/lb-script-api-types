import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceGroupRenderPassBeginInfo } from '../../../org/lwjgl/vulkan/VkDeviceGroupRenderPassBeginInfo.d.ts'
import type { VkDeviceGroupRenderPassBeginInfoKHR } from '../../../org/lwjgl/vulkan/VkDeviceGroupRenderPassBeginInfoKHR.d.ts'
import type { VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM } from '../../../org/lwjgl/vulkan/VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM.d.ts'
import type { VkRect2D } from '../../../org/lwjgl/vulkan/VkRect2D.d.ts'
import type { VkRenderPassAttachmentBeginInfo } from '../../../org/lwjgl/vulkan/VkRenderPassAttachmentBeginInfo.d.ts'
import type { VkRenderPassAttachmentBeginInfoKHR } from '../../../org/lwjgl/vulkan/VkRenderPassAttachmentBeginInfoKHR.d.ts'
import type { VkRenderPassPerformanceCountersByRegionBeginInfoARM } from '../../../org/lwjgl/vulkan/VkRenderPassPerformanceCountersByRegionBeginInfoARM.d.ts'
import type { VkRenderPassSampleLocationsBeginInfoEXT } from '../../../org/lwjgl/vulkan/VkRenderPassSampleLocationsBeginInfoEXT.d.ts'
import type { VkRenderPassStripeBeginInfoARM } from '../../../org/lwjgl/vulkan/VkRenderPassStripeBeginInfoARM.d.ts'
import type { VkRenderPassTransformBeginInfoQCOM } from '../../../org/lwjgl/vulkan/VkRenderPassTransformBeginInfoQCOM.d.ts'
export class VkRenderPassBeginInfo extends Struct<VkRenderPassBeginInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLEARVALUECOUNT: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FRAMEBUFFER: number;
    static PCLEARVALUES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RENDERAREA: number;
    static RENDERPASS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkRenderPassBeginInfo;
    static calloc(paramarg0: MemoryStack): VkRenderPassBeginInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRenderPassBeginInfo;
    static create(paramarg0: number): VkRenderPassBeginInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderPassBeginInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRenderPassBeginInfo;
    static malloc(paramarg0: MemoryStack): VkRenderPassBeginInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nclearValueCount(paramarg0: number): number;
    static nclearValueCount(paramarg0: number, paramarg1: number): void;
    static nframebuffer(paramarg0: number): number;
    static nframebuffer(paramarg0: number, paramarg1: number): void;
    static npClearValues(paramarg0: number): (Object | null)[];
    static npClearValues(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrenderArea(paramarg0: number): VkRect2D;
    static nrenderArea(paramarg0: number, paramarg1: VkRect2D): void;
    static nrenderPass(paramarg0: number): number;
    static nrenderPass(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    clearValueCount(): number;
    clearValueCount(arg0: number): VkRenderPassBeginInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkRenderPassBeginInfo;
    framebuffer(): number;
    framebuffer(arg0: number): VkRenderPassBeginInfo;
    pClearValues(): (Object | null)[];
    pClearValues(arg0: (Object | null)[]): VkRenderPassBeginInfo;
    pNext(): number;
    pNext(arg0: number): VkRenderPassBeginInfo;
    pNext(arg0: VkDeviceGroupRenderPassBeginInfo): VkRenderPassBeginInfo;
    pNext(arg0: VkDeviceGroupRenderPassBeginInfoKHR): VkRenderPassBeginInfo;
    pNext(arg0: VkMultiviewPerViewRenderAreasRenderPassBeginInfoQCOM): VkRenderPassBeginInfo;
    pNext(arg0: VkRenderPassAttachmentBeginInfo): VkRenderPassBeginInfo;
    pNext(arg0: VkRenderPassAttachmentBeginInfoKHR): VkRenderPassBeginInfo;
    pNext(arg0: VkRenderPassPerformanceCountersByRegionBeginInfoARM): VkRenderPassBeginInfo;
    pNext(arg0: VkRenderPassSampleLocationsBeginInfoEXT): VkRenderPassBeginInfo;
    pNext(arg0: VkRenderPassStripeBeginInfoARM): VkRenderPassBeginInfo;
    pNext(arg0: VkRenderPassTransformBeginInfoQCOM): VkRenderPassBeginInfo;
    renderArea(): VkRect2D;
    renderArea(arg0: (param0: VkRect2D) => void): VkRenderPassBeginInfo;
    renderArea(arg0: VkRect2D): VkRenderPassBeginInfo;
    renderPass(): number;
    renderPass(arg0: number): VkRenderPassBeginInfo;
    sType(): number;
    sType(arg0: number): VkRenderPassBeginInfo;
    sType$Default(): VkRenderPassBeginInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: VkRect2D, arg5: number, arg6: (Object | null)[]): VkRenderPassBeginInfo;
    set(arg0: VkRenderPassBeginInfo): VkRenderPassBeginInfo;
    sizeof(): number;
}