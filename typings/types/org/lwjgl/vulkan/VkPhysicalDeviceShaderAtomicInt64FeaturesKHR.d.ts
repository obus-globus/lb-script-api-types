import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceShaderAtomicInt64Features } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceShaderAtomicInt64Features.d.ts'
export class VkPhysicalDeviceShaderAtomicInt64FeaturesKHR extends VkPhysicalDeviceShaderAtomicInt64Features {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERBUFFERINT64ATOMICS: number;
    static SHADERSHAREDINT64ATOMICS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShaderAtomicInt64Features;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderAtomicInt64Features;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceShaderAtomicInt64FeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderAtomicInt64FeaturesKHR;
    static create(): VkPhysicalDeviceShaderAtomicInt64Features;
    static create(paramarg0: number): VkPhysicalDeviceShaderAtomicInt64Features;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceShaderAtomicInt64FeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceShaderAtomicInt64FeaturesKHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderAtomicInt64Features;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderAtomicInt64FeaturesKHR;
    static malloc(): VkPhysicalDeviceShaderAtomicInt64Features;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderAtomicInt64Features;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderAtomicInt64FeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderAtomicInt64FeaturesKHR;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderBufferInt64Atomics(paramarg0: number): number;
    static nshaderBufferInt64Atomics(paramarg0: number, paramarg1: number): void;
    static nshaderSharedInt64Atomics(paramarg0: number): number;
    static nshaderSharedInt64Atomics(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderAtomicInt64FeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderAtomicInt64FeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderAtomicInt64FeaturesKHR;
    sType$Default(): VkPhysicalDeviceShaderAtomicInt64FeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceShaderAtomicInt64FeaturesKHR;
    set(arg0: VkPhysicalDeviceShaderAtomicInt64Features): VkPhysicalDeviceShaderAtomicInt64Features;
    set(arg0: VkPhysicalDeviceShaderAtomicInt64FeaturesKHR): VkPhysicalDeviceShaderAtomicInt64FeaturesKHR;
    shaderBufferInt64Atomics(): boolean;
    shaderBufferInt64Atomics(arg0: boolean): VkPhysicalDeviceShaderAtomicInt64FeaturesKHR;
    shaderSharedInt64Atomics(): boolean;
    shaderSharedInt64Atomics(arg0: boolean): VkPhysicalDeviceShaderAtomicInt64FeaturesKHR;
}