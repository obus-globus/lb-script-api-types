import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class VkSampleLocationsInfoEXT extends Struct<VkSampleLocationsInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSAMPLELOCATIONS: number;
    static SAMPLELOCATIONGRIDSIZE: number;
    static SAMPLELOCATIONSCOUNT: number;
    static SAMPLELOCATIONSPERPIXEL: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSampleLocationsInfoEXT;
    static calloc(paramarg0: MemoryStack): VkSampleLocationsInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSampleLocationsInfoEXT;
    static create(paramarg0: number): VkSampleLocationsInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSampleLocationsInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSampleLocationsInfoEXT;
    static malloc(paramarg0: MemoryStack): VkSampleLocationsInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSampleLocations(paramarg0: number): (Object | null)[];
    static npSampleLocations(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsampleLocationGridSize(paramarg0: number): VkExtent2D;
    static nsampleLocationGridSize(paramarg0: number, paramarg1: VkExtent2D): void;
    static nsampleLocationsCount(paramarg0: number): number;
    static nsampleLocationsCount(paramarg0: number, paramarg1: number): void;
    static nsampleLocationsPerPixel(paramarg0: number): number;
    static nsampleLocationsPerPixel(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSampleLocationsInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkSampleLocationsInfoEXT;
    pSampleLocations(): (Object | null)[];
    pSampleLocations(arg0: (Object | null)[]): VkSampleLocationsInfoEXT;
    sType(): number;
    sType(arg0: number): VkSampleLocationsInfoEXT;
    sType$Default(): VkSampleLocationsInfoEXT;
    sampleLocationGridSize(): VkExtent2D;
    sampleLocationGridSize(arg0: (param0: VkExtent2D) => void): VkSampleLocationsInfoEXT;
    sampleLocationGridSize(arg0: VkExtent2D): VkSampleLocationsInfoEXT;
    sampleLocationsCount(): number;
    sampleLocationsPerPixel(): number;
    sampleLocationsPerPixel(arg0: number): VkSampleLocationsInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: VkExtent2D, arg4: (Object | null)[]): VkSampleLocationsInfoEXT;
    set(arg0: VkSampleLocationsInfoEXT): VkSampleLocationsInfoEXT;
    sizeof(): number;
}