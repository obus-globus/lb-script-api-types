import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceShaderTileImagePropertiesEXT extends Struct<VkPhysicalDeviceShaderTileImagePropertiesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERTILEIMAGECOHERENTREADACCELERATED: number;
    static SHADERTILEIMAGEREADFROMHELPERINVOCATION: number;
    static SHADERTILEIMAGEREADSAMPLEFROMPIXELRATEINVOCATION: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShaderTileImagePropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderTileImagePropertiesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceShaderTileImagePropertiesEXT;
    static create(paramarg0: number): VkPhysicalDeviceShaderTileImagePropertiesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderTileImagePropertiesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderTileImagePropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderTileImagePropertiesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderTileImageCoherentReadAccelerated(paramarg0: number): number;
    static nshaderTileImageReadFromHelperInvocation(paramarg0: number): number;
    static nshaderTileImageReadSampleFromPixelRateInvocation(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderTileImagePropertiesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderTileImagePropertiesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderTileImagePropertiesEXT;
    sType$Default(): VkPhysicalDeviceShaderTileImagePropertiesEXT;
    set(arg0: number, arg1: number): VkPhysicalDeviceShaderTileImagePropertiesEXT;
    set(arg0: VkPhysicalDeviceShaderTileImagePropertiesEXT): VkPhysicalDeviceShaderTileImagePropertiesEXT;
    shaderTileImageCoherentReadAccelerated(): boolean;
    shaderTileImageReadFromHelperInvocation(): boolean;
    shaderTileImageReadSampleFromPixelRateInvocation(): boolean;
    sizeof(): number;
}