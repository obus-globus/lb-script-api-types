import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineViewportCoarseSampleOrderStateCreateInfoNV } from '../../../org/lwjgl/vulkan/VkPipelineViewportCoarseSampleOrderStateCreateInfoNV.d.ts'
import type { VkPipelineViewportDepthClampControlCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineViewportDepthClampControlCreateInfoEXT.d.ts'
import type { VkPipelineViewportDepthClipControlCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineViewportDepthClipControlCreateInfoEXT.d.ts'
import type { VkPipelineViewportExclusiveScissorStateCreateInfoNV } from '../../../org/lwjgl/vulkan/VkPipelineViewportExclusiveScissorStateCreateInfoNV.d.ts'
import type { VkPipelineViewportShadingRateImageStateCreateInfoNV } from '../../../org/lwjgl/vulkan/VkPipelineViewportShadingRateImageStateCreateInfoNV.d.ts'
import type { VkPipelineViewportSwizzleStateCreateInfoNV } from '../../../org/lwjgl/vulkan/VkPipelineViewportSwizzleStateCreateInfoNV.d.ts'
import type { VkPipelineViewportWScalingStateCreateInfoNV } from '../../../org/lwjgl/vulkan/VkPipelineViewportWScalingStateCreateInfoNV.d.ts'
export class VkPipelineViewportStateCreateInfo extends Struct<VkPipelineViewportStateCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSCISSORS: number;
    static PVIEWPORTS: number;
    static SCISSORCOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static VIEWPORTCOUNT: number;
    static calloc(): VkPipelineViewportStateCreateInfo;
    static calloc(paramarg0: MemoryStack): VkPipelineViewportStateCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineViewportStateCreateInfo;
    static create(paramarg0: number): VkPipelineViewportStateCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineViewportStateCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineViewportStateCreateInfo;
    static malloc(paramarg0: MemoryStack): VkPipelineViewportStateCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npScissors(paramarg0: number): (Object | null)[];
    static npScissors(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npViewports(paramarg0: number): (Object | null)[];
    static npViewports(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nscissorCount(paramarg0: number): number;
    static nscissorCount(paramarg0: number, paramarg1: number): void;
    static nviewportCount(paramarg0: number): number;
    static nviewportCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineViewportStateCreateInfo;
    flags(): number;
    flags(arg0: number): VkPipelineViewportStateCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkPipelineViewportStateCreateInfo;
    pNext(arg0: VkPipelineViewportCoarseSampleOrderStateCreateInfoNV): VkPipelineViewportStateCreateInfo;
    pNext(arg0: VkPipelineViewportDepthClampControlCreateInfoEXT): VkPipelineViewportStateCreateInfo;
    pNext(arg0: VkPipelineViewportDepthClipControlCreateInfoEXT): VkPipelineViewportStateCreateInfo;
    pNext(arg0: VkPipelineViewportExclusiveScissorStateCreateInfoNV): VkPipelineViewportStateCreateInfo;
    pNext(arg0: VkPipelineViewportShadingRateImageStateCreateInfoNV): VkPipelineViewportStateCreateInfo;
    pNext(arg0: VkPipelineViewportSwizzleStateCreateInfoNV): VkPipelineViewportStateCreateInfo;
    pNext(arg0: VkPipelineViewportWScalingStateCreateInfoNV): VkPipelineViewportStateCreateInfo;
    pScissors(): (Object | null)[];
    pScissors(arg0: (Object | null)[]): VkPipelineViewportStateCreateInfo;
    pViewports(): (Object | null)[];
    pViewports(arg0: (Object | null)[]): VkPipelineViewportStateCreateInfo;
    sType(): number;
    sType(arg0: number): VkPipelineViewportStateCreateInfo;
    sType$Default(): VkPipelineViewportStateCreateInfo;
    scissorCount(): number;
    scissorCount(arg0: number): VkPipelineViewportStateCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: (Object | null)[], arg5: number, arg6: (Object | null)[]): VkPipelineViewportStateCreateInfo;
    set(arg0: VkPipelineViewportStateCreateInfo): VkPipelineViewportStateCreateInfo;
    sizeof(): number;
    viewportCount(): number;
    viewportCount(arg0: number): VkPipelineViewportStateCreateInfo;
}