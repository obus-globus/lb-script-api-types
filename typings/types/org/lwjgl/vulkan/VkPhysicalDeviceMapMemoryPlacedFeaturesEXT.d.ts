import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceMapMemoryPlacedFeaturesEXT extends Struct<VkPhysicalDeviceMapMemoryPlacedFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MEMORYMAPPLACED: number;
    static MEMORYMAPRANGEPLACED: number;
    static MEMORYUNMAPRESERVE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMapMemoryPlacedFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMapMemoryPlacedFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceMapMemoryPlacedFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceMapMemoryPlacedFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMapMemoryPlacedFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceMapMemoryPlacedFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMapMemoryPlacedFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmemoryMapPlaced(paramarg0: number): number;
    static nmemoryMapPlaced(paramarg0: number, paramarg1: number): void;
    static nmemoryMapRangePlaced(paramarg0: number): number;
    static nmemoryMapRangePlaced(paramarg0: number, paramarg1: number): void;
    static nmemoryUnmapReserve(paramarg0: number): number;
    static nmemoryUnmapReserve(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMapMemoryPlacedFeaturesEXT;
    memoryMapPlaced(): boolean;
    memoryMapPlaced(arg0: boolean): VkPhysicalDeviceMapMemoryPlacedFeaturesEXT;
    memoryMapRangePlaced(): boolean;
    memoryMapRangePlaced(arg0: boolean): VkPhysicalDeviceMapMemoryPlacedFeaturesEXT;
    memoryUnmapReserve(): boolean;
    memoryUnmapReserve(arg0: boolean): VkPhysicalDeviceMapMemoryPlacedFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMapMemoryPlacedFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMapMemoryPlacedFeaturesEXT;
    sType$Default(): VkPhysicalDeviceMapMemoryPlacedFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceMapMemoryPlacedFeaturesEXT;
    set(arg0: VkPhysicalDeviceMapMemoryPlacedFeaturesEXT): VkPhysicalDeviceMapMemoryPlacedFeaturesEXT;
    sizeof(): number;
}