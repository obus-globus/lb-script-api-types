import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceShaderFmaFeaturesKHR extends Struct<VkPhysicalDeviceShaderFmaFeaturesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERFMAFLOAT16: number;
    static SHADERFMAFLOAT32: number;
    static SHADERFMAFLOAT64: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShaderFmaFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderFmaFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceShaderFmaFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceShaderFmaFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderFmaFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderFmaFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderFmaFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderFmaFloat16(paramarg0: number): number;
    static nshaderFmaFloat16(paramarg0: number, paramarg1: number): void;
    static nshaderFmaFloat32(paramarg0: number): number;
    static nshaderFmaFloat32(paramarg0: number, paramarg1: number): void;
    static nshaderFmaFloat64(paramarg0: number): number;
    static nshaderFmaFloat64(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderFmaFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderFmaFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderFmaFeaturesKHR;
    sType$Default(): VkPhysicalDeviceShaderFmaFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceShaderFmaFeaturesKHR;
    set(arg0: VkPhysicalDeviceShaderFmaFeaturesKHR): VkPhysicalDeviceShaderFmaFeaturesKHR;
    shaderFmaFloat16(): boolean;
    shaderFmaFloat16(arg0: boolean): VkPhysicalDeviceShaderFmaFeaturesKHR;
    shaderFmaFloat32(): boolean;
    shaderFmaFloat32(arg0: boolean): VkPhysicalDeviceShaderFmaFeaturesKHR;
    shaderFmaFloat64(): boolean;
    shaderFmaFloat64(arg0: boolean): VkPhysicalDeviceShaderFmaFeaturesKHR;
    sizeof(): number;
}