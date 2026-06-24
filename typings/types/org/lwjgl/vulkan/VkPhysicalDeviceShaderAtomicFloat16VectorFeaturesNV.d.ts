import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceShaderAtomicFloat16VectorFeaturesNV extends Struct<VkPhysicalDeviceShaderAtomicFloat16VectorFeaturesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERFLOAT16VECTORATOMICS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShaderAtomicFloat16VectorFeaturesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderAtomicFloat16VectorFeaturesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceShaderAtomicFloat16VectorFeaturesNV;
    static create(paramarg0: number): VkPhysicalDeviceShaderAtomicFloat16VectorFeaturesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderAtomicFloat16VectorFeaturesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderAtomicFloat16VectorFeaturesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderAtomicFloat16VectorFeaturesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderFloat16VectorAtomics(paramarg0: number): number;
    static nshaderFloat16VectorAtomics(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderAtomicFloat16VectorFeaturesNV;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderAtomicFloat16VectorFeaturesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderAtomicFloat16VectorFeaturesNV;
    sType$Default(): VkPhysicalDeviceShaderAtomicFloat16VectorFeaturesNV;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceShaderAtomicFloat16VectorFeaturesNV;
    set(arg0: VkPhysicalDeviceShaderAtomicFloat16VectorFeaturesNV): VkPhysicalDeviceShaderAtomicFloat16VectorFeaturesNV;
    shaderFloat16VectorAtomics(): boolean;
    shaderFloat16VectorAtomics(arg0: boolean): VkPhysicalDeviceShaderAtomicFloat16VectorFeaturesNV;
    sizeof(): number;
}