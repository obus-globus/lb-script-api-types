import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class VkPipelineFragmentShadingRateStateCreateInfoKHR extends Struct<VkPipelineFragmentShadingRateStateCreateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMBINEROPS: number;
    static FRAGMENTSIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineFragmentShadingRateStateCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkPipelineFragmentShadingRateStateCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineFragmentShadingRateStateCreateInfoKHR;
    static create(paramarg0: number): VkPipelineFragmentShadingRateStateCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineFragmentShadingRateStateCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineFragmentShadingRateStateCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkPipelineFragmentShadingRateStateCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncombinerOps(paramarg0: number, paramarg1: number): number;
    static ncombinerOps(paramarg0: number): IntBuffer;
    static ncombinerOps(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ncombinerOps(paramarg0: number, paramarg1: IntBuffer): void;
    static nfragmentSize(paramarg0: number): VkExtent2D;
    static nfragmentSize(paramarg0: number, paramarg1: VkExtent2D): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    combinerOps(): IntBuffer;
    combinerOps(arg0: IntBuffer): VkPipelineFragmentShadingRateStateCreateInfoKHR;
    combinerOps(arg0: number): number;
    combinerOps(arg0: number, arg1: number): VkPipelineFragmentShadingRateStateCreateInfoKHR;
    create(arg0: number, arg1: ByteBuffer): VkPipelineFragmentShadingRateStateCreateInfoKHR;
    fragmentSize(): VkExtent2D;
    fragmentSize(arg0: (param0: VkExtent2D) => void): VkPipelineFragmentShadingRateStateCreateInfoKHR;
    fragmentSize(arg0: VkExtent2D): VkPipelineFragmentShadingRateStateCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkPipelineFragmentShadingRateStateCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkPipelineFragmentShadingRateStateCreateInfoKHR;
    sType$Default(): VkPipelineFragmentShadingRateStateCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: VkExtent2D, arg3: IntBuffer): VkPipelineFragmentShadingRateStateCreateInfoKHR;
    set(arg0: VkPipelineFragmentShadingRateStateCreateInfoKHR): VkPipelineFragmentShadingRateStateCreateInfoKHR;
    sizeof(): number;
}