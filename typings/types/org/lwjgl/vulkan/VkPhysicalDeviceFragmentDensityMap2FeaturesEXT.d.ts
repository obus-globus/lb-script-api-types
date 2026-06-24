import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceFragmentDensityMap2FeaturesEXT extends Struct<VkPhysicalDeviceFragmentDensityMap2FeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FRAGMENTDENSITYMAPDEFERRED: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceFragmentDensityMap2FeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentDensityMap2FeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceFragmentDensityMap2FeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceFragmentDensityMap2FeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceFragmentDensityMap2FeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceFragmentDensityMap2FeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentDensityMap2FeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfragmentDensityMapDeferred(paramarg0: number): number;
    static nfragmentDensityMapDeferred(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceFragmentDensityMap2FeaturesEXT;
    fragmentDensityMapDeferred(): boolean;
    fragmentDensityMapDeferred(arg0: boolean): VkPhysicalDeviceFragmentDensityMap2FeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceFragmentDensityMap2FeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceFragmentDensityMap2FeaturesEXT;
    sType$Default(): VkPhysicalDeviceFragmentDensityMap2FeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceFragmentDensityMap2FeaturesEXT;
    set(arg0: VkPhysicalDeviceFragmentDensityMap2FeaturesEXT): VkPhysicalDeviceFragmentDensityMap2FeaturesEXT;
    sizeof(): number;
}