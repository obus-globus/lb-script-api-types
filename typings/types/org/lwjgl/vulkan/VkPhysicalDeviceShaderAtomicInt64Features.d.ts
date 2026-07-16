import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceShaderAtomicInt64Features extends Struct<VkPhysicalDeviceShaderAtomicInt64Features> implements NativeResource {
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
    static create(): VkPhysicalDeviceShaderAtomicInt64Features;
    static create(paramarg0: number): VkPhysicalDeviceShaderAtomicInt64Features;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderAtomicInt64Features;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderAtomicInt64Features;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderAtomicInt64Features;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
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
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderAtomicInt64Features;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderAtomicInt64Features;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderAtomicInt64Features;
    sType$Default(): VkPhysicalDeviceShaderAtomicInt64Features;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceShaderAtomicInt64Features;
    set(arg0: VkPhysicalDeviceShaderAtomicInt64Features): VkPhysicalDeviceShaderAtomicInt64Features;
    shaderBufferInt64Atomics(): boolean;
    shaderBufferInt64Atomics(arg0: boolean): VkPhysicalDeviceShaderAtomicInt64Features;
    shaderSharedInt64Atomics(): boolean;
    shaderSharedInt64Atomics(arg0: boolean): VkPhysicalDeviceShaderAtomicInt64Features;
    sizeof(): number;
}