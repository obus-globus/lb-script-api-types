import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT extends Struct<VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERBUFFERFLOAT16ATOMICADD: number;
    static SHADERBUFFERFLOAT16ATOMICMINMAX: number;
    static SHADERBUFFERFLOAT16ATOMICS: number;
    static SHADERBUFFERFLOAT32ATOMICMINMAX: number;
    static SHADERBUFFERFLOAT64ATOMICMINMAX: number;
    static SHADERIMAGEFLOAT32ATOMICMINMAX: number;
    static SHADERSHAREDFLOAT16ATOMICADD: number;
    static SHADERSHAREDFLOAT16ATOMICMINMAX: number;
    static SHADERSHAREDFLOAT16ATOMICS: number;
    static SHADERSHAREDFLOAT32ATOMICMINMAX: number;
    static SHADERSHAREDFLOAT64ATOMICMINMAX: number;
    static SIZEOF: number;
    static SPARSEIMAGEFLOAT32ATOMICMINMAX: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderBufferFloat16AtomicAdd(paramarg0: number): number;
    static nshaderBufferFloat16AtomicAdd(paramarg0: number, paramarg1: number): void;
    static nshaderBufferFloat16AtomicMinMax(paramarg0: number): number;
    static nshaderBufferFloat16AtomicMinMax(paramarg0: number, paramarg1: number): void;
    static nshaderBufferFloat16Atomics(paramarg0: number): number;
    static nshaderBufferFloat16Atomics(paramarg0: number, paramarg1: number): void;
    static nshaderBufferFloat32AtomicMinMax(paramarg0: number): number;
    static nshaderBufferFloat32AtomicMinMax(paramarg0: number, paramarg1: number): void;
    static nshaderBufferFloat64AtomicMinMax(paramarg0: number): number;
    static nshaderBufferFloat64AtomicMinMax(paramarg0: number, paramarg1: number): void;
    static nshaderImageFloat32AtomicMinMax(paramarg0: number): number;
    static nshaderImageFloat32AtomicMinMax(paramarg0: number, paramarg1: number): void;
    static nshaderSharedFloat16AtomicAdd(paramarg0: number): number;
    static nshaderSharedFloat16AtomicAdd(paramarg0: number, paramarg1: number): void;
    static nshaderSharedFloat16AtomicMinMax(paramarg0: number): number;
    static nshaderSharedFloat16AtomicMinMax(paramarg0: number, paramarg1: number): void;
    static nshaderSharedFloat16Atomics(paramarg0: number): number;
    static nshaderSharedFloat16Atomics(paramarg0: number, paramarg1: number): void;
    static nshaderSharedFloat32AtomicMinMax(paramarg0: number): number;
    static nshaderSharedFloat32AtomicMinMax(paramarg0: number, paramarg1: number): void;
    static nshaderSharedFloat64AtomicMinMax(paramarg0: number): number;
    static nshaderSharedFloat64AtomicMinMax(paramarg0: number, paramarg1: number): void;
    static nsparseImageFloat32AtomicMinMax(paramarg0: number): number;
    static nsparseImageFloat32AtomicMinMax(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    sType$Default(): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean, arg11: boolean, arg12: boolean, arg13: boolean): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    set(arg0: VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    shaderBufferFloat16AtomicAdd(): boolean;
    shaderBufferFloat16AtomicAdd(arg0: boolean): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    shaderBufferFloat16AtomicMinMax(): boolean;
    shaderBufferFloat16AtomicMinMax(arg0: boolean): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    shaderBufferFloat16Atomics(): boolean;
    shaderBufferFloat16Atomics(arg0: boolean): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    shaderBufferFloat32AtomicMinMax(): boolean;
    shaderBufferFloat32AtomicMinMax(arg0: boolean): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    shaderBufferFloat64AtomicMinMax(): boolean;
    shaderBufferFloat64AtomicMinMax(arg0: boolean): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    shaderImageFloat32AtomicMinMax(): boolean;
    shaderImageFloat32AtomicMinMax(arg0: boolean): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    shaderSharedFloat16AtomicAdd(): boolean;
    shaderSharedFloat16AtomicAdd(arg0: boolean): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    shaderSharedFloat16AtomicMinMax(): boolean;
    shaderSharedFloat16AtomicMinMax(arg0: boolean): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    shaderSharedFloat16Atomics(): boolean;
    shaderSharedFloat16Atomics(arg0: boolean): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    shaderSharedFloat32AtomicMinMax(): boolean;
    shaderSharedFloat32AtomicMinMax(arg0: boolean): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    shaderSharedFloat64AtomicMinMax(): boolean;
    shaderSharedFloat64AtomicMinMax(arg0: boolean): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
    sizeof(): number;
    sparseImageFloat32AtomicMinMax(): boolean;
    sparseImageFloat32AtomicMinMax(arg0: boolean): VkPhysicalDeviceShaderAtomicFloat2FeaturesEXT;
}