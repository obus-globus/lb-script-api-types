import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceShaderFloat8FeaturesEXT extends Struct<VkPhysicalDeviceShaderFloat8FeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERFLOAT8: number;
    static SHADERFLOAT8COOPERATIVEMATRIX: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShaderFloat8FeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderFloat8FeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceShaderFloat8FeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceShaderFloat8FeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderFloat8FeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderFloat8FeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderFloat8FeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderFloat8(paramarg0: number): number;
    static nshaderFloat8(paramarg0: number, paramarg1: number): void;
    static nshaderFloat8CooperativeMatrix(paramarg0: number): number;
    static nshaderFloat8CooperativeMatrix(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderFloat8FeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderFloat8FeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderFloat8FeaturesEXT;
    sType$Default(): VkPhysicalDeviceShaderFloat8FeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceShaderFloat8FeaturesEXT;
    set(arg0: VkPhysicalDeviceShaderFloat8FeaturesEXT): VkPhysicalDeviceShaderFloat8FeaturesEXT;
    shaderFloat8(): boolean;
    shaderFloat8(arg0: boolean): VkPhysicalDeviceShaderFloat8FeaturesEXT;
    shaderFloat8CooperativeMatrix(): boolean;
    shaderFloat8CooperativeMatrix(arg0: boolean): VkPhysicalDeviceShaderFloat8FeaturesEXT;
    sizeof(): number;
}