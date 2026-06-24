import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceCooperativeMatrix2PropertiesNV extends Struct<VkPhysicalDeviceCooperativeMatrix2PropertiesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COOPERATIVEMATRIXFLEXIBLEDIMENSIONSMAXDIMENSION: number;
    static COOPERATIVEMATRIXWORKGROUPSCOPEMAXWORKGROUPSIZE: number;
    static COOPERATIVEMATRIXWORKGROUPSCOPERESERVEDSHAREDMEMORY: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceCooperativeMatrix2PropertiesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceCooperativeMatrix2PropertiesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceCooperativeMatrix2PropertiesNV;
    static create(paramarg0: number): VkPhysicalDeviceCooperativeMatrix2PropertiesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceCooperativeMatrix2PropertiesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceCooperativeMatrix2PropertiesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceCooperativeMatrix2PropertiesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncooperativeMatrixFlexibleDimensionsMaxDimension(paramarg0: number): number;
    static ncooperativeMatrixWorkgroupScopeMaxWorkgroupSize(paramarg0: number): number;
    static ncooperativeMatrixWorkgroupScopeReservedSharedMemory(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    cooperativeMatrixFlexibleDimensionsMaxDimension(): number;
    cooperativeMatrixWorkgroupScopeMaxWorkgroupSize(): number;
    cooperativeMatrixWorkgroupScopeReservedSharedMemory(): number;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceCooperativeMatrix2PropertiesNV;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceCooperativeMatrix2PropertiesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceCooperativeMatrix2PropertiesNV;
    sType$Default(): VkPhysicalDeviceCooperativeMatrix2PropertiesNV;
    set(arg0: number, arg1: number): VkPhysicalDeviceCooperativeMatrix2PropertiesNV;
    set(arg0: VkPhysicalDeviceCooperativeMatrix2PropertiesNV): VkPhysicalDeviceCooperativeMatrix2PropertiesNV;
    sizeof(): number;
}