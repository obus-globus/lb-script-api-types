import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDevicePipelineRobustnessProperties extends Struct<VkPhysicalDevicePipelineRobustnessProperties> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEFAULTROBUSTNESSIMAGES: number;
    static DEFAULTROBUSTNESSSTORAGEBUFFERS: number;
    static DEFAULTROBUSTNESSUNIFORMBUFFERS: number;
    static DEFAULTROBUSTNESSVERTEXINPUTS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDevicePipelineRobustnessProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePipelineRobustnessProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDevicePipelineRobustnessProperties;
    static create(paramarg0: number): VkPhysicalDevicePipelineRobustnessProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevicePipelineRobustnessProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDevicePipelineRobustnessProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePipelineRobustnessProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndefaultRobustnessImages(paramarg0: number): number;
    static ndefaultRobustnessStorageBuffers(paramarg0: number): number;
    static ndefaultRobustnessUniformBuffers(paramarg0: number): number;
    static ndefaultRobustnessVertexInputs(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDevicePipelineRobustnessProperties;
    defaultRobustnessImages(): number;
    defaultRobustnessStorageBuffers(): number;
    defaultRobustnessUniformBuffers(): number;
    defaultRobustnessVertexInputs(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDevicePipelineRobustnessProperties;
    sType(): number;
    sType(arg0: number): VkPhysicalDevicePipelineRobustnessProperties;
    sType$Default(): VkPhysicalDevicePipelineRobustnessProperties;
    set(arg0: number, arg1: number): VkPhysicalDevicePipelineRobustnessProperties;
    set(arg0: VkPhysicalDevicePipelineRobustnessProperties): VkPhysicalDevicePipelineRobustnessProperties;
    sizeof(): number;
}