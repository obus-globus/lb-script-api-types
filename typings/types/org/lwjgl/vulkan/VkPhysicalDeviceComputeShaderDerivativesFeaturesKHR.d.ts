import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR extends Struct<VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPUTEDERIVATIVEGROUPLINEAR: number;
    static COMPUTEDERIVATIVEGROUPQUADS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncomputeDerivativeGroupLinear(paramarg0: number): number;
    static ncomputeDerivativeGroupLinear(paramarg0: number, paramarg1: number): void;
    static ncomputeDerivativeGroupQuads(paramarg0: number): number;
    static ncomputeDerivativeGroupQuads(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    computeDerivativeGroupLinear(): boolean;
    computeDerivativeGroupLinear(arg0: boolean): VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR;
    computeDerivativeGroupQuads(): boolean;
    computeDerivativeGroupQuads(arg0: boolean): VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR;
    sType$Default(): VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR;
    set(arg0: VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR): VkPhysicalDeviceComputeShaderDerivativesFeaturesKHR;
    sizeof(): number;
}