import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceShaderCoreProperties2AMD extends Struct<VkPhysicalDeviceShaderCoreProperties2AMD> implements NativeResource {
    static ACTIVECOMPUTEUNITCOUNT: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERCOREFEATURES: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShaderCoreProperties2AMD;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderCoreProperties2AMD;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceShaderCoreProperties2AMD;
    static create(paramarg0: number): VkPhysicalDeviceShaderCoreProperties2AMD;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderCoreProperties2AMD;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderCoreProperties2AMD;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderCoreProperties2AMD;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nactiveComputeUnitCount(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderCoreFeatures(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    activeComputeUnitCount(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderCoreProperties2AMD;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderCoreProperties2AMD;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderCoreProperties2AMD;
    sType$Default(): VkPhysicalDeviceShaderCoreProperties2AMD;
    set(arg0: number, arg1: number): VkPhysicalDeviceShaderCoreProperties2AMD;
    set(arg0: VkPhysicalDeviceShaderCoreProperties2AMD): VkPhysicalDeviceShaderCoreProperties2AMD;
    shaderCoreFeatures(): number;
    sizeof(): number;
}