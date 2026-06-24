import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceImage2DViewOf3DFeaturesEXT extends Struct<VkPhysicalDeviceImage2DViewOf3DFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGE2DVIEWOF3D: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SAMPLER2DVIEWOF3D: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceImage2DViewOf3DFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceImage2DViewOf3DFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceImage2DViewOf3DFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceImage2DViewOf3DFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceImage2DViewOf3DFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceImage2DViewOf3DFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceImage2DViewOf3DFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nimage2DViewOf3D(paramarg0: number): number;
    static nimage2DViewOf3D(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsampler2DViewOf3D(paramarg0: number): number;
    static nsampler2DViewOf3D(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceImage2DViewOf3DFeaturesEXT;
    image2DViewOf3D(): boolean;
    image2DViewOf3D(arg0: boolean): VkPhysicalDeviceImage2DViewOf3DFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceImage2DViewOf3DFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceImage2DViewOf3DFeaturesEXT;
    sType$Default(): VkPhysicalDeviceImage2DViewOf3DFeaturesEXT;
    sampler2DViewOf3D(): boolean;
    sampler2DViewOf3D(arg0: boolean): VkPhysicalDeviceImage2DViewOf3DFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceImage2DViewOf3DFeaturesEXT;
    set(arg0: VkPhysicalDeviceImage2DViewOf3DFeaturesEXT): VkPhysicalDeviceImage2DViewOf3DFeaturesEXT;
    sizeof(): number;
}