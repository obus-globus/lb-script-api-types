import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceShaderTileImageFeaturesEXT extends Struct<VkPhysicalDeviceShaderTileImageFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERTILEIMAGECOLORREADACCESS: number;
    static SHADERTILEIMAGEDEPTHREADACCESS: number;
    static SHADERTILEIMAGESTENCILREADACCESS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShaderTileImageFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderTileImageFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceShaderTileImageFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceShaderTileImageFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderTileImageFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderTileImageFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderTileImageFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderTileImageColorReadAccess(paramarg0: number): number;
    static nshaderTileImageColorReadAccess(paramarg0: number, paramarg1: number): void;
    static nshaderTileImageDepthReadAccess(paramarg0: number): number;
    static nshaderTileImageDepthReadAccess(paramarg0: number, paramarg1: number): void;
    static nshaderTileImageStencilReadAccess(paramarg0: number): number;
    static nshaderTileImageStencilReadAccess(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderTileImageFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderTileImageFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderTileImageFeaturesEXT;
    sType$Default(): VkPhysicalDeviceShaderTileImageFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceShaderTileImageFeaturesEXT;
    set(arg0: VkPhysicalDeviceShaderTileImageFeaturesEXT): VkPhysicalDeviceShaderTileImageFeaturesEXT;
    shaderTileImageColorReadAccess(): boolean;
    shaderTileImageColorReadAccess(arg0: boolean): VkPhysicalDeviceShaderTileImageFeaturesEXT;
    shaderTileImageDepthReadAccess(): boolean;
    shaderTileImageDepthReadAccess(arg0: boolean): VkPhysicalDeviceShaderTileImageFeaturesEXT;
    shaderTileImageStencilReadAccess(): boolean;
    shaderTileImageStencilReadAccess(arg0: boolean): VkPhysicalDeviceShaderTileImageFeaturesEXT;
    sizeof(): number;
}