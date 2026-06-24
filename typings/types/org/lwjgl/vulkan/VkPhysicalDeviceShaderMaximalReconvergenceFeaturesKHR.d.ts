import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceShaderMaximalReconvergenceFeaturesKHR extends Struct<VkPhysicalDeviceShaderMaximalReconvergenceFeaturesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERMAXIMALRECONVERGENCE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShaderMaximalReconvergenceFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderMaximalReconvergenceFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceShaderMaximalReconvergenceFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceShaderMaximalReconvergenceFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderMaximalReconvergenceFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderMaximalReconvergenceFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderMaximalReconvergenceFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderMaximalReconvergence(paramarg0: number): number;
    static nshaderMaximalReconvergence(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderMaximalReconvergenceFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderMaximalReconvergenceFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderMaximalReconvergenceFeaturesKHR;
    sType$Default(): VkPhysicalDeviceShaderMaximalReconvergenceFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceShaderMaximalReconvergenceFeaturesKHR;
    set(arg0: VkPhysicalDeviceShaderMaximalReconvergenceFeaturesKHR): VkPhysicalDeviceShaderMaximalReconvergenceFeaturesKHR;
    shaderMaximalReconvergence(): boolean;
    shaderMaximalReconvergence(arg0: boolean): VkPhysicalDeviceShaderMaximalReconvergenceFeaturesKHR;
    sizeof(): number;
}