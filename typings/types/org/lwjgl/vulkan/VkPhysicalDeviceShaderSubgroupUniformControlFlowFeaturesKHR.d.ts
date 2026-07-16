import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR extends Struct<VkPhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERSUBGROUPUNIFORMCONTROLFLOW: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderSubgroupUniformControlFlow(paramarg0: number): number;
    static nshaderSubgroupUniformControlFlow(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR;
    sType$Default(): VkPhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR;
    set(arg0: VkPhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR): VkPhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR;
    shaderSubgroupUniformControlFlow(): boolean;
    shaderSubgroupUniformControlFlow(arg0: boolean): VkPhysicalDeviceShaderSubgroupUniformControlFlowFeaturesKHR;
    sizeof(): number;
}