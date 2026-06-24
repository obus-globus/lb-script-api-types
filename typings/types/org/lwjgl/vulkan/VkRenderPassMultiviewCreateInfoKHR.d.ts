import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkRenderPassMultiviewCreateInfo } from '../../../org/lwjgl/vulkan/VkRenderPassMultiviewCreateInfo.d.ts'
export class VkRenderPassMultiviewCreateInfoKHR extends VkRenderPassMultiviewCreateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CORRELATIONMASKCOUNT: number;
    static DEPENDENCYCOUNT: number;
    static PCORRELATIONMASKS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PVIEWMASKS: number;
    static PVIEWOFFSETS: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUBPASSCOUNT: number;
    static calloc(): VkRenderPassMultiviewCreateInfo;
    static calloc(paramarg0: MemoryStack): VkRenderPassMultiviewCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkRenderPassMultiviewCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkRenderPassMultiviewCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRenderPassMultiviewCreateInfo;
    static create(paramarg0: number): VkRenderPassMultiviewCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkRenderPassMultiviewCreateInfoKHR;
    static create(paramarg0: number): VkRenderPassMultiviewCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderPassMultiviewCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderPassMultiviewCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRenderPassMultiviewCreateInfo;
    static malloc(paramarg0: MemoryStack): VkRenderPassMultiviewCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkRenderPassMultiviewCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkRenderPassMultiviewCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncorrelationMaskCount(paramarg0: number): number;
    static ncorrelationMaskCount(paramarg0: number, paramarg1: number): void;
    static ndependencyCount(paramarg0: number): number;
    static ndependencyCount(paramarg0: number, paramarg1: number): void;
    static npCorrelationMasks(paramarg0: number): IntBuffer;
    static npCorrelationMasks(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npViewMasks(paramarg0: number): IntBuffer;
    static npViewMasks(paramarg0: number, paramarg1: IntBuffer): void;
    static npViewOffsets(paramarg0: number): IntBuffer;
    static npViewOffsets(paramarg0: number, paramarg1: IntBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsubpassCount(paramarg0: number): number;
    static nsubpassCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkRenderPassMultiviewCreateInfoKHR;
    pCorrelationMasks(): IntBuffer;
    pCorrelationMasks(arg0: IntBuffer): VkRenderPassMultiviewCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkRenderPassMultiviewCreateInfoKHR;
    pViewMasks(): IntBuffer;
    pViewMasks(arg0: IntBuffer): VkRenderPassMultiviewCreateInfoKHR;
    pViewOffsets(): IntBuffer;
    pViewOffsets(arg0: IntBuffer): VkRenderPassMultiviewCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkRenderPassMultiviewCreateInfoKHR;
    sType$Default(): VkRenderPassMultiviewCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: IntBuffer, arg3: IntBuffer, arg4: IntBuffer): VkRenderPassMultiviewCreateInfoKHR;
    set(arg0: VkRenderPassMultiviewCreateInfo): VkRenderPassMultiviewCreateInfo;
    set(arg0: VkRenderPassMultiviewCreateInfoKHR): VkRenderPassMultiviewCreateInfoKHR;
}