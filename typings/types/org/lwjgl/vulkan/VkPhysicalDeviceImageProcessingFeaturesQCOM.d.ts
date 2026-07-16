import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceImageProcessingFeaturesQCOM extends Struct<VkPhysicalDeviceImageProcessingFeaturesQCOM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TEXTUREBLOCKMATCH: number;
    static TEXTUREBOXFILTER: number;
    static TEXTURESAMPLEWEIGHTED: number;
    static calloc(): VkPhysicalDeviceImageProcessingFeaturesQCOM;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceImageProcessingFeaturesQCOM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceImageProcessingFeaturesQCOM;
    static create(paramarg0: number): VkPhysicalDeviceImageProcessingFeaturesQCOM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceImageProcessingFeaturesQCOM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceImageProcessingFeaturesQCOM;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceImageProcessingFeaturesQCOM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntextureBlockMatch(paramarg0: number): number;
    static ntextureBlockMatch(paramarg0: number, paramarg1: number): void;
    static ntextureBoxFilter(paramarg0: number): number;
    static ntextureBoxFilter(paramarg0: number, paramarg1: number): void;
    static ntextureSampleWeighted(paramarg0: number): number;
    static ntextureSampleWeighted(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceImageProcessingFeaturesQCOM;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceImageProcessingFeaturesQCOM;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceImageProcessingFeaturesQCOM;
    sType$Default(): VkPhysicalDeviceImageProcessingFeaturesQCOM;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceImageProcessingFeaturesQCOM;
    set(arg0: VkPhysicalDeviceImageProcessingFeaturesQCOM): VkPhysicalDeviceImageProcessingFeaturesQCOM;
    sizeof(): number;
    textureBlockMatch(): boolean;
    textureBlockMatch(arg0: boolean): VkPhysicalDeviceImageProcessingFeaturesQCOM;
    textureBoxFilter(): boolean;
    textureBoxFilter(arg0: boolean): VkPhysicalDeviceImageProcessingFeaturesQCOM;
    textureSampleWeighted(): boolean;
    textureSampleWeighted(arg0: boolean): VkPhysicalDeviceImageProcessingFeaturesQCOM;
}