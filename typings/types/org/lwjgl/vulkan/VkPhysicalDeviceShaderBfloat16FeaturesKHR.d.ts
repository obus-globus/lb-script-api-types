import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceShaderBfloat16FeaturesKHR extends Struct<VkPhysicalDeviceShaderBfloat16FeaturesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERBFLOAT16COOPERATIVEMATRIX: number;
    static SHADERBFLOAT16DOTPRODUCT: number;
    static SHADERBFLOAT16TYPE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShaderBfloat16FeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderBfloat16FeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceShaderBfloat16FeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceShaderBfloat16FeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderBfloat16FeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderBfloat16FeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderBfloat16FeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderBFloat16CooperativeMatrix(paramarg0: number): number;
    static nshaderBFloat16CooperativeMatrix(paramarg0: number, paramarg1: number): void;
    static nshaderBFloat16DotProduct(paramarg0: number): number;
    static nshaderBFloat16DotProduct(paramarg0: number, paramarg1: number): void;
    static nshaderBFloat16Type(paramarg0: number): number;
    static nshaderBFloat16Type(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderBfloat16FeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderBfloat16FeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderBfloat16FeaturesKHR;
    sType$Default(): VkPhysicalDeviceShaderBfloat16FeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceShaderBfloat16FeaturesKHR;
    set(arg0: VkPhysicalDeviceShaderBfloat16FeaturesKHR): VkPhysicalDeviceShaderBfloat16FeaturesKHR;
    shaderBFloat16CooperativeMatrix(): boolean;
    shaderBFloat16CooperativeMatrix(arg0: boolean): VkPhysicalDeviceShaderBfloat16FeaturesKHR;
    shaderBFloat16DotProduct(): boolean;
    shaderBFloat16DotProduct(arg0: boolean): VkPhysicalDeviceShaderBfloat16FeaturesKHR;
    shaderBFloat16Type(): boolean;
    shaderBFloat16Type(arg0: boolean): VkPhysicalDeviceShaderBfloat16FeaturesKHR;
    sizeof(): number;
}