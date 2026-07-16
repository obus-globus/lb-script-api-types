import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDevicePipelineRobustnessFeatures extends Struct<VkPhysicalDevicePipelineRobustnessFeatures> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PIPELINEROBUSTNESS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDevicePipelineRobustnessFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePipelineRobustnessFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDevicePipelineRobustnessFeatures;
    static create(paramarg0: number): VkPhysicalDevicePipelineRobustnessFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevicePipelineRobustnessFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDevicePipelineRobustnessFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePipelineRobustnessFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npipelineRobustness(paramarg0: number): number;
    static npipelineRobustness(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDevicePipelineRobustnessFeatures;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDevicePipelineRobustnessFeatures;
    pipelineRobustness(): boolean;
    pipelineRobustness(arg0: boolean): VkPhysicalDevicePipelineRobustnessFeatures;
    sType(): number;
    sType(arg0: number): VkPhysicalDevicePipelineRobustnessFeatures;
    sType$Default(): VkPhysicalDevicePipelineRobustnessFeatures;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDevicePipelineRobustnessFeatures;
    set(arg0: VkPhysicalDevicePipelineRobustnessFeatures): VkPhysicalDevicePipelineRobustnessFeatures;
    sizeof(): number;
}