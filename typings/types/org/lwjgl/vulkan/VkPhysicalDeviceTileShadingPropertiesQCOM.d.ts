import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class VkPhysicalDeviceTileShadingPropertiesQCOM extends Struct<VkPhysicalDeviceTileShadingPropertiesQCOM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXAPRONSIZE: number;
    static MAXTILESHADINGRATE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREFERNONCOHERENT: number;
    static SIZEOF: number;
    static STYPE: number;
    static TILEGRANULARITY: number;
    static calloc(): VkPhysicalDeviceTileShadingPropertiesQCOM;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceTileShadingPropertiesQCOM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceTileShadingPropertiesQCOM;
    static create(paramarg0: number): VkPhysicalDeviceTileShadingPropertiesQCOM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceTileShadingPropertiesQCOM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceTileShadingPropertiesQCOM;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceTileShadingPropertiesQCOM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxApronSize(paramarg0: number): number;
    static nmaxTileShadingRate(paramarg0: number): VkExtent2D;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npreferNonCoherent(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntileGranularity(paramarg0: number): VkExtent2D;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceTileShadingPropertiesQCOM;
    maxApronSize(): number;
    maxTileShadingRate(): VkExtent2D;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceTileShadingPropertiesQCOM;
    preferNonCoherent(): boolean;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceTileShadingPropertiesQCOM;
    sType$Default(): VkPhysicalDeviceTileShadingPropertiesQCOM;
    set(arg0: number, arg1: number): VkPhysicalDeviceTileShadingPropertiesQCOM;
    set(arg0: VkPhysicalDeviceTileShadingPropertiesQCOM): VkPhysicalDeviceTileShadingPropertiesQCOM;
    sizeof(): number;
    tileGranularity(): VkExtent2D;
}